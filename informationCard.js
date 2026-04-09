
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("index");

const conteneiner = document.getElementById("description-container");



fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(pj => {
        conteneiner.innerHTML = `
            <img src="${pj.image}" style="border-radius: 50%; width: 250px;">
            <h1>${pj.name}</h1>
            <div style="font-size: 1.2rem; background: #f0caca; padding: 20px; display: inline-block; border-radius: 10px;">
                <p><strong>Status:</strong> ${pj.status}</p>
                <p><strong>Species:</strong> ${pj.species}</p>
                <p><strong>Gender:</strong> ${pj.gender}</p>
                <p><strong>Origin:</strong> ${pj.origin.name}</p>
                <p><strong>Appears in:</strong> ${pj.episode.length} episodes</p>
            </div>
        `;
    });


function returnHome() {
    window.location.href = "index.html";
}