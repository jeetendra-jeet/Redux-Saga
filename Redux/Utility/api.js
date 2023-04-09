/* eslint-disable prettier/prettier */
import * as AsyncStorage from './asyncStorage';
import CheckChangePassword from '../Components/CheckChangePassword';
import * as apiUrls from '../Utility/apiUrls';

export async function callApi(methodType, apiUrl, requestBody) {
    let apiResponse;
    const reqOpts = {
        method: methodType,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    try {
        const token = await AsyncStorage.getItem(AsyncStorage.TOKEN);
        if (token) {
            reqOpts.headers.Authorization = `Bearer ${token}`;
        }
        if (methodType === 'POST' || methodType === 'PUT') {
            reqOpts.body = JSON.stringify(requestBody);
        }
        console.log('reqOpts', reqOpts);
        console.log('API URL', apiUrl);
        const response = await fetch(apiUrl, reqOpts);
        const data = await response.json();
        if (data.passwordChange === true && apiUrl !== apiUrls.loginUrl) {
            CheckChangePassword();
        }
        apiResponse = {
            data,
            statusCode: response.status,
        };
    } catch (error) {
        console.log('callApiError', error);
    }
    return apiResponse;
}

export async function callUploadApi(methodType, apiUrl, requestBody) {
    let apiResponse;
    const reqOpts = {
        method: methodType,
        headers: {
            'content-type': 'multipart/form-data',
            'accept': 'application/json',
        },
    };
    try {
        const token = await AsyncStorage.getItem(AsyncStorage.TOKEN);
        if (token) {
            reqOpts.headers.Authorization = `Bearer ${token}`;
        }

        if (methodType === 'POST' || methodType === 'PUT') {
            var formData = new FormData();
            reqOpts.body = formData;
        }
        console.log('reqOpts', reqOpts);
        console.log('API URL', apiUrl);
        const response = await fetch(apiUrl, {
            body: requestBody,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'multipart/form-data',
                'Accept': 'application/json',
            },
        });
        const data = await response.json();
        if (data.passwordChange === true) {
            CheckChangePassword();
        }
        apiResponse = {
            data,
            statusCode: response.status,
        };
    } catch (error) {
        console.log('API error Response =======>>>>>>', error);
    }
    return apiResponse;
}
