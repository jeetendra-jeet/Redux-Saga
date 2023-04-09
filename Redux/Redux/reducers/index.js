/* eslint-disable prettier/prettier */
import {
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    SIGNUP_STARTED,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,

    GETPROFILE_STARTED,
    GETPROFILE_SUCCESS,
    GETPROFILE_FAILURE,

    GETBROADCASTMESSAGES_STARTED,
    GETBROADCASTMESSAGES_SUCCESS,
    GETBROADCASTMESSAGES_FAILURE,

    GETCONTACTS_STARTED,
    GETCONTACTS_SUCCESS,
    GETCONTACTS_FAILURE,

    UPDATEPROFILE_STARTED,
    UPDATEPROFILE_SUCCESS,
    UPDATEPROFILE_FAILURE,

    ADDFAVOURITE_STARTED,
    ADDFAVOURITE_SUCCESS,
    ADDFAVOURITE_FAILURE,

    RECENTCONTACT_STARTED,
    RECENTCONTACT_SUCCESS,
    RECENTCONTACT_FAILURE,

    ACHIEVEMENTS_STARTED,
    ACHIEVEMENTS_SUCCESS,
    ACHIEVEMENTS_FAILURE,

    MYGAMES_STARTED,
    MYGAMES_SUCCESS,
    MYGAMES_FAILURE,

    CREATEWORKINGDEAL_STARTED,
    CREATEWORKINGDEAL_SUCCESS,
    CREATEWORKINGDEAL_FAILURE,

    WORKINGDEALLIST_STARTED,
    WORKINGDEALLIST_SUCCESS,
    WORKINGDEALLIST_FAILURE,

    WORKINGDEALUPDATE_STARTED,
    WORKINGDEALUPDATE_SUCCESS,
    WORKINGDEALUPDATE_FAILURE,

    WORKINGDEALDELETE_STARTED,
    WORKINGDEALDELETE_SUCCESS,
    WORKINGDEALDELETE_FAILURE,

    TERMSCONDITION_STARTED,
    TERMSCONDITION_SUCCESS,
    TERMSCONDITION_FAILURE,

    MTDBOOKINGDETAILS_STARTED,
    MTDBOOKINGDETAILS_SUCCESS,
    MTDBOOKINGDETAILS_FAILURE,

    MTDTOTAL_STARTED,
    MTDTOTAL_SUCCESS,
    MTDTOTAL_FAILURE,

    MTDBOOKED_STARTED,
    MTDBOOKED_SUCCESS,
    MTDBOOKED_FAILURE,

    MTDFINALIZED_STARTED,
    MTDFINALIZED_SUCCESS,
    MTDFINALIZED_FAILURE,

    STIPSNEEDED_STARTED,
    STIPSNEEDED_SUCCESS,
    STIPSNEEDED_FAILURE,

    UPDATESTIPSSTATUS_STARTED,
    UPDATESTIPSSTATUS_SUCCESS,
    UPDATESTIPSSTATUS_FAILURE,

    MONTHLYLEADERBOARD_STARTED,
    MONTHLYLEADERBOARD_SUCCESS,
    MONTHLYLEADERBOARD_FAILURE,

    MYSCHEDULE_STARTED,
    MYSCHEDULE_SUCCESS,
    MYSCHEDULE_FAILURE,

    COMPOSITESCORE_STARTED,
    COMPOSITESCORE_SUCCESS,
    COMPOSITESCORE_FAILURE,

    COMPOSITELEADERBOARD_STARTED,
    COMPOSITELEADERBOARD_SUCCESS,
    COMPOSITELEADERBOARD_FAILURE,

    CHANGEREQUEST_STARTED,
    CHANGEREQUEST_SUCCESS,
    CHANGEREQUEST_FAILURE,

    DEALERSHIPSALES_STARTED,
    DEALERSHIPSALES_SUCCESS,
    DEALERSHIPSALES_FAILURE,

    MYSALES_STARTED,
    MYSALES_SUCCESS,
    MYSALES_FAILURE,

    TEAMLEADERBOARD_STARTED,
    TEAMLEADERBOARD_SUCCESS,
    TEAMLEADERBOARD_FAILURE,

    DISPLAYTEAMEMPLOYEE_STARTED,
    DISPLAYTEAMEMPLOYEE_SUCCESS,
    DISPLAYTEAMEMPLOYEE_FAILURE,

    YTDLEADERBOARD_STARTED,
    YTDLEADERBOARD_SUCCESS,
    YTDLEADERBOARD_FAILURE,

    CORPORATEUSERHOMEPAGE_STARTED,
    CORPORATEUSERHOMEPAGE_SUCCESS,
    CORPORATEUSERHOMEPAGE_FAILURE,

    CORPORATEMONTHLYLEADERBOARD_STARTED,
    CORPORATEMONTHLYLEADERBOARD_SUCCESS,
    CORPORATEMONTHLYLEADERBOARD_FAILURE,

    SALESPERSONHOMEPAGE_STARTED,
    SALESPERSONHOMEPAGE_SUCCESS,
    SALESPERSONHOMEPAGE_FAILURE,

    SOURCETYPEGET_STARTED,
    SOURCETYPEGET_SUCCESS,
    SOURCETYPEGET_FAILURE,

    CALENDERSCHEDULE_STARTED,
    CALENDERSCHEDULE_SUCCESS,
    CALENDERSCHEDULE_FAILURE,

    USERTRACKING_STARTED,
    USERTRACKING_SUCCESS,
    USERTRACKING_FAILURE,


    CREATEGEOFENCE_STARTED,
    CREATEGEOFENCE_SUCCESS,
    CREATEGEOFENCE_FAILURE,

    USERSEARCH_STARTED,
    USERSEARCH_SUCCESS,
    USERSEARCH_FAILURE,

    UPBOARD_STARTED,
    UPBOARD_SUCCESS,
    UPBOARD_FAILURE,

    UPDATE_UPBOARD_STARTED,
    UPDATE_UPBOARD_SUCCESS,
    UPDATE_UPBOARD_FAILURE,

    UPBOARDNOTUP_STARTED,
    UPBOARDNOTUP_SUCCESS,
    UPBOARDNOTUP_FAILURE,

    NOTIFYUSER_STARTED,
    NOTIFYUSER_SUCCESS,
    NOTIFYUSER_FAILURE,

    SWITCHSHIFT_STARTED,
    SWITCHSHIFT_SUCCESS,
    SWITCHSHIFT_FAILURE,

    SCHEDULECHANGE_STARTED,
    SCHEDULECHANGE_SUCCESS,
    SCHEDULECHANGE_FAILURE,

    SENDSWITCHNOTIFICATION_STARTED,
    SENDSWITCHNOTIFICATION_SUCCESS,
    SENDSWITCHNOTIFICATION_FAILURE,

    NOTIFICATIONLIST_STARTED,
    NOTIFICATIONLIST_SUCCESS,
    NOTIFICATIONLIST_FAILURE,

    ACTIVEGAMES_STARTED,
    ACTIVEGAMES_SUCCESS,
    ACTIVEGAMES_FAILURE,

    TOTALSALESPERSON_STARTED,
    TOTALSALESPERSON_SUCCESS,
    TOTALSALESPERSON_FAILURE,

    MANAGEMENTNOTIFICATION_STARTED,
    MANAGEMENTNOTIFICATION_SUCCESS,
    MANAGEMENTNOTIFICATION_FAILURE,

    GAMEPLAY_STARTED,
    GAMEPLAY_SUCCESS,
    GAMEPLAY_FAILURE,

    GAMEPRIZE_STARTED,
    GAMEPRIZE_SUCCESS,
    GAMEPRIZE_FAILURE,

    GAMEWINNER_STARTED,
    GAMEWINNER_SUCCESS,
    GAMEWINNER_FAILURE,

    REQUESTPTONOTIFICATION_STARTED,
    REQUESTPTONOTIFICATION_SUCCESS,
    REQUESTPTONOTIFICATION_FAILURE,

    CALLINSICKHRNOTIFICATION_STARTED,
    CALLINSICKHRNOTIFICATION_SUCCESS,
    CALLINSICKHRNOTIFICATION_FAILURE,

    COVERSHIFTNOTIFICATION_STARTED,
    COVERSHIFTNOTIFICATION_SUCCESS,
    COVERSHIFTNOTIFICATION_FAILURE,

    PTOHRACTIONNOTIFICATION_STARTED,
    PTOHRACTIONNOTIFICATION_SUCCESS,
    PTOHRACTIONNOTIFICATION_FAILURE,

    PTOMANAGERACTIONNOTIFICATION_STARTED,
    PTOMANAGERACTIONNOTIFICATION_SUCCESS,
    PTOMANAGERACTIONNOTIFICATION_FAILURE,

    CALLINSICKHRACTIONNOTIFICATION_STARTED,
    CALLINSICKHRACTIONNOTIFICATION_SUCCESS,
    CALLINSICKHRACTIONNOTIFICATION_FAILURE,

    MANAGERACTIONCALLINSICK_STARTED,
    MANAGERACTIONCALLINSICK_SUCCESS,
    MANAGERACTIONCALLINSICK_FAILURE,

    SENDRUNNINGLATENOTIFICATION_STARTED,
    SENDRUNNINGLATENOTIFICATION_SUCCESS,
    SENDRUNNINGLATENOTIFICATION_FAILURE,

    SWITCHSHIFTSTATUSSALESPERSON_STARTED,
    SWITCHSHIFTSTATUSSALESPERSON_SUCCESS,
    SWITCHSHIFTSTATUSSALESPERSON_FAILURE,

    MGRSTATUSFORSWITCHSHIFT_STARTED,
    MGRSTATUSFORSWITCHSHIFT_SUCCESS,
    MGRSTATUSFORSWITCHSHIFT_FAILURE,

    SHIFTCVRGREQUSTTOSALESPERSON_STARTED,
    SHIFTCVRGREQUSTTOSALESPERSON_SUCCESS,
    SHIFTCVRGREQUSTTOSALESPERSON_FAILURE,

    SHIFTCVRGSTATUSSALESPERSON_STARTED,
    SHIFTCVRGSTATUSSALESPERSON_SUCCESS,
    SHIFTCVRGSTATUSSALESPERSON_FAILURE,

    MGRSTATUSFORSHIFTCVRGE_STARTED,
    MGRSTATUSFORSHIFTCVRGE_SUCCESS,
    MGRSTATUSFORSHIFTCVRGE_FAILURE,

    RUNINGLATENOTIFICATIONACTIONBYMANAGER_STARTED,
    RUNINGLATENOTIFICATIONACTIONBYMANAGER_SUCCESS,
    RUNINGLATENOTIFICATIONACTIONBYMANAGER_FAILURE,

    MANAGEMENTNTFCTIONACKLDGE_STARTED,
    MANAGEMENTNTFCTIONACKLDGE_SUCCESS,
    MANAGEMENTNTFCTIONACKLDGE_FAILURE,

    SENDVCARD_STARTED,
    SENDVCARD_SUCCESS,
    SENDVCARD_FAILURE,

    COMPOSITELEADERBOARDYTD_STARTED,
    COMPOSITELEADERBOARDYTD_SUCCESS,
    COMPOSITELEADERBOARDYTD_FAILURE,

    TERMSNCONDITIONEMAIL_STARTED,
    TERMSNCONDITIONEMAIL_SUCCESS,
    TERMSNCONDITIONEMAIL_FAILURE,

    YTDTEAMLEADERBOARD_STARTED,
    YTDTEAMLEADERBOARD_SUCCESS,
    YTDTEAMLEADERBOARD_FAILURE,

    SENDMESSAGE_STARTED,
    SENDMESSAGE_SUCCESS,
    SENDMESSAGE_FAILURE,

    GETMESSAGE_STARTED,
    GETMESSAGE_SUCCESS,
    GETMESSAGE_FAILURE,

    LOGOUTURL_STARTED,
    LOGOUTURL_SUCCESS,
    LOGOUTURL_FAILURE,

    SOSNOTIFICATION_STARTED,
    SOSNOTIFICATION_SUCCESS,
    SOSNOTIFICATION_FAILURE,

    YTDCOMPOSITESCORE_STARTED,
    YTDCOMPOSITESCORE_SUCCESS,
    YTDCOMPOSITESCORE_FAILURE,

    CHANGEPASSWORD_SUCCESS,
    CHANGEPASSWORD_STARTED,
    CHANGEPASSWORD_FAILURE,

    NOTIFICATIONHISTORY_SUCCESS,
    NOTIFICATIONHISTORY_STARTED,
    NOTIFICATIONHISTORY_FAILURE,

    SUPPORT_SUCCESS,
    SUPPORT_STARTED,
    SUPPORT_FAILURE,

    MANAGEMENTNOTIFICATIONLIST_SUCCESS,
    MANAGEMENTNOTIFICATIONLIST_STARTED,
    MANAGEMENTNOTIFICATIONLIST_FAILURE,

    MANAGERGAMESDETAILS_SUCCESS,
    MANAGERGAMESDETAILS_STARTED,
    MANAGERGAMESDETAILS_FAILURE,

    ORDERDETAILS_SUCCESS,
    ORDERDETAILS_STARTED,
    ORDERDETAILS_FAILURE,

    ORDERUPDATE_SUCCESS,
    ORDERUPDATE_STARTED,
    ORDERUPDATE_FAILURE,

} from '../constant/actionTypes';
import Immutable from 'seamless-immutable';

