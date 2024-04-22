const username = 'kyrual';
function repoLibrary(username) {
    // create a variable to hold the `Promise` returned from `fetch`
    return Promise.resolve(fetch(`https://api.github.com/users/${username}/repos`));
}

repoLibrary(username)
    .then(response => response.json()) // parse response into json
    .then(repo => {
        // update html with data from github
        for (let i in repo) {
            // Get the ul with id of userRepos

            if (repo.message === "Not Found") {
                let p = document.getElementById('repos');

                // Create variable that will create li's to be added to ul
                let ul = document.createElement('ul');

                ul.innerHTML = (`
                <h1>There are no repositories to display, sorry!</h1>`);
                // Append each li to the ul
                p.appendChild(ul);
            } else {

                let p = document.getElementById('repos');

                // Create variable that will create li's to be added to ul
                let ul = document.createElement('ul');

                // Create the html markup for each li
                ul.innerHTML = (`
                <p><strong>Repo:</strong> <a href="${repo[i].html_url}">${repo[i].name}</a></p><br>
                <p><strong>Description:</strong> ${repo[i].description}</p><br>
                <img src="https://api.github.com/users/${username}/${repo[i]}/img/bg.jpg">
            `);

                // Append each li to the ul
                p.appendChild(ul);
            }
        }
    })



