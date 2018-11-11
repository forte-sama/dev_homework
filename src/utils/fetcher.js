const axios = require('axios');

const API_KEY = 'keyssxIJNB9wE0RY8';

const instance = axios.create({
    baseURL: 'https://api.airtable.com/v0/appdqzfZoeTcXC7VD/Config',
    headers: { 'Authorization': `Bearer ${API_KEY}` }
});

const continuousFetcher = (acc, offset) => {
    if (!offset) {
        return acc;
    }

    let params = {
        view: 'MENU - Homework',
        pageSize: 2,
        offset: offset
    };

    return instance.get('', { params })
        .then(result => {
            if (result.status === 200) {
                let data = result.data;
                return continuousFetcher(acc + data.records, data.offset);
            }
            else {
                return continuousFetcher(acc, offset);
            }
        })
        .catch(err => {
            console.error(err.toString());

            return [];
        });
};

export const getRecordsUsingAxios = () => {

    console.log("started fetching menu ontology...");
    
    return instance.get('')
        .then(result => {
            let data = result.data;

            // if there is an offset, that means that there are more records
            // so, go get 'em
            if (data.offset) {
                return continuousFetcher(data.records, data.offset);
            }
            else {
                return data.records;
            }
        })
        .catch(err => {
            console.error(err.toString());

            return [];
        });
};