import { createReducer } from '../utils/reduxUtils';

export const initialState = Immutable.from({
    loading: false,
    app: {
        loading: false,
        loginData: null,
        signupData: null,
        userDetails: null,
        broadcastMessage: null,
        contacts: null,
        updateProfile: null,
        addFavResponse: null,
        recentContact: null,
        achivementData: null,
        myGamesLists: null,
        createWorkingDeal: null,
        workingDealList: null,
        workingDealUpdate: null,
        workingDealDelete: null,
        termsCondition: null,
        mtdBookingDetails: null,
        mtdTotal: null,
        mtdBooked: null,
        stipsNeeded: null,
        updateStipStatus: null,
        monthlyLeaderboard: null,
        myScheduleList: null,
        compositeScore: null,
        compositeLeaderboard: null,
        changeRequest: null,
        dealershipSales: null,
        mySales: null,
        teamLeaderboard: null,
        displayTeamEmployee: null,
        ytdLeaderboard: null,
        corporateUserHomePage: null,
        corporateMonthlyLeaderboard: null,
        salesPersonHomepage: null,
        sourceTypeGet: null,
        calenderSchedule: null,
        userTracking: null,
        createGeofence: null,
        userSearchList: null,
        upBoardList: null,
        updateUpBoard: null,
        upboardNotupList: null,
        notifyUser: null,
        switchShift: null,
        scheduleChange: null,
        sendSwitchNotification: null,
        notificationList: null,
        activeGames: null,
        totalSalesperson: null,
        managementNotification: null,
        gamePlay: null,
        gamePrize: null,
        gameWinner: null,
        requestPtoNotification: null,
        callInSickHrNotification: null,
        coverShiftNotification: null,
        ptoHrActionNotification: null,
        ptoManagerActionNotification: null,
        callinSickHrActionNotification: null,
        managerActionCallinSick: null,
        sendRunningLateNotification: null,
        switchShiftStatusSalesPerson: null,
        mgrStatusForSwitchShift: null,
        shiftCvrgeRqustToSalesPrsn: null,
        shiftCvrgStatusSalesPerson: null,
        mgrStatusForShiftCvrge: null,
        runningLateNotificationActionByManager: null,
        managementNtfctionAckldge: null,
        sendVcard: null,
        compositeLeaderboardYtd: null,
        termnconditionEmail: null,
        ytdTeamLeaderboard: null,
        sendMessage: null,
        getMessage: null,
        logoutUrl: null,
        sosResult: null,
        ytdCompositeScore: null,
        changePassword: null,
        notificationHistory: null,
        support: null,
        managementnotificationlist: null,
        managergamesdetails: null,
        orderdetails: null,
        orderupdate: null,
    },
});

// Login
export const onLoginStarted = (state) =>
    state.merge({
        app: state.app.merge({
            loginData: initialState.app.loginData,
            loading: true,
        }),
    });
export const onLoginSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            loginData: response,
            loading: false,
        }),
    });
export const onLoginFailure = (state) =>
    state.merge({
        app: state.app.merge({
            loginData: initialState.app.loginData,
            loading: false,
        }),
    });

// Signup
export const onSignupStarted = (state) =>
    state.merge({
        app: state.app.merge({
            signupData: initialState.app.signupData,
            loading: true,
        }),
    });
export const onSignupSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            signupData: response,
            loading: false,
        }),
    });
export const onSignupFailure = (state) =>
    state.merge({
        app: state.app.merge({
            signupData: initialState.app.signupData,
            loading: false,
        }),
    });
// getProfile
export const onGetProfileStarted = (state) =>
    state.merge({
        app: state.app.merge({
            userDetails: initialState.app.userDetails,
            loading: true,
        }),
    });
export const onGetProfileSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            userDetails: response,
            loading: false,
        }),
    });
export const onGetProfileFailure = (state) =>
    state.merge({
        app: state.app.merge({
            userDetails: initialState.app.userDetails,
            loading: false,
        }),
    });

// getBroadcastMessage
export const getBroadcastMessagesStarted = (state) =>
    state.merge({
        app: state.app.merge({
            broadcastMessage: initialState.app.broadcastMessage,
            loading: true,
        }),
    });
export const getBroadcastMessagesSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            broadcastMessage: response,
            loading: false,
        }),
    });
export const getBroadcastMessagesFailure = (state) =>
    state.merge({
        app: state.app.merge({
            broadcastMessage: initialState.app.broadcastMessage,
            loading: false,
        }),
    });

// getContacts
export const onGetContactsStarted = (state) =>
    state.merge({
        app: state.app.merge({
            contacts: initialState.app.contacts,
            loading: true,
        }),
    });
export const onGetContactsSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            contacts: response,
            loading: false,
        }),
    });
export const onGetContactsFailure = (state) =>
    state.merge({
        app: state.app.merge({
            contacts: initialState.app.contacts,
            loading: false,
        }),
    });

// updateProfile
export const onUpdateProfileStarted = (state) =>
    state.merge({
        app: state.app.merge({
            updateProfile: initialState.app.updateProfile,
            loading: true,
        }),
    });
export const onUpdateProfileSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            updateProfile: response,
            loading: false,
        }),
    });
export const onUpdateProfileFailure = (state) =>
    state.merge({
        app: state.app.merge({
            updateProfile: initialState.app.updateProfile,
            loading: false,
        }),
    });


// Add Contact to favourite
export const onAddFavouriteStarted = (state) =>
    state.merge({
        app: state.app.merge({
            addFavResponse: initialState.app.addFavResponse,
            loading: true,
        }),
    });
export const onAddFavouriteSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            addFavResponse: response,
            loading: false,
        }),
    });
export const onAddFavouriteFailure = (state) =>
    state.merge({
        app: state.app.merge({
            addFavResponse: initialState.app.addFavResponse,
            loading: false,
        }),
    });

// Get Recent Contact
export const onRecentContactStarted = (state) =>
    state.merge({
        app: state.app.merge({
            recentContact: initialState.app.recentContact,
            loading: true,
        }),
    });
export const onRecentContactSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            recentContact: response,
            loading: false,
        }),
    });
export const onRecentContactFailure = (state) =>
    state.merge({
        app: state.app.merge({
            recentContact: initialState.app.recentContact,
            loading: false,
        }),
    });

// Get Achievement Details
export const onAchievementStarted = (state) =>
    state.merge({
        app: state.app.merge({
            achivementData: initialState.app.achivementData,
            loading: true,
        }),
    });
export const onAchievementSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            achivementData: response,
            loading: false,
        }),
    });
export const onAchievementFailure = (state) =>
    state.merge({
        app: state.app.merge({
            achivementData: initialState.app.achivementData,
            loading: false,
        }),
    });

// My Game List
export const onMyGamesStarted = (state) =>
    state.merge({
        app: state.app.merge({
            myGamesLists: initialState.app.myGamesLists,
            loading: true,
        }),
    });
export const onMyGamesSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            myGamesLists: response,
            loading: false,
        }),
    });
