let conexion = new XMLHttpRequest();
conexion.open("GET", "../coches.json", true);
conexion.send();

conexion.onreadystatechange = function () {
    if (conexion.readyState === 4 && conexion.status === 200) {
        //acceder al documento
        const json = JSON.parse(conexion.responseText);
        //asociar coches al array de cocches del json
        const coches = json.coches;

        const contenedor = document.getElementById("contenedor");

        for (let i = 0; i < coches.length; i++) {
            const coche = coches[i];

            const cocheContenedor = document.createElement("div");
            cocheContenedor.className = "coche";

            const imagenElemento = document.createElement("img");
            imagenElemento.src = coche.imagen;
            imagenElemento.alt = coche.marca + " " + coche.modelo;

            const infoCoche = document.createElement("div");
            infoCoche.className = "info";

            const tituloElemento = document.createElement("h2");
            tituloElemento.textContent = coche.marca +coche.modelo;
            infoCoche.appendChild(tituloElemento);

            const kilometrosElemento = document.createElement("p");
            kilometrosElemento.textContent =" Kilómetros:" +coche.kilometros;
            infoCoche.appendChild(kilometrosElemento);

            const añoElemento = document.createElement("p");
            añoElemento.textContent = "Año:" +coche.año;
            infoCoche.appendChild(añoElemento);

            const precioElemento = document.createElement("p");
            precioElemento.textContent = "Precio:" +coche.precio +"€";
            infoCoche.appendChild(precioElemento);

            const motorElemento = document.createElement("p");
            motorElemento.textContent = "Motor:" +coche.motor;
            infoCoche.appendChild(motorElemento);

            cocheContenedor.appendChild(imagenElemento);
            cocheContenedor.appendChild(infoCoche);

            contenedor.appendChild(cocheContenedor);
        }
    }
};
