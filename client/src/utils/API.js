export const getUser = (token) => {
    return fetch("/api/dashboard", {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const getProfile = (battletag) => {
    let newBattletag = battletag.replace(/#/, "%23");

    return fetch(`https://us.api.blizzard.com/d3/profile/${newBattletag}/?locale=en_US&access_token=US9BodSM03UzyVr9cxr7HLSvLeQGC5i9Cc`);

    // return results.json();

    // return fetch(`https://us.api.blizzard.com/d3/profile/${newBattletag}/?locale=en_US&access_token=US9BodSM03UzyVr9cxr7HLSvLeQGC5i9Cc`)
    // .then(function (res) {
    //     return res.json();
    // })
    // .then(function (data) {
    //     return data;
    // });
    // "https://us.api.blizzard.com/d3/profile/Laserrpg999%231705/?locale=en_US&access_token=US9BodSM03UzyVr9cxr7HLSvLeQGC5i9Cc"
}

export const getCharacter = (battletag, heroID) => {

    let newBattletag = battletag.replace(/#/, "%23");

    return fetch(`https://us.api.blizzard.com/d3/profile/${newBattletag}/hero/${heroID}?locale=en_US&access_token=US9BodSM03UzyVr9cxr7HLSvLeQGC5i9Cc`)
}