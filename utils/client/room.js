import { useState } from "react";
import useSWR from "swr";

const API_ENDPOINT = "/api/v1/room/"

/**
 * async query a room for SDP offer and answers. 
 * @param {*} roomId endpoint roomId. Must be integer.
 * @param {*} onSuccess callback. (data) => {}
 * @param {*} onError callback. () => {}
 * @returns 
 */
export async function getRoom(roomId, onSuccess=undefined, onError=undefined) {
    try {
        const response = await fetch(`${API_ENDPOINT}${roomId}`);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}. ${response.message}`);
        }

        const data = await response.json();
        onSuccess && onSuccess(data);
        return data;
    } catch (error) {
        console.log(error.message);
        onError && onError();
        return null;
    }
}

/**
 * async Creates a room on the server and sends an SDP offer. 
 * @param {*} roomId endpoint roomId. Must be integer
 * @param {*} sdpOffer string. the raw sdp document.
 * @param {*} onSuccess callback. (data) => {}
 * @param {*} onError callback. () => {}
 * @returns 
 */
export async function createRoomAndSendOffer(roomId, sdpOffer,  onSuccess=undefined, onError=undefined) {
    try {
        const response = await fetch(`${API_ENDPOINT}${roomId}`, {
            method: "POST",
            body: JSON.stringify({sdpOffer: sdpOffer})
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}. ${response.message}`);
        }

        const data = await response.json();
        onSuccess && onSuccess(data);
        return data;
    } catch (error) {
        console.log(error.message);
        onError && onError();
        return null;
    }
}

/**
 * async Sends a room an SDP answer. 
 * @param {*} roomId endpoint roomId. Must be integer
 * @param {*} sdpAnswer string. the raw sdp document.
 * @param {*} onSuccess callback. (data) => {}
 * @param {*} onError callback. () => {}
 * @returns 
 */
export async function sendRoomAnswer(roomId, sdpAnswer, onSuccess=undefined, onError=undefined) {
    try {
        const response = await fetch(`${API_ENDPOINT}${roomId}`, {
            method: "PUT",
            body: JSON.stringify({sdpAnswer: sdpAnswer})
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}. ${response.message}`);
        }

        const data = await response.json();
        onSuccess && onSuccess(data);
        return data;
    } catch (error) {
        console.log(error.message);
        onError && onError();
        return null
    }
}


/**
 * 
 * @param {*} roomId 
 * @param {*} onSuccess 
 * @param {*} onError 
 * @returns sdpOffer. A parsed SDP document in JSON format
 */
export async function getRoomOffer(roomId, onSuccess=undefined, onError=undefined) {
    try {
        const response = await fetch(`${API_ENDPOINT}${roomId}`);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}. ${response.message}`);
        }

        const data = await response.json();
        onSuccess && onSuccess(data.sdpOffer);
        return JSON.parse(data.sdpOffer);

    } catch (error) {
        console.log(error.message);
        onError && onError();
        return null;
    }
}


/**
 * 
 * @param {*} roomId 
 * @param {*} listenType listen for either "OFFER" or "ANSWER" sdp document
 * @param {*} listener callback function. fired when a desired sdp doc is found
 */
export function useRoom(roomId=null, listenType, listener) {
    // fetch offer/answer via swr
    const fetcher = (url) => fetch(url).then((res)=> res.json());
    const { data, error, isLoading } = useSWR(listenType ? `${API_ENDPOINT}${roomId}` : null, fetcher, {refreshInterval: 3000});


    let sdp = null;
    switch (listenType) {
        case "OFFER": {
            sdp = data && JSON.parse(data.sdpOffer);
            break;
        }
        case "ANSWER": {
            sdp = data && JSON.parse(data.sdpAnswer);
            break;
        }
        default:
            break;
    }

    if (sdp) {
        listener && listener(sdp);
        console.log(`swr: ${JSON.stringify(sdp)}`);
    }

    return {data, error, isLoading}
}

/**
 * Singular purpose. Will start listening for sdpAnswer once startListening state is set to true
 * @param {*} roomId 
 * @param {*} startLisening 
 * @param {*} onSDPAnswerReceived 
 * @returns 
 */
export function useSDPAnswer(roomId=null, startLisening, onSDPAnswerReceived) {
    const fetcher = (url) => fetch(url)
        .then( async (res)=> {
            if (!res.ok) {
                const error =  new Error("Fetching SDPAnswer failed");
                error.status = res.status;
                error.info = res.message;

                throw error;
            }

            return res.json();
        });
        
    const { data, error, isLoading } = useSWR(startLisening ? `${API_ENDPOINT}${roomId}` : null, fetcher, {refreshInterval: 3000});

    let sdp = data && JSON.parse(data.sdpAnswer);
    sdp && onSDPAnswerReceived(sdp);
    
    return {data, error, isLoading}
}