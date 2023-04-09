/* eslint-disable prettier/prettier */
import { StyleSheet, Platform } from 'react-native';
import { verticalScale, scale } from '../../Utility/scale';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginContainer: {
        width: wp('80%'),
        marginHorizontal: wp('10%'),
    },
    titleView: {
        paddingTop: 30,
    },
    titleText: {
        fontSize: 30,
        fontFamily: 'SFProText-Semibold',
        paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    },
    contentText: {
        fontSize: 14,
        fontFamily: 'SFProText-Regular',
    },
    inputView: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: scale(10),
    },
    input: {
        paddingVertical: Platform.OS === 'ios' ? verticalScale(15) : verticalScale(13),
        paddingHorizontal: scale(5),
        width: '90%',
        fontSize: 16,
        fontFamily: 'SFProText-Regular',
        includeFontPadding: false,
    },
    emailIcon: {
        fontSize: 25,
    },
    eyeIcon: {
        fontSize: 25,
    },
    rememberMe: {
        flexDirection: 'row',
        marginBottom: hp('3%'),
        marginTop: 10,
        alignItems: 'center',
    },
    checkboxIcon: {
        fontSize: 25,
    },
    rememberMeText: {
        fontSize: 16,
        fontFamily: 'SFProText-Regular',
        includeFontPadding: false,
    },
    termsCondition: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    termsConditionText: {
        marginTop: 12,
        fontFamily: 'SFProText-Regular',
        includeFontPadding: false,
        fontSize: 13,
    },
    termsConditionText2: {
        textDecorationLine: 'underline',
        fontFamily: 'SFProText-Regular',
        includeFontPadding: false,
        fontSize: 13,
    },
    submitButton: {
        width: wp('80%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: verticalScale(25),
        elevation: 8,
    },
    submitButtonText: {
        paddingVertical: Platform.OS === 'ios' ? verticalScale(12) : verticalScale(12),
        fontSize: 16,
        fontFamily: 'SFProText-Regular',
        includeFontPadding: false,
    },
    activityIndicator: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    modalMainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8cb3da',
    },
    modalMainContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        width: '85%',
        height: Platform.OS === 'ios' ? '40%' : '45%',
        marginHorizontal: '7.5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    termConditionView: {
        flex: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    termConditionText: {
        textAlign: 'center',
        paddingHorizontal: 20,
        fontSize: 16,
        fontFamily: 'SFProText-Regular',
    },
    termConditionBoldText: {
        fontSize: 18,
        fontFamily: 'SFProText-Semibold',
    },
    privacyPolicyLinkText: {
        textAlign: 'center',
        color: '#0061fe',
        fontSize: 18,
        fontFamily: 'SFProText-Regular',
        includeFontPadding: false,
        textDecorationLine: 'underline',
    },
    termsConditionAcceptButtonView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 1,
    },
    termsConditionAcceptButtonText: {
        width: '100%',
        paddingVertical: 10,
        textAlign: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    termsConditionAcceptButtonViewSec: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        flexDirection: 'row',
    },
    termsConditionAcceptButtonTextSec: {
        width: '50%',
        paddingVertical: 10,
        textAlign: 'center',
        borderBottomLeftRadius: 15,
    },
    skipButtonStyle: {
        width: '50%',
        paddingVertical: 10,
        textAlign: 'center',
        borderBottomRightRadius: 15,
    },
    closeButtonView: {
        position: 'absolute',
        right: 0,
        borderRadius: 50,
        backgroundColor: '#0bb8e4',
        zIndex: 1,
        top: 0,
    },
    closeButtonText: {
        fontSize: 20,
        paddingHorizontal: Platform.OS === 'ios' ? 5 : 7,
        color: '#fff',
    },
    privacyPolicyPopup: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8cb3da',
    },
    privacyPolicyPopupView: {
        backgroundColor: '#fff',
        borderRadius: 15,
        width: '85%',
        height: '80%',
        marginHorizontal: '7.5%',
        justifyContent: 'center',
        overflow: 'hidden',
    },
});
export default styles;
