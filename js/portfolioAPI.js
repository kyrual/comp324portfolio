const username = 'kyrual';
function repoLibrary(username) {
    // create a variable to hold the `Promise` returned from `fetch`
    return Promise.resolve(fetch(`https://api.github.com/users/${username}/repos`));
}

repoLibrary(username)
    .then(response => response.json()) // parse response into json
    .then(repo => {

        for (let i in repo) {

            if (repo.message === "Not Found") {
                let p = document.getElementById('repos');

                let ul = document.createElement('ul');

                ul.innerHTML = (`
                <h1>There are no repositories to display, sorry!</h1>`);

                p.appendChild(ul);
            } else {
                let p = document.getElementById('repos');

                let ul = document.createElement('ul');

                ul.innerHTML = (`
                <p><a href="${repo[i].html_url}">${repo[i].name}</a></p>
                <p>${repo[i].description}</p>
                <img src="https://raw.githubusercontent.com/${username}/${repo[i].name}/main/img/bg.jpg">
            `);
                p.appendChild(ul);
            }
        }
    })



