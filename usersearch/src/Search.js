import React, { useState } from "react";
import axios from 'axios';

function Search() {
    // https://api.github.com/users/

    const [user, changeUser] = useState('');
    const [login, updateLogin] = useState('');

    function addHTML(res) {
        // bio followers following location
        console.log(`res = ${res} ${res.data.login} ${res.data.name}`);
        let html = '';
        if (res.data.avatar_url)
            html += `<div style="margin-top:20px;"><img style="border-radius:50%;width:150px;height:150px;" src=${res.data.avatar_url} /></div>`;

        html += `<div style="margin-top:20px;">Username: <a href=${res.data.html_url}>${res.data.login}</a></div>`;

        if (res.data.name)
            html += `<div>Name: ${res.data.name}</div>`;
        if (res.data.bio)
            html += `<div>Bio: ${res.data.bio}</div>`;
        if (res.data.location)
            html += `<div>Location: ${res.data.location}</div>`;
        if (res.data.public_repos)
            html += `<div>Public Repos: ${res.data.public_repos}</div>`;
        if (res.data.followers) {
            if (res.data.followers === 0)
                html += `<div>`;
            else
                html += `<div>Followers: ${res.data.followers}`;
            if (res.data.following && res.data.following !== 0)
                html += ` Following: ${res.data.following}</div>`;
            else
                html += `</div>`
        }

        return html;
    }

    function handleSearch() {
        if (login !== user) {
            // if login !== user only then a new API call is made
            let userInfo = document.getElementById('user-info');
            let errorText = document.getElementById('error-text');
            console.log('Clicked on search with user=' + user);

            const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
            if (!regex.test(user)) {
                // adding error messages if the username pattern isn't satisfied
                errorText.innerHTML = `
            <div style="color: red;">Please enter a correct username</div>
            `;
                // removing the previous user results
                userInfo.innerHTML = '';
            }
            else {
                // using axios for API calls
                axios.get(`https://api.github.com/users/${user}`)
                    .then((res) => {
                        console.log(res.data);
                        // updating the login state
                        updateLogin(res.data.login);
                        userInfo.innerHTML = addHTML(res);
                    })
                    .catch((error) => {
                        console.log(`${error.response.status} error is ${error}`);
                        // 404 means user not found for the particular username
                        if (error.response.status === 404) {
                            userInfo.innerHTML = `
                            <div style="margin-top:20px;">Sorry, there seems to be no user with this username</div> 
                            `;
                        }
                    });
            }
        }
    }

    return (
        <div style={{ fontSize: "20px" }}>
            <form action="#">
                <input id='text-field' placeholder="Enter a username to search.." value={user} onChange={(ev) => { document.getElementById('error-text').innerHTML = ''; changeUser(ev.target.value); }} type='text' autoFocus />
                <button style={{ marginLeft: "20px" }} type="submit" onClick={handleSearch}>Search</button>
                {/*used to display error texts, if any*/}
                <div id='error-text'></div>
                {/*used to display user info, if available*/}
                <div id='user-info'></div>
            </form>
        </div>
    );
}

export default Search;