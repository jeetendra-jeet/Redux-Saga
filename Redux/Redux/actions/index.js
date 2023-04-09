/* eslint-disable prettier/prettier */
import {
    LOGIN_STARTED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    SIGNUP_STARTED,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,

    GETPROFILE_STARTED,
    GETPROFILE_REQUEST,
    GETPROFILE_SUCCESS,
    GETPROFILE_FAILURE,

    GETBROADCASTMESSAGES_STARTED,
    GETBROADCASTMESSAGES_REQUEST,
    GETBROADCASTMESSAGES_SUCCESS,
    GETBROADCASTMESSAGES_FAILURE,

    GETCONTACTS_STARTED,
    GETCONTACTS_REQUEST,
    GETCONTACTS_SUCCESS,
    GETCONTACTS_FAILURE,

    UPDATEPROFILE_STARTED,
    UPDATEPROFILE_REQUEST,
    UPDATEPROFILE_SUCCESS,
    UPDATEPROFILE_FAILURE,

    ADDFAVOURITE_STARTED,
    ADDFAVOURITE_REQUEST,
    ADDFAVOURITE_SUCCESS,
    ADDFAVOURITE_FAILURE,

    RECENTCONTACT_STARTED,
    RECENTCONTACT_REQUEST,
    RECENTCONTACT_SUCCESS,
    RECENTCONTACT_FAILURE,

    ACHIEVEMENTS_STARTED,
    ACHIEVEMENTS_REQUEST,
    ACHIEVEMENTS_SUCCESS,
    ACHIEVEMENTS_FAILURE,

    MYGAMES_STARTED,
    MYGAMES_REQUEST,
    MYGAMES_SUCCESS,
    MYGAMES_FAILURE,

    CREATEWORKINGDEAL_STARTED,
    CREATEWORKINGDEAL_REQUEST,
    CREATEWORKINGDEAL_SUCCESS,
    CREATEWORKINGDEAL_FAILURE,

    WORKINGDEALLIST_STARTED,
    WORKINGDEALLIST_REQUEST,
    WORKINGDEALLIST_SUCCESS,
    WORKINGDEALLIST_FAILURE,

    WORKINGDEALUPDATE_STARTED,
    WORKINGDEALUPDATE_REQUEST,
    WORKINGDEALUPDATE_SUCCESS,
    WORKINGDEALUPDATE_FAILURE,

    WORKINGDEALDELETE_STARTED,
    WORKINGDEALDELETE_REQUEST,
    WORKINGDEALDELETE_SUCCESS,
    WORKINGDEALDELETE_FAILURE,

    TERMSCONDITION_REQUEST,
    TERMSCONDITION_SUCCESS,
    TERMSCONDITION_STARTED,
    TERMSCONDITION_FAILURE,

    MTDBOOKINGDETAILS_REQUEST,
    MTDBOOKINGDETAILS_SUCCESS,
    MTDBOOKINGDETAILS_STARTED,
    MTDBOOKINGDETAILS_FAILURE,

    MTDTOTAL_REQUEST,
    MTDTOTAL_SUCCESS,
    MTDTOTAL_STARTED,
    MTDTOTAL_FAILURE,

    MTDBOOKED_REQUEST,
    MTDBOOKED_SUCCESS,
    MTDBOOKED_STARTED,
    MTDBOOKED_FAILURE,

    MTDFINALIZED_REQUEST,
    MTDFINALIZED_SUCCESS,
    MTDFINALIZED_STARTED,
    MTDFINALIZED_FAILURE,

    STIPSNEEDED_REQUEST,
    STIPSNEEDED_SUCCESS,
    STIPSNEEDED_STARTED,
    STIPSNEEDED_FAILURE,

    UPDATESTIPSSTATUS_REQUEST,
    UPDATESTIPSSTATUS_SUCCESS,
    UPDATESTIPSSTATUS_STARTED,
    UPDATESTIPSSTATUS_FAILURE,

    MONTHLYLEADERBOARD_REQUEST,
    MONTHLYLEADERBOARD_SUCCESS,
    MONTHLYLEADERBOARD_STARTED,
    MONTHLYLEADERBOARD_FAILURE,

    MYSCHEDULE_REQUEST,
    MYSCHEDULE_SUCCESS,
    MYSCHEDULE_STARTED,
    MYSCHEDULE_FAILURE,

    COMPOSITESCORE_REQUEST,
    COMPOSITESCORE_SUCCESS,
    COMPOSITESCORE_STARTED,
    COMPOSITESCORE_FAILURE,

    COMPOSITELEADERBOARD_REQUEST,
    COMPOSITELEADERBOARD_SUCCESS,
    COMPOSITELEADERBOARD_STARTED,
    COMPOSITELEADERBOARD_FAILURE,

    CHANGEREQUEST_REQUEST,
    CHANGEREQUEST_SUCCESS,
    CHANGEREQUEST_STARTED,
    CHANGEREQUEST_FAILURE,

    DEALERSHIPSALES_REQUEST,
    DEALERSHIPSALES_SUCCESS,
    DEALERSHIPSALES_STARTED,
    DEALERSHIPSALES_FAILURE,

    MYSALES_REQUEST,
    MYSALES_SUCCESS,
    MYSALES_STARTED,
    MYSALES_FAILURE,

    TEAMLEADERBOARD_REQUEST,
    TEAMLEADERBOARD_SUCCESS,
    TEAMLEADERBOARD_STARTED,
    TEAMLEADERBOARD_FAILURE,

    DISPLAYTEAMEMPLOYEE_REQUEST,
    DISPLAYTEAMEMPLOYEE_SUCCESS,
    DISPLAYTEAMEMPLOYEE_STARTED,
    DISPLAYTEAMEMPLOYEE_FAILURE,

    YTDLEADERBOARD_REQUEST,
    YTDLEADERBOARD_SUCCESS,
    YTDLEADERBOARD_STARTED,
    YTDLEADERBOARD_FAILURE,

    CORPORATEUSERHOMEPAGE_REQUEST,
    CORPORATEUSERHOMEPAGE_SUCCESS,
    CORPORATEUSERHOMEPAGE_STARTED,
    CORPORATEUSERHOMEPAGE_FAILURE,

    CORPORATEMONTHLYLEADERBOARD_REQUEST,
    CORPORATEMONTHLYLEADERBOARD_SUCCESS,
    CORPORATEMONTHLYLEADERBOARD_STARTED,
    CORPORATEMONTHLYLEADERBOARD_FAILURE,

    SALESPERSONHOMEPAGE_REQUEST,
    SALESPERSONHOMEPAGE_SUCCESS,
    SALESPERSONHOMEPAGE_STARTED,
    SALESPERSONHOMEPAGE_FAILURE,

    SOURCETYPEGET_REQUEST,
    SOURCETYPEGET_SUCCESS,
    SOURCETYPEGET_STARTED,
    SOURCETYPEGET_FAILURE,

    CALENDERSCHEDULE_REQUEST,
    CALENDERSCHEDULE_SUCCESS,
    CALENDERSCHEDULE_STARTED,
    CALENDERSCHEDULE_FAILURE,

    USERTRACKING_REQUEST,
    USERTRACKING_SUCCESS,
    USERTRACKING_STARTED,
    USERTRACKING_FAILURE,

    CREATEGEOFENCE_REQUEST,
    CREATEGEOFENCE_SUCCESS,
    CREATEGEOFENCE_STARTED,
    CREATEGEOFENCE_FAILURE,

    USERSEARCH_REQUEST,
    USERSEARCH_SUCCESS,
    USERSEARCH_STARTED,
    USERSEARCH_FAILURE,

    UPBOARD_REQUEST,
    UPBOARD_SUCCESS,
    UPBOARD_STARTED,
    UPBOARD_FAILURE,

    UPDATE_UPBOARD_REQUEST,
    UPDATE_UPBOARD_SUCCESS,
    UPDATE_UPBOARD_STARTED,
    UPDATE_UPBOARD_FAILURE,

    UPBOARDNOTUP_REQUEST,
    UPBOARDNOTUP_SUCCESS,
    UPBOARDNOTUP_STARTED,
    UPBOARDNOTUP_FAILURE,

    NOTIFYUSER_REQUEST,
    NOTIFYUSER_SUCCESS,
    NOTIFYUSER_STARTED,
    NOTIFYUSER_FAILURE,

    SWITCHSHIFT_REQUEST,
    SWITCHSHIFT_SUCCESS,
    SWITCHSHIFT_STARTED,
    SWITCHSHIFT_FAILURE,

    SCHEDULECHANGE_REQUEST,
    SCHEDULECHANGE_SUCCESS,
    SCHEDULECHANGE_STARTED,
    SCHEDULECHANGE_FAILURE,

    SENDSWITCHNOTIFICATION_REQUEST,
    SENDSWITCHNOTIFICATION_SUCCESS,
    SENDSWITCHNOTIFICATION_STARTED,
    SENDSWITCHNOTIFICATION_FAILURE,

    NOTIFICATIONLIST_REQUEST,
    NOTIFICATIONLIST_SUCCESS,
    NOTIFICATIONLIST_STARTED,
    NOTIFICATIONLIST_FAILURE,

    ACTIVEGAMES_REQUEST,
    ACTIVEGAMES_SUCCESS,
    ACTIVEGAMES_STARTED,
    ACTIVEGAMES_FAILURE,

    TOTALSALESPERSON_REQUEST,
    TOTALSALESPERSON_SUCCESS,
    TOTALSALESPERSON_STARTED,
    TOTALSALESPERSON_FAILURE,

    MANAGEMENTNOTIFICATION_REQUEST,
    MANAGEMENTNOTIFICATION_SUCCESS,
    MANAGEMENTNOTIFICATION_STARTED,
    MANAGEMENTNOTIFICATION_FAILURE,

    GAMEPLAY_REQUEST,
    GAMEPLAY_SUCCESS,
    GAMEPLAY_STARTED,
    GAMEPLAY_FAILURE,

    GAMEPRIZE_REQUEST,
    GAMEPRIZE_SUCCESS,
    GAMEPRIZE_STARTED,
    GAMEPRIZE_FAILURE,

    GAMEWINNER_REQUEST,
    GAMEWINNER_SUCCESS,
    GAMEWINNER_STARTED,
    GAMEWINNER_FAILURE,

    REQUESTPTONOTIFICATION_REQUEST,
    REQUESTPTONOTIFICATION_SUCCESS,
    REQUESTPTONOTIFICATION_STARTED,
    REQUESTPTONOTIFICATION_FAILURE,

    CALLINSICKHRNOTIFICATION_REQUEST,
    CALLINSICKHRNOTIFICATION_SUCCESS,
    CALLINSICKHRNOTIFICATION_STARTED,
    CALLINSICKHRNOTIFICATION_FAILURE,

    COVERSHIFTNOTIFICATION_REQUEST,
    COVERSHIFTNOTIFICATION_SUCCESS,
    COVERSHIFTNOTIFICATION_STARTED,
    COVERSHIFTNOTIFICATION_FAILURE,

    PTOHRACTIONNOTIFICATION_REQUEST,
    PTOHRACTIONNOTIFICATION_SUCCESS,
    PTOHRACTIONNOTIFICATION_STARTED,
    PTOHRACTIONNOTIFICATION_FAILURE,

    PTOMANAGERACTIONNOTIFICATION_REQUEST,
    PTOMANAGERACTIONNOTIFICATION_SUCCESS,
    PTOMANAGERACTIONNOTIFICATION_STARTED,
    PTOMANAGERACTIONNOTIFICATION_FAILURE,

    CALLINSICKHRACTIONNOTIFICATION_REQUEST,
    CALLINSICKHRACTIONNOTIFICATION_SUCCESS,
    CALLINSICKHRACTIONNOTIFICATION_STARTED,
    CALLINSICKHRACTIONNOTIFICATION_FAILURE,

    MANAGERACTIONCALLINSICK_REQUEST,
    MANAGERACTIONCALLINSICK_SUCCESS,
    MANAGERACTIONCALLINSICK_STARTED,
    MANAGERACTIONCALLINSICK_FAILURE,

    SENDRUNNINGLATENOTIFICATION_REQUEST,
    SENDRUNNINGLATENOTIFICATION_SUCCESS,
    SENDRUNNINGLATENOTIFICATION_STARTED,
    SENDRUNNINGLATENOTIFICATION_FAILURE,

    SWITCHSHIFTSTATUSSALESPERSON_REQUEST,
    SWITCHSHIFTSTATUSSALESPERSON_SUCCESS,
    SWITCHSHIFTSTATUSSALESPERSON_STARTED,
    SWITCHSHIFTSTATUSSALESPERSON_FAILURE,

    MGRSTATUSFORSWITCHSHIFT_REQUEST,
    MGRSTATUSFORSWITCHSHIFT_SUCCESS,
    MGRSTATUSFORSWITCHSHIFT_STARTED,
    MGRSTATUSFORSWITCHSHIFT_FAILURE,

    SHIFTCVRGREQUSTTOSALESPERSON_REQUEST,
    SHIFTCVRGREQUSTTOSALESPERSON_SUCCESS,
    SHIFTCVRGREQUSTTOSALESPERSON_STARTED,
    SHIFTCVRGREQUSTTOSALESPERSON_FAILURE,

    SHIFTCVRGSTATUSSALESPERSON_REQUEST,
    SHIFTCVRGSTATUSSALESPERSON_SUCCESS,
    SHIFTCVRGSTATUSSALESPERSON_STARTED,
    SHIFTCVRGSTATUSSALESPERSON_FAILURE,

    MGRSTATUSFORSHIFTCVRGE_REQUEST,
    MGRSTATUSFORSHIFTCVRGE_SUCCESS,
    MGRSTATUSFORSHIFTCVRGE_STARTED,
    MGRSTATUSFORSHIFTCVRGE_FAILURE,

    RUNINGLATENOTIFICATIONACTIONBYMANAGER_REQUEST,
    RUNINGLATENOTIFICATIONACTIONBYMANAGER_SUCCESS,
    RUNINGLATENOTIFICATIONACTIONBYMANAGER_STARTED,
    RUNINGLATENOTIFICATIONACTIONBYMANAGER_FAILURE,

    MANAGEMENTNTFCTIONACKLDGE_REQUEST,
    MANAGEMENTNTFCTIONACKLDGE_SUCCESS,
    MANAGEMENTNTFCTIONACKLDGE_STARTED,
    MANAGEMENTNTFCTIONACKLDGE_FAILURE,

    SENDVCARD_REQUEST,
    SENDVCARD_SUCCESS,
    SENDVCARD_STARTED,
    SENDVCARD_FAILURE,

    COMPOSITELEADERBOARDYTD_REQUEST,
    COMPOSITELEADERBOARDYTD_SUCCESS,
    COMPOSITELEADERBOARDYTD_STARTED,
    COMPOSITELEADERBOARDYTD_FAILURE,

    TERMSNCONDITIONEMAIL_REQUEST,
    TERMSNCONDITIONEMAIL_SUCCESS,
    TERMSNCONDITIONEMAIL_STARTED,
    TERMSNCONDITIONEMAIL_FAILURE,

    YTDTEAMLEADERBOARD_REQUEST,
    YTDTEAMLEADERBOARD_SUCCESS,
    YTDTEAMLEADERBOARD_STARTED,
    YTDTEAMLEADERBOARD_FAILURE,

    SENDMESSAGE_REQUEST,
    SENDMESSAGE_SUCCESS,
    SENDMESSAGE_STARTED,
    SENDMESSAGE_FAILURE,

    GETMESSAGE_REQUEST,
    GETMESSAGE_SUCCESS,
    GETMESSAGE_STARTED,
    GETMESSAGE_FAILURE,

    LOGOUTURL_REQUEST,
    LOGOUTURL_SUCCESS,
    LOGOUTURL_STARTED,
    LOGOUTURL_FAILURE,

    SOSNOTIFICATION_REQUEST,
    SOSNOTIFICATION_SUCCESS,
    SOSNOTIFICATION_STARTED,
    SOSNOTIFICATION_FAILURE,

    YTDCOMPOSITESCORE_REQUEST,
    YTDCOMPOSITESCORE_SUCCESS,
    YTDCOMPOSITESCORE_STARTED,
    YTDCOMPOSITESCORE_FAILURE,

    CHANGEPASSWORD_REQUEST,
    CHANGEPASSWORD_SUCCESS,
    CHANGEPASSWORD_STARTED,
    CHANGEPASSWORD_FAILURE,

    NOTIFICATIONHISTORY_REQUEST,
    NOTIFICATIONHISTORY_SUCCESS,
    NOTIFICATIONHISTORY_STARTED,
    NOTIFICATIONHISTORY_FAILURE,

    SUPPORT_REQUEST,
    SUPPORT_SUCCESS,
    SUPPORT_STARTED,
    SUPPORT_FAILURE,

    MANAGEMENTNOTIFICATIONLIST_REQUEST,
    MANAGEMENTNOTIFICATIONLIST_SUCCESS,
    MANAGEMENTNOTIFICATIONLIST_STARTED,
    MANAGEMENTNOTIFICATIONLIST_FAILURE,

    MANAGERGAMESDETAILS_REQUEST,
    MANAGERGAMESDETAILS_SUCCESS,
    MANAGERGAMESDETAILS_STARTED,
    MANAGERGAMESDETAILS_FAILURE,

    ORDERDETAILS_REQUEST,
    ORDERDETAILS_SUCCESS,
    ORDERDETAILS_STARTED,
    ORDERDETAILS_FAILURE,

    ORDERUPDATE_REQUEST,
    ORDERUPDATE_SUCCESS,
    ORDERUPDATE_STARTED,
    ORDERUPDATE_FAILURE,
} from '../constant/actionTypes';

