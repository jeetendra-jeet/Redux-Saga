/* eslint-disable prettier/prettier */
import { put, takeLatest, all } from 'redux-saga/effects';
import {
    LOGIN_REQUEST,
    SIGNUP_REQUEST,
    GETPROFILE_REQUEST,
    GETBROADCASTMESSAGES_REQUEST,
    GETCONTACTS_REQUEST,
    UPDATEPROFILE_REQUEST,
    ADDFAVOURITE_REQUEST,
    RECENTCONTACT_REQUEST,
    ACHIEVEMENTS_REQUEST,
    MYGAMES_REQUEST,
    CREATEWORKINGDEAL_REQUEST,
    WORKINGDEALLIST_REQUEST,
    WORKINGDEALUPDATE_REQUEST,
    WORKINGDEALDELETE_REQUEST,
    TERMSCONDITION_REQUEST,
    MTDBOOKINGDETAILS_REQUEST,
    MTDTOTAL_REQUEST,
    MTDBOOKED_REQUEST,
    MTDFINALIZED_REQUEST,
    STIPSNEEDED_REQUEST,
    UPDATESTIPSSTATUS_REQUEST,
    MONTHLYLEADERBOARD_REQUEST,
    MYSCHEDULE_REQUEST,
    COMPOSITESCORE_REQUEST,
    COMPOSITELEADERBOARD_REQUEST,
    CHANGEREQUEST_REQUEST,
    DEALERSHIPSALES_REQUEST,
    MYSALES_REQUEST,
    TEAMLEADERBOARD_REQUEST,
    DISPLAYTEAMEMPLOYEE_REQUEST,
    YTDLEADERBOARD_REQUEST,
    CORPORATEUSERHOMEPAGE_REQUEST,
    CORPORATEMONTHLYLEADERBOARD_REQUEST,
    SALESPERSONHOMEPAGE_REQUEST,
    SOURCETYPEGET_REQUEST,
    CALENDERSCHEDULE_REQUEST,
    USERTRACKING_REQUEST,
    CREATEGEOFENCE_REQUEST,
    USERSEARCH_REQUEST,
    UPBOARD_REQUEST,
    UPDATE_UPBOARD_REQUEST,
    UPBOARDNOTUP_REQUEST,
    NOTIFYUSER_REQUEST,
    SWITCHSHIFT_REQUEST,
    SCHEDULECHANGE_REQUEST,
    SENDSWITCHNOTIFICATION_REQUEST,
    NOTIFICATIONLIST_REQUEST,
    ACTIVEGAMES_REQUEST,
    TOTALSALESPERSON_REQUEST,
    MANAGEMENTNOTIFICATION_REQUEST,
    GAMEPLAY_REQUEST,
    GAMEPRIZE_REQUEST,
    GAMEWINNER_REQUEST,
    REQUESTPTONOTIFICATION_REQUEST,
    CALLINSICKHRNOTIFICATION_REQUEST,
    COVERSHIFTNOTIFICATION_REQUEST,
    PTOHRACTIONNOTIFICATION_REQUEST,
    PTOMANAGERACTIONNOTIFICATION_REQUEST,
    CALLINSICKHRACTIONNOTIFICATION_REQUEST,
    MANAGERACTIONCALLINSICK_REQUEST,
    SENDRUNNINGLATENOTIFICATION_REQUEST,
    SWITCHSHIFTSTATUSSALESPERSON_REQUEST,
    MGRSTATUSFORSWITCHSHIFT_REQUEST,
    SHIFTCVRGREQUSTTOSALESPERSON_REQUEST,
    SHIFTCVRGSTATUSSALESPERSON_REQUEST,
    MGRSTATUSFORSHIFTCVRGE_REQUEST,
    RUNINGLATENOTIFICATIONACTIONBYMANAGER_REQUEST,
    MANAGEMENTNTFCTIONACKLDGE_REQUEST,
    SENDVCARD_REQUEST,
    COMPOSITELEADERBOARDYTD_REQUEST,
    TERMSNCONDITIONEMAIL_REQUEST,
    YTDTEAMLEADERBOARD_REQUEST,
    SENDMESSAGE_REQUEST,
    GETMESSAGE_REQUEST,
    LOGOUTURL_REQUEST,
    SOSNOTIFICATION_REQUEST,
    YTDCOMPOSITESCORE_REQUEST,
    CHANGEPASSWORD_REQUEST,
    NOTIFICATIONHISTORY_REQUEST,
    SUPPORT_REQUEST,
    MANAGEMENTNOTIFICATIONLIST_REQUEST,
    MANAGERGAMESDETAILS_REQUEST,
    ORDERDETAILS_REQUEST,
    ORDERUPDATE_REQUEST,
} from '../constant/actionTypes';
import {
    loginStarted,
    loginSuccess,
    loginFailure,

    signupStarted,
    signupSuccess,
    signupFailure,

    getProfileStarted,
    getProfileSuccess,
    getProfileFailure,

    getBroadcastMessagesStarted,
    getBroadcastMessagesSuccess,
    getBroadcastMessagesFailure,

    getContactsStarted,
    getContactsSuccess,
    getContactsFailure,

    updateProfileStarted,
    updateProfileSuccess,
    updateProfileFailure,

    addFavouriteStarted,
    addFavouriteSuccess,
    addFavouriteFailure,

    getRecentContactStarted,
    getRecentContactSuccess,
    getRecentContactFailure,

    achievementStarted,
    achievementSuccess,
    achievementFailure,

    myGamesStarted,
    myGamesSuccess,
    myGamesFailure,

    createWorkingDealStarted,
    createWorkingDealSuccess,
    createWorkingDealFailure,

    workingDealListStarted,
    workingDealListSuccess,
    workingDealListFailure,

    workingDealUpdateStarted,
    workingDealUpdateSuccess,
    workingDealUpdateFailure,

    workingDealDeleteStarted,
    workingDealDeleteSuccess,
    workingDealDeleteFailure,

    termsConditionStarted,
    termsConditionSuccess,
    termsConditionFailure,

    mtdBookingDetailsStarted,
    mtdBookingDetailsSuccess,
    mtdBookingDetailsFailure,

    mtdTotalStarted,
    mtdTotalSuccess,
    mtdTotalFailure,

    mtdBookedStarted,
    mtdBookedSuccess,
    mtdBookedFailure,

    mtdFinalizedStarted,
    mtdFinalizedSuccess,
    mtdFinalizedFailure,

    stipsNeededStarted,
    stipsNeededSuccess,
    stipsNeededFailure,

    updateStipsStatusStarted,
    updateStipsStatusSuccess,
    updateStipsStatusFailure,

    monthlyLeaderboardStarted,
    monthlyLeaderboardSuccess,
    monthlyLeaderboardFailure,

    myScheduleStarted,
    myScheduleSuccess,
    myScheduleFailure,

    compositeScoreStarted,
    compositeScoreSuccess,
    compositeScoreFailure,

    compositeLeaderboardStarted,
    compositeLeaderboardSuccess,
    compositeLeaderboardFailure,

    changeRequestStarted,
    changeRequestSuccess,
    changeRequestFailure,

    dealershipSalesStarted,
    dealershipSalesSuccess,
    dealershipSalesFailure,

    mySalesStarted,
    mySalesSuccess,
    mySalesFailure,

    teamLeaderboardStarted,
    teamLeaderboardSuccess,
    teamLeaderboardFailure,

    displayTeamEmployeeStarted,
    displayTeamEmployeeSuccess,
    displayTeamEmployeeFailure,

    ytdLeaderboardStarted,
    ytdLeaderboardSuccess,
    ytdLeaderboardFailure,

    corporateUserHomePageStarted,
    corporateUserHomePageSuccess,
    corporateUserHomePageFailure,

    corporateMonthlyLeaderboardStarted,
    corporateMonthlyLeaderboardSuccess,
    corporateMonthlyLeaderboardFailure,

    salesPersonHomepageStarted,
    salesPersonHomepageSuccess,
    salesPersonHomepageFailure,

    sourceTypeGetStarted,
    sourceTypeGetSuccess,
    sourceTypeGetFailure,

    calenderScheduleStarted,
    calenderScheduleSuccess,
    calenderScheduleFailure,

    userTrackingStarted,
    userTrackingSuccess,
    userTrackingFailure,

    createGeofenceStarted,
    createGeofenceSuccess,
    createGeofenceFailure,

    userSearchStarted,
    userSearchSuccess,
    userSearchFailure,

    upBoardStarted,
    upBoardSuccess,
    upBoardFailure,

    updateUpBoardStarted,
    updateUpBoardSuccess,
    updateUpBoardFailure,

    upboardNotupStarted,
    upboardNotupSuccess,
    upboardNotupFailure,

    notifyUserStarted,
    notifyUserSuccess,
    notifyUserFailure,

    switchShiftStarted,
    switchShiftSuccess,
    switchShiftFailure,

    scheduleChangeStarted,
    scheduleChangeSuccess,
    scheduleChangeFailure,

    sendSwitchNotificationStarted,
    sendSwitchNotificationSuccess,
    sendSwitchNotificationFailure,

    notificationListStarted,
    notificationListSuccess,
    notificationListFailure,

    activeGamesStarted,
    activeGamesSuccess,
    activeGamesFailure,

    totalSalespersonStarted,
    totalSalespersonSuccess,
    totalSalespersonFailure,

    managementNotificationStarted,
    managementNotificationSuccess,
    managementNotificationFailure,

    gamePlayStarted,
    gamePlaySuccess,
    gamePlayFailure,

    gamePrizeStarted,
    gamePrizeSuccess,
    gamePrizeFailure,

    gameWinnerStarted,
    gameWinnerSuccess,
    gameWinnerFailure,

    requestPtoNotificationStarted,
    requestPtoNotificationSuccess,
    requestPtoNotificationFailure,

    callInSickHrNotificationStarted,
    callInSickHrNotificationSuccess,
    callInSickHrNotificationFailure,

    coverShiftNotificationStarted,
    coverShiftNotificationSuccess,
    coverShiftNotificationFailure,

    ptoHrActionNotificationStarted,
    ptoHrActionNotificationSuccess,
    ptoHrActionNotificationFailure,

    ptoManagerActionNotificationStarted,
    ptoManagerActionNotificationSuccess,
    ptoManagerActionNotificationFailure,

    callinSickHrActionNotificationStarted,
    callinSickHrActionNotificationSuccess,
    callinSickHrActionNotificationFailure,

    managerActionCallinSickStarted,
    managerActionCallinSickSuccess,
    managerActionCallinSickFailure,

    sendRunningLateNotificationStarted,
    sendRunningLateNotificationSuccess,
    sendRunningLateNotificationFailure,

    switchShiftStatusSalesPersonStarted,
    switchShiftStatusSalesPersonSuccess,
    switchShiftStatusSalesPersonFailure,

    mgrStatusForSwitchShiftStarted,
    mgrStatusForSwitchShiftSuccess,
    mgrStatusForSwitchShiftFailure,

    shiftCvrgeRqustToSalesPrsnStarted,
    shiftCvrgeRqustToSalesPrsnSuccess,
    shiftCvrgeRqustToSalesPrsnFailure,

    shiftCvrgStatusSalesPersonStarted,
    shiftCvrgStatusSalesPersonSuccess,
    shiftCvrgStatusSalesPersonFailure,

    mgrStatusForShiftCvrgeStarted,
    mgrStatusForShiftCvrgeSuccess,
    mgrStatusForShiftCvrgeFailure,

    runningLateNotificationActionByManagerStarted,
    runningLateNotificationActionByManagerSuccess,
    runningLateNotificationActionByManagerFailure,

    managementNtfctionAckldgeStarted,
    managementNtfctionAckldgeSuccess,
    managementNtfctionAckldgeFailure,

    sendVcardStarted,
    sendVcardSuccess,
    sendVcardFailure,

    compositeLeaderboardYtdStarted,
    compositeLeaderboardYtdSuccess,
    compositeLeaderboardYtdFailure,

    termnconditionEmailStarted,
    termnconditionEmailSuccess,
    termnconditionEmailFailure,

    ytdTeamLeaderboardStarted,
    ytdTeamLeaderboardSuccess,
    ytdTeamLeaderboardFailure,

    sendMessageStarted,
    sendMessageSuccess,
    sendMessageFailure,

    getMessageStarted,
    getMessageSuccess,
    getMessageFailure,

    logoutUrlStarted,
    logoutUrlSuccess,
    logoutUrlFailure,

    sosNotificationStarted,
    sosNotificationSuccess,
    sosNotificationFailure,

    ytdCompositeScoreStarted,
    ytdCompositeScoreSuccess,
    ytdCompositeScoreFailure,

    changePasswordStarted,
    changePasswordSuccess,
    changePasswordFailure,

    notificationHistoryStarted,
    notificationHistorySuccess,
    notificationHistoryFailure,

    supportStarted,
    supportSuccess,
    supportFailure,

    managementnotificationlistStarted,
    managementnotificationlistSuccess,
    managementnotificationlistFailure,

    managergamesdetailsStarted,
    managergamesdetailsSuccess,
    managergamesdetailsFailure,

    orderdetailsStarted,
    orderdetailsSuccess,
    orderdetailsFailure,

    orderupdateStarted,
    orderupdateSuccess,
    orderupdateFailure,
} from '../actions';
import BaseModel from '../../Model/baseModel';
import { showMessage } from '../../Utility/utility';

