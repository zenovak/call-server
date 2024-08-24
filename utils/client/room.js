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


export function useRoom(roomId) {

}