import { createAction } from '../utils/reduxUtils';

// login action method
export const loginRequest = (requestBody) => createAction(LOGIN_REQUEST, { requestBody });
export const loginStarted = () => createAction(LOGIN_STARTED);
export const loginSuccess = (response) => createAction(LOGIN_SUCCESS, { response });
export const loginFailure = () => createAction(LOGIN_FAILURE);

// getProfile action method
export const getProfileRequest = (requestBody) => createAction(GETPROFILE_REQUEST, { requestBody });
export const getProfileStarted = () => createAction(GETPROFILE_STARTED);
export const getProfileSuccess = (response) => createAction(GETPROFILE_SUCCESS, { response });
export const getProfileFailure = () => createAction(GETPROFILE_FAILURE);

// getBroadcastMessages action method
export const getBroadcastMessagesRequest = (requestBody) => createAction(GETBROADCASTMESSAGES_REQUEST, { requestBody });
export const getBroadcastMessagesStarted = () => createAction(GETBROADCASTMESSAGES_STARTED);
export const getBroadcastMessagesSuccess = (response) => createAction(GETBROADCASTMESSAGES_SUCCESS, { response });
export const getBroadcastMessagesFailure = () => createAction(GETBROADCASTMESSAGES_FAILURE);

// getContacts action method
export const getContactsRequest = (requestBody) => createAction(GETCONTACTS_REQUEST, { requestBody });
export const getContactsStarted = () => createAction(GETCONTACTS_STARTED);
export const getContactsSuccess = (response) => createAction(GETCONTACTS_SUCCESS, { response });
export const getContactsFailure = () => createAction(GETCONTACTS_FAILURE);

