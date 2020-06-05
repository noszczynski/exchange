// API
const apiKEY = '555c0d3031676740ff4735de'
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKEY}`;

const _handleResponse = (response) => {
    if (!response.ok) {
        console.error(`Error: ${response.status}`);
        throw Error(response.status);
    }
    return response.json();
};

export const getLatestExchange = () => {
    return fetch(`${apiURL}/latest/EUR`, {
        method: "GET",
    }).then(_handleResponse).then((r) => r);
};