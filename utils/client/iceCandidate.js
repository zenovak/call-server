import { useState } from "react";
import useSWR from "swr";


const getOfferEndpoint = (roomId) => {
    return `/api/v1/room/${roomId}/icecandidate/offer`
}

const getAnswerEndpoint = (roomId) => {
    return `/api/v1/room/${roomId}/icecandidate/answer`
}


/**
 * Gets a full list of ice candidates from the offer side to the signalling server.
 * @param {*} roomId 
 * @param {*} onSuccess 
 * @param {*} onError 
 * @returns 
 */
export async function getOfferCandidates(roomId, onSuccess, onError) {
    try {
        const response = await fetch(getOfferEndpoint(roomId));

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
 * Sends an ice candidate from the offer side to the signalling server
 * @param {*} roomId 
 * @param {*} offerCandidate 
 * @param {*} onSuccess 
 * @param {*} onError 
 * @returns 
 */
export async function addOfferCandidate(roomId, offerCandidate, onSuccess, onError) {
    try {
        const response = await fetch(getOfferEndpoint(roomId), {
            method: "POST",
            body: JSON.stringify({ offerCandidate: offerCandidate})
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
 * Gets a full list of iceCandidate from the answer side. 
 * @param {*} roomId 
 * @param {*} onSuccess 
 * @param {*} onError 
 * @returns 
 */
export async function getAnswerCandidate(roomId, onSuccess, onError) {
    try {
        const response = await fetch(getAnswerEndpoint(roomId));

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
 * Sends an Ice Candidate from the answer side to signalling server.
 * @param {*} roomId 
 * @param {*} answerCandidate 
 * @param {*} onSuccess 
 * @param {*} onError 
 * @returns 
 */
export async function addAnswerCandidate(roomId, answerCandidate, onSuccess, onError) {
    try {
        const response = await fetch(getAnswerEndpoint(roomId), {
            method: "POST",
            body: JSON.stringify({ answerCandidate: answerCandidate})
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
 * Hook for swr fetching of remote ice candidates. 
 * @param {*} roomId. int the roomId
 * @param {*} candidateType remote type for fetched. once set, swr will start listening on intervals\
 * valid values are: "ANSWER", "OFFER"
 * @returns 
 */
export function useICECandidates(roomId, candidateType, onicecandidate) {
    const fetcher = (url) => fetch(url).then((res)=> res.json());

    let candidateBackend = null;
    switch (candidateType) {
        case "ANSWER":
            candidateBackend = getAnswerEndpoint(roomId);
            break;
        case "OFFER":
            candidateBackend = getOfferEndpoint(roomId);
            break;
        default:
            break;
    }

    const { data, error, isLoading } = useSWR(roomId ? candidateBackend : null, fetcher, {refreshInterval: 3000});
    // Optimization needed. Stops firing onicecandidate event when fetched candidate lists remains unchanged;

    let candidatesList = [];
    switch (candidateType) {
        case "ANSWER":{
            data && data.answerCandidate.map((item)=>{
                item && candidatesList.push(
                    JSON.parse(item.candidate)
                );
            });
            break;
        }

        case "OFFER": {
            data && data.offerCandidate.map((item)=>{
                item && candidatesList.push(
                    JSON.parse(item.candidate)
                );
            })
            break;
        }
    
        default:
            break;
    }

    if (candidatesList.length > 0) {
        for (let index = 0; index < candidatesList.length; index++) {
            const currentCandidate = candidatesList[index];

            onicecandidate(currentCandidate);
        }
    }

    return {data, candidatesList, error, isLoading}
}