export const onMyGamesFailure = (state) =>
    state.merge({
        app: state.app.merge({
            myGamesLists: initialState.app.myGamesLists,
            loading: false,
        }),
    });

// Create Working Deal List
export const onCreateWorkingDealStarted = (state) =>
    state.merge({
        app: state.app.merge({
            createWorkingDeal: initialState.app.createWorkingDeal,
            loading: true,
        }),
    });
export const onCreateWorkingDealSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            createWorkingDeal: response,
            loading: false,
        }),
    });
export const onCreateWorkingDealFailure = (state) =>
    state.merge({
        app: state.app.merge({
            createWorkingDeal: initialState.app.createWorkingDeal,
            loading: false,
        }),
    });

// Working Deal List
export const onWorkingDealListStarted = (state) =>
    state.merge({
        app: state.app.merge({
            workingDealList: initialState.app.workingDealList,
            loading: true,
        }),
    });
export const onWorkingDealListSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            workingDealList: response,
            loading: false,
        }),
    });
export const onWorkingDealListFailure = (state) =>
    state.merge({
        app: state.app.merge({
            workingDealList: initialState.app.workingDealList,
            loading: false,
        }),
    });

//Update Working Deal List
export const onWorkingDealUpdateStarted = (state) =>
    state.merge({
        app: state.app.merge({
            workingDealUpdate: initialState.app.workingDealUpdate,
            loading: true,
        }),
    });
export const onWorkingDealUpdateSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            workingDealUpdate: response,
            loading: false,
        }),
    });
export const onWorkingDealUpdateFailure = (state) =>
    state.merge({
        app: state.app.merge({
            workingDealUpdate: initialState.app.workingDealUpdate,
            loading: false,
        }),
    });

//Delete Working Deal
export const onWorkingDealDeleteStarted = (state) =>
    state.merge({
        app: state.app.merge({
            workingDealDelete: initialState.app.workingDealDelete,
            loading: true,
        }),
    });
export const onWorkingDealDeleteSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            workingDealDelete: response,
            loading: false,
        }),
    });
export const onWorkingDealDeleteFailure = (state) =>
    state.merge({
        app: state.app.merge({
            workingDealDelete: initialState.app.workingDealDelete,
            loading: false,
        }),
    });

// Terms & Condition
export const onTermsConditionStarted = (state) =>
    state.merge({
        app: state.app.merge({
            termsCondition: initialState.app.termsCondition,
            loading: true,
        }),
    });

export const onTermsConditionSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            termsCondition: response,
            loading: false,
        }),
    });
export const onTermsConditionFailure = (state) =>
    state.merge({
        app: state.app.merge({
            termsCondition: initialState.app.termsCondition,
            loading: false,
        }),
    });

// Mtd Booking Details
export const onMtdBookingDetailsStarted = (state) =>
    state.merge({
        app: state.app.merge({
            mtdBookingDetails: initialState.app.mtdBookingDetails,
            loading: true,
        }),
    });

export const onMtdBookingDetailsSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            mtdBookingDetails: response,
            loading: false,
        }),
    });
export const onMtdBookingDetailsFailure = (state) =>
    state.merge({
        app: state.app.merge({
            mtdBookingDetails: initialState.app.mtdBookingDetails,
            loading: false,
        }),
    });

// Mtd Total
export const onMtdTotalStarted = (state) =>
    state.merge({
        app: state.app.merge({
            mtdTotal: initialState.app.mtdTotal,
            loading: true,
        }),
    });

export const onMtdTotalSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            mtdTotal: response,
            loading: false,
        }),
    });
export const onMtdTotalFailure = (state) =>
    state.merge({
        app: state.app.merge({
            mtdTotal: initialState.app.mtdTotal,
            loading: false,
        }),
    });


// Mtd Booked
export const onMtdBookedStarted = (state) =>
    state.merge({
        app: state.app.merge({
            mtdBooked: initialState.app.mtdBooked,
            loading: true,
        }),
    });

export const onMtdBookedSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            mtdBooked: response,
            loading: false,
        }),
    });
export const onMtdBookedFailure = (state) =>
    state.merge({
        app: state.app.merge({
            mtdBooked: initialState.app.mtdBooked,
            loading: false,
        }),
    });

// Mtd Finalized
export const onMtdFinalizedStarted = (state) =>
    state.merge({
        app: state.app.merge({
            mtdFinalized: initialState.app.mtdFinalized,
            loading: true,
        }),
    });

export const onMtdFinalizedSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            mtdFinalized: response,
            loading: false,
        }),
    });
export const onMtdFinalizedFailure = (state) =>
    state.merge({
        app: state.app.merge({
            mtdFinalized: initialState.app.mtdFinalized,
            loading: false,
        }),
    });

// Mtd Stips Needed
export const onStipsNeededStarted = (state) =>
    state.merge({
        app: state.app.merge({
            stipsNeeded: initialState.app.stipsNeeded,
            loading: true,
        }),
    });

export const onStipsNeededSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            stipsNeeded: response,
            loading: false,
        }),
    });
export const onStipsNeededFailure = (state) =>
    state.merge({
        app: state.app.merge({
            stipsNeeded: initialState.app.stipsNeeded,
            loading: false,
        }),
    });


// Mtd Update Stips Status
export const onUpdateStipsStatusStarted = (state) =>
    state.merge({
        app: state.app.merge({
            updateStipStatus: initialState.app.updateStipStatus,
            loading: true,
        }),
    });

export const onUpdateStipsStatusSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            updateStipStatus: response,
            loading: false,
        }),
    });
export const onUpdateStipsStatusFailure = (state) =>
    state.merge({
        app: state.app.merge({
            updateStipStatus: initialState.app.updateStipStatus,
            loading: false,
        }),
    });


// Monthly Leaderboard
export const onMonthlyLeaderboardStarted = (state) =>
    state.merge({
        app: state.app.merge({
            monthlyLeaderboard: initialState.app.monthlyLeaderboard,
            loading: true,
        }),
    });

export const onMonthlyLeaderboardSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            monthlyLeaderboard: response,
            loading: false,
        }),
    });

export const onMonthlyLeaderboardFailure = (state) =>
    state.merge({
        app: state.app.merge({
            monthlyLeaderboard: initialState.app.monthlyLeaderboard,
            loading: false,
        }),
    });

// MY SCHEDULE
export const onMyScheduleStarted = (state) =>
    state.merge({
        app: state.app.merge({
            myScheduleList: initialState.app.myScheduleList,
            loading: true,
        }),
    });

export const onMyScheduleSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            myScheduleList: response,
            loading: false,
        }),
    });

export const onMyScheduleFailure = (state) =>
    state.merge({
        app: state.app.merge({
            myScheduleList: initialState.app.myScheduleList,
            loading: false,
        }),
    });

// COMPOSITE SCORE
export const onCompositeScoreStarted = (state) =>
    state.merge({
        app: state.app.merge({
            compositeScoreList: initialState.app.compositeScore,
            loading: true,
        }),
    });

export const onCompositeScoreSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            compositeScoreList: response,
            loading: false,
        }),
    });

export const onCompositeScoreFailure = (state) =>
    state.merge({
        app: state.app.merge({
            compositeScoreList: initialState.app.compositeScore,
            loading: false,
        }),
    });

// COMPOSITE LEADERBOARD
export const onCompositeLeaderboardStarted = (state) =>
    state.merge({
        app: state.app.merge({
            compositeLeaderboardList: initialState.app.compositeLeaderboard,
            loading: true,
        }),
    });

export const onCompositeLeaderboardSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            compositeLeaderboardList: response,
            loading: false,
        }),
    });

export const onCompositeLeaderboardFailure = (state) =>
    state.merge({
        app: state.app.merge({
            compositeLeaderboardList: initialState.app.compositeLeaderboard,
            loading: false,
        }),
    });


//Change request popup
export const onChangeRequestStarted = (state) =>
    state.merge({
        app: state.app.merge({
            changeRequestList: initialState.app.changeRequest,
            loading: true,
        }),
    });

export const onChangeRequestSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            changeRequestList: response,
            loading: false,
        }),
    });

export const onChangeRequestFailure = (state) =>
    state.merge({
        app: state.app.merge({
            changeRequestList: initialState.app.changeRequest,
            loading: false,
        }),
    });

//Dealership Sales
export const onDealershipSalesStarted = (state) =>
    state.merge({
        app: state.app.merge({

            dealershipSalesList: initialState.app.dealershipSales,
            loading: true,
        }),
    });

export const onDealershipSalesSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            dealershipSalesList: response,
            loading: false,
        }),
    });

export const onDealershipSalesFailure = (state) =>
    state.merge({
        app: state.app.merge({
            dealershipSalesList: initialState.app.dealershipSales,
            loading: false,
        }),
    });

//My Sales
export const onMySalesStarted = (state) =>
    state.merge({
        app: state.app.merge({

            mySalesList: initialState.app.mySalesList,
            loading: true,
        }),
    });

export const onMySalesSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            mySalesList: response,
            loading: false,
        }),
    });

export const onMySalesFailure = (state) =>
    state.merge({
        app: state.app.merge({
            mySalesList: initialState.app.mySalesList,
            loading: false,
        }),
    });


//Team Leaderboard
export const onTeamLeaderboardStarted = (state) =>
    state.merge({
        app: state.app.merge({

            teamLeaderboardList: initialState.app.teamLeaderboard,
            loading: true,
        }),
    });

export const onTeamLeaderboardSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            teamLeaderboardList: response,
            loading: false,
        }),
    });

export const onTeamLeaderboardFailure = (state) =>
    state.merge({
        app: state.app.merge({
            teamLeaderboardList: initialState.app.teamLeaderboard,
            loading: false,
        }),
    });

//Display team employee
export const onDisplayTeamEmployeeStarted = (state) =>
    state.merge({
        app: state.app.merge({

            displayTeamEmployeeList: initialState.app.displayTeamEmployee,
            loading: true,
        }),
    });

export const onDisplayTeamEmployeeSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            displayTeamEmployeeList: response,
            loading: false,
        }),
    });

export const onDisplayTeamEmployeeFailure = (state) =>
    state.merge({
        app: state.app.merge({
            displayTeamEmployeeList: initialState.app.displayTeamEmployee,
            loading: false,
        }),
    });