// updateProfile action method
export const updateProfileRequest = (requestBody) => createAction(UPDATEPROFILE_REQUEST, { requestBody });
export const updateProfileStarted = () => createAction(UPDATEPROFILE_STARTED);
export const updateProfileSuccess = (response) => createAction(UPDATEPROFILE_SUCCESS, { response });
export const updateProfileFailure = () => createAction(UPDATEPROFILE_FAILURE);

// Add Favourite contacts action method
export const addFavouriteRequest = (requestBody) => createAction(ADDFAVOURITE_REQUEST, { requestBody });
export const addFavouriteStarted = () => createAction(ADDFAVOURITE_STARTED);
export const addFavouriteSuccess = (response) => createAction(ADDFAVOURITE_SUCCESS, { response });
export const addFavouriteFailure = () => createAction(ADDFAVOURITE_FAILURE);

// Get Recent contacts action method
export const getRecentContactRequest = (requestBody) => createAction(RECENTCONTACT_REQUEST, { requestBody });
export const getRecentContactStarted = () => createAction(RECENTCONTACT_STARTED);
export const getRecentContactSuccess = (response) => createAction(RECENTCONTACT_SUCCESS, { response });
export const getRecentContactFailure = () => createAction(RECENTCONTACT_FAILURE);

// Signup action method
export const signupRequest = (requestBody) => createAction(SIGNUP_REQUEST, { requestBody });
export const signupStarted = () => createAction(SIGNUP_STARTED);
export const signupSuccess = (response) => createAction(SIGNUP_SUCCESS, { response });
export const signupFailure = () => createAction(SIGNUP_FAILURE);

// Achievement action method
export const achievementRequest = (requestBody) => createAction(ACHIEVEMENTS_REQUEST, { requestBody });
export const achievementStarted = () => createAction(ACHIEVEMENTS_STARTED);
export const achievementSuccess = (response) => createAction(ACHIEVEMENTS_SUCCESS, { response });
export const achievementFailure = () => createAction(ACHIEVEMENTS_FAILURE);

