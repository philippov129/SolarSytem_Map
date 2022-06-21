const solarSystem = document.getElementById("solarSystem")
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green"
    },
    
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
    }
]


function renderPlanets(){
  for(let i = 0; i < planets.length; i++){
   let planetDiv = document.createElement("div");
   let infoPlanet;
   planetDiv.className = "planet"
   planetDiv.style.backgroundColor = planets[i].color;
   planetDiv.style.width = `${planets[i].diameter / 500}px`;
   planetDiv.style.height = `${planets[i].diameter / 500}px`;
   solarSystem.appendChild(planetDiv);
//hover mouse info-card about planets
    planetDiv.onmouseover = ()=>{
     infoPlanet = document.createElement("div"); 
    infoPlanet.className = "info-card";
    infoPlanet.style = `top:${(planets[i].diameter / 500)+10}px`;
    infoPlanet.innerHTML = `<p>Name: ${planets[i].name}</p><p>Diameter: ${planets[i].diameter}</p>`;
    planetDiv.appendChild(infoPlanet); 
   }
    planetDiv.onmouseout = ()=>{
     infoPlanet.style="display:none;"
    }
  }
}

renderPlanets();

// Task:
// Write a function to render 
// the planets from the planets array using JavaScript.
 
// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)