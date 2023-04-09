/* eslint-disable prettier/prettier */
/* eslint-disable radix */
import { Alert } from 'react-native';
import moment from 'moment';
// show message alert
export function showMessage(isError = false, message) {
    Alert.alert(
        isError ? 'Alert' : 'Success',
        message,
        [{ text: 'Ok', style: 'cancel' }],
        { cancelable: false },
    );
}

//Convert Phone Number In UK formate
export function phoneConvert(numbers) {
    // if (numbers.length === 10) {
    var cleaned = ('' + numbers).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        var intlCode = match[1] ? '+1 ' : '',
            number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join(
                '',
            );
        // console.log('number', number)
        return number;
    } else {
        return numbers;
    }
    // }
}

//camelCase O'Testing
export function toTitles(s) {
    return s.replace(/\w\S*'’/g, function (t) {
        let arrr = t.split("'");
        if (arrr.length > 1) {
            return arrr[0] + '’' + arrr[1];
        } else {
            return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        }
    });
}
export function removeExtraChar(str, c) {
    return (str.length > 12 ? toTitles(str.substr(0, c ? 10 : 12) + '..') : toTitles(str));
}

export const MonthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export const manageName = (str) => {
    if (str === null || str === undefined) {
        return str;
    }
    else {
        const arr = str.split(' ');
        let newStr = arr[0].substr(0, 1) + '. ' + arr[1];
        newStr = newStr.length > 11 ? toTitles(newStr.substr(0, 10) + '.') : toTitles(newStr);
        return newStr;
    }
};

export const manageName1 = (str) => {
    if (str === null || str === undefined) {
        return str;
    } else {
        let arr = str.trim().split(' ');
        arr = arr.filter(e => e);
        let newStr = '';
        if (arr.length > 1) {
            arr.map((item, index) => {
                if (index === 0) {
                    newStr += item.substr(0, 1) + '.';
                } else {
                    newStr += ' ' + item;
                }
            });
        } else if (arr.length === 1) {
            newStr = arr[0];
        } else {
            newStr = 'N/A';
        }
        newStr = newStr.length > 15 ? toTitles(newStr.substr(0, 14) + '.') : toTitles(newStr);
        return newStr;
    }
};

export const manageDate = (date) => {
    const dt = moment(date).format('MM/DD/YYYY');
    return dt;
};

export const manageTime = (time) => {
    const tm = moment(time, 'HH:mm A').format('hh:mm A');
    return tm;
};

export const currencyFormat = (num) => {
    return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const numberFormat = (num) => {
    let finalValue = num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    let newFinalValue = finalValue.split('.');
    if (parseInt(newFinalValue[1]) === 0) {
        return newFinalValue[0];
    } else {
        return finalValue;
    }
};

export const formatJobTitle = (title) => {
    if (title !== null && title !== undefined) {
        var data = title.split(/(?=[A-Z])/);
        let finalJobTitle = data.join(' ');
        let newName = '';
        data.map((item, index) => {
            if (index === 0) {
                newName += item[0];
            } else {
                if (data.length === index + 1) {
                    newName += ' ' + item.trim();
                } else {
                    newName += ' ' + item[0].trim();
                }
            }
        });
        finalJobTitle = finalJobTitle.length > 14 ? newName : finalJobTitle;
        return finalJobTitle;
    }

};

export const formatFullJobTitle = (title) => {
    if (title !== null && title !== undefined && title !== '') {
        var data = title.split(/(?=[A-Z])/);
        var CapitalizedWords = [];
        data.forEach(element => {
            CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
        });
        return CapitalizedWords.join(' ');
    }
};

export const currentDate = () => {
    var today = new Date();
    var month =
        today.getMonth() >= 9
            ? today.getMonth() + 1
            : '0' + parseInt(today.getMonth() + 1);
    var date = today.getDate() >= 9 ? today.getDate() : '0' + today.getDate();
    var year = today.getFullYear();
    var date = month + '/' + date + '/' + year;
    return date;
};

export const currentTime = () => {
    var current = new Date();
    var hours = current.getHours();
    var minutes = current.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
};

export const currentTimeWithSecond = () => {
    var current = new Date();
    var hours = current.getHours();
    var minutes = current.getMinutes();
    var seconds = current.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime;
};

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
