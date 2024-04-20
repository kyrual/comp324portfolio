const username = 'kyrual';
function repoLibrary(username) {
    // create a variable to hold the `Promise` returned from `fetch`
    return Promise.resolve(fetch(`https://api.github.com/users/${username}/repos`));
}

repoLibrary(username)
    .then(response => response.json()) // parse response into json
    .then(data => {
        // update html with data from github
        for (let i in data) {
            // Get the ul with id of userRepos

            if (data.message === "Not Found") {
                let p = document.getElementById('repos');

                // Create variable that will create li's to be added to ul
                let ul = document.createElement('ul');

                ul.innerHTML = (`
                <p><strong>No account exists with username:</strong> ${gitHubUsername}</p>`);
                // Append each li to the ul
                p.appendChild(ul);
            } else {

                let p = document.getElementById('repos');

                // Create variable that will create li's to be added to ul
                let ul = document.createElement('ul');

                // Create the html markup for each li
                ul.innerHTML = (`
                <p><strong>Repo:</strong> <a href="${data[i].html_url}">${data[i].name}</a></p><br>
                <p><strong>Description:</strong> ${data[i].description}</p><br>
            `);

                // Append each li to the ul
                p.appendChild(ul);
            }
        }
    })