//YTD Leaderboard
export const onYtdLeaderboardStarted = (state) =>
    state.merge({
        app: state.app.merge({

            ytdLeaderboardList: initialState.app.ytdLeaderboard,
            loading: true,
        }),
    });

export const onYtdLeaderboardSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            ytdLeaderboardList: response,
            loading: false,
        }),
    });

export const onYtdLeaderboardFailure = (state) =>
    state.merge({
        app: state.app.merge({
            ytdLeaderboardList: initialState.app.ytdLeaderboard,
            loading: false,
        }),
    });

//Corporate user homepage
export const onCorporateUserHomePageStarted = (state) =>
    state.merge({
        app: state.app.merge({

            corporateUserHomePageList: initialState.app.corporateUserHomePage,
            loading: true,
        }),
    });

export const onCorporateUserHomePageSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            corporateUserHomePageList: response,
            loading: false,
        }),
    });

export const onCorporateUserHomePageFailure = (state) =>
    state.merge({
        app: state.app.merge({
            corporateUserHomePageList: initialState.app.corporateUserHomePage,
            loading: false,
        }),
    });

//CORPORATE MONTHLY LEADERBOARD
export const onCorporateMonthlyLeaderboardStarted = (state) =>
    state.merge({
        app: state.app.merge({

            corporateMonthlyLeaderboardList: initialState.app.corporateMonthlyLeaderboard,
            loading: true,
        }),
    });

export const onCorporateMonthlyLeaderboardSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            corporateMonthlyLeaderboardList: response,
            loading: false,
        }),
    });

export const onCorporateMonthlyLeaderboardFailure = (state) =>
    state.merge({
        app: state.app.merge({
            corporateMonthlyLeaderboardList: initialState.app.corporateMonthlyLeaderboard,
            loading: false,
        }),
    });

//Sales Person Homepage
export const onSalesPersonHomepageStarted = (state) =>
    state.merge({
        app: state.app.merge({

            salesPersonHomepageList: initialState.app.salesPersonHomepage,
            loading: true,
        }),
    });
export const onSalesPersonHomepageSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            salesPersonHomepageList: response,
            loading: false,
        }),
    });

export const onSalesPersonHomepageFailure = (state) =>
    state.merge({
        app: state.app.merge({
            salesPersonHomepageList: initialState.app.salesPersonHomepage,
            loading: false,
        }),
    });

//Source type get
export const onSourceTypeGetStarted = (state) =>
    state.merge({
        app: state.app.merge({

            sourceTypeGet: initialState.app.sourceTypeGet,
            loading: true,
        }),
    });
export const onSourceTypeGetSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            sourceTypeGet: response,
            loading: false,
        }),
    });

export const onSourceTypeGetFailure = (state) =>
    state.merge({
        app: state.app.merge({
            sourceTypeGet: initialState.app.sourceTypeGet,
            loading: false,
        }),
    });

//Calender Schedule
export const onCalenderScheduleStarted = (state) =>
    state.merge({
        app: state.app.merge({

            calenderScheduleList: initialState.app.calenderSchedule,
            loading: true,
        }),
    });
export const onCalenderScheduleSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            calenderScheduleList: response,
            loading: false,
        }),
    });

export const onCalenderScheduleFailure = (state) =>
    state.merge({
        app: state.app.merge({
            calenderScheduleList: initialState.app.calenderSchedule,
            loading: false,
        }),
    });

//USER TRACKING
export const onUserTrackingStarted = (state) =>
    state.merge({
        app: state.app.merge({

            userTrackingList: initialState.app.userTracking,
            loading: true,
        }),
    });
export const onUserTrackingSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            userTrackingList: response,
            loading: false,
        }),
    });

export const onUserTrackingFailure = (state) =>
    state.merge({
        app: state.app.merge({
            userTrackingList: initialState.app.userTracking,
            loading: false,
        }),
    });

//CREATE GEOFENCE
export const onCreateGeofenceStarted = (state) =>
    state.merge({
        app: state.app.merge({

            createGeofenceList: initialState.app.createGeofence,
            loading: true,
        }),
    });
export const onCreateGeofenceSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            createGeofenceList: response,
            loading: false,
        }),
    });

export const onCreateGeofenceFailure = (state) =>
    state.merge({
        app: state.app.merge({
            createGeofenceList: initialState.app.createGeofence,
            loading: false,
        }),
    });

//USER SEARCH
export const onUserSearchStarted = (state) =>
    state.merge({
        app: state.app.merge({

            userSearchList: initialState.app.userSearchList,
            loading: true,
        }),
    });
export const onUserSearchSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            userSearchList: response,
            loading: false,
        }),
    });

export const onUserSearchFailure = (state) =>
    state.merge({
        app: state.app.merge({
            userSearchList: initialState.app.userSearchList,
            loading: false,
        }),
    });

//Upboard
export const UpBoardStarted = (state) =>
    state.merge({
        app: state.app.merge({

            upBoardList: initialState.app.upBoardList,
            loading: true,
        }),
    });
export const UpBoardSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            upBoardList: response,
            loading: false,
        }),
    });

export const UpBoardFailure = (state) =>
    state.merge({
        app: state.app.merge({
            upBoardList: initialState.app.upBoardList,
            loading: false,
        }),
    });

//Update Upboard
export const updateUpBoardStarted = (state) =>
    state.merge({
        app: state.app.merge({

            updateUpBoard: initialState.app.updateUpBoard,
            loading: true,
        }),
    });
export const updateUpBoardSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            updateUpBoard: response,
            loading: false,
        }),
    });

export const updateUpBoardFailure = (state) =>
    state.merge({
        app: state.app.merge({
            updateUpBoard: initialState.app.updateUpBoard,
            loading: false,
        }),
    });

//Upboard not up
export const UpboardNotupStarted = (state) =>
    state.merge({
        app: state.app.merge({

            upboardNotupList: initialState.app.upboardNotupList,
            loading: true,
        }),
    });
export const UpboardNotupSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            upboardNotupList: response,
            loading: false,
        }),
    });

export const UpboardNotupFailure = (state) =>
    state.merge({
        app: state.app.merge({
            upboardNotupList: initialState.app.upboardNotupList,
            loading: false,
        }),
    });

//Upboard notifyUser
export const NotifyUserStarted = (state) =>
    state.merge({
        app: state.app.merge({

            notifyUser: initialState.app.notifyUser,
            loading: true,
        }),
    });
export const NotifyUserSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            notifyUser: response,
            loading: false,
        }),
    });

export const NotifyUserFailure = (state) =>
    state.merge({
        app: state.app.merge({
            notifyUser: initialState.app.notifyUser,
            loading: false,
        }),
    });

//Upboard switchShift
export const SwitchShiftStarted = (state) =>
    state.merge({
        app: state.app.merge({

            switchShift: initialState.app.switchShift,
            loading: true,
        }),
    });
export const SwitchShiftSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            switchShift: response,
            loading: false,
        }),
    });

export const SwitchShiftFailure = (state) =>
    state.merge({
        app: state.app.merge({
            switchShift: initialState.app.switchShift,
            loading: false,
        }),
    });

//Upboard scheduleChange
export const ScheduleChangeStarted = (state) =>
    state.merge({
        app: state.app.merge({

            scheduleChangeList: initialState.app.scheduleChange,
            loading: true,
        }),
    });
export const ScheduleChangeSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            scheduleChangeList: response,
            loading: false,
        }),
    });

export const ScheduleChangeFailure = (state) =>
    state.merge({
        app: state.app.merge({
            scheduleChangeList: initialState.app.scheduleChange,
            loading: false,
        }),
    });

//send shift notification
export const SendSwitchNotificationStarted = (state) =>
    state.merge({
        app: state.app.merge({

            sendSwitchNotification: initialState.app.sendSwitchNotification,
            loading: true,
        }),
    });
export const SendSwitchNotificationSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            sendSwitchNotification: response,
            loading: false,
        }),
    });

export const SendSwitchNotificationFailure = (state) =>
    state.merge({
        app: state.app.merge({
            sendSwitchNotification: initialState.app.sendSwitchNotification,
            loading: false,
        }),
    });

// notification
export const NotificationListStarted = (state) =>
    state.merge({
        app: state.app.merge({

            notificationList: initialState.app.notificationList,
            loading: true,
        }),
    });
export const NotificationListSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            notificationList: response,
            loading: false,
        }),
    });

export const NotificationListFailure = (state) =>
    state.merge({
        app: state.app.merge({
            notificationList: initialState.app.notificationList,
            loading: false,
        }),
    });

// activeGames
export const ActiveGamesStarted = (state) =>
    state.merge({
        app: state.app.merge({

            activeGamesList: initialState.app.activeGames,
            loading: true,
        }),
    });
export const ActiveGamesSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            activeGamesList: response,
            loading: false,
        }),
    });

export const ActiveGamesFailure = (state) =>
    state.merge({
        app: state.app.merge({
            activeGamesList: initialState.app.activeGames,
            loading: false,
        }),
    });

// totalSalesperson
export const TotalSalespersonStarted = (state) =>
    state.merge({
        app: state.app.merge({

            totalSalesperson: initialState.app.totalSalesperson,
            loading: true,
        }),
    });
export const TotalSalespersonSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            totalSalesperson: response,
            loading: false,
        }),
    });

export const TotalSalespersonFailure = (state) =>
    state.merge({
        app: state.app.merge({
            totalSalesperson: initialState.app.totalSalesperson,
            loading: false,
        }),
    });

// managementNotification
export const ManagementNotificationStarted = (state) =>
    state.merge({
        app: state.app.merge({

            managementNotification: initialState.app.managementNotification,
            loading: true,
        }),
    });
export const ManagementNotificationSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            managementNotification: response,
            loading: false,
        }),
    });

export const ManagementNotificationFailure = (state) =>
    state.merge({
        app: state.app.merge({
            managementNotification: initialState.app.managementNotification,
            loading: false,
        }),
    });

// gamePlay
export const GamePlayStarted = (state) =>
    state.merge({
        app: state.app.merge({

            gamePlayList: initialState.app.gamePlay,
            loading: true,
        }),
    });
