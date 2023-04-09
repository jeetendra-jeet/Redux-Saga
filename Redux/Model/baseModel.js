/* eslint-disable prettier/prettier */
import * as apiUrl from '../Utility/apiUrls';
import { callApi, callUploadApi } from '../Utility/api';

export default class BaseModel {
    static login(requestBody) {
        return callApi('POST', apiUrl.loginUrl, requestBody);
    }

    static signup(requestBody) {
        return callUploadApi('POST', apiUrl.signupUrl, requestBody);
    }

    static getProfile(requestBody) {
        return callApi('GET', apiUrl.getProfileUrl, requestBody);
    }

    static getBroadcastMessage(requestBody) {
        return callApi('GET', apiUrl.getBroadcastMessageUrl, requestBody);
    }

    static getContacts(requestBody) {
        return callApi('GET', apiUrl.getContacts, requestBody);
    }

    static updateProfile(requestBody) {
        return callUploadApi('POST', apiUrl.updateProfile, requestBody);
    }

    static addFavouriteContact(requestBody) {
        return callApi('POST', apiUrl.addFavourite, requestBody);
    }

    static recentContact(requestBody) {
        return callApi('GET', apiUrl.recentContact, requestBody);
    }

    static achievementDetails(requestBody) {
        return callApi('GET', apiUrl.achievementsUrl, requestBody);
    }

    static gameLists(requestBody) {
        return callApi('GET', apiUrl.gameListsUrl, requestBody);
    }

    static createWorkingDeal(requestBody) {
        return callUploadApi('POST', apiUrl.createWorkingDeal, requestBody);
    }

    static workingDealList(requestBody) {
        return callApi('GET', apiUrl.workingDealList, requestBody);
    }

    static workingDealUpdate(requestBody) {
        return callUploadApi('POST', apiUrl.workingDealUpdate, requestBody, 'FormData');
    }

    static workingDealDelete(requestBody) {
        return callUploadApi('POST', apiUrl.workingDealDelete, requestBody);
    }

    static termsCondition(requestBody) {
        return callApi('GET', apiUrl.termsCondition, requestBody);
    }

    static mtdBookingDetails(requestBody) {
        return callUploadApi('POST', apiUrl.mtdBookingDetails, requestBody);
    }

    static mtdTotal(requestBody) {
        return callUploadApi('POST', apiUrl.mtdTotal, requestBody);
    }

    static mtdBooked(requestBody) {
        return callUploadApi('POST', apiUrl.mtdBooked, requestBody);
    }
    static mtdFinalized(requestBody) {
        return callUploadApi('POST', apiUrl.mtdFinalized, requestBody);
    }

    static stipsNeeded(requestBody) {
        return callApi('POST', apiUrl.stipsNeeded, requestBody);
    }

    static updateStipsStatus(requestBody) {
        return callApi('POST', apiUrl.updateStipsStatus, requestBody);
    }

    static monthlyLeaderboard(requestBody) {
        return callUploadApi('POST', apiUrl.monthlyLeaderboard, requestBody);
    }

    static mySchedule(requestBody) {
        return callApi('GET', apiUrl.mySchedule, requestBody);
    }

    static compositeScore(requestBody) {
        return callUploadApi('POST', apiUrl.compositeScore, requestBody);
    }

    static compositeLeaderboard(requestBody) {
        return callUploadApi('POST', apiUrl.compositeLeaderboard, requestBody);
    }

    static changeRequest(requestBody) {
        return callUploadApi('POST', apiUrl.changeRequest, requestBody);
    }

    static dealershipSales(requestBody) {
        return callApi('GET', apiUrl.dealershipSales, requestBody);
    }

    static mySales(requestBody) {
        return callApi('GET', apiUrl.mySales, requestBody);
    }

    static teamLeaderboard(requestBody) {
        return callUploadApi('POST', apiUrl.teamLeaderboard, requestBody);
    }

    static displayTeamEmployee(requestBody) {
        return callUploadApi('POST', apiUrl.displayTeamEmployee, requestBody);
    }

    static ytdLeaderboard(requestBody) {
        return callUploadApi('POST', apiUrl.ytdLeaderboard, requestBody);
    }

    static corporateUserHomePage(requestBody) {
        return callApi('GET', apiUrl.corporateUserHomePage, requestBody);
    }

    static corporateMonthlyLeaderboard(requestBody) {
        return callUploadApi('POST', apiUrl.corporateMonthlyLeaderboard, requestBody);
    }

    static salesPersonHomepage(requestBody) {
        return callApi('GET', apiUrl.salesPersonHomepage, requestBody);
    }

    static sourceTypeGet(requestBody) {
        return callApi('GET', apiUrl.sourceTypeGet, requestBody);
    }

    static calenderSchedule(requestBody) {
        return callUploadApi('POST', apiUrl.calenderSchedule, requestBody);
    }

    static userTracking(requestBody) {
        return callUploadApi('POST', apiUrl.userTracking, requestBody);
    }

    static createGeofence(requestBody) {
        return callUploadApi('POST', apiUrl.createGeofence, requestBody);
    }

    static userSearch(requestBody) {
        return callApi('POST', apiUrl.userSearch, requestBody);
    }

    static upBoard(requestBody) {
        return callApi('GET', apiUrl.upBoard, requestBody);
    }

    static updateUpBoard(requestBody) {
        return callApi('POST', apiUrl.updateUpBoard, requestBody);
    }

    static upboardNotup(requestBody) {
        return callApi('GET', apiUrl.upboardNotup, requestBody);
    }
    static notifyUser(requestBody) {
        return callUploadApi('POST', apiUrl.notifyUser, requestBody);
    }

