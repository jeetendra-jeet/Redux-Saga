/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    BackHandler,
    Modal,
    ActivityIndicator,
} from 'react-native';
import styles from './loginStyle';
import * as CommonString from '../../Utility/strings';
import { useTheme } from '@react-navigation/native';
import { LoginHeader } from '../../Components/Header/header';
import FIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { loginRequest } from '../../Redux/actions';
import * as AsyncStorage from '../../Utility/asyncStorage';
import AsyncStorageOnline from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import { SignUpRequest, AddUser, LoginRequest } from '../../Firebase/Network';
import Radar from 'react-native-radar';
import { openSettings } from 'react-native-permissions';
import { Loader } from '../../Components/Loader';
import { WebView } from 'react-native-webview';
import { privacyPolicy } from './../../Utility/baseUrl';
import * as Sentry from '@sentry/react-native';
let errorAlert = false;
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            checkBoxVal: true,
            loader: false,
            hidePassword: true,
            fcmToken: CommonString.browserStack,
            visible: false,
            userDetails: null,
            privacyPolicy: false,
            visiblePrivacyPolicy: false,
        };
    }

    static propTypes = {
        loginRequest: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        loginData: PropTypes.object,
    };

    /*
    * Toggler Password
    */
    togglerPassword = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    };

    /*
    * Call this method while loding this screen
    */
    async componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        let FcmToken = await AsyncStorageOnline.getItem('fcmToken');
        if (!FcmToken) {
            messaging()
                .getToken()
                .then((newFcmToken) => {
                    if (newFcmToken) {
                        this.setData('fcmToken', newFcmToken);
                    }
                })
                .catch((error) => {
                    let err = `FCm token get error${error}`;
                    Alert.alert(err);
                });
        } else {
            this.setData('fcmToken', FcmToken);
        }
        this.focusListener = this.props.navigation.addListener('focus', async () => {
            let fcmToken = await AsyncStorageOnline.getItem('fcmToken');
            if (!fcmToken) {
                messaging()
                    .getToken()
                    .then((newFcmToken) => {
                        if (newFcmToken) {
                            this.setData('fcmToken', newFcmToken);
                        }
                    })
                    .catch((error) => {
                        let err = `FCm token get error${error}`;
                        Alert.alert(err);
                    });
            } else {
                this.setData('fcmToken', fcmToken);
            }
        });
    }

    /*
    * Call this method to remove the listner
    */
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    /*
    * manage backpress
    */
    onBackPress = () => {
        return true;
    }

    /*
    * Call this method to handle login press
    */
    onLogin = () => {
        if (this.state.username === null || this.state.username.trim().length === 0) {
            Alert.alert('Alert', CommonString.enterEmail);
            return;
        }
        if (this.state.password === null || this.state.password.trim().length === 0) {
            Alert.alert('Alert', CommonString.enterPassword);
            return;
        }
        let requestBody = {
            email: this.state.username,
            password: this.state.password,
            deviceId: this.state.fcmToken,
            deviceType: Platform.OS,
        };
        this.setData('loader', true);
        errorAlert = false;
        this.props.loginRequest(requestBody);
    };

    /*
    * call this method to set data in state
    */
    setData = (key, value) => {
        this.setState({ [key]: value });
    }

    /*
    * called when states updated
    */
    async componentDidUpdate(prevProps) {
        const { loginData } = this.props;
        if (loginData && prevProps.loginData !== loginData) {
            if (loginData.response.data.success) {
                this.setData('loader', false);
                AsyncStorage.setItem(
                    AsyncStorage.TOKEN,
                    loginData.response.data.data.ApiToken,
                );
                AsyncStorage.setItem(
                    AsyncStorage.ROLE,
                    loginData.response.data.data.userDetail.role,
                );
                AsyncStorage.setItem(
                    AsyncStorage.USERDETAILS,
                    loginData.response.data.data.userDetail,
                );
                this.setData('userDetails', loginData.response.data.data.userDetail);
                this.setData('loginData', loginData);
                // Register Current login user
                SignUpRequest(
                    loginData.response.data.data.userDetail.email.trim(),
                    loginData.response.data.data.userDetail.email.trim(),
                ).then(async (signUpResponse) => {
                    if (signUpResponse.code !== undefined && signUpResponse.code === CommonString.auth) {
                        LoginRequest(
                            loginData.response.data.data.userDetail.email.trim(),
                            loginData.response.data.data.userDetail.email.trim()
                        ).then(async (response) => {
                            const uid = response.user.uid;
                            await AsyncStorage.setItem(AsyncStorage.UID, uid);
                        });
                    }
                    else {
                        const uid = signUpResponse.user.uid;
                        await AsyncStorage.setItem(AsyncStorage.UID, uid);
                        AddUser(
                            loginData.response.data.data.userDetail.fullName,
                            loginData.response.data.data.userDetail.email,
                            uid,
                            loginData.response.data.data.userDetail.image !== null ? loginData.response.data.data.userDetail.image.url : '',
                        ).then(async (addUserResponse) => {
                        })
                            .catch((err) => {
                                this.setData('loader', false);
                                Sentry.captureMessage(CommonString.addUserLoginScrn + err);
                            });
                    }
                }).catch((err) => {
                    this.setData('loader', false);
                    Sentry.captureMessage(CommonString.signUpErrorloginScreen + err);
                });

                if (loginData.response.data.data.userDetail.geofenceStatus === 'strict' || loginData.response.data.data.userDetail.geofenceStatus === 'lenient') {
                    Radar.getPermissionsStatus().then(async (status) => {
                        this.setData('userPermissionsStatus', status);
                        if (status === 'GRANTED_FOREGROUND' || status === 'GRANTED_BACKGROUND') {
                            if (loginData.response.data.data.userDetail.loginStatus === 0) {
                                this.props.navigation.push('TermsCondition',
                                    {
                                        userDetails: loginData.response.data.data.userDetail,
                                    });
                            } else {
                                if (loginData.response.data.data.userDetail.role === 'ADMIN' || loginData.response.data.data.userDetail.role === 'Administrator' || loginData.response.data.data.userDetail.role === 'MANAGER' || loginData.response.data.data.userDetail.role === 'MANAGER_GAMES' || loginData.response.data.data.userDetail.role === 'OWNER') {
                                    this.props.navigation.push('SalesBottomTab');
                                } else if (loginData.response.data.data.userDetail.role === 'CORPORATE_USER') {
                                    this.props.navigation.push('CorporateBottomTab');
                                } else {
                                    this.props.navigation.push('BottomTab');
                                }
                            }
                        } else if (status === 'NOT_DETERMINED') {
                            if (loginData.response.data.data.userDetail.loginStatus === 0) {
                                this.props.navigation.push('TermsCondition',
                                    {
                                        userDetails: loginData.response.data.data.userDetail,
                                    });
                            } else {
                                if (loginData.response.data.data.userDetail.role === 'ADMIN' || loginData.response.data.data.userDetail.role === 'Administrator' || loginData.response.data.data.userDetail.role === 'MANAGER' || loginData.response.data.data.userDetail.role === 'MANAGER_GAMES' || loginData.response.data.data.userDetail.role === 'OWNER') {
                                    this.props.navigation.push('SalesBottomTab');
                                } else if (loginData.response.data.data.userDetail.role === 'CORPORATE_USER') {
                                    this.props.navigation.push('CorporateBottomTab');
                                } else {
                                    this.props.navigation.push('BottomTab');
                                }
                            }
                        }
                        else {
                            this.setData('visible', true);
                        }
                    });
                } else {
                    if (loginData.response.data.data.userDetail.loginStatus === 0) {
                        this.props.navigation.push('TermsCondition',
                            {
                                userDetails: loginData.response.data.data.userDetail,
                            });
                    } else {
                        if (loginData.response.data.data.userDetail.role === 'ADMIN' || loginData.response.data.data.userDetail.role === 'Administrator' || loginData.response.data.data.userDetail.role === 'MANAGER' || loginData.response.data.data.userDetail.role === 'MANAGER_GAMES' || loginData.response.data.data.userDetail.role === 'OWNER') {
                            this.props.navigation.push('SalesBottomTab');
                        } else if (loginData.response.data.data.userDetail.role === 'CORPORATE_USER') {
                            this.props.navigation.push('CorporateBottomTab');
                        } else {
                            this.props.navigation.push('BottomTab');
                        }
                    }
                }
            } else {
                this.setData('loader', false);
                if (!errorAlert) {
                    if (loginData.response.data.message === 'login failed') {
                        Alert.alert(loginData.response.data.data.email[0]);
                        errorAlert = true;
                    } else {
                        Alert.alert(loginData.response.data.message);
                        errorAlert = true;
                    }
                }

            }
        }
    }

    /*
    * call this method to manage the location permission
    */
    allowPermission = () => {
        this.setData('visible', false);
        Radar.requestPermissions(true).then(async (status) => {
            if (status === 'GRANTED_BACKGROUND' || status === 'GRANTED_FOREGROUND') {
                this.setData('visible', false);
                if (this.state.userDetails.loginStatus === 0) {
                    this.props.navigation.push('TermsCondition',
                        {
                            userDetails: this.state.userDetails,
                        });
                } else {
                    if (this.state.userDetails.role === 'ADMIN' || this.state.userDetails.role === 'Administrator' || this.state.userDetails.role === 'MANAGER' || this.state.userDetails.role === 'MANAGER_GAMES' || this.state.userDetails.role === 'OWNER') {
                        this.props.navigation.push('SalesBottomTab');
                    } else if (this.state.userDetails.role === 'CORPORATE_USER') {
                        this.props.navigation.push('CorporateBottomTab');
                    } else {
                        this.props.navigation.push('BottomTab');
                    }
                }
            } else if (status === 'NOT_DETERMINED' || status === 'DENIED') {
                openSettings().catch(() => console.warn('cannot open settings'));
            } else {
                this.setData('visible', true);
            }
        });
    }

    /*
    * Call this method to skip the modal
    */
    skipModel = () => {
        this.setState({ visible: false });
        if (this.state.loginData.response.data.data.userDetail.role === 'ADMIN' || this.state.loginData.response.data.data.userDetail.role === 'Administrator' || this.state.loginData.response.data.data.userDetail.role === 'MANAGER' || this.state.loginData.response.data.data.userDetail.role === 'MANAGER_GAMES' || this.state.loginData.response.data.data.userDetail.role === 'OWNER') {
            this.props.navigation.push('SalesBottomTab');
        } else if (this.state.loginData.response.data.data.userDetail.role === 'CORPORATE_USER') {
            this.props.navigation.push('CorporateBottomTab');
        } else {
            this.props.navigation.push('BottomTab');
        }
    }

    /*
    * Call this method to handle loading indicator
    */
    IndicatorLoadingView() {
        return (
            <ActivityIndicator
                color="#2680CE"
                size="large"
                style={styles.activityIndicator}
            />
        );
    }

    /*
    * Call this method to manage privacy policy popup
    */
    handlePrivacyPolicyPopup = () => {
        this.setState({
            visible: false,
            privacyPolicy: true,
            visiblePrivacyPolicy: true,
        });

    }

    render() {
        const colors = this.props.colors;
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View
                    style={[styles.container, { backgroundColor: colors.backgroundColour }]}>
                    <View style={styles.header}>
                        <LoginHeader props={this.props} />
                    </View>
                    <View style={[styles.loginContainer, { backgroundColor: colors.backgroundColour }]}>
                        <View style={styles.titleView}>
                            <Text style={[styles.titleText, { color: colors.fontSecondColour }]}>{CommonString.loginTitle}</Text>
                            <Text style={[styles.contentText]}>{CommonString.signupSuggestion}</Text>
                        </View>
                        <View style={[styles.inputView, { color: colors.fontSecondColour, backgroundColor: colors.fontFirstColour }]}>
                            <FIcon name={CommonString.emailIcon} style={styles.emailIcon} />
                            <TextInput
                                value={this.state.username}
                                onChangeText={(username) => this.setState({ username: username })}
                                style={styles.input}
                                placeholder={CommonString.emailPlaceholder}
                                placeholderTextColor={'#000'}
                            />
                        </View>
                        <View style={[styles.inputView, { color: colors.fontSecondColour, backgroundColor: colors.fontFirstColour }]}>
                            <TextInput
                                value={this.state.password}
                                style={styles.input}
                                onChangeText={(text) => this.setState({ password: text })}
                                placeholder={CommonString.passPlaceholder}
                                placeholderTextColor={'#000'}
                                secureTextEntry={this.state.hidePassword}
                            />
                            <TouchableOpacity onPress={() => this.togglerPassword()}>
                                <FIcon name={this.state.hidePassword ? CommonString.eyeoIcon : CommonString.eyeOffIcon} style={styles.eyeIcon} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.rememberMe}
                            onPress={() => this.setState({ checkBoxVal: !this.state.checkBoxVal })}
                        >
                            <FIcon
                                name={this.state.checkBoxVal ? 'checkbox-marked' : 'checkbox-blank-outline'}
                                style={styles.checkboxIcon}
                            />
                            <Text style={[styles.rememberMeText, { color: colors.fontFirstColou }]}>{CommonString.keetMeLoggedIn}</Text>
                        </TouchableOpacity>
                        <View style={styles.termsCondition}>
                            <Text style={styles.termsConditionText}>{CommonString.termsPolicy1}</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.push('TermsCondition')}
                            >
                                <Text style={styles.termsConditionText2}>{CommonString.termsPolicy2}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.onLogin()} style={[styles.submitButton, { backgroundColor: colors.buttonBGColor, color: colors.fontFirstColour }]}>
                            <Text style={[styles.submitButtonText, { color: colors.fontFirstColour }]}>{CommonString.Continue}</Text>
                        </TouchableOpacity>
                    </View>

                    {
                        this.state.userDetails !== null && this.state.userDetails.geofenceStatus !== null ?
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.visible}>
                                <View style={styles.modalMainView} >
                                    <View style={styles.modalMainContainer}>
                                        {
                                            (this.state.userDetails.geofenceStatus === 'strict' && this.state.userPermissionsStatus !== 'GRANTED_FOREGROUND') || (this.state.userDetails.geofenceStatus === 'strict' && this.state.userPermissionsStatus !== 'GRANTED_BACKGROUND') ?
                                                <View style={styles.termConditionView}>
                                                    <Text style={styles.termConditionText}>
                                                        {CommonString.locationPopTextFirst}
                                                        <Text style={styles.termConditionBoldText}>{' background '}</Text>
                                                        {CommonString.locationPopTextSecond}
                                                    </Text>
                                                    <Text style={styles.termConditionText}>Please read our - <Text onPress={() => this.handlePrivacyPolicyPopup()} style={styles.privacyPolicyLinkText}>{CommonString.privacyPolicy}</Text></Text>
                                                    <View style={styles.termsConditionAcceptButtonView} >
                                                        <Text style={styles.termsConditionAcceptButtonText} onPress={() => this.allowPermission()}>
                                                            {CommonString.appLoacationSetting}
                                                        </Text>
                                                    </View>
                                                </View>
                                                : this.state.userDetails.geofenceStatus === 'lenient' && (this.state.userPermissionsStatus !== 'GRANTED_FOREGROUND' || this.state.userPermissionsStatus !== 'GRANTED_BACKGROUND') ?
                                                    <View style={styles.termConditionView}>
                                                        <Text style={styles.termConditionText}>
                                                            {CommonString.locationPopTextFirst}
                                                            <Text style={styles.termConditionBoldText}>{' background '}</Text>
                                                            {CommonString.locationPopTextSecond}
                                                        </Text>
                                                        <Text style={styles.termConditionText}>Please read our - <Text onPress={() => this.handlePrivacyPolicyPopup()} style={styles.privacyPolicyLinkText}>{CommonString.privacyPolicy}</Text></Text>
                                                        <View
                                                            style={styles.termsConditionAcceptButtonViewSec}
                                                        >
                                                            <Text
                                                                style={styles.termsConditionAcceptButtonTextSec}
                                                                onPress={() => this.allowPermission()}>
                                                                {CommonString.appLoacationSetting}
                                                            </Text>
                                                            <Text style={styles.skipButtonStyle} onPress={() => this.skipModel()}>{CommonString.skip}</Text>
                                                        </View>
                                                    </View>
                                                    : null
                                        }
                                    </View>
                                </View>
                            </Modal>
                            : null
                    }
                    {
                        this.state.privacyPolicy ?
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.visiblePrivacyPolicy}>
                                <View style={styles.privacyPolicyPopup} >
                                    <View style={styles.privacyPolicyPopupView}>
                                        <TouchableOpacity
                                            onPress={() => this.setState({
                                                visible: true,
                                                privacyPolicy: false,
                                                visiblePrivacyPolicy: false,
                                            })
                                            }
                                            style={styles.closeButtonView}>
                                            <Text style={styles.closeButtonText}>X</Text>
                                        </TouchableOpacity>
                                        <WebView
                                            source={{ uri: privacyPolicy }}
                                            javaScriptEnabled={true}
                                            domStorageEnabled={true}
                                            renderLoading={this.IndicatorLoadingView}
                                            startInLoadingState={true}
                                        />
                                    </View>
                                </View>
                            </Modal>
                            :
                            null
                    }
                    <Loader loader={this.state.loader} />
                </View>

            </TouchableWithoutFeedback>
        );
    }
}
const mapStateToProps = (state) => ({
    loading: state.app.loading,
    loginData: state.app.loginData,
});
const mapDispatchToProps = {
    loginRequest,
};
function Pro(props) {
    const { colors } = useTheme();
    return <Login {...props} colors={colors} />;
}
export default connect(mapStateToProps, mapDispatchToProps)(Pro);