export const GamePlaySuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            gamePlayList: response,
            loading: false,
        }),
    });

export const GamePlayFailure = (state) =>
    state.merge({
        app: state.app.merge({
            gamePlayList: initialState.app.gamePlay,
            loading: false,
        }),
    });

// gamePrize
export const GamePrizeStarted = (state) =>
    state.merge({
        app: state.app.merge({

            gamePrizeList: initialState.app.gamePrize,
            loading: true,
        }),
    });
export const GamePrizeSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            gamePrizeList: response,
            loading: false,
        }),
    });

export const GamePrizeFailure = (state) =>
    state.merge({
        app: state.app.merge({
            gamePrizeList: initialState.app.gamePrize,
            loading: false,
        }),
    });

// gameWinner
export const GameWinnerStarted = (state) =>
    state.merge({
        app: state.app.merge({

            gameWinnerList: initialState.app.gameWinner,
            loading: true,
        }),
    });
export const GameWinnerSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            gameWinnerList: response,
            loading: false,
        }),
    });

export const GameWinnerFailure = (state) =>
    state.merge({
        app: state.app.merge({
            gameWinnerList: initialState.app.gameWinner,
            loading: false,
        }),
    });


// requestPtoNotification
export const RequestPtoNotificationStarted = (state) =>
    state.merge({
        app: state.app.merge({

            requestPtoNotification: initialState.app.requestPtoNotification,
            loading: true,
        }),
    });
export const RequestPtoNotificationSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            requestPtoNotification: response,
            loading: false,
        }),
    });

export const RequestPtoNotificationFailure = (state) =>
    state.merge({
        app: state.app.merge({
            requestPtoNotification: initialState.app.requestPtoNotification,
            loading: false,
        }),
    });

// callInSickHrNotification
export const CallInSickHrNotificationStarted = (state) =>
    state.merge({
        app: state.app.merge({

            callInSickHrNotificationList: initialState.app.callInSickHrNotification,
            loading: true,
        }),
    });
export const CallInSickHrNotificationSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            callInSickHrNotificationList: response,
            loading: false,
        }),
    });

export const CallInSickHrNotificationFailure = (state) =>
    state.merge({
        app: state.app.merge({
            callInSickHrNotificationList: initialState.app.callInSickHrNotification,
            loading: false,
        }),
    });

// coverShiftNotification
export const CoverShiftNotificationStarted = (state) =>
    state.merge({
        app: state.app.merge({

            coverShiftNotification: initialState.app.coverShiftNotification,
            loading: true,
        }),
    });
export const CoverShiftNotificationSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            coverShiftNotification: response,
            loading: false,
        }),
    });

export const CoverShiftNotificationFailure = (state) =>
    state.merge({
        app: state.app.merge({
            coverShiftNotification: initialState.app.coverShiftNotification,
            loading: false,
        }),
    });

// ptoHrActionNotification
export const PtoHrActionNotificationStarted = (state) =>
    state.merge({
        app: state.app.merge({

            ptoHrActionNotification: initialState.app.ptoHrActionNotification,
            loading: true,
        }),
    });
export const PtoHrActionNotificationSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            ptoHrActionNotification: response,
            loading: false,
        }),
    });

export const PtoHrActionNotificationFailure = (state) =>
    state.merge({
        app: state.app.merge({
            ptoHrActionNotification: initialState.app.ptoHrActionNotification,
            loading: false,
        }),
    });

// ptoManagerActionNotification
export const PtoManagerActionNotificationStarted = (state) =>
    state.merge({
        app: state.app.merge({

            ptoManagerActionNotification: initialState.app.ptoManagerActionNotification,
            loading: true,
        }),
    });
export const PtoManagerActionNotificationSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            ptoManagerActionNotification: response,
            loading: false,
        }),
    });

export const PtoManagerActionNotificationFailure = (state) =>
    state.merge({
        app: state.app.merge({
            ptoManagerActionNotification: initialState.app.ptoManagerActionNotification,
            loading: false,
        }),
    });

// callinSickHrActionNotification
export const CallinSickHrActionNotificationStarted = (state) =>
    state.merge({
        app: state.app.merge({

            callinSickHrActionNotification: initialState.app.callinSickHrActionNotification,
            loading: true,
        }),
    });
export const CallinSickHrActionNotificationSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            callinSickHrActionNotification: response,
            loading: false,
        }),
    });

export const CallinSickHrActionNotificationFailure = (state) =>
    state.merge({
        app: state.app.merge({
            callinSickHrActionNotification: initialState.app.callinSickHrActionNotification,
            loading: false,
        }),
    });

// managerActionCallinSick
export const ManagerActionCallinSickStarted = (state) =>
    state.merge({
        app: state.app.merge({

            managerActionCallinSick: initialState.app.managerActionCallinSick,
            loading: true,
        }),
    });
export const ManagerActionCallinSickSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            managerActionCallinSick: response,
            loading: false,
        }),
    });

export const ManagerActionCallinSickFailure = (state) =>
    state.merge({
        app: state.app.merge({
            managerActionCallinSick: initialState.app.managerActionCallinSick,
            loading: false,
        }),
    });

// sendRunningLateNotification
export const SendRunningLateNotificationStarted = (state) =>
    state.merge({
        app: state.app.merge({

            sendRunningLateNotification: initialState.app.sendRunningLateNotification,
            loading: true,
        }),
    });
export const SendRunningLateNotificationSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            sendRunningLateNotification: response,
            loading: false,
        }),
    });

export const SendRunningLateNotificationFailure = (state) =>
    state.merge({
        app: state.app.merge({
            sendRunningLateNotification: initialState.app.sendRunningLateNotification,
            loading: false,
        }),
    });

// switchShiftStatusSalesPerson
export const SwitchShiftStatusSalesPersonStarted = (state) =>
    state.merge({
        app: state.app.merge({

            switchShiftStatusSalesPerson: initialState.app.switchShiftStatusSalesPerson,
            loading: true,
        }),
    });
export const SwitchShiftStatusSalesPersonSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            switchShiftStatusSalesPerson: response,
            loading: false,
        }),
    });

export const SwitchShiftStatusSalesPersonFailure = (state) =>
    state.merge({
        app: state.app.merge({
            switchShiftStatusSalesPerson: initialState.app.switchShiftStatusSalesPerson,
            loading: false,
        }),
    });

// mgrStatusForSwitchShift
export const MngrStatusForSwitchShiftStarted = (state) =>
    state.merge({
        app: state.app.merge({

            mgrStatusForSwitchShift: initialState.app.mgrStatusForSwitchShift,
            loading: true,
        }),
    });
export const MngrStatusForSwitchShiftSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            mgrStatusForSwitchShift: response,
            loading: false,
        }),
    });

export const MngrStatusForSwitchShiftFailure = (state) =>
    state.merge({
        app: state.app.merge({
            mgrStatusForSwitchShift: initialState.app.mgrStatusForSwitchShift,
            loading: false,
        }),
    });

// shiftCvrgeRqustToSalesPrsn
export const ShiftCvrgeRqustToSalesPrsnStarted = (state) =>
    state.merge({
        app: state.app.merge({

            shiftCvrgeRqustToSalesPrsn: initialState.app.shiftCvrgeRqustToSalesPrsn,
            loading: true,
        }),
    });
export const ShiftCvrgeRqustToSalesPrsnSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            shiftCvrgeRqustToSalesPrsn: response,
            loading: false,
        }),
    });

export const ShiftCvrgeRqustToSalesPrsnFailure = (state) =>
    state.merge({
        app: state.app.merge({
            shiftCvrgeRqustToSalesPrsn: initialState.app.shiftCvrgeRqustToSalesPrsn,
            loading: false,
        }),
    });

// shiftCvrgStatusSalesPerson
export const ShiftCvrgStatusSalesPersonStarted = (state) =>
    state.merge({
        app: state.app.merge({

            shiftCvrgStatusSalesPerson: initialState.app.shiftCvrgStatusSalesPerson,
            loading: true,
        }),
    });
export const ShiftCvrgStatusSalesPersonSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            shiftCvrgStatusSalesPerson: response,
            loading: false,
        }),
    });

export const ShiftCvrgStatusSalesPersonFailure = (state) =>
    state.merge({
        app: state.app.merge({
            shiftCvrgStatusSalesPerson: initialState.app.shiftCvrgStatusSalesPerson,
            loading: false,
        }),
    });

// mgrStatusForShiftCvrge
export const MgrStatusForShiftCvrgeStarted = (state) =>
    state.merge({
        app: state.app.merge({

            mgrStatusForShiftCvrge: initialState.app.mgrStatusForShiftCvrge,
            loading: true,
        }),
    });
export const MgrStatusForShiftCvrgeSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            mgrStatusForShiftCvrge: response,
            loading: false,
        }),
    });

export const MgrStatusForShiftCvrgeFailure = (state) =>
    state.merge({
        app: state.app.merge({
            mgrStatusForShiftCvrge: initialState.app.mgrStatusForShiftCvrge,
            loading: false,
        }),
    });

// runningLateNotificationActionByManager
export const RunningLateNotificationActionByManagerStarted = (state) =>
    state.merge({
        app: state.app.merge({

            runningLateNotificationActionByManager: initialState.app.runningLateNotificationActionByManager,
            loading: true,
        }),
    });
export const RunningLateNotificationActionByManagerSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            runningLateNotificationActionByManager: response,
            loading: false,
        }),
    });

export const RunningLateNotificationActionByManagerFailure = (state) =>
    state.merge({
        app: state.app.merge({
            runningLateNotificationActionByManager: initialState.app.runningLateNotificationActionByManager,
            loading: false,
        }),
    });

// managementNtfctionAckldge
export const ManagementNtfctionAckldgeStarted = (state) =>
    state.merge({
        app: state.app.merge({
            managementNtfctionAckldge: initialState.app.managementNtfctionAckldge,
            loading: true,
        }),
    });
export const ManagementNtfctionAckldgeSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            managementNtfctionAckldge: response,
            loading: false,
        }),
    });

export const ManagementNtfctionAckldgeFailure = (state) =>
    state.merge({
        app: state.app.merge({
            managementNtfctionAckldge: initialState.app.managementNtfctionAckldge,
            loading: false,
        }),
    });

