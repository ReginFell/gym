import axios from 'axios';

import host from 'Constants/config/host';

const signIn = (email, password, platform = 'web') => {
    const obj = {
        email: email,
        password: password,
        device_platform: platform,
    };
    console.log(obj);
    return axios.post(
        `${host}v1/auth/login`,
        obj,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        },
    );
};

export default {
    signIn,
};