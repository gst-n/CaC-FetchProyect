


//declaramos una funcion que renderiza elem en el DOM

 function pedirDatos(){

    fetch("https://api.api-onepiece.com/v2/characters/en/")
    .then(function(response){
        return response.json();
    })
    .then(function(personajes){
        //console.log(personajes);
        // llevamos los datos al espacio de renderizado en el archivo HTML
        const container = document.getElementById("contenedor-tarjetas");
        // utilizamos el bucle ForEach, que hace recorrido por Array,
        // pero le da funcionalidad a cada elemento del Array
        // // console.log(personajes[0]);
        personajes.forEach(function(dato){
            const article = document.createElement('article');
            //Agregamos estilo a article
            article.classList.add("tarjeta");
            //Inyectamos contenido a <article>

            article.innerHTML = `
            
            <label>Nombre:</label>
            <p>${dato.name}</p>
            <div>
              <label>Edad:</label>
              <p>${dato.age}</p>
              <label>Nombre</label>
              <p><i ${dato.bounty} "></i>${dato.crew.roman_name}</p>
              <label>Trabajo:</label>
              <p>${dato.job}</p>
            </div>
            `
            //ADjuntamos el contenido 
            container.appendChild(article);
        })
    })
    .catch();


}

pedirDatos();