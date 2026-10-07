async function getRandomUsers(quantity, nationalities) {
    let results = quantity;
    if (results === undefined) {
        results = 1;
    }
    let nat = nationalities;
    if (nat === undefined) {
        nat = '';
    }

    const url = 'https://randomuser.me/api/?results=' + results + '&nat=' + nat + '&inc=name,email,nat&noinfo';

    const response = await fetch(url);

    let data;
    if (response && typeof response.json === 'function') {
        data = await response.json();
    } else {
        data = response;
    }

    return data.results;
}

async function getUsers(names) {
    const result = [];

    for (let i = 0; i < names.length; i++) {
        try {
            const response = await fetch('https://api.github.com/users/' + names[i]);

            if (response && typeof response.json === 'function') {
                if (response.ok === false) {
                    result.push(null);
                } else {
                    const user = await response.json();
                    result.push(user);
                }
            } else {
                result.push(response);
            }
        } catch (error) {
            result.push(null);
        }
    }

    return result;
}

async function createPost(data) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    });

    let post;
    if (response && typeof response.json === 'function') {
        post = await response.json();
    } else {
        post = response;
    }

    return post;
}