// Saga method for LOGIN request
export function* onLoginRequest(action) {
    try {
        yield put(loginStarted());
        const responseObj = yield BaseModel.login(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(loginSuccess(responseObj));
        } else {
            yield put(loginFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(loginFailure());
    }
}

// Saga method for SIGNUP request
export function* onSignupRequest(action) {
    try {
        yield put(signupStarted());
        const responseObj = yield BaseModel.signup(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(signupSuccess(responseObj));
        }
        else {
            yield put(signupFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(signupFailure());
    }
}
// Saga method for GetProfile request
export function* onGetProfileRequest(action) {
    try {
        yield put(getProfileStarted());
        const responseObj = yield BaseModel.getProfile(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(getProfileSuccess(responseObj));
        } else {
            yield put(getProfileFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(getProfileFailure());
    }
}
// Saga method for GetBroadcastMessages request
export function* onGetBroadcastMessagesRequest(action) {
    try {
        yield put(getBroadcastMessagesStarted());
        const responseObj = yield BaseModel.getBroadcastMessage(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(getBroadcastMessagesSuccess(responseObj));
        } else {
            yield put(getBroadcastMessagesFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(getBroadcastMessagesFailure());
    }
}
// Saga method for GetContacts request
export function* onGetContactsRequest(action) {
    try {
        yield put(getContactsStarted());
        const responseObj = yield BaseModel.getContacts(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(getContactsSuccess(responseObj));
        } else {
            yield put(getContactsFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(getContactsFailure());
    }
}
// Saga method for updateProfile request
export function* onUpdateProfileRequest(action) {
    try {
        yield put(updateProfileStarted());
        const responseObj = yield BaseModel.updateProfile(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(updateProfileSuccess(responseObj));
        } else {
            yield put(updateProfileFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(updateProfileFailure());
    }
}
// Saga method for addFavourite Contact request
export function* onAddFavouriteRequest(action) {
    try {
        yield put(addFavouriteStarted());
        const responseObj = yield BaseModel.addFavouriteContact(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(addFavouriteSuccess(responseObj));
        } else {
            yield put(addFavouriteFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(addFavouriteFailure());
    }
}
// Saga method for addFavourite Contact request
export function* onRecentContactRequest(action) {
    try {
        yield put(getRecentContactStarted());
        const responseObj = yield BaseModel.recentContact(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(getRecentContactSuccess(responseObj));
        } else {
            yield put(getRecentContactFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(getRecentContactFailure());
    }
}
// Saga method for achivements request
export function* onAchievementRequest(action) {
    try {
        yield put(achievementStarted());
        const responseObj = yield BaseModel.achievementDetails(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(achievementSuccess(responseObj));
        } else {
            yield put(achievementFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(achievementFailure());
    }
}
// Saga method for gameList request
export function* onGameListsRequest(action) {
    try {
        yield put(myGamesStarted());
        const responseObj = yield BaseModel.gameLists(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(myGamesSuccess(responseObj));
        } else {
            yield put(myGamesFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(myGamesFailure());
    }
}

function isValidResponseWithoutAlert(responseObj) {
    if (responseObj && responseObj.data) {
        if (!responseObj.data.error) {
            return true;
        } else {
            return false;
        }
    } else {
        setTimeout(() => {
            showMessage(true, 'Internal Server Error');
        }, 100);
        return false;
    }
}

// Saga method for createWokingDeal request
export function* onCreateWorkingDealRequest(action) {
    try {
        yield put(createWorkingDealStarted());
        const responseObj = yield BaseModel.createWorkingDeal(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(createWorkingDealSuccess(responseObj));
        } else {
            yield put(createWorkingDealFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(createWorkingDealFailure());
    }
}

// Saga method for working deal list request
export function* onWorkingDealListRequest(action) {
    try {
        yield put(workingDealListStarted());
        const responseObj = yield BaseModel.workingDealList(action.requestBody);
        // console.log('response275', responseObj)
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(workingDealListSuccess(responseObj));
        } else {
            yield put(workingDealListFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(workingDealListFailure());
    }
}

// Saga method for Update working deal  request
export function* onWorkingDealUpdateRequest(action) {
    try {
        yield put(workingDealUpdateStarted());
        const responseObj = yield BaseModel.workingDealUpdate(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(workingDealUpdateSuccess(responseObj));
        } else {
            yield put(workingDealUpdateFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(workingDealUpdateFailure());
    }
}

// Saga method for Delete working deal request
export function* onWorkingDealDeleteRequest(action) {
    try {
        yield put(workingDealDeleteStarted());
        const responseObj = yield BaseModel.workingDealDelete(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(workingDealDeleteSuccess(responseObj));
        } else {
            yield put(workingDealDeleteFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(workingDealDeleteFailure());
    }
}

// Saga method for terms and condition request
export function* onTermsConditionRequest(action) {
    try {
        yield put(termsConditionStarted());
        const responseObj = yield BaseModel.termsCondition(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(termsConditionSuccess(responseObj));
        } else {
            yield put(termsConditionFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(termsConditionFailure());
    }
}
// Saga method for mtdBookingDetails request
export function* onMtdBookingDetailsRequest(action) {
    try {
        yield put(mtdBookingDetailsStarted());
        const responseObj = yield BaseModel.mtdBookingDetails(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(mtdBookingDetailsSuccess(responseObj));
        } else {
            yield put(mtdBookingDetailsFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(mtdBookingDetailsFailure());
    }
}

// Saga method for mtdTotal request
export function* onMtdTotalRequest(action) {
    try {
        yield put(mtdTotalStarted());
        const responseObj = yield BaseModel.mtdTotal(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(mtdTotalSuccess(responseObj));
        } else {
            yield put(mtdTotalFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(mtdTotalFailure());
    }
}

// Saga method for mtdBooked request
export function* onMtdBookedRequest(action) {
    try {
        yield put(mtdBookedStarted());
        const responseObj = yield BaseModel.mtdBooked(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(mtdBookedSuccess(responseObj));
        } else {
            yield put(mtdBookedFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(mtdBookedFailure());
    }
}

// Saga method for mtdFinalized request
export function* onMtdFinalizedRequest(action) {
    try {
        yield put(mtdFinalizedStarted());
        const responseObj = yield BaseModel.mtdFinalized(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(mtdFinalizedSuccess(responseObj));
        } else {
            yield put(mtdFinalizedFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(mtdFinalizedFailure());
    }
}

// Saga method for stipsNeeded request
export function* onStipsNeededRequest(action) {
    try {
        yield put(stipsNeededStarted());
        const responseObj = yield BaseModel.stipsNeeded(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(stipsNeededSuccess(responseObj));
        } else {
            yield put(stipsNeededFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(stipsNeededFailure());
    }
}

// Saga method for updateStipStatus  request
export function* onUpdateStipsStatusRequest(action) {
    try {
        yield put(updateStipsStatusStarted());
        const responseObj = yield BaseModel.updateStipsStatus(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(updateStipsStatusSuccess(responseObj));
        } else {
            yield put(updateStipsStatusFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(updateStipsStatusFailure());
    }
}

// Saga method for monthlyLeaderboard  request
export function* onMonthlyLeaderboardRequest(action) {
    try {
        yield put(monthlyLeaderboardStarted());
        const responseObj = yield BaseModel.monthlyLeaderboard(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(monthlyLeaderboardSuccess(responseObj));
        } else {
            yield put(monthlyLeaderboardFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(monthlyLeaderboardFailure());
    }
}

// Saga method for mySchedule  request
export function* onMyScheduleRequest(action) {
    try {
        yield put(myScheduleStarted());
        const responseObj = yield BaseModel.mySchedule(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(myScheduleSuccess(responseObj));
        } else {
            yield put(myScheduleFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(myScheduleFailure());
    }
}


// Saga method for compositeScore  request
export function* onCompositeScoreRequest(action) {
    try {
        yield put(compositeScoreStarted());
        const responseObj = yield BaseModel.compositeScore(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(compositeScoreSuccess(responseObj));
        } else {
            yield put(compositeScoreFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(compositeScoreFailure());
    }
}

// Saga method for compositeLeaderboard  request
export function* onCompositeLeaderboardRequest(action) {
    try {
        yield put(compositeLeaderboardStarted());
        const responseObj = yield BaseModel.compositeLeaderboard(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(compositeLeaderboardSuccess(responseObj));
        } else {
            yield put(compositeLeaderboardFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(compositeLeaderboardFailure());
    }
}

// Saga method for changeRequest  request
export function* onChangeRequestRequest(action) {
    try {
        yield put(changeRequestStarted());
        const responseObj = yield BaseModel.changeRequest(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(changeRequestSuccess(responseObj));
        } else {
            yield put(changeRequestFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(changeRequestFailure());
    }
}

// Saga method for Delaership Sales
export function* onDealershipSalesRequest(action) {
    try {
        yield put(dealershipSalesStarted());
        const responseObj = yield BaseModel.dealershipSales(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(dealershipSalesSuccess(responseObj));
        } else {
            yield put(dealershipSalesFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(dealershipSalesFailure());
    }
}

// Saga method for My Sales
export function* onMySalesRequest(action) {
    try {
        yield put(mySalesStarted());
        const responseObj = yield BaseModel.mySales(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(mySalesSuccess(responseObj));
        } else {
            yield put(mySalesFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(mySalesFailure());
    }
}

// Saga method for Team Leaderboard
export function* onTeamLeaderboardRequest(action) {
    try {
        yield put(teamLeaderboardStarted());
        const responseObj = yield BaseModel.teamLeaderboard(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(teamLeaderboardSuccess(responseObj));
        } else {
            yield put(teamLeaderboardFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(teamLeaderboardFailure());
    }
}

// Saga method for Display Team Employee
export function* onDisplayTeamEmployeeRequest(action) {
    try {
        yield put(displayTeamEmployeeStarted());
        const responseObj = yield BaseModel.displayTeamEmployee(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(displayTeamEmployeeSuccess(responseObj));
        } else {
            yield put(displayTeamEmployeeFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(displayTeamEmployeeFailure());
    }
}


// Saga method for Ytd Leaderboard
export function* onYtdLeaderboardRequest(action) {
    try {
        yield put(ytdLeaderboardStarted());
        const responseObj = yield BaseModel.ytdLeaderboard(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(ytdLeaderboardSuccess(responseObj));
        } else {
            yield put(ytdLeaderboardFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(ytdLeaderboardFailure());
    }
}

// Saga method for Corporate user homepage
export function* onCorporateUserHomePageRequest(action) {
    try {
        yield put(corporateUserHomePageStarted());
        const responseObj = yield BaseModel.corporateUserHomePage(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(corporateUserHomePageSuccess(responseObj));
        } else {
            yield put(corporateUserHomePageFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(corporateUserHomePageFailure());
    }
}

// Saga method for Corporate Monthly leaderboard
export function* onCorporateMonthlyLeaderboardRequest(action) {
    try {
        yield put(corporateMonthlyLeaderboardStarted());
        const responseObj = yield BaseModel.corporateMonthlyLeaderboard(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(corporateMonthlyLeaderboardSuccess(responseObj));
        } else {
            yield put(corporateMonthlyLeaderboardFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(corporateMonthlyLeaderboardFailure());
    }
}

// Saga method for Sales Person Homepage
export function* onSalesPersonHomepageRequest(action) {
    try {
        yield put(salesPersonHomepageStarted());
        const responseObj = yield BaseModel.salesPersonHomepage(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(salesPersonHomepageSuccess(responseObj));
        } else {
            yield put(salesPersonHomepageFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(salesPersonHomepageFailure());
    }
}

// Saga method for Source Type Get
export function* onSourceTypeGetRequest(action) {
    try {
        yield put(sourceTypeGetStarted());
        const responseObj = yield BaseModel.sourceTypeGet(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(sourceTypeGetSuccess(responseObj));
        } else {
            yield put(sourceTypeGetFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(sourceTypeGetFailure());
    }
}

// Saga method for Calender Schedule
export function* onCalenderScheduleRequest(action) {
    try {
        yield put(calenderScheduleStarted());
        const responseObj = yield BaseModel.calenderSchedule(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(calenderScheduleSuccess(responseObj));
        } else {
            yield put(calenderScheduleFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(calenderScheduleFailure());
    }
}

// Saga method for UserTracking
export function* onUserTrackingRequest(action) {
    try {
        yield put(userTrackingStarted());
        const responseObj = yield BaseModel.userTracking(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(userTrackingSuccess(responseObj));
        } else {
            yield put(userTrackingFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(userTrackingFailure());
    }
}
// Saga method for CREATE GEOFENCE
export function* onCreateGeofenceRequest(action) {
    try {
        yield put(createGeofenceStarted());
        const responseObj = yield BaseModel.createGeofence(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(createGeofenceSuccess(responseObj));
        } else {
            yield put(createGeofenceFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(createGeofenceFailure());
    }
}

// Saga method for user search
export function* onUserSearchRequest(action) {
    try {
        yield put(userSearchStarted());
        const responseObj = yield BaseModel.userSearch(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(userSearchSuccess(responseObj));
        } else {
            yield put(userSearchFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(userSearchFailure());
    }
}

// Saga method for upboard
export function* onUpBoardRequest(action) {
    try {
        yield put(upBoardStarted());
        const responseObj = yield BaseModel.upBoard(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(upBoardSuccess(responseObj));
        } else {
            yield put(upBoardFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(upBoardFailure());
    }
}

// Saga method for update upboard
export function* onUpdateUpBoardRequest(action) {
    try {
        yield put(updateUpBoardStarted());
        const responseObj = yield BaseModel.updateUpBoard(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(updateUpBoardSuccess(responseObj));
        } else {
            yield put(updateUpBoardFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(updateUpBoardFailure());
    }
}

// Saga method for upboard notup
export function* onUpboardNotupRequest(action) {
    try {
        yield put(upboardNotupStarted());
        const responseObj = yield BaseModel.upboardNotup(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(upboardNotupSuccess(responseObj));
        } else {
            yield put(upboardNotupFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(upboardNotupFailure());
    }
}

// Saga method for notifyUser
export function* onNotifyUserRequest(action) {
    try {
        yield put(notifyUserStarted());
        const responseObj = yield BaseModel.notifyUser(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(notifyUserSuccess(responseObj));
        } else {
            yield put(notifyUserFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(notifyUserFailure());
    }
}

// Saga method for switchShift
export function* onSwitchShiftRequest(action) {
    try {
        yield put(switchShiftStarted());
        const responseObj = yield BaseModel.switchShift(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(switchShiftSuccess(responseObj));
        } else {
            yield put(switchShiftFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(switchShiftFailure());
    }
}

// Saga method for scheduleChange
export function* onScheduleChangeRequest(action) {
    try {
        yield put(scheduleChangeStarted());
        const responseObj = yield BaseModel.scheduleChange(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(scheduleChangeSuccess(responseObj));
        } else {
            yield put(scheduleChangeFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(scheduleChangeFailure());
    }
}

// Saga method for sendSwitchNotification
export function* onSendSwitchNotificationRequest(action) {
    try {
        yield put(sendSwitchNotificationStarted());
        const responseObj = yield BaseModel.sendSwitchNotification(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(sendSwitchNotificationSuccess(responseObj));
        } else {
            yield put(sendSwitchNotificationFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(sendSwitchNotificationFailure());
    }
}

// Saga method for notificationList
export function* onNotificationListRequest(action) {
    try {
        yield put(notificationListStarted());
        const responseObj = yield BaseModel.notificationList(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(notificationListSuccess(responseObj));
        } else {
            yield put(notificationListFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(notificationListFailure());
    }
}


// Saga method for activeGames
export function* onActiveGamesRequest(action) {
    try {
        yield put(activeGamesStarted());
        const responseObj = yield BaseModel.activeGames(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(activeGamesSuccess(responseObj));
        } else {
            yield put(activeGamesFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(activeGamesFailure());
    }
}

// Saga method for totalSalesperson
export function* onTotalSalespersonRequest(action) {
    try {
        yield put(totalSalespersonStarted());
        const responseObj = yield BaseModel.totalSalesperson(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(totalSalespersonSuccess(responseObj));
        } else {
            yield put(totalSalespersonFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(totalSalespersonFailure());
    }
}

// Saga method for managementNotification
export function* onManagementNotificationRequest(action) {
    try {
        yield put(managementNotificationStarted());
        const responseObj = yield BaseModel.managementNotification(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(managementNotificationSuccess(responseObj));
        } else {
            yield put(managementNotificationFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(managementNotificationFailure());
    }
}

// Saga method for gamePlay
export function* onGamePlayRequest(action) {
    try {
        yield put(gamePlayStarted());
        const responseObj = yield BaseModel.gamePlay(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(gamePlaySuccess(responseObj));
        } else {
            yield put(gamePlayFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(gamePlayFailure());
    }
}

// Saga method for gamePrize
export function* onGamePrizeRequest(action) {
    try {
        yield put(gamePrizeStarted());
        const responseObj = yield BaseModel.gamePrize(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(gamePrizeSuccess(responseObj));
        } else {
            yield put(gamePrizeFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(gamePrizeFailure());
    }
}

// Saga method for gameWinner
export function* onGameWinnerRequest(action) {
    try {
        yield put(gameWinnerStarted());
        const responseObj = yield BaseModel.gameWinner(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(gameWinnerSuccess(responseObj));
        } else {
            yield put(gameWinnerFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(gameWinnerFailure());
    }
}


// Saga method for requestPtoNotification
export function* onRequestPtoNotificationRequest(action) {
    try {
        yield put(requestPtoNotificationStarted());
        const responseObj = yield BaseModel.requestPtoNotification(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(requestPtoNotificationSuccess(responseObj));
        } else {
            yield put(requestPtoNotificationFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(requestPtoNotificationFailure());
    }
}

// Saga method for callInSickHrNotification
export function* onCallInSickHrNotificationRequest(action) {
    try {
        yield put(callInSickHrNotificationStarted());
        const responseObj = yield BaseModel.callInSickHrNotification(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(callInSickHrNotificationSuccess(responseObj));
        } else {
            yield put(callInSickHrNotificationFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(callInSickHrNotificationFailure());
    }
}


// Saga method for coverShiftNotification
export function* onCoverShiftNotificationRequest(action) {
    try {
        yield put(coverShiftNotificationStarted());
        const responseObj = yield BaseModel.coverShiftNotification(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(coverShiftNotificationSuccess(responseObj));
        } else {
            yield put(coverShiftNotificationFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(coverShiftNotificationFailure());
    }
}

// Saga method for ptoHrActionNotification
export function* onPtoHrActionNotificationRequest(action) {
    try {
        yield put(ptoHrActionNotificationStarted());
        const responseObj = yield BaseModel.ptoHrActionNotification(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(ptoHrActionNotificationSuccess(responseObj));
        } else {
            yield put(ptoHrActionNotificationFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(ptoHrActionNotificationFailure());
    }
}

// Saga method for ptoManagerActionNotification
export function* onPtoManagerActionNotificationRequest(action) {
    try {
        yield put(ptoManagerActionNotificationStarted());
        const responseObj = yield BaseModel.ptoManagerActionNotification(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(ptoManagerActionNotificationSuccess(responseObj));
        } else {
            yield put(ptoManagerActionNotificationFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(ptoManagerActionNotificationFailure());
    }
}

// Saga method for callinSickHrActionNotification
export function* onCallinSickHrActionNotificationRequest(action) {
    try {
        yield put(callinSickHrActionNotificationStarted());
        const responseObj = yield BaseModel.callinSickHrActionNotification(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(callinSickHrActionNotificationSuccess(responseObj));
        } else {
            yield put(callinSickHrActionNotificationFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(callinSickHrActionNotificationFailure());
    }
}

// Saga method for managerActionCallinSick
export function* onManagerActionCallinSickRequest(action) {
    try {
        yield put(managerActionCallinSickStarted());
        const responseObj = yield BaseModel.managerActionCallinSick(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(managerActionCallinSickSuccess(responseObj));
        } else {
            yield put(managerActionCallinSickFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(managerActionCallinSickFailure());
    }
}

// Saga method for sendRunningLateNotification
export function* onSendRunningLateNotificationRequest(action) {
    try {
        yield put(sendRunningLateNotificationStarted());
        const responseObj = yield BaseModel.sendRunningLateNotification(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(sendRunningLateNotificationSuccess(responseObj));
        } else {
            yield put(sendRunningLateNotificationFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(sendRunningLateNotificationFailure());
    }
}

// Saga method for switchShiftStatusSalesPerson
export function* onSwitchShiftStatusSalesPersonRequest(action) {
    try {
        yield put(switchShiftStatusSalesPersonStarted());
        const responseObj = yield BaseModel.switchShiftStatusSalesPerson(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(switchShiftStatusSalesPersonSuccess(responseObj));
        } else {
            yield put(switchShiftStatusSalesPersonFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(switchShiftStatusSalesPersonFailure());
    }
}

// Saga method for mgrStatusForSwitchShift
export function* onMngrStatusForSwitchShiftRequest(action) {
    try {
        yield put(mgrStatusForSwitchShiftStarted());
        const responseObj = yield BaseModel.mgrStatusForSwitchShift(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(mgrStatusForSwitchShiftSuccess(responseObj));
        } else {
            yield put(mgrStatusForSwitchShiftFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(mgrStatusForSwitchShiftFailure());
    }
}

// Saga method for shiftCvrgeRqustToSalesPrsn
export function* onShiftCvrgeRqustToSalesPrsnRequest(action) {
    try {
        yield put(shiftCvrgeRqustToSalesPrsnStarted());
        const responseObj = yield BaseModel.shiftCvrgeRqustToSalesPrsn(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(shiftCvrgeRqustToSalesPrsnSuccess(responseObj));
        } else {
            yield put(shiftCvrgeRqustToSalesPrsnFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(shiftCvrgeRqustToSalesPrsnFailure());
    }
}

// Saga method for shiftCvrgStatusSalesPerson
export function* onShiftCvrgStatusSalesPersonRequest(action) {
    try {
        yield put(shiftCvrgStatusSalesPersonStarted());
        const responseObj = yield BaseModel.shiftCvrgStatusSalesPerson(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(shiftCvrgStatusSalesPersonSuccess(responseObj));
        } else {
            yield put(shiftCvrgStatusSalesPersonFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(shiftCvrgStatusSalesPersonFailure());
    }
}

// Saga method for mgrStatusForShiftCvrge
export function* onMgrStatusForShiftCvrgeRequest(action) {
    try {
        yield put(mgrStatusForShiftCvrgeStarted());
        const responseObj = yield BaseModel.mgrStatusForShiftCvrge(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(mgrStatusForShiftCvrgeSuccess(responseObj));
        } else {
            yield put(mgrStatusForShiftCvrgeFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(mgrStatusForShiftCvrgeFailure());
    }
}

// Saga method for runningLateNotificationActionByManager
export function* onRunningLateNotificationActionByManagerRequest(action) {
    try {
        yield put(runningLateNotificationActionByManagerStarted());
        const responseObj = yield BaseModel.runningLateNotificationActionByManager(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(runningLateNotificationActionByManagerSuccess(responseObj));
        } else {
            yield put(runningLateNotificationActionByManagerFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(runningLateNotificationActionByManagerFailure());
    }
}

// Saga method for managementNtfctionAckldge
export function* onManagementNtfctionAckldgeRequest(action) {
    try {
        yield put(managementNtfctionAckldgeStarted());
        const responseObj = yield BaseModel.managementNtfctionAckldge(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(managementNtfctionAckldgeSuccess(responseObj));
        } else {
            yield put(managementNtfctionAckldgeFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(managementNtfctionAckldgeFailure());
    }
}

// Saga method for sendVcard
export function* onSendVcardRequest(action) {
    try {
        yield put(sendVcardStarted());
        const responseObj = yield BaseModel.sendVcard(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(sendVcardSuccess(responseObj));
        } else {
            yield put(sendVcardFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(sendVcardFailure());
    }
}

// Saga method for compositeLeaderboardYtd
export function* onCompositeLeaderboardYtdRequest(action) {
    try {
        yield put(compositeLeaderboardYtdStarted());
        const responseObj = yield BaseModel.compositeLeaderboardYtd(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(compositeLeaderboardYtdSuccess(responseObj));
        } else {
            yield put(compositeLeaderboardYtdFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(compositeLeaderboardYtdFailure());
    }
}

// Saga method for termnconditionEmail
export function* onTermnconditionEmailRequest(action) {
    try {
        yield put(termnconditionEmailStarted());
        const responseObj = yield BaseModel.termnconditionEmail(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(termnconditionEmailSuccess(responseObj));
        } else {
            yield put(termnconditionEmailFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(termnconditionEmailFailure());
    }
}

// Saga method for ytdTeamLeaderboard
export function* onYtdTeamLeaderboardRequest(action) {
    try {
        yield put(ytdTeamLeaderboardStarted());
        const responseObj = yield BaseModel.ytdTeamLeaderboard(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(ytdTeamLeaderboardSuccess(responseObj));
        } else {
            yield put(ytdTeamLeaderboardFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(ytdTeamLeaderboardFailure());
    }
}

// Saga method for sendMessage
export function* onSendMessageRequest(action) {
    try {
        yield put(sendMessageStarted());
        const responseObj = yield BaseModel.sendMessage(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(sendMessageSuccess(responseObj));
        } else {
            yield put(sendMessageFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(sendMessageFailure());
    }
}

// Saga method for getMessage
export function* onGetMessageRequest(action) {
    try {
        yield put(getMessageStarted());
        const responseObj = yield BaseModel.getMessage(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(getMessageSuccess(responseObj));
        } else {
            yield put(getMessageFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(getMessageFailure());
    }
}

// Saga method for logoutUrl
export function* onLogoutUrlRequest(action) {
    try {
        yield put(logoutUrlStarted());
        const responseObj = yield BaseModel.logoutUrl(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(logoutUrlSuccess(responseObj));
        } else {
            yield put(logoutUrlFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(logoutUrlFailure());
    }
}

// Saga method for sosNotification
export function* onSosNotificationRequest(action) {
    try {
        yield put(sosNotificationStarted());
        const responseObj = yield BaseModel.sosNotification(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(sosNotificationSuccess(responseObj));
        } else {
            yield put(sosNotificationFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(sosNotificationFailure());
    }
}

// Saga method for ytdCompositeScore
export function* onYtdCompositeScoreRequest(action) {
    try {
        yield put(ytdCompositeScoreStarted());
        const responseObj = yield BaseModel.ytdCompositeScore(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(ytdCompositeScoreSuccess(responseObj));
        } else {
            yield put(ytdCompositeScoreFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(ytdCompositeScoreFailure());
    }
}

// Saga method for ytdCompositeScore
export function* onChangePasswordRequest(action) {
    try {
        yield put(changePasswordStarted());
        const responseObj = yield BaseModel.changePassword(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(changePasswordSuccess(responseObj));
        } else {
            yield put(changePasswordFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(changePasswordFailure());
    }
}

// Saga method for notificationHistory
export function* onNotificationHistoryRequest(action) {
    try {
        yield put(notificationHistoryStarted());
        const responseObj = yield BaseModel.notificationHistory(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(notificationHistorySuccess(responseObj));
        } else {
            yield put(notificationHistoryFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(notificationHistoryFailure());
    }
}

// Saga method for support
export function* onSupportRequest(action) {
    try {
        yield put(supportStarted());
        const responseObj = yield BaseModel.support(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(supportSuccess(responseObj));
        } else {
            yield put(supportFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(supportFailure());
    }
}

// Saga method for managementnotificationlist
export function* onManagementnotificationlistRequest(action) {
    try {
        yield put(managementnotificationlistStarted());
        const responseObj = yield BaseModel.managementnotificationlist(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(managementnotificationlistSuccess(responseObj));
        } else {
            yield put(managementnotificationlistFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(managementnotificationlistFailure());
    }
}

// Saga method for managergamesdetails
export function* onManagergamesdetailsRequest(action) {
    try {
        yield put(managergamesdetailsStarted());
        const responseObj = yield BaseModel.managergamesdetails(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(managergamesdetailsSuccess(responseObj));
        } else {
            yield put(managergamesdetailsFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(managergamesdetailsFailure());
    }
}

// Saga method for orderdetails
export function* onOrderdetailsRequest(action) {
    try {
        yield put(orderdetailsStarted());
        const responseObj = yield BaseModel.orderDetails(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(orderdetailsSuccess(responseObj));
        } else {
            yield put(orderdetailsFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(orderdetailsFailure());
    }
}

// Saga method for orderupdate
export function* onOrderupdateRequest(action) {
    try {
        yield put(orderupdateStarted());
        const responseObj = yield BaseModel.orderUpdate(action.requestBody);
        if (isValidResponseWithoutAlert(responseObj, false)) {
            yield put(orderupdateSuccess(responseObj));
        } else {
            yield put(orderupdateFailure());
        }
    } catch (error) {
        console.error(error);
        yield put(orderupdateFailure());
    }
}
export function* actionWatcher() {
    yield takeLatest(LOGIN_REQUEST, onLoginRequest);
    yield takeLatest(SIGNUP_REQUEST, onSignupRequest);
    yield takeLatest(GETPROFILE_REQUEST, onGetProfileRequest);
    yield takeLatest(GETBROADCASTMESSAGES_REQUEST, onGetBroadcastMessagesRequest);
    yield takeLatest(GETCONTACTS_REQUEST, onGetContactsRequest);
    yield takeLatest(UPDATEPROFILE_REQUEST, onUpdateProfileRequest);
    yield takeLatest(ADDFAVOURITE_REQUEST, onAddFavouriteRequest);
    yield takeLatest(RECENTCONTACT_REQUEST, onRecentContactRequest);
    yield takeLatest(ACHIEVEMENTS_REQUEST, onAchievementRequest);
    yield takeLatest(MYGAMES_REQUEST, onGameListsRequest);
    yield takeLatest(CREATEWORKINGDEAL_REQUEST, onCreateWorkingDealRequest);
    yield takeLatest(WORKINGDEALLIST_REQUEST, onWorkingDealListRequest);
    yield takeLatest(WORKINGDEALDELETE_REQUEST, onWorkingDealDeleteRequest);
    yield takeLatest(WORKINGDEALUPDATE_REQUEST, onWorkingDealUpdateRequest);
    yield takeLatest(TERMSCONDITION_REQUEST, onTermsConditionRequest);
    yield takeLatest(MTDBOOKINGDETAILS_REQUEST, onMtdBookingDetailsRequest);
    yield takeLatest(MTDTOTAL_REQUEST, onMtdTotalRequest);
    yield takeLatest(MTDBOOKED_REQUEST, onMtdBookedRequest);
    yield takeLatest(MTDFINALIZED_REQUEST, onMtdFinalizedRequest);
    yield takeLatest(STIPSNEEDED_REQUEST, onStipsNeededRequest);
    yield takeLatest(UPDATESTIPSSTATUS_REQUEST, onUpdateStipsStatusRequest);
    yield takeLatest(MONTHLYLEADERBOARD_REQUEST, onMonthlyLeaderboardRequest);
    yield takeLatest(MYSCHEDULE_REQUEST, onMyScheduleRequest);
    yield takeLatest(COMPOSITESCORE_REQUEST, onCompositeScoreRequest);
    yield takeLatest(COMPOSITELEADERBOARD_REQUEST, onCompositeLeaderboardRequest);
    yield takeLatest(CHANGEREQUEST_REQUEST, onChangeRequestRequest);
    yield takeLatest(DEALERSHIPSALES_REQUEST, onDealershipSalesRequest);
    yield takeLatest(MYSALES_REQUEST, onMySalesRequest);
    yield takeLatest(TEAMLEADERBOARD_REQUEST, onTeamLeaderboardRequest);
    yield takeLatest(DISPLAYTEAMEMPLOYEE_REQUEST, onDisplayTeamEmployeeRequest);
    yield takeLatest(YTDLEADERBOARD_REQUEST, onYtdLeaderboardRequest);
    yield takeLatest(CORPORATEUSERHOMEPAGE_REQUEST, onCorporateUserHomePageRequest);
    yield takeLatest(CORPORATEMONTHLYLEADERBOARD_REQUEST, onCorporateMonthlyLeaderboardRequest);
    yield takeLatest(SALESPERSONHOMEPAGE_REQUEST, onSalesPersonHomepageRequest);
    yield takeLatest(SOURCETYPEGET_REQUEST, onSourceTypeGetRequest);
    yield takeLatest(CALENDERSCHEDULE_REQUEST, onCalenderScheduleRequest);
    yield takeLatest(USERTRACKING_REQUEST, onUserTrackingRequest);
    yield takeLatest(CREATEGEOFENCE_REQUEST, onCreateGeofenceRequest);
    yield takeLatest(USERSEARCH_REQUEST, onUserSearchRequest);
    yield takeLatest(UPBOARD_REQUEST, onUpBoardRequest);
    yield takeLatest(UPDATE_UPBOARD_REQUEST, onUpdateUpBoardRequest);
    yield takeLatest(UPBOARDNOTUP_REQUEST, onUpboardNotupRequest);
    yield takeLatest(NOTIFYUSER_REQUEST, onNotifyUserRequest);
    yield takeLatest(SWITCHSHIFT_REQUEST, onSwitchShiftRequest);
    yield takeLatest(SCHEDULECHANGE_REQUEST, onScheduleChangeRequest);
    yield takeLatest(SENDSWITCHNOTIFICATION_REQUEST, onSendSwitchNotificationRequest);
    yield takeLatest(NOTIFICATIONLIST_REQUEST, onNotificationListRequest);
    yield takeLatest(ACTIVEGAMES_REQUEST, onActiveGamesRequest);
    yield takeLatest(TOTALSALESPERSON_REQUEST, onTotalSalespersonRequest);
    yield takeLatest(MANAGEMENTNOTIFICATION_REQUEST, onManagementNotificationRequest);
    yield takeLatest(GAMEPLAY_REQUEST, onGamePlayRequest);
    yield takeLatest(GAMEPRIZE_REQUEST, onGamePrizeRequest);
    yield takeLatest(GAMEWINNER_REQUEST, onGameWinnerRequest);
    yield takeLatest(REQUESTPTONOTIFICATION_REQUEST, onRequestPtoNotificationRequest);
    yield takeLatest(CALLINSICKHRNOTIFICATION_REQUEST, onCallInSickHrNotificationRequest);
    yield takeLatest(COVERSHIFTNOTIFICATION_REQUEST, onCoverShiftNotificationRequest);
    yield takeLatest(PTOHRACTIONNOTIFICATION_REQUEST, onPtoHrActionNotificationRequest);
    yield takeLatest(PTOMANAGERACTIONNOTIFICATION_REQUEST, onPtoManagerActionNotificationRequest);
    yield takeLatest(CALLINSICKHRACTIONNOTIFICATION_REQUEST, onCallinSickHrActionNotificationRequest);
    yield takeLatest(MANAGERACTIONCALLINSICK_REQUEST, onManagerActionCallinSickRequest);
    yield takeLatest(SENDRUNNINGLATENOTIFICATION_REQUEST, onSendRunningLateNotificationRequest);
    yield takeLatest(SWITCHSHIFTSTATUSSALESPERSON_REQUEST, onSwitchShiftStatusSalesPersonRequest);
    yield takeLatest(MGRSTATUSFORSWITCHSHIFT_REQUEST, onMngrStatusForSwitchShiftRequest);
    yield takeLatest(SHIFTCVRGREQUSTTOSALESPERSON_REQUEST, onShiftCvrgeRqustToSalesPrsnRequest);
    yield takeLatest(SHIFTCVRGSTATUSSALESPERSON_REQUEST, onShiftCvrgStatusSalesPersonRequest);
    yield takeLatest(MGRSTATUSFORSHIFTCVRGE_REQUEST, onMgrStatusForShiftCvrgeRequest);
    yield takeLatest(RUNINGLATENOTIFICATIONACTIONBYMANAGER_REQUEST, onRunningLateNotificationActionByManagerRequest);
    yield takeLatest(MANAGEMENTNTFCTIONACKLDGE_REQUEST, onManagementNtfctionAckldgeRequest);
    yield takeLatest(SENDVCARD_REQUEST, onSendVcardRequest);
    yield takeLatest(COMPOSITELEADERBOARDYTD_REQUEST, onCompositeLeaderboardYtdRequest);
    yield takeLatest(TERMSNCONDITIONEMAIL_REQUEST, onTermnconditionEmailRequest);
    yield takeLatest(YTDTEAMLEADERBOARD_REQUEST, onYtdTeamLeaderboardRequest);
    yield takeLatest(SENDMESSAGE_REQUEST, onSendMessageRequest);
    yield takeLatest(GETMESSAGE_REQUEST, onGetMessageRequest);
    yield takeLatest(LOGOUTURL_REQUEST, onLogoutUrlRequest);
    yield takeLatest(SOSNOTIFICATION_REQUEST, onSosNotificationRequest);
    yield takeLatest(YTDCOMPOSITESCORE_REQUEST, onYtdCompositeScoreRequest);
    yield takeLatest(CHANGEPASSWORD_REQUEST, onChangePasswordRequest);
    yield takeLatest(NOTIFICATIONHISTORY_REQUEST, onNotificationHistoryRequest);
    yield takeLatest(SUPPORT_REQUEST, onSupportRequest);
    yield takeLatest(MANAGEMENTNOTIFICATIONLIST_REQUEST, onManagementnotificationlistRequest);
    yield takeLatest(MANAGERGAMESDETAILS_REQUEST, onManagergamesdetailsRequest);
    yield takeLatest(ORDERDETAILS_REQUEST, onOrderdetailsRequest);
    yield takeLatest(ORDERUPDATE_REQUEST, onOrderupdateRequest);

}
export default function* rootSaga() {
    yield all([actionWatcher()]);
}
