export const key_weatherapi = '67eb423cc7e645b4a25154514212708';
export const key_openweathermap = 'b291ca0e2759b4416962eaee53964f9f';

export const baseUrlWeatherapi = 'https://api.weatherapi.com/v1/forecast.json';
export const baseUrlOpenweathermap = 'http://api.openweathermap.org/data/2.5/weather';

const request = async (method, params) => {
    method = method.toLowerCase();
    let fullUrl = `${baseUrlWeatherapi}`;
    let body = null;

    switch (method) {
        case 'get':
            let queryString = new URLSearchParams(params).toString();
            fullUrl += `?${queryString}`;
            break;
        case 'post':
        case 'put':
        case 'patch':
        case 'delete':
            body = JSON.stringify(params);
            break;
    }

    let headers = { 'Content-Type': 'application/json' };

    let req = await fetch(fullUrl, { method, headers, body });

    let json = await req.json();

    return json;
}

export default {
    getClimateCity: async (params) => {
        try {
            let json = await request('get', params);
            return json;
        } catch (error) {
            return error;
        }
    },
}