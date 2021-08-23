export const getToken = async () => {
    const results = await fetch('https://us.battle.net/oauth/token', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: 'grant_type=client_credentials&client_id=000ecf7460764ad49dc126af35cb090b&client_secret=5T46w93U6ucQZ677R4uiidPdeHlEajSi'
    });

    return (await results.json()).access_token;
}

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

export const updateProfile = (_id, username) => {
    return fetch('/api/users/dashboard', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({_id, username})
    })
}
export const saveProfile = (_id, battletag) => {
    return fetch('/api/users/dashboard', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({_id, battletag})
    })
}

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const getProfile = async (battletag, accessToken) => {

    let newBattletag = battletag.replace(/#/, "%23");

    return (await fetch(`https://us.api.blizzard.com/d3/profile/${newBattletag}/?locale=en_US&access_token=${accessToken}`)).json();
}

export const getCharacter = async (battletag, heroID, accessToken) => {

    let newBattletag = battletag.replace(/#/, "%23");

    return (await fetch(`https://us.api.blizzard.com/d3/profile/${newBattletag}/hero/${heroID}?locale=en_US&access_token=${accessToken}`)).json();
}