    static switchShift(requestBody) {
        return callUploadApi('POST', apiUrl.switchShift, requestBody);
    }

    static scheduleChange(requestBody) {
        return callApi('GET', apiUrl.scheduleChange, requestBody);
    }

    static sendSwitchNotification(requestBody) {
        return callUploadApi('POST', apiUrl.sendSwitchNotification, requestBody);
    }

    static notificationList(requestBody) {
        return callApi('GET', apiUrl.notificationList, requestBody);
    }

    static activeGames(requestBody) {
        return callUploadApi('POST', apiUrl.activeGames, requestBody);
    }

    static totalSalesperson(requestBody) {
        return callApi('GET', apiUrl.totalSalesperson, requestBody);
    }

    static managementNotification(requestBody) {
        return callApi('POST', apiUrl.managementNotification, requestBody);
    }

    static gamePlay(requestBody) {
        return callUploadApi('POST', apiUrl.gamePlay, requestBody);
    }
    static gamePrize(requestBody) {
        return callUploadApi('POST', apiUrl.gamePrize, requestBody);
    }

    static gameWinner(requestBody) {
        return callUploadApi('POST', apiUrl.gameWinner, requestBody);
    }
    static requestPtoNotification(requestBody) {
        return callUploadApi('POST', apiUrl.requestPtoNotification, requestBody);
    }
    static callInSickHrNotification(requestBody) {
        return callUploadApi('POST', apiUrl.callInSickHrNotification, requestBody);
    }

    static coverShiftNotification(requestBody) {
        return callUploadApi('POST', apiUrl.coverShiftNotification, requestBody);
    }

    static ptoHrActionNotification(requestBody) {
        return callUploadApi('POST', apiUrl.ptoHrActionNotification, requestBody);
    }

    static ptoManagerActionNotification(requestBody) {
        return callUploadApi('POST', apiUrl.ptoManagerActionNotification, requestBody);
    }

    static callinSickHrActionNotification(requestBody) {
        return callUploadApi('POST', apiUrl.callinSickHrActionNotification, requestBody);
    }

    static managerActionCallinSick(requestBody) {
        return callUploadApi('POST', apiUrl.managerActionCallinSick, requestBody);
    }

    static sendRunningLateNotification(requestBody) {
        return callUploadApi('POST', apiUrl.sendRunningLateNotification, requestBody);
    }

    static switchShiftStatusSalesPerson(requestBody) {
        return callUploadApi('POST', apiUrl.switchShiftStatusSalesPerson, requestBody);
    }

    static mgrStatusForSwitchShift(requestBody) {
        return callUploadApi('POST', apiUrl.mgrStatusForSwitchShift, requestBody);
    }

    static shiftCvrgeRqustToSalesPrsn(requestBody) {
        return callApi('POST', apiUrl.shiftCvrgeRqustToSalesPrsn, requestBody);
    }

    static shiftCvrgStatusSalesPerson(requestBody) {
        return callUploadApi('POST', apiUrl.shiftCvrgStatusSalesPerson, requestBody);
    }

    static mgrStatusForShiftCvrge(requestBody) {
        return callUploadApi('POST', apiUrl.mgrStatusForShiftCvrge, requestBody);
    }

    static runningLateNotificationActionByManager(requestBody) {
        return callUploadApi('POST', apiUrl.runningLateNotificationActionByManager, requestBody);
    }

    static managementNtfctionAckldge(requestBody) {
        return callUploadApi('POST', apiUrl.managementNtfctionAckldge, requestBody);
    }

    static sendVcard(requestBody) {
        return callUploadApi('POST', apiUrl.sendVcard, requestBody);
    }

    static compositeLeaderboardYtd(requestBody) {
        return callUploadApi('POST', apiUrl.compositeLeaderboardYtd, requestBody);
    }

    static termnconditionEmail(requestBody) {
        return callUploadApi('POST', apiUrl.termnconditionEmail, requestBody);
    }

    static ytdTeamLeaderboard(requestBody) {
        return callUploadApi('POST', apiUrl.ytdTeamLeaderboard, requestBody);
    }

    static sendMessage(requestBody) {
        return callUploadApi('POST', apiUrl.sendMessage, requestBody);
    }
    static getMessage(requestBody) {
        return callApi('GET', apiUrl.getMessage, requestBody);
    }

    static logoutUrl(requestBody) {
        return callApi('GET', apiUrl.logoutUrl, requestBody);
    }

    static sosNotification(requestBody) {
        return callUploadApi('POST', apiUrl.sosNotificationUrl, requestBody);
    }

    static ytdCompositeScore(requestBody) {
        return callUploadApi('POST', apiUrl.ytdCompositeScore, requestBody);
    }

    static changePassword(requestBody) {
        return callUploadApi('POST', apiUrl.changePassword, requestBody);
    }
    static notificationHistory(requestBody) {
        return callApi('POST', apiUrl.notificationHistory, requestBody);
    }
    static managementnotificationlist(requestBody) {
        return callUploadApi('POST', apiUrl.managementnotificationlist, requestBody);
    }
    static support(requestBody) {
        return callApi('POST', apiUrl.support, requestBody);
    }
    static managergamesdetails(requestBody) {
        return callUploadApi('POST', apiUrl.managergamesdetails, requestBody);
    }
    static orderDetails(requestBody) {
        return callApi('GET', apiUrl.orderDetails, requestBody);
    }
    static orderUpdate(requestBody) {
        return callApi('POST', apiUrl.orderUpdate, requestBody);
    }

}