// MyGames action method
export const myGamesRequest = (requestBody) => createAction(MYGAMES_REQUEST, { requestBody });
export const myGamesStarted = () => createAction(MYGAMES_STARTED);
export const myGamesSuccess = (response) => createAction(MYGAMES_SUCCESS, { response });
export const myGamesFailure = () => createAction(MYGAMES_FAILURE);

// CreateWorkingDeal action method
export const createWorkingDealRequest = (requestBody) => createAction(CREATEWORKINGDEAL_REQUEST, { requestBody });
export const createWorkingDealStarted = () => createAction(CREATEWORKINGDEAL_STARTED);
export const createWorkingDealSuccess = (response) => createAction(CREATEWORKINGDEAL_SUCCESS, { response });
export const createWorkingDealFailure = () => createAction(CREATEWORKINGDEAL_FAILURE);

// WorkingDealList action method
export const workingDealListRequest = (requestBody) => createAction(WORKINGDEALLIST_REQUEST, { requestBody });
export const workingDealListStarted = () => createAction(WORKINGDEALLIST_STARTED);
export const workingDealListSuccess = (response) => createAction(WORKINGDEALLIST_SUCCESS, { response });
export const workingDealListFailure = () => createAction(WORKINGDEALLIST_FAILURE);

// workingDealUpadte action method
export const workingDealUpdateRequest = (requestBody) => createAction(WORKINGDEALUPDATE_REQUEST, { requestBody });
export const workingDealUpdateStarted = () => createAction(WORKINGDEALUPDATE_STARTED);
export const workingDealUpdateSuccess = (response) => createAction(WORKINGDEALUPDATE_SUCCESS, { response });
export const workingDealUpdateFailure = () => createAction(WORKINGDEALUPDATE_FAILURE);

// workingDealDelete action method
export const workingDealDeleteRequest = (requestBody) => createAction(WORKINGDEALDELETE_REQUEST, { requestBody });
export const workingDealDeleteStarted = () => createAction(WORKINGDEALDELETE_STARTED);
export const workingDealDeleteSuccess = (response) => createAction(WORKINGDEALDELETE_SUCCESS, { response });
export const workingDealDeleteFailure = () => createAction(WORKINGDEALDELETE_FAILURE);

//TermsCondition action method
export const termsConditionRequest = (requestBody) => createAction(TERMSCONDITION_REQUEST, { requestBody });
export const termsConditionStarted = () => createAction(TERMSCONDITION_STARTED);
export const termsConditionSuccess = (response) => createAction(TERMSCONDITION_SUCCESS, { response });
export const termsConditionFailure = () => createAction(TERMSCONDITION_FAILURE);

//MTD Booking Deatails
export const mtdBookingDetailsRequest = (requestBody) => createAction(MTDBOOKINGDETAILS_REQUEST, { requestBody });
export const mtdBookingDetailsStarted = () => createAction(MTDBOOKINGDETAILS_STARTED);
export const mtdBookingDetailsSuccess = (response) => createAction(MTDBOOKINGDETAILS_SUCCESS, { response });
export const mtdBookingDetailsFailure = () => createAction(MTDBOOKINGDETAILS_FAILURE);

// MTD Total
export const mtdTotalRequest = (requestBody) => createAction(MTDTOTAL_REQUEST, { requestBody });
export const mtdTotalStarted = () => createAction(MTDTOTAL_STARTED);
export const mtdTotalSuccess = (response) => createAction(MTDTOTAL_SUCCESS, { response });
export const mtdTotalFailure = () => createAction(MTDTOTAL_FAILURE);

// MTD Booked
export const mtdBookedRequest = (requestBody) => createAction(MTDBOOKED_REQUEST, { requestBody });
export const mtdBookedStarted = () => createAction(MTDBOOKED_STARTED);
export const mtdBookedSuccess = (response) => createAction(MTDBOOKED_SUCCESS, { response });
export const mtdBookedFailure = () => createAction(MTDBOOKED_FAILURE);

// MTD Finalized
export const mtdFinalizedRequest = (requestBody) => createAction(MTDFINALIZED_REQUEST, { requestBody });
export const mtdFinalizedStarted = () => createAction(MTDFINALIZED_STARTED);
export const mtdFinalizedSuccess = (response) => createAction(MTDFINALIZED_SUCCESS, { response });
export const mtdFinalizedFailure = () => createAction(MTDFINALIZED_FAILURE);

// MTD Stips Needed
export const stipsNeededRequest = (requestBody) => createAction(STIPSNEEDED_REQUEST, { requestBody });
export const stipsNeededStarted = () => createAction(STIPSNEEDED_STARTED);
export const stipsNeededSuccess = (response) => createAction(STIPSNEEDED_SUCCESS, { response });
export const stipsNeededFailure = () => createAction(STIPSNEEDED_FAILURE);

// Update Stips Status
export const updateStipsStatusRequest = (requestBody) => createAction(UPDATESTIPSSTATUS_REQUEST, { requestBody });
export const updateStipsStatusStarted = () => createAction(UPDATESTIPSSTATUS_STARTED);
export const updateStipsStatusSuccess = (response) => createAction(UPDATESTIPSSTATUS_SUCCESS, { response });
export const updateStipsStatusFailure = () => createAction(UPDATESTIPSSTATUS_FAILURE);

//Monthy leaderboard
export const monthlyLeaderboardRequest = (requestBody) => createAction(MONTHLYLEADERBOARD_REQUEST, { requestBody });
export const monthlyLeaderboardStarted = () => createAction(MONTHLYLEADERBOARD_STARTED);
export const monthlyLeaderboardSuccess = (response) => createAction(MONTHLYLEADERBOARD_SUCCESS, { response });
export const monthlyLeaderboardFailure = () => createAction(MONTHLYLEADERBOARD_FAILURE);

//my Schedule
export const myScheduleRequest = (requestBody) => createAction(MYSCHEDULE_REQUEST, { requestBody });
export const myScheduleStarted = () => createAction(MYSCHEDULE_STARTED);
export const myScheduleSuccess = (response) => createAction(MYSCHEDULE_SUCCESS, { response });
export const myScheduleFailure = () => createAction(MYSCHEDULE_FAILURE);


//  composite Score
export const compositeScoreRequest = (requestBody) => createAction(COMPOSITESCORE_REQUEST, { requestBody });
export const compositeScoreStarted = () => createAction(COMPOSITESCORE_STARTED);
export const compositeScoreSuccess = (response) => createAction(COMPOSITESCORE_SUCCESS, { response });
export const compositeScoreFailure = () => createAction(COMPOSITESCORE_FAILURE);

//  composite Leaderboard
export const compositeLeaderboardRequest = (requestBody) => createAction(COMPOSITELEADERBOARD_REQUEST, { requestBody });
export const compositeLeaderboardStarted = () => createAction(COMPOSITELEADERBOARD_STARTED);
export const compositeLeaderboardSuccess = (response) => createAction(COMPOSITELEADERBOARD_SUCCESS, { response });
export const compositeLeaderboardFailure = () => createAction(COMPOSITELEADERBOARD_FAILURE);

