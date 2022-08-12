

//1
const URL = ("http://localhost:8080/api/atleta")
const URL1 = ("http://localhost:8080/api/deporte")

//2 lanzo la petición

window.onload = () => {
    start();
}
//-----------------------------------------------------
//3

const start = async () => {

    const atletas = await getAtleta();
    mappeAtleta(atletas);

    const deportes = await getDeporte();
    mappeDeporte(deportes);

}


//-----------------------------------


const getAtleta = async () => {
    const atleta1 = await fetch(URL);
    const atleta1Json = await atleta1.json();
    return atleta1Json;
}



const getDeporte = async () => {
    const deporte1 = await fetch(URL1);
    const deporte1Json = await deporte1.json();
    return deporte1Json;
}



//----------------------------------------------------------------------------


const mappeAtleta = (atletas) => {
    atletas.data.atleta.map((atleta) => {
        return printAtleta({
            imagen: atleta.images,
            nombre: atleta.name,
            pais: atleta.pais,
            edad: atleta.age,
            deporte: atleta.sports,

        })
    })
};


const mappeDeporte = (deporte) => {
    deporte.data.deportes.map((deportes) => {
        return printDeporte({
            nombre: deportes.name,
            imagen: deportes.images,
            descripcion: deportes.description,

        })
    })
};


//-----------------------------------------------------------------------------------------
const printAtleta = async (atletas) => {

    const juegosOlim = document.querySelector("#atletas")
    juegosOlim.innerHTML += `

    <div class="container-atletas">
    <div class="img-atletas"> <img src="${atletas.imagen}"alt="${atletas.nombre}"/> </div>

    <h2>${atletas.nombre} </h2>
    <h2 class="h2">${atletas.pais} </h2>
    <p>${atletas.edad} </p>
    <p>${atletas.deporte} </p>
    </div>
    </div>
    `
}

const printDeporte = async (deporte) => {
    const juegosOlim = document.querySelector("#deportes")
    juegosOlim.innerHTML += `


 <div class="container-deportes"> 

<div class="div-h2">
<h2 class="h2-depo">${deporte.nombre} </h2>
</div>

<div class="container-imagen">
<div class="img-deportes"> <img src="${deporte.imagen}"alt="${deporte.nombre}"/> </div>
<div>
<p class="paragraphs-depo">${deporte.descripcion} </p>
</div>
</div>
</div>
`
}