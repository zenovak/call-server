

const getOfferEndpoint = (roomId) => {
    return `/api/v1/room/${roomId}/icecandidate/offer`
}

const getAnswerEndpoint = (roomId) => {
    return `/api/v1/${roomId}/icecandidate/answer`
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