//  Change request popup
export const changeRequestRequest = (requestBody) => createAction(CHANGEREQUEST_REQUEST, { requestBody });
export const changeRequestStarted = () => createAction(CHANGEREQUEST_STARTED);
export const changeRequestSuccess = (response) => createAction(CHANGEREQUEST_SUCCESS, { response });
export const changeRequestFailure = () => createAction(CHANGEREQUEST_FAILURE);

//  Dealership Sales
export const dealershipSalesRequest = (requestBody) => createAction(DEALERSHIPSALES_REQUEST, { requestBody });
export const dealershipSalesStarted = () => createAction(DEALERSHIPSALES_STARTED);
export const dealershipSalesSuccess = (response) => createAction(DEALERSHIPSALES_SUCCESS, { response });
export const dealershipSalesFailure = () => createAction(DEALERSHIPSALES_FAILURE);


//  My Sales
export const mySalesRequest = (requestBody) => createAction(MYSALES_REQUEST, { requestBody });
export const mySalesStarted = () => createAction(MYSALES_STARTED);
export const mySalesSuccess = (response) => createAction(MYSALES_SUCCESS, { response });
export const mySalesFailure = () => createAction(MYSALES_FAILURE);

// team leaderboard
export const teamLeaderboardRequest = (requestBody) => createAction(TEAMLEADERBOARD_REQUEST, { requestBody });
export const teamLeaderboardStarted = () => createAction(TEAMLEADERBOARD_STARTED);
export const teamLeaderboardSuccess = (response) => createAction(TEAMLEADERBOARD_SUCCESS, { response });
export const teamLeaderboardFailure = () => createAction(TEAMLEADERBOARD_FAILURE);

//  display team employee
export const displayTeamEmployeeRequest = (requestBody) => createAction(DISPLAYTEAMEMPLOYEE_REQUEST, { requestBody });
export const displayTeamEmployeeStarted = () => createAction(DISPLAYTEAMEMPLOYEE_STARTED);
export const displayTeamEmployeeSuccess = (response) => createAction(DISPLAYTEAMEMPLOYEE_SUCCESS, { response });
export const displayTeamEmployeeFailure = () => createAction(DISPLAYTEAMEMPLOYEE_FAILURE);

//  YTD Leaderboard
export const ytdLeaderboardRequest = (requestBody) => createAction(YTDLEADERBOARD_REQUEST, { requestBody });
export const ytdLeaderboardStarted = () => createAction(YTDLEADERBOARD_STARTED);
export const ytdLeaderboardSuccess = (response) => createAction(YTDLEADERBOARD_SUCCESS, { response });
export const ytdLeaderboardFailure = () => createAction(YTDLEADERBOARD_FAILURE);


//  Corporate user homepage
export const corporateUserHomePageRequest = (requestBody) => createAction(CORPORATEUSERHOMEPAGE_REQUEST, { requestBody });
export const corporateUserHomePageStarted = () => createAction(CORPORATEUSERHOMEPAGE_STARTED);
export const corporateUserHomePageSuccess = (response) => createAction(CORPORATEUSERHOMEPAGE_SUCCESS, { response });
export const corporateUserHomePageFailure = () => createAction(CORPORATEUSERHOMEPAGE_FAILURE);

//  Corporate Leaderboard
export const corporateMonthlyLeaderboardRequest = (requestBody) => createAction(CORPORATEMONTHLYLEADERBOARD_REQUEST, { requestBody });
export const corporateMonthlyLeaderboardStarted = () => createAction(CORPORATEMONTHLYLEADERBOARD_STARTED);
export const corporateMonthlyLeaderboardSuccess = (response) => createAction(CORPORATEMONTHLYLEADERBOARD_SUCCESS, { response });
export const corporateMonthlyLeaderboardFailure = () => createAction(CORPORATEMONTHLYLEADERBOARD_FAILURE);

//  Corporate Leaderboard
export const salesPersonHomepageRequest = (requestBody) => createAction(SALESPERSONHOMEPAGE_REQUEST, { requestBody });
export const salesPersonHomepageStarted = () => createAction(SALESPERSONHOMEPAGE_STARTED);
export const salesPersonHomepageSuccess = (response) => createAction(SALESPERSONHOMEPAGE_SUCCESS, { response });
export const salesPersonHomepageFailure = () => createAction(SALESPERSONHOMEPAGE_FAILURE);

//  Source Type Get
export const sourceTypeGetRequest = (requestBody) => createAction(SOURCETYPEGET_REQUEST, { requestBody });
export const sourceTypeGetStarted = () => createAction(SOURCETYPEGET_STARTED);
export const sourceTypeGetSuccess = (response) => createAction(SOURCETYPEGET_SUCCESS, { response });
export const sourceTypeGetFailure = () => createAction(SOURCETYPEGET_FAILURE);

//  CALENDER SCHEDULE
export const calenderScheduleRequest = (requestBody) => createAction(CALENDERSCHEDULE_REQUEST, { requestBody });
export const calenderScheduleStarted = () => createAction(CALENDERSCHEDULE_STARTED);
export const calenderScheduleSuccess = (response) => createAction(CALENDERSCHEDULE_SUCCESS, { response });
export const calenderScheduleFailure = () => createAction(CALENDERSCHEDULE_FAILURE);

//  User tracking
export const userTrackingRequest = (requestBody) => createAction(USERTRACKING_REQUEST, { requestBody });
export const userTrackingStarted = () => createAction(USERTRACKING_STARTED);
export const userTrackingSuccess = (response) => createAction(USERTRACKING_SUCCESS, { response });
export const userTrackingFailure = () => createAction(USERTRACKING_FAILURE);

//  Create Geofence
export const createGeofenceRequest = (requestBody) => createAction(CREATEGEOFENCE_REQUEST, { requestBody });
export const createGeofenceStarted = () => createAction(CREATEGEOFENCE_STARTED);
export const createGeofenceSuccess = (response) => createAction(CREATEGEOFENCE_SUCCESS, { response });
export const createGeofenceFailure = () => createAction(CREATEGEOFENCE_FAILURE);

//  User Search
export const userSearchRequest = (requestBody) => createAction(USERSEARCH_REQUEST, { requestBody });
export const userSearchStarted = () => createAction(USERSEARCH_STARTED);
export const userSearchSuccess = (response) => createAction(USERSEARCH_SUCCESS, { response });
export const userSearchFailure = () => createAction(USERSEARCH_FAILURE);

//  Up Board
export const upBoardRequest = (requestBody) => createAction(UPBOARD_REQUEST, { requestBody });
export const upBoardStarted = () => createAction(UPBOARD_STARTED);
export const upBoardSuccess = (response) => createAction(UPBOARD_SUCCESS, { response });
export const upBoardFailure = () => createAction(UPBOARD_FAILURE);

//  Update Up Board
export const updateUpBoardRequest = (requestBody) => createAction(UPDATE_UPBOARD_REQUEST, { requestBody });
export const updateUpBoardStarted = () => createAction(UPDATE_UPBOARD_STARTED);
export const updateUpBoardSuccess = (response) => createAction(UPDATE_UPBOARD_SUCCESS, { response });
export const updateUpBoardFailure = () => createAction(UPDATE_UPBOARD_FAILURE);

