// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = 'https://bored.api.lewagon.com/api/activity'

const btn = document.querySelector('button')
// catcher la balise html du H2 => lui injecter du code text
const title = document.getElementById('activity')
// ma function / logique qui permet de naviguer et de récup sur l'api

// lance une requete / j'accède au lien
const myActivities = () => {
  fetch(url) // j'accede à l'url de l'api
  .then(response => response.json()) // c'est un cran arrêt (stop momentanement le programme)
  .then((data) => {
    title.innerText = data.activity
    console.dir(title)
  })
}

btn.addEventListener('click', myActivities)

// écouter le click sur le bouton pour lancer ma function