import SubscribeService from "./subscribe.service.js";

var html = ""
var registration;


  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => {
        registration = reg
        console.log("votre service worker a été enregistré!");
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    console.warn("Service workers are not supported.");
  }

const dateTimeFormat = Intl.DateTimeFormat("fr");
function afficher(json){
  var imageBox = document.getElementById("container")
        if(typeof json !== "object") {
          json = JSON.parse(json);
        }
        html += '<div class="columns">';
        for(const repo of json) {
          if(repo.images){
              let colDiv = document.createElement("div");
              let cardDiv = document.createElement("div");
              let img = document.createElement("img");
              let cardBodyDiv = document.createElement("div");
              let h5 = document.createElement("h5");
              let a = document.createElement("a");
      
              colDiv.className = "col col-sm-4";
      
              cardDiv.className = "card";
              cardDiv.style = "width: 18rem;";
              
              img.src = repo.images[0].link;
              img.className = "card-img-top";
      
              cardBodyDiv.className = "card-body";
      
              h5.className = "card-title";
              h5.textContent = repo.title;
      
              a.className = "btn btn-primary";
              a.textContent = "Ajouter en favori";  
              
              
                
              a.addEventListener('click', (event) => {
                  var element = event.target
                  var favoriToggle = element.classList.toggle("favori")
                  var parent = element.parentNode
                  var data = {
                    src: parent.previousElementSibling.currentSrc,
                    title: parent.firstChild.textContent,
                    favori: favoriToggle,
                    id: repo.id
                  }

                  data = JSON.stringify(data);

                  SubscribeService.getSubscribe(repo.id).then(res => {
                    if(res.status === 200) {
                      SubscribeService.updateSubscribe(repo.id, data).then(response => {
                        console.log(response)
                      })
                    } else {
                      SubscribeService.createSubscribe(data).then(res => {
                        console.log(res)
                      })
                    }
                  })
              });
      
              colDiv.appendChild(cardDiv);
              cardDiv.appendChild(img);
              cardDiv.appendChild(cardBodyDiv);
              cardBodyDiv.appendChild(h5);
              cardBodyDiv.appendChild(a);
              imageBox.appendChild(colDiv);
          }
        }
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

            console.log('online?', navigator.onLine)
            if (navigator.onLine === true) {
              fetch("https://api.imgur.com/3/gallery/hot/viral/0.json")
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                localforage.setItem("data", res.data);
                afficher(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              var fetchData = localforage.getItem("data");
              fetchData.then(json => afficher(json))
            }
          });

        // fetch("liste.json").then(function(response) {
        //     return response.json();
        //   }).then(data => {
        //     console.log(data)
        //     afficher(data)
        // }).catch(err => {
        //     console.log(err)
        // })