//  Up Board Not up
export const upboardNotupRequest = (requestBody) => createAction(UPBOARDNOTUP_REQUEST, { requestBody });
export const upboardNotupStarted = () => createAction(UPBOARDNOTUP_STARTED);
export const upboardNotupSuccess = (response) => createAction(UPBOARDNOTUP_SUCCESS, { response });
export const upboardNotupFailure = () => createAction(UPBOARDNOTUP_FAILURE);

//  Notify user
export const notifyUserRequest = (requestBody) => createAction(NOTIFYUSER_REQUEST, { requestBody });
export const notifyUserStarted = () => createAction(NOTIFYUSER_STARTED);
export const notifyUserSuccess = (response) => createAction(NOTIFYUSER_SUCCESS, { response });
export const notifyUserFailure = () => createAction(NOTIFYUSER_FAILURE);

//  switchShift
export const switchShiftRequest = (requestBody) => createAction(SWITCHSHIFT_REQUEST, { requestBody });
export const switchShiftStarted = () => createAction(SWITCHSHIFT_STARTED);
export const switchShiftSuccess = (response) => createAction(SWITCHSHIFT_SUCCESS, { response });
export const switchShiftFailure = () => createAction(SWITCHSHIFT_FAILURE);

//  Schedule change
export const scheduleChangeRequest = (requestBody) => createAction(SCHEDULECHANGE_REQUEST, { requestBody });
export const scheduleChangeStarted = () => createAction(SCHEDULECHANGE_STARTED);
export const scheduleChangeSuccess = (response) => createAction(SCHEDULECHANGE_SUCCESS, { response });
export const scheduleChangeFailure = () => createAction(SCHEDULECHANGE_FAILURE);

//  send switchShift
export const sendSwitchNotificationRequest = (requestBody) => createAction(SENDSWITCHNOTIFICATION_REQUEST, { requestBody });
export const sendSwitchNotificationStarted = () => createAction(SENDSWITCHNOTIFICATION_STARTED);
export const sendSwitchNotificationSuccess = (response) => createAction(SENDSWITCHNOTIFICATION_SUCCESS, { response });
export const sendSwitchNotificationFailure = () => createAction(SENDSWITCHNOTIFICATION_FAILURE);

//  Notification
export const notificationListRequest = (requestBody) => createAction(NOTIFICATIONLIST_REQUEST, { requestBody });
export const notificationListStarted = () => createAction(NOTIFICATIONLIST_STARTED);
export const notificationListSuccess = (response) => createAction(NOTIFICATIONLIST_SUCCESS, { response });
export const notificationListFailure = () => createAction(NOTIFICATIONLIST_FAILURE);

//  activeGames
export const activeGamesRequest = (requestBody) => createAction(ACTIVEGAMES_REQUEST, { requestBody });
export const activeGamesStarted = () => createAction(ACTIVEGAMES_STARTED);
export const activeGamesSuccess = (response) => createAction(ACTIVEGAMES_SUCCESS, { response });
export const activeGamesFailure = () => createAction(ACTIVEGAMES_FAILURE);

//  totalSalesperson
export const totalSalespersonRequest = (requestBody) => createAction(TOTALSALESPERSON_REQUEST, { requestBody });
export const totalSalespersonStarted = () => createAction(TOTALSALESPERSON_STARTED);
export const totalSalespersonSuccess = (response) => createAction(TOTALSALESPERSON_SUCCESS, { response });
export const totalSalespersonFailure = () => createAction(TOTALSALESPERSON_FAILURE);

//  managementNotification
export const managementNotificationRequest = (requestBody) => createAction(MANAGEMENTNOTIFICATION_REQUEST, { requestBody });
export const managementNotificationStarted = () => createAction(MANAGEMENTNOTIFICATION_STARTED);
export const managementNotificationSuccess = (response) => createAction(MANAGEMENTNOTIFICATION_SUCCESS, { response });
export const managementNotificationFailure = () => createAction(MANAGEMENTNOTIFICATION_FAILURE);

//  gamePlay
export const gamePlayRequest = (requestBody) => createAction(GAMEPLAY_REQUEST, { requestBody });
export const gamePlayStarted = () => createAction(GAMEPLAY_STARTED);
export const gamePlaySuccess = (response) => createAction(GAMEPLAY_SUCCESS, { response });
export const gamePlayFailure = () => createAction(GAMEPLAY_FAILURE);

//  gamePrize
export const gamePrizeRequest = (requestBody) => createAction(GAMEPRIZE_REQUEST, { requestBody });
export const gamePrizeStarted = () => createAction(GAMEPRIZE_STARTED);
export const gamePrizeSuccess = (response) => createAction(GAMEPRIZE_SUCCESS, { response });
export const gamePrizeFailure = () => createAction(GAMEPRIZE_FAILURE);

//  Game Winner
export const gameWinnerRequest = (requestBody) => createAction(GAMEWINNER_REQUEST, { requestBody });
export const gameWinnerStarted = () => createAction(GAMEWINNER_STARTED);
export const gameWinnerSuccess = (response) => createAction(GAMEWINNER_SUCCESS, { response });
export const gameWinnerFailure = () => createAction(GAMEWINNER_FAILURE);

//  request Pto Notification
export const requestPtoNotificationRequest = (requestBody) => createAction(REQUESTPTONOTIFICATION_REQUEST, { requestBody });
export const requestPtoNotificationStarted = () => createAction(REQUESTPTONOTIFICATION_STARTED);
export const requestPtoNotificationSuccess = (response) => createAction(REQUESTPTONOTIFICATION_SUCCESS, { response });
export const requestPtoNotificationFailure = () => createAction(REQUESTPTONOTIFICATION_FAILURE);

//  call In Sick HrNotification
export const callInSickHrNotificationRequest = (requestBody) => createAction(CALLINSICKHRNOTIFICATION_REQUEST, { requestBody });
export const callInSickHrNotificationStarted = () => createAction(CALLINSICKHRNOTIFICATION_STARTED);
export const callInSickHrNotificationSuccess = (response) => createAction(CALLINSICKHRNOTIFICATION_SUCCESS, { response });
export const callInSickHrNotificationFailure = () => createAction(CALLINSICKHRNOTIFICATION_FAILURE);

//  cover Shift Notification
export const coverShiftNotificationRequest = (requestBody) => createAction(COVERSHIFTNOTIFICATION_REQUEST, { requestBody });
export const coverShiftNotificationStarted = () => createAction(COVERSHIFTNOTIFICATION_STARTED);
export const coverShiftNotificationSuccess = (response) => createAction(COVERSHIFTNOTIFICATION_SUCCESS, { response });
export const coverShiftNotificationFailure = () => createAction(COVERSHIFTNOTIFICATION_FAILURE);