// sendVcard
export const SendVcardStarted = (state) =>
    state.merge({
        app: state.app.merge({

            sendVcard: initialState.app.sendVcard,
            loading: true,
        }),
    });
export const SendVcardSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            sendVcard: response,
            loading: false,
        }),
    });

export const SendVcardFailure = (state) =>
    state.merge({
        app: state.app.merge({
            sendVcard: initialState.app.sendVcard,
            loading: false,
        }),
    });

// compositeLeaderboardYtd
export const CompositeLeaderboardYtdStarted = (state) =>
    state.merge({
        app: state.app.merge({

            compositeLeaderboardYtdList: initialState.app.compositeLeaderboardYtd,
            loading: true,
        }),
    });
export const CompositeLeaderboardYtdSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            compositeLeaderboardYtdList: response,
            loading: false,
        }),
    });

export const CompositeLeaderboardYtdFailure = (state) =>
    state.merge({
        app: state.app.merge({
            compositeLeaderboardYtdList: initialState.app.compositeLeaderboardYtd,
            loading: false,
        }),
    });

// termnconditionEmail
export const TermnconditionEmailStarted = (state) =>
    state.merge({
        app: state.app.merge({

            termnconditionEmail: initialState.app.termnconditionEmail,
            loading: true,
        }),
    });
export const TermnconditionEmailSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            termnconditionEmail: response,
            loading: false,
        }),
    });

export const TermnconditionEmailFailure = (state) =>
    state.merge({
        app: state.app.merge({
            termnconditionEmail: initialState.app.termnconditionEmail,
            loading: false,
        }),
    });


// ytdTeamLeaderboard
export const YtdTeamLeaderboardStarted = (state) =>
    state.merge({
        app: state.app.merge({

            ytdTeamLeaderboardList: initialState.app.ytdTeamLeaderboard,
            loading: true,
        }),
    });
export const YtdTeamLeaderboardSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            ytdTeamLeaderboardList: response,
            loading: false,
        }),
    });

export const YtdTeamLeaderboardFailure = (state) =>
    state.merge({
        app: state.app.merge({
            ytdTeamLeaderboardList: initialState.app.ytdTeamLeaderboard,
            loading: false,
        }),
    });

// sendMessage
export const SendMessageStarted = (state) =>
    state.merge({
        app: state.app.merge({

            sendMessage: initialState.app.sendMessage,
            loading: true,
        }),
    });
export const SendMessageSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            sendMessage: response,
            loading: false,
        }),
    });

export const SendMessageFailure = (state) =>
    state.merge({
        app: state.app.merge({
            sendMessage: initialState.app.sendMessage,
            loading: false,
        }),
    });

// getMessage
export const GetMessageStarted = (state) =>
    state.merge({
        app: state.app.merge({

            getMessage: initialState.app.getMessage,
            loading: true,
        }),
    });
export const GetMessageSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            getMessage: response,
            loading: false,
        }),
    });

export const GetMessageFailure = (state) =>
    state.merge({
        app: state.app.merge({
            getMessage: initialState.app.getMessage,
            loading: false,
        }),
    });

// logoutUrl
export const LogoutUrlStarted = (state) =>
    state.merge({
        app: state.app.merge({

            logoutUrl: initialState.app.logoutUrl,
            loading: true,
        }),
    });
export const LogoutUrlSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            logoutUrl: response,
            loading: false,
        }),
    });

export const LogoutUrlFailure = (state) =>
    state.merge({
        app: state.app.merge({
            logoutUrl: initialState.app.logoutUrl,
            loading: false,
        }),
    });

// SOSNOTIFICATION
export const SosNotificationStarted = (state) =>
    state.merge({
        app: state.app.merge({

            sosResult: initialState.app.sosResult,
            loading: true,
        }),
    });
export const SosNotificationSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            sosResult: response,
            loading: false,
        }),
    });

export const SosNotificationFailure = (state) =>
    state.merge({
        app: state.app.merge({
            sosResult: initialState.app.sosResult,
            loading: false,
        }),
    });

// ytdCompositeScore
export const YtdCompositeScoreStarted = (state) =>
    state.merge({
        app: state.app.merge({

            ytdCompositeScore: initialState.app.ytdCompositeScore,
            loading: true,
        }),
    });
export const YtdCompositeScoreSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            ytdCompositeScore: response,
            loading: false,
        }),
    });

export const YtdCompositeScoreFailure = (state) =>
    state.merge({
        app: state.app.merge({
            ytdCompositeScore: initialState.app.ytdCompositeScore,
            loading: false,
        }),
    });

// changePassword
export const changePasswordStarted = (state) =>
    state.merge({
        app: state.app.merge({

            changePassword: initialState.app.changePassword,
            loading: true,
        }),
    });
export const changePasswordSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            changePassword: response,
            loading: false,
        }),
    });

export const changePasswordFailure = (state) =>
    state.merge({
        app: state.app.merge({
            changePassword: initialState.app.changePassword,
            loading: false,
        }),
    });

// NotificationHistory
export const notificationHistoryStarted = (state) =>
    state.merge({
        app: state.app.merge({
            notificationHistory: initialState.app.notificationHistory,
            loading: true,
        }),
    });
export const notificationHistorySuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            notificationHistory: response,
            loading: false,
        }),
    });

export const notificationHistoryFailure = (state) =>
    state.merge({
        app: state.app.merge({
            notificationHistory: initialState.app.notificationHistory,
            loading: false,
        }),
    });

// support
export const supportStarted = (state) =>
    state.merge({
        app: state.app.merge({
            support: initialState.app.support,
            loading: true,
        }),
    });
export const supportSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            support: response,
            loading: false,
        }),
    });

export const supportFailure = (state) =>
    state.merge({
        app: state.app.merge({
            support: initialState.app.support,
            loading: false,
        }),
    });

// managementnotificationlist
export const managementnotificationlistStarted = (state) =>
    state.merge({
        app: state.app.merge({
            managementnotificationlist: initialState.app.managementnotificationlist,
            loading: true,
        }),
    });
export const managementnotificationlistSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            managementnotificationlist: response,
            loading: false,
        }),
    });

export const managementnotificationlistFailure = (state) =>
    state.merge({
        app: state.app.merge({
            managementnotificationlist: initialState.app.managementnotificationlist,
            loading: false,
        }),
    });

// managergamesdetails
export const managergamesdetailsStarted = (state) =>
    state.merge({
        app: state.app.merge({
            managergamesdetails: initialState.app.managergamesdetails,
            loading: true,
        }),
    });
export const managergamesdetailsSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            managergamesdetails: response,
            loading: false,
        }),
    });

export const managergamesdetailsFailure = (state) =>
    state.merge({
        app: state.app.merge({
            managergamesdetails: initialState.app.managergamesdetails,
            loading: false,
        }),
    });

// orderdetails
export const orderdetailsStarted = (state) =>
    state.merge({
        app: state.app.merge({
            orderdetails: initialState.app.orderdetails,
            loading: true,
        }),
    });
export const orderdetailsSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            orderdetails: response,
            loading: false,
        }),
    });

export const orderdetailsFailure = (state) =>
    state.merge({
        app: state.app.merge({
            orderdetails: initialState.app.orderdetails,
            loading: false,
        }),
    });

// orderupdate
export const orderupdateStarted = (state) =>
    state.merge({
        app: state.app.merge({
            orderupdate: initialState.app.orderupdate,
            loading: true,
        }),
    });
export const orderupdateSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            orderupdate: response,
            loading: false,
        }),
    });

export const orderupdateFailure = (state) =>
    state.merge({
        app: state.app.merge({
            orderupdate: initialState.app.orderupdate,
            loading: false,
        }),
    });




