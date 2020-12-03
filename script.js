let html = "";

const dateTimeFormat = Intl.DateTimeFormat("fr");
function afficher(json){
        if(typeof json !== "object") {
          json = JSON.parse(json);
        }
        html += '<div class="columns">';
        for(const repo of json) {
          if(repo.images){
            html += `<div class="column"><div class="card"><div class="card-content"><div class="media"><div class="media-left"><figure class="image"><img src="${repo.images[0].link}" alt="Placeholder image"/></figure></div><div class="media-content"></div></div>Dernière mise à jour: <time datetime="${repo.datetime}">${repo.datetime}</time><p class="title">${repo.title}</p><br><button class='btn favori-btn btn-success'>+ Ajoutez aux favoris</button></div></div></div>`;
            html += "</div>";
          }
        }

        document.querySelector(".container").innerHTML = html;
      }

        

          document.addEventListener("DOMContentLoaded", function () {
            if (navigator.onLine) {
              document.querySelector(".notification").setAttribute("hidden", "");
            }
          
            window.addEventListener("online", () => {
              document.querySelector(".notification").setAttribute("hidden", "");
            });
            window.addEventListener("offline", () => {
              document.querySelector(".notification").removeAttribute("hidden");
            });
          
            let fetchData;
            if (navigator.onLine) {
              fetch("https://api.imgur.com/3/gallery/hot/viral/0.json")
                .then((response) =>{
                  return response.json();
                })
                .then((res) => {
                  fetchData = localforage.setItem("data", res.data);
                afficher(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            } else if (navigator.onLine == 0) {
              fetchData = localforage.getItem("data");
            }
            fetchData.then((json) => afficher(json));
          });

          var btn = document.getElementsByClassName(".favori-btn");
          console.log(btn)
          btn.onclick = function(event) {
            console.log(event)
          };

        // fetch("liste.json").then(function(response) {
        //     return response.json();
        //   }).then(data => {
        //     console.log(data)
        //     afficher(data)
        // }).catch(err => {
        //     console.log(err)
        // })
