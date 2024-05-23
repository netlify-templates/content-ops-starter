'use strict';

const axios = require('axios');

// Handle the lambda invocation
exports.handler = async function (event, context, callback) {
    try {
        const url = process.env.STACKBIT_CONTACT_FORM_SUBMISSION_URL;

        if (!url) {
            throw new Error('No Netlify Create URL specified');
        }

        const response = await axios({
            method: 'post',
            url,
            data: JSON.parse(event.body)
        });

        callback(null, {
            statusCode: 200,
            body: response.data.status
        });
    } catch (e) {
        callback(null, {
            statusCode: e?.response?.status ?? 500,
            body: e?.response?.statusText ?? e.message
        });
    }
};
