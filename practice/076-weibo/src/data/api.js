
window.api = api

const APP_KEY = '698f75dbdefe4521ac08f36ee4fa6ffc63f94a398c9ea8bf3a4e8a8543d3957f';
const BASE_API = 'http://mock.biaoyansu.com/api/1/';


function api(url, params) {

    let timestamp = (new Date).getTime();
    let signature = btoa(APP_KEY + timestamp)

    let opt = {
        headers: {
            'BIAO-MOCK-APP-KEY': APP_KEY,
            'BIAO-MOCK-TIMESTAMP': timestamp,
            'BIAO-MOCK-SIGNATURE': signature,
        }
    }

    url = BASE_API + url
    axios
        .post(url, params, opt)
        .then(r => {
            return r.data
        })
}