function reduireArray(array, size) {
    if (array.length <= size) {
        return [array];
    }
    return [array.slice(0, size), ...reduireArray(array.slice(size), size)];
}

const dateTimeFormat = Intl.DateTimeFormat("fr");
function afficher(json){
    const repos = json.map(j => ({name: j.title,description: j.topic || "",link: j.link, datetime: j.datetime}));
    console.log(json)
    const selections = reduireArray(repos, 3);
    let html = "";selections.forEach(selection => {
        console.log(selection)
        html += '<div class="columns">';
        selection.forEach(repo => {
            console.log(repo)
            html += `<div class="column"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="${repo.link}"alt="Placeholder image"/></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="${repo.link}" alt="Placeholder image"/></figure></div><div class="media-content"><p class="title is-4">${repo.name}</p><p class="subtitle is-6">@Parcourir</p></div></div><div class="content">${repo.description}<br />Dernière mise à jour: <time datetime="${repo.datetime}">${dateTimeFormat.format(new Date(repo.datetime))}</time></div></div></div></div>`;});
            html += "</div>";});
            document.querySelector(".container").innerHTML = html;
        }

        window.fetch("https://api.imgur.com/3/gallery/hot/viral/0.json").then(function(response) {
            return response.json();
          }).then(function(data) {
            afficher(data);
            console.log(data);
          }).catch(function(err) {
            console.log(err);
          });