//  pto Hr Action Notification
export const ptoHrActionNotificationRequest = (requestBody) => createAction(PTOHRACTIONNOTIFICATION_REQUEST, { requestBody });
export const ptoHrActionNotificationStarted = () => createAction(PTOHRACTIONNOTIFICATION_STARTED);
export const ptoHrActionNotificationSuccess = (response) => createAction(PTOHRACTIONNOTIFICATION_SUCCESS, { response });
export const ptoHrActionNotificationFailure = () => createAction(PTOHRACTIONNOTIFICATION_FAILURE);

//  pto Manager Action Notification
export const ptoManagerActionNotificationRequest = (requestBody) => createAction(PTOMANAGERACTIONNOTIFICATION_REQUEST, { requestBody });
export const ptoManagerActionNotificationStarted = () => createAction(PTOMANAGERACTIONNOTIFICATION_STARTED);
export const ptoManagerActionNotificationSuccess = (response) => createAction(PTOMANAGERACTIONNOTIFICATION_SUCCESS, { response });
export const ptoManagerActionNotificationFailure = () => createAction(PTOMANAGERACTIONNOTIFICATION_FAILURE);

//  call in Sick HrAction Notification
export const callinSickHrActionNotificationRequest = (requestBody) => createAction(CALLINSICKHRACTIONNOTIFICATION_REQUEST, { requestBody });
export const callinSickHrActionNotificationStarted = () => createAction(CALLINSICKHRACTIONNOTIFICATION_STARTED);
export const callinSickHrActionNotificationSuccess = (response) => createAction(CALLINSICKHRACTIONNOTIFICATION_SUCCESS, { response });
export const callinSickHrActionNotificationFailure = () => createAction(CALLINSICKHRACTIONNOTIFICATION_FAILURE);

//  manager Action Call in Sick
export const managerActionCallinSickRequest = (requestBody) => createAction(MANAGERACTIONCALLINSICK_REQUEST, { requestBody });
export const managerActionCallinSickStarted = () => createAction(MANAGERACTIONCALLINSICK_STARTED);
export const managerActionCallinSickSuccess = (response) => createAction(MANAGERACTIONCALLINSICK_SUCCESS, { response });
export const managerActionCallinSickFailure = () => createAction(MANAGERACTIONCALLINSICK_FAILURE);

//  send Running Late Notification
export const sendRunningLateNotificationRequest = (requestBody) => createAction(SENDRUNNINGLATENOTIFICATION_REQUEST, { requestBody });
export const sendRunningLateNotificationStarted = () => createAction(SENDRUNNINGLATENOTIFICATION_STARTED);
export const sendRunningLateNotificationSuccess = (response) => createAction(SENDRUNNINGLATENOTIFICATION_SUCCESS, { response });
export const sendRunningLateNotificationFailure = () => createAction(SENDRUNNINGLATENOTIFICATION_FAILURE);

//  switch Shift Status SalesPerson
export const switchShiftStatusSalesPersonRequest = (requestBody) => createAction(SWITCHSHIFTSTATUSSALESPERSON_REQUEST, { requestBody });
export const switchShiftStatusSalesPersonStarted = () => createAction(SWITCHSHIFTSTATUSSALESPERSON_STARTED);
export const switchShiftStatusSalesPersonSuccess = (response) => createAction(SWITCHSHIFTSTATUSSALESPERSON_SUCCESS, { response });
export const switchShiftStatusSalesPersonFailure = () => createAction(SWITCHSHIFTSTATUSSALESPERSON_FAILURE);

//  mgr Status For Switch Shift
export const mgrStatusForSwitchShiftRequest = (requestBody) => createAction(MGRSTATUSFORSWITCHSHIFT_REQUEST, { requestBody });
export const mgrStatusForSwitchShiftStarted = () => createAction(MGRSTATUSFORSWITCHSHIFT_STARTED);
export const mgrStatusForSwitchShiftSuccess = (response) => createAction(MGRSTATUSFORSWITCHSHIFT_SUCCESS, { response });
export const mgrStatusForSwitchShiftFailure = () => createAction(MGRSTATUSFORSWITCHSHIFT_FAILURE);

//  shift Cvrge Rqust To SalesPrsn
export const shiftCvrgeRqustToSalesPrsnRequest = (requestBody) => createAction(SHIFTCVRGREQUSTTOSALESPERSON_REQUEST, { requestBody });
export const shiftCvrgeRqustToSalesPrsnStarted = () => createAction(SHIFTCVRGREQUSTTOSALESPERSON_STARTED);
export const shiftCvrgeRqustToSalesPrsnSuccess = (response) => createAction(SHIFTCVRGREQUSTTOSALESPERSON_SUCCESS, { response });
export const shiftCvrgeRqustToSalesPrsnFailure = () => createAction(SHIFTCVRGREQUSTTOSALESPERSON_FAILURE);

//  shift Cvrg Status to SalesPerson
export const shiftCvrgStatusSalesPersonRequest = (requestBody) => createAction(SHIFTCVRGSTATUSSALESPERSON_REQUEST, { requestBody });
export const shiftCvrgStatusSalesPersonStarted = () => createAction(SHIFTCVRGSTATUSSALESPERSON_STARTED);
export const shiftCvrgStatusSalesPersonSuccess = (response) => createAction(SHIFTCVRGSTATUSSALESPERSON_SUCCESS, { response });
export const shiftCvrgStatusSalesPersonFailure = () => createAction(SHIFTCVRGSTATUSSALESPERSON_FAILURE);

//  mgrStatusForShiftCvrge
export const mgrStatusForShiftCvrgeRequest = (requestBody) => createAction(MGRSTATUSFORSHIFTCVRGE_REQUEST, { requestBody });
export const mgrStatusForShiftCvrgeStarted = () => createAction(MGRSTATUSFORSHIFTCVRGE_STARTED);
export const mgrStatusForShiftCvrgeSuccess = (response) => createAction(MGRSTATUSFORSHIFTCVRGE_SUCCESS, { response });
export const mgrStatusForShiftCvrgeFailure = () => createAction(MGRSTATUSFORSHIFTCVRGE_FAILURE);

//  runningLateNotificationActionByManager
export const runningLateNotificationActionByManagerRequest = (requestBody) => createAction(RUNINGLATENOTIFICATIONACTIONBYMANAGER_REQUEST, { requestBody });
export const runningLateNotificationActionByManagerStarted = () => createAction(RUNINGLATENOTIFICATIONACTIONBYMANAGER_STARTED);
export const runningLateNotificationActionByManagerSuccess = (response) => createAction(RUNINGLATENOTIFICATIONACTIONBYMANAGER_SUCCESS, { response });
export const runningLateNotificationActionByManagerFailure = () => createAction(RUNINGLATENOTIFICATIONACTIONBYMANAGER_FAILURE);

//  managementNtfctionAckldge
export const managementNtfctionAckldgeRequest = (requestBody) => createAction(MANAGEMENTNTFCTIONACKLDGE_REQUEST, { requestBody });
export const managementNtfctionAckldgeStarted = () => createAction(MANAGEMENTNTFCTIONACKLDGE_STARTED);
export const managementNtfctionAckldgeSuccess = (response) => createAction(MANAGEMENTNTFCTIONACKLDGE_SUCCESS, { response });
export const managementNtfctionAckldgeFailure = () => createAction(MANAGEMENTNTFCTIONACKLDGE_FAILURE);

