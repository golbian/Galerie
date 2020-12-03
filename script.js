// function reduireArray(array, size) {
//     if (array.length <= size) {
//         return [array];
//     }
//     return [array.slice(0, size), ...reduireArray(array.slice(size), size)];
// }

let html = "";

const dateTimeFormat = Intl.DateTimeFormat("fr");
function afficher(json){
        html += '<div class="columns">';
        for(const repo of json) {
          if(repo.images){
            html += `<div class="column"><div class="card"><div class="card-content"><div class="media"><div class="media-left"><figure class="image"><img src="${repo.images[0].link}" alt="Placeholder image"/></figure></div><div class="media-content"></div></div>Dernière mise à jour: <time datetime="${repo.datetime}">${repo.datetime}</time><p class="title">${repo.title}</p><br><button class='btn btn-success'>+ Ajoutez aux favoris</button></div></div></div>`;
            html += "</div>";
          }
        }
            document.querySelector(".container").innerHTML = html;
        }

        fetch("https://api.imgur.com/3/gallery/hot/viral/0.json").then(function(response) {
            return response.json();
          }).then(function(res) {
              console.log(res)
            afficher(res.data);
          }).catch(function(err) {
            console.log(err);
          });

        // fetch("liste.json").then(function(response) {
        //     return response.json();
        //   }).then(data => {
        //     console.log(data)
        //     afficher(data)
        // }).catch(err => {
        //     console.log(err)
        // })
