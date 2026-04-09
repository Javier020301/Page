const btn_search = document.getElementById("btn_search");
const input_search = document.getElementById("search");
const conteiner = document.getElementById("targets");

let characters = [];


fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
        characters = data.results;
        console.log(characters);
        showcharacters(characters);
    });

    
function showcharacters(list) {
    conteiner.innerHTML = ""; //clear container
    list.forEach(pj => {
        const card = `
            <aside class="card" style="border: solid black 1px;" onclick="showdetails(${pj.id})">
                <img src="${pj.image}">
                <h3>${pj.name}</h3>
                <p>Especie: ${pj.species}</p>
            </aside>
        `;
        conteiner.innerHTML += card;
    });
}


btn_search.addEventListener("click", (e) => {
    e.preventDefault();
    const f = input_search.value.toLowerCase();
    const filters = characters.filter(pj => 
        pj.name.toLowerCase().includes(f)
    );

    showcharacters(filters);
});

function showdetails(index) {
    window.location.href = `informationCard.html?index=${index}`;
}