//  sendVcard
export const sendVcardRequest = (requestBody) => createAction(SENDVCARD_REQUEST, { requestBody });
export const sendVcardStarted = () => createAction(SENDVCARD_STARTED);
export const sendVcardSuccess = (response) => createAction(SENDVCARD_SUCCESS, { response });
export const sendVcardFailure = () => createAction(SENDVCARD_FAILURE);

//  compositeLeaderboardYtd
export const compositeLeaderboardYtdRequest = (requestBody) => createAction(COMPOSITELEADERBOARDYTD_REQUEST, { requestBody });
export const compositeLeaderboardYtdStarted = () => createAction(COMPOSITELEADERBOARDYTD_STARTED);
export const compositeLeaderboardYtdSuccess = (response) => createAction(COMPOSITELEADERBOARDYTD_SUCCESS, { response });
export const compositeLeaderboardYtdFailure = () => createAction(COMPOSITELEADERBOARDYTD_FAILURE);

//  termnconditionEmail
export const termnconditionEmailRequest = (requestBody) => createAction(TERMSNCONDITIONEMAIL_REQUEST, { requestBody });
export const termnconditionEmailStarted = () => createAction(TERMSNCONDITIONEMAIL_STARTED);
export const termnconditionEmailSuccess = (response) => createAction(TERMSNCONDITIONEMAIL_SUCCESS, { response });
export const termnconditionEmailFailure = () => createAction(TERMSNCONDITIONEMAIL_FAILURE);

//  ytdTeamLeaderboard
export const ytdTeamLeaderboardRequest = (requestBody) => createAction(YTDTEAMLEADERBOARD_REQUEST, { requestBody });
export const ytdTeamLeaderboardStarted = () => createAction(YTDTEAMLEADERBOARD_STARTED);
export const ytdTeamLeaderboardSuccess = (response) => createAction(YTDTEAMLEADERBOARD_SUCCESS, { response });
export const ytdTeamLeaderboardFailure = () => createAction(YTDTEAMLEADERBOARD_FAILURE);

//  sendMessage
export const sendMessageRequest = (requestBody) => createAction(SENDMESSAGE_REQUEST, { requestBody });
export const sendMessageStarted = () => createAction(SENDMESSAGE_STARTED);
export const sendMessageSuccess = (response) => createAction(SENDMESSAGE_SUCCESS, { response });
export const sendMessageFailure = () => createAction(SENDMESSAGE_FAILURE);

//  getMessage
export const getMessageRequest = (requestBody) => createAction(GETMESSAGE_REQUEST, { requestBody });
export const getMessageStarted = () => createAction(GETMESSAGE_STARTED);
export const getMessageSuccess = (response) => createAction(GETMESSAGE_SUCCESS, { response });
export const getMessageFailure = () => createAction(GETMESSAGE_FAILURE);

//  logoutUrl
export const logoutUrlRequest = (requestBody) => createAction(LOGOUTURL_REQUEST, { requestBody });
export const logoutUrlStarted = () => createAction(LOGOUTURL_STARTED);
export const logoutUrlSuccess = (response) => createAction(LOGOUTURL_SUCCESS, { response });
export const logoutUrlFailure = () => createAction(LOGOUTURL_FAILURE);

// SOSNotification
export const sosNotificationRequest = (requestBody) => createAction(SOSNOTIFICATION_REQUEST, { requestBody });
export const sosNotificationStarted = () => createAction(SOSNOTIFICATION_STARTED);
export const sosNotificationSuccess = (response) => createAction(SOSNOTIFICATION_SUCCESS, { response });
export const sosNotificationFailure = () => createAction(SOSNOTIFICATION_FAILURE);

// ytdCompositeScore
export const ytdCompositeScoreRequest = (requestBody) => createAction(YTDCOMPOSITESCORE_REQUEST, { requestBody });
export const ytdCompositeScoreStarted = () => createAction(YTDCOMPOSITESCORE_STARTED);
export const ytdCompositeScoreSuccess = (response) => createAction(YTDCOMPOSITESCORE_SUCCESS, { response });
export const ytdCompositeScoreFailure = () => createAction(YTDCOMPOSITESCORE_FAILURE);

// changePassword
export const changePasswordRequest = (requestBody) => createAction(CHANGEPASSWORD_REQUEST, { requestBody });
export const changePasswordStarted = () => createAction(CHANGEPASSWORD_STARTED);
export const changePasswordSuccess = (response) => createAction(CHANGEPASSWORD_SUCCESS, { response });
export const changePasswordFailure = () => createAction(CHANGEPASSWORD_FAILURE);

// notificationHistory
export const notificationHistoryRequest = (requestBody) => createAction(NOTIFICATIONHISTORY_REQUEST, { requestBody });
export const notificationHistoryStarted = () => createAction(NOTIFICATIONHISTORY_STARTED);
export const notificationHistorySuccess = (response) => createAction(NOTIFICATIONHISTORY_SUCCESS, { response });
export const notificationHistoryFailure = () => createAction(NOTIFICATIONHISTORY_FAILURE);

// support
export const supportRequest = (requestBody) => createAction(SUPPORT_REQUEST, { requestBody });
export const supportStarted = () => createAction(SUPPORT_STARTED);
export const supportSuccess = (response) => createAction(SUPPORT_SUCCESS, { response });
export const supportFailure = () => createAction(SUPPORT_FAILURE);

// managementnotification
export const managementnotificationlistRequest = (requestBody) => createAction(MANAGEMENTNOTIFICATIONLIST_REQUEST, { requestBody });
export const managementnotificationlistStarted = () => createAction(MANAGEMENTNOTIFICATIONLIST_STARTED);
export const managementnotificationlistSuccess = (response) => createAction(MANAGEMENTNOTIFICATIONLIST_SUCCESS, { response });
export const managementnotificationlistFailure = () => createAction(MANAGEMENTNOTIFICATIONLIST_FAILURE);

// managergamesdetails
export const managergamesdetailsRequest = (requestBody) => createAction(MANAGERGAMESDETAILS_REQUEST, { requestBody });
export const managergamesdetailsStarted = () => createAction(MANAGERGAMESDETAILS_STARTED);
export const managergamesdetailsSuccess = (response) => createAction(MANAGERGAMESDETAILS_SUCCESS, { response });
export const managergamesdetailsFailure = () => createAction(MANAGERGAMESDETAILS_FAILURE);

// orderdetails
export const orderdetailsRequest = (requestBody) => createAction(ORDERDETAILS_REQUEST, { requestBody });
export const orderdetailsStarted = () => createAction(ORDERDETAILS_STARTED);
export const orderdetailsSuccess = (response) => createAction(ORDERDETAILS_SUCCESS, { response });
export const orderdetailsFailure = () => createAction(ORDERDETAILS_FAILURE);

// orderupdate
export const orderupdateRequest = (requestBody) => createAction(ORDERUPDATE_REQUEST, { requestBody });
export const orderupdateStarted = () => createAction(ORDERUPDATE_STARTED);
export const orderupdateSuccess = (response) => createAction(ORDERUPDATE_SUCCESS, { response });
export const orderupdateFailure = () => createAction(ORDERUPDATE_FAILURE);