const appReducer = createReducer(initialState, {
    [LOGIN_STARTED]: onLoginStarted,
    [LOGIN_SUCCESS]: onLoginSuccess,
    [LOGIN_FAILURE]: onLoginFailure,

    [SIGNUP_STARTED]: onSignupStarted,
    [SIGNUP_SUCCESS]: onSignupSuccess,
    [SIGNUP_FAILURE]: onSignupFailure,

    [GETPROFILE_STARTED]: onGetProfileStarted,
    [GETPROFILE_SUCCESS]: onGetProfileSuccess,
    [GETPROFILE_FAILURE]: onGetProfileFailure,

    [GETBROADCASTMESSAGES_STARTED]: getBroadcastMessagesStarted,
    [GETBROADCASTMESSAGES_SUCCESS]: getBroadcastMessagesSuccess,
    [GETBROADCASTMESSAGES_FAILURE]: getBroadcastMessagesFailure,

    [GETCONTACTS_STARTED]: onGetContactsStarted,
    [GETCONTACTS_SUCCESS]: onGetContactsSuccess,
    [GETCONTACTS_FAILURE]: onGetContactsFailure,

    [UPDATEPROFILE_STARTED]: onUpdateProfileStarted,
    [UPDATEPROFILE_SUCCESS]: onUpdateProfileSuccess,
    [UPDATEPROFILE_FAILURE]: onUpdateProfileFailure,

    [ADDFAVOURITE_STARTED]: onAddFavouriteStarted,
    [ADDFAVOURITE_SUCCESS]: onAddFavouriteSuccess,
    [ADDFAVOURITE_FAILURE]: onAddFavouriteFailure,

    [RECENTCONTACT_STARTED]: onRecentContactStarted,
    [RECENTCONTACT_SUCCESS]: onRecentContactSuccess,
    [RECENTCONTACT_FAILURE]: onRecentContactFailure,

    [ACHIEVEMENTS_STARTED]: onAchievementStarted,
    [ACHIEVEMENTS_SUCCESS]: onAchievementSuccess,
    [ACHIEVEMENTS_FAILURE]: onAchievementFailure,

    [MYGAMES_STARTED]: onMyGamesStarted,
    [MYGAMES_SUCCESS]: onMyGamesSuccess,
    [MYGAMES_FAILURE]: onMyGamesFailure,

    [CREATEWORKINGDEAL_STARTED]: onCreateWorkingDealStarted,
    [CREATEWORKINGDEAL_SUCCESS]: onCreateWorkingDealSuccess,
    [CREATEWORKINGDEAL_FAILURE]: onCreateWorkingDealFailure,

    [WORKINGDEALLIST_STARTED]: onWorkingDealListStarted,
    [WORKINGDEALLIST_SUCCESS]: onWorkingDealListSuccess,
    [WORKINGDEALLIST_FAILURE]: onWorkingDealListFailure,

    [WORKINGDEALUPDATE_STARTED]: onWorkingDealUpdateStarted,
    [WORKINGDEALUPDATE_SUCCESS]: onWorkingDealUpdateSuccess,
    [WORKINGDEALUPDATE_FAILURE]: onWorkingDealUpdateFailure,

    [WORKINGDEALDELETE_STARTED]: onWorkingDealDeleteStarted,
    [WORKINGDEALDELETE_SUCCESS]: onWorkingDealDeleteSuccess,
    [WORKINGDEALDELETE_FAILURE]: onWorkingDealDeleteFailure,

    [TERMSCONDITION_STARTED]: onTermsConditionStarted,
    [TERMSCONDITION_SUCCESS]: onTermsConditionSuccess,
    [TERMSCONDITION_FAILURE]: onTermsConditionFailure,

    [MTDBOOKINGDETAILS_STARTED]: onMtdBookingDetailsStarted,
    [MTDBOOKINGDETAILS_SUCCESS]: onMtdBookingDetailsSuccess,
    [MTDBOOKINGDETAILS_FAILURE]: onMtdBookingDetailsFailure,

    [MTDTOTAL_STARTED]: onMtdTotalStarted,
    [MTDTOTAL_SUCCESS]: onMtdTotalSuccess,
    [MTDTOTAL_FAILURE]: onMtdTotalFailure,

    [MTDBOOKED_STARTED]: onMtdBookedStarted,
    [MTDBOOKED_SUCCESS]: onMtdBookedSuccess,
    [MTDBOOKED_FAILURE]: onMtdBookedFailure,

    [MTDFINALIZED_STARTED]: onMtdFinalizedStarted,
    [MTDFINALIZED_SUCCESS]: onMtdFinalizedSuccess,
    [MTDFINALIZED_FAILURE]: onMtdFinalizedFailure,

    [STIPSNEEDED_STARTED]: onStipsNeededStarted,
    [STIPSNEEDED_SUCCESS]: onStipsNeededSuccess,
    [STIPSNEEDED_FAILURE]: onStipsNeededFailure,

    [UPDATESTIPSSTATUS_STARTED]: onUpdateStipsStatusStarted,
    [UPDATESTIPSSTATUS_SUCCESS]: onUpdateStipsStatusSuccess,
    [UPDATESTIPSSTATUS_FAILURE]: onUpdateStipsStatusFailure,

    [MONTHLYLEADERBOARD_STARTED]: onMonthlyLeaderboardStarted,
    [MONTHLYLEADERBOARD_SUCCESS]: onMonthlyLeaderboardSuccess,
    [MONTHLYLEADERBOARD_FAILURE]: onMonthlyLeaderboardFailure,


    [MYSCHEDULE_STARTED]: onMyScheduleStarted,
    [MYSCHEDULE_SUCCESS]: onMyScheduleSuccess,
    [MYSCHEDULE_FAILURE]: onMyScheduleFailure,

    [COMPOSITESCORE_STARTED]: onCompositeScoreStarted,
    [COMPOSITESCORE_SUCCESS]: onCompositeScoreSuccess,
    [COMPOSITESCORE_FAILURE]: onCompositeScoreFailure,

    [COMPOSITELEADERBOARD_STARTED]: onCompositeLeaderboardStarted,
    [COMPOSITELEADERBOARD_SUCCESS]: onCompositeLeaderboardSuccess,
    [COMPOSITELEADERBOARD_FAILURE]: onCompositeLeaderboardFailure,

    [CHANGEREQUEST_STARTED]: onChangeRequestStarted,
    [CHANGEREQUEST_SUCCESS]: onChangeRequestSuccess,
    [CHANGEREQUEST_FAILURE]: onChangeRequestFailure,

    [DEALERSHIPSALES_STARTED]: onDealershipSalesStarted,
    [DEALERSHIPSALES_SUCCESS]: onDealershipSalesSuccess,
    [DEALERSHIPSALES_FAILURE]: onDealershipSalesFailure,

    [MYSALES_STARTED]: onMySalesStarted,
    [MYSALES_SUCCESS]: onMySalesSuccess,
    [MYSALES_FAILURE]: onMySalesFailure,

    [TEAMLEADERBOARD_STARTED]: onTeamLeaderboardStarted,
    [TEAMLEADERBOARD_SUCCESS]: onTeamLeaderboardSuccess,
    [TEAMLEADERBOARD_FAILURE]: onTeamLeaderboardFailure,

    [DISPLAYTEAMEMPLOYEE_STARTED]: onDisplayTeamEmployeeStarted,
    [DISPLAYTEAMEMPLOYEE_SUCCESS]: onDisplayTeamEmployeeSuccess,
    [DISPLAYTEAMEMPLOYEE_FAILURE]: onDisplayTeamEmployeeFailure,

    [YTDLEADERBOARD_STARTED]: onYtdLeaderboardStarted,
    [YTDLEADERBOARD_SUCCESS]: onYtdLeaderboardSuccess,
    [YTDLEADERBOARD_FAILURE]: onYtdLeaderboardFailure,

    [CORPORATEUSERHOMEPAGE_STARTED]: onCorporateUserHomePageStarted,
    [CORPORATEUSERHOMEPAGE_SUCCESS]: onCorporateUserHomePageSuccess,
    [CORPORATEUSERHOMEPAGE_FAILURE]: onCorporateUserHomePageFailure,

    [CORPORATEMONTHLYLEADERBOARD_STARTED]: onCorporateMonthlyLeaderboardStarted,
    [CORPORATEMONTHLYLEADERBOARD_SUCCESS]: onCorporateMonthlyLeaderboardSuccess,
    [CORPORATEMONTHLYLEADERBOARD_FAILURE]: onCorporateMonthlyLeaderboardFailure,


    [SALESPERSONHOMEPAGE_STARTED]: onSalesPersonHomepageStarted,
    [SALESPERSONHOMEPAGE_SUCCESS]: onSalesPersonHomepageSuccess,
    [SALESPERSONHOMEPAGE_FAILURE]: onSalesPersonHomepageFailure,

    [SOURCETYPEGET_STARTED]: onSourceTypeGetStarted,
    [SOURCETYPEGET_SUCCESS]: onSourceTypeGetSuccess,
    [SOURCETYPEGET_FAILURE]: onSourceTypeGetFailure,

    [CALENDERSCHEDULE_STARTED]: onCalenderScheduleStarted,
    [CALENDERSCHEDULE_SUCCESS]: onCalenderScheduleSuccess,
    [CALENDERSCHEDULE_FAILURE]: onCalenderScheduleFailure,

    [USERTRACKING_STARTED]: onUserTrackingStarted,
    [USERTRACKING_SUCCESS]: onUserTrackingSuccess,
    [USERTRACKING_FAILURE]: onUserTrackingFailure,

    [CREATEGEOFENCE_STARTED]: onCreateGeofenceStarted,
    [CREATEGEOFENCE_SUCCESS]: onCreateGeofenceSuccess,
    [CREATEGEOFENCE_FAILURE]: onCreateGeofenceFailure,

    [USERSEARCH_STARTED]: onUserSearchStarted,
    [USERSEARCH_SUCCESS]: onUserSearchSuccess,
    [USERSEARCH_FAILURE]: onUserSearchFailure,

    [UPBOARD_STARTED]: UpBoardStarted,
    [UPBOARD_SUCCESS]: UpBoardSuccess,
    [UPBOARD_FAILURE]: UpBoardFailure,

    [UPDATE_UPBOARD_STARTED]: updateUpBoardStarted,
    [UPDATE_UPBOARD_SUCCESS]: updateUpBoardSuccess,
    [UPDATE_UPBOARD_FAILURE]: updateUpBoardFailure,

    [UPBOARDNOTUP_STARTED]: UpboardNotupStarted,
    [UPBOARDNOTUP_SUCCESS]: UpboardNotupSuccess,
    [UPBOARDNOTUP_FAILURE]: UpboardNotupFailure,

    [NOTIFYUSER_STARTED]: NotifyUserStarted,
    [NOTIFYUSER_SUCCESS]: NotifyUserSuccess,
    [NOTIFYUSER_FAILURE]: NotifyUserFailure,

    [SWITCHSHIFT_STARTED]: SwitchShiftStarted,
    [SWITCHSHIFT_SUCCESS]: SwitchShiftSuccess,
    [SWITCHSHIFT_FAILURE]: SwitchShiftFailure,

    [SCHEDULECHANGE_STARTED]: ScheduleChangeStarted,
    [SCHEDULECHANGE_SUCCESS]: ScheduleChangeSuccess,
    [SCHEDULECHANGE_FAILURE]: ScheduleChangeFailure,


    [SENDSWITCHNOTIFICATION_STARTED]: SendSwitchNotificationStarted,
    [SENDSWITCHNOTIFICATION_SUCCESS]: SendSwitchNotificationSuccess,
    [SENDSWITCHNOTIFICATION_FAILURE]: SendSwitchNotificationFailure,

    [NOTIFICATIONLIST_STARTED]: NotificationListStarted,
    [NOTIFICATIONLIST_SUCCESS]: NotificationListSuccess,
    [NOTIFICATIONLIST_FAILURE]: NotificationListFailure,


    [ACTIVEGAMES_STARTED]: ActiveGamesStarted,
    [ACTIVEGAMES_SUCCESS]: ActiveGamesSuccess,
    [ACTIVEGAMES_FAILURE]: ActiveGamesFailure,

    [TOTALSALESPERSON_STARTED]: TotalSalespersonStarted,
    [TOTALSALESPERSON_SUCCESS]: TotalSalespersonSuccess,
    [TOTALSALESPERSON_FAILURE]: TotalSalespersonFailure,

    [MANAGEMENTNOTIFICATION_STARTED]: ManagementNotificationStarted,
    [MANAGEMENTNOTIFICATION_SUCCESS]: ManagementNotificationSuccess,
    [MANAGEMENTNOTIFICATION_FAILURE]: ManagementNotificationFailure,

    [GAMEPLAY_STARTED]: GamePlayStarted,
    [GAMEPLAY_SUCCESS]: GamePlaySuccess,
    [GAMEPLAY_FAILURE]: GamePlayFailure,

    [GAMEPRIZE_STARTED]: GamePrizeStarted,
    [GAMEPRIZE_SUCCESS]: GamePrizeSuccess,
    [GAMEPRIZE_FAILURE]: GamePrizeFailure,

    [GAMEWINNER_STARTED]: GameWinnerStarted,
    [GAMEWINNER_SUCCESS]: GameWinnerSuccess,
    [GAMEWINNER_FAILURE]: GameWinnerFailure,

    [REQUESTPTONOTIFICATION_STARTED]: RequestPtoNotificationStarted,
    [REQUESTPTONOTIFICATION_SUCCESS]: RequestPtoNotificationSuccess,
    [REQUESTPTONOTIFICATION_FAILURE]: RequestPtoNotificationFailure,

    [CALLINSICKHRNOTIFICATION_STARTED]: CallInSickHrNotificationStarted,
    [CALLINSICKHRNOTIFICATION_SUCCESS]: CallInSickHrNotificationSuccess,
    [CALLINSICKHRNOTIFICATION_FAILURE]: CallInSickHrNotificationFailure,

    [COVERSHIFTNOTIFICATION_STARTED]: CoverShiftNotificationStarted,
    [COVERSHIFTNOTIFICATION_SUCCESS]: CoverShiftNotificationSuccess,
    [COVERSHIFTNOTIFICATION_FAILURE]: CoverShiftNotificationFailure,

    [PTOHRACTIONNOTIFICATION_STARTED]: PtoHrActionNotificationStarted,
    [PTOHRACTIONNOTIFICATION_SUCCESS]: PtoHrActionNotificationSuccess,
    [PTOHRACTIONNOTIFICATION_FAILURE]: PtoHrActionNotificationFailure,

    [PTOMANAGERACTIONNOTIFICATION_STARTED]: PtoManagerActionNotificationStarted,
    [PTOMANAGERACTIONNOTIFICATION_SUCCESS]: PtoManagerActionNotificationSuccess,
    [PTOMANAGERACTIONNOTIFICATION_FAILURE]: PtoManagerActionNotificationFailure,

    [CALLINSICKHRACTIONNOTIFICATION_STARTED]: CallinSickHrActionNotificationStarted,
    [CALLINSICKHRACTIONNOTIFICATION_SUCCESS]: CallinSickHrActionNotificationSuccess,
    [CALLINSICKHRACTIONNOTIFICATION_FAILURE]: CallinSickHrActionNotificationFailure,

    [MANAGERACTIONCALLINSICK_STARTED]: ManagerActionCallinSickStarted,
    [MANAGERACTIONCALLINSICK_SUCCESS]: ManagerActionCallinSickSuccess,
    [MANAGERACTIONCALLINSICK_FAILURE]: ManagerActionCallinSickFailure,

    [SENDRUNNINGLATENOTIFICATION_STARTED]: SendRunningLateNotificationStarted,
    [SENDRUNNINGLATENOTIFICATION_SUCCESS]: SendRunningLateNotificationSuccess,
    [SENDRUNNINGLATENOTIFICATION_FAILURE]: SendRunningLateNotificationFailure,

    [SWITCHSHIFTSTATUSSALESPERSON_STARTED]: SwitchShiftStatusSalesPersonStarted,
    [SWITCHSHIFTSTATUSSALESPERSON_SUCCESS]: SwitchShiftStatusSalesPersonSuccess,
    [SWITCHSHIFTSTATUSSALESPERSON_FAILURE]: SwitchShiftStatusSalesPersonFailure,

    [MGRSTATUSFORSWITCHSHIFT_STARTED]: MngrStatusForSwitchShiftStarted,
    [MGRSTATUSFORSWITCHSHIFT_SUCCESS]: MngrStatusForSwitchShiftSuccess,
    [MGRSTATUSFORSWITCHSHIFT_FAILURE]: MngrStatusForSwitchShiftFailure,

    [SHIFTCVRGREQUSTTOSALESPERSON_STARTED]: ShiftCvrgeRqustToSalesPrsnStarted,
    [SHIFTCVRGREQUSTTOSALESPERSON_SUCCESS]: ShiftCvrgeRqustToSalesPrsnSuccess,
    [SHIFTCVRGREQUSTTOSALESPERSON_FAILURE]: ShiftCvrgeRqustToSalesPrsnFailure,

    [SHIFTCVRGSTATUSSALESPERSON_STARTED]: ShiftCvrgStatusSalesPersonStarted,
    [SHIFTCVRGSTATUSSALESPERSON_SUCCESS]: ShiftCvrgStatusSalesPersonSuccess,
    [SHIFTCVRGSTATUSSALESPERSON_FAILURE]: ShiftCvrgStatusSalesPersonFailure,

    [MGRSTATUSFORSHIFTCVRGE_STARTED]: MgrStatusForShiftCvrgeStarted,
    [MGRSTATUSFORSHIFTCVRGE_SUCCESS]: MgrStatusForShiftCvrgeSuccess,
    [MGRSTATUSFORSHIFTCVRGE_FAILURE]: MgrStatusForShiftCvrgeFailure,

    [RUNINGLATENOTIFICATIONACTIONBYMANAGER_STARTED]: RunningLateNotificationActionByManagerStarted,
    [RUNINGLATENOTIFICATIONACTIONBYMANAGER_SUCCESS]: RunningLateNotificationActionByManagerSuccess,
    [RUNINGLATENOTIFICATIONACTIONBYMANAGER_FAILURE]: RunningLateNotificationActionByManagerFailure,

    [MANAGEMENTNTFCTIONACKLDGE_STARTED]: ManagementNtfctionAckldgeStarted,
    [MANAGEMENTNTFCTIONACKLDGE_SUCCESS]: ManagementNtfctionAckldgeSuccess,
    [MANAGEMENTNTFCTIONACKLDGE_FAILURE]: ManagementNtfctionAckldgeFailure,

    [SENDVCARD_STARTED]: SendVcardStarted,
    [SENDVCARD_SUCCESS]: SendVcardSuccess,
    [SENDVCARD_FAILURE]: SendVcardFailure,

    [COMPOSITELEADERBOARDYTD_STARTED]: CompositeLeaderboardYtdStarted,
    [COMPOSITELEADERBOARDYTD_SUCCESS]: CompositeLeaderboardYtdSuccess,
    [COMPOSITELEADERBOARDYTD_FAILURE]: CompositeLeaderboardYtdFailure,

    [TERMSNCONDITIONEMAIL_STARTED]: TermnconditionEmailStarted,
    [TERMSNCONDITIONEMAIL_SUCCESS]: TermnconditionEmailSuccess,
    [TERMSNCONDITIONEMAIL_FAILURE]: TermnconditionEmailFailure,

    [YTDTEAMLEADERBOARD_STARTED]: YtdTeamLeaderboardStarted,
    [YTDTEAMLEADERBOARD_SUCCESS]: YtdTeamLeaderboardSuccess,
    [YTDTEAMLEADERBOARD_FAILURE]: YtdTeamLeaderboardFailure,

    [SENDMESSAGE_STARTED]: SendMessageStarted,
    [SENDMESSAGE_SUCCESS]: SendMessageSuccess,
    [SENDMESSAGE_FAILURE]: SendMessageFailure,

    [GETMESSAGE_STARTED]: GetMessageStarted,
    [GETMESSAGE_SUCCESS]: GetMessageSuccess,
    [GETMESSAGE_FAILURE]: GetMessageFailure,

    [LOGOUTURL_STARTED]: LogoutUrlStarted,
    [LOGOUTURL_SUCCESS]: LogoutUrlSuccess,
    [LOGOUTURL_FAILURE]: LogoutUrlFailure,

    [SOSNOTIFICATION_STARTED]: SosNotificationStarted,
    [SOSNOTIFICATION_SUCCESS]: SosNotificationSuccess,
    [SOSNOTIFICATION_FAILURE]: SosNotificationFailure,

    [YTDCOMPOSITESCORE_STARTED]: YtdCompositeScoreStarted,
    [YTDCOMPOSITESCORE_SUCCESS]: YtdCompositeScoreSuccess,
    [YTDCOMPOSITESCORE_FAILURE]: YtdCompositeScoreFailure,

    [CHANGEPASSWORD_STARTED]: changePasswordStarted,
    [CHANGEPASSWORD_SUCCESS]: changePasswordSuccess,
    [CHANGEPASSWORD_FAILURE]: changePasswordFailure,

    [NOTIFICATIONHISTORY_STARTED]: notificationHistoryStarted,
    [NOTIFICATIONHISTORY_SUCCESS]: notificationHistorySuccess,
    [NOTIFICATIONHISTORY_FAILURE]: notificationHistoryFailure,

    [SUPPORT_STARTED]: supportStarted,
    [SUPPORT_SUCCESS]: supportSuccess,
    [SUPPORT_FAILURE]: supportFailure,

    [MANAGEMENTNOTIFICATIONLIST_STARTED]: managementnotificationlistStarted,
    [MANAGEMENTNOTIFICATIONLIST_SUCCESS]: managementnotificationlistSuccess,
    [MANAGEMENTNOTIFICATIONLIST_FAILURE]: managementnotificationlistFailure,

    [MANAGERGAMESDETAILS_STARTED]: managergamesdetailsStarted,
    [MANAGERGAMESDETAILS_SUCCESS]: managergamesdetailsSuccess,
    [MANAGERGAMESDETAILS_FAILURE]: managergamesdetailsFailure,

    [ORDERDETAILS_STARTED]: orderdetailsStarted,
    [ORDERDETAILS_SUCCESS]: orderdetailsSuccess,
    [ORDERDETAILS_FAILURE]: orderdetailsFailure,

    [ORDERUPDATE_STARTED]: orderupdateStarted,
    [ORDERUPDATE_SUCCESS]: orderupdateSuccess,
    [ORDERUPDATE_FAILURE]: orderupdateFailure,

});

export default appReducer;
