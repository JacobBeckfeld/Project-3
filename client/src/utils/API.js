let key = "000ecf7460764ad49dc126af35cb090b";
let secret = "5T46w93U6ucQZ677R4uiidPdeHlEajSi";

const getToken = async () => {
    const results = await fetch('https://us.battle.net/oauth/token', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret
    });

    return await results.json();
}

const accessToken = getToken();

export const getUser = (token) => {
    return fetch("/api/users/dashboard", {
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

    return fetch(`https://us.api.blizzard.com/d3/profile/${newBattletag}/?locale=en_US&access_token=${accessToken}`);
}

export const getCharacter = (battletag, heroID) => {

    let newBattletag = battletag.replace(/#/, "%23");

    return fetch(`https://us.api.blizzard.com/d3/profile/${newBattletag}/hero/${heroID}?locale=en_US&access_token=${accessToken}`)
}

export const getToken = () => {
    return fetch('https://us.battle.net/oauth/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa('000ecf7460764ad49dc126af35cb090b:5T46w93U6ucQZ677R4uiidPdeHlEajSi')
        },
        body: 'grant_type=client_credentials'
    });
}