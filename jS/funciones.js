function solicitarNombre(){
    let repeA = true;
    let repeB = true;
    let nombre;
    let apellido;

do {
    nombre = prompt('Ingrese su nombre: ');

    if((nombre !== null) && (nombre !== '')){
        repeA = false;
    }else{
        alert("Ha ingresado un dato invalido, vuelva a intentar.");
    }

} while (repeA);

do {
    apellido = prompt('Ingrese su apellido: ');
    
    repeB = false;
    if((apellido !== null) && (apellido !== '')){
    }else{
        alert("Ha ingresado un dato invalido, vuelva a intentar.");
    }

} while (repeB);

alert(nombre + ' ' + apellido + ', ¡Bienvenido/da a Tu Manga Ar!');
}

function realizarCompra(){
    let opcion = 0;
    let cantidad = 0;
    let total = 0;
    let carritoActivo = false;

    do {
        opcion = Number(prompt('Que producto quieres comprar?\n1) Black Clover.\n2) One Piece.\n3) Dragon Ball Super\n4) Chainsaw Man.\n5) Hunter x Hunter'));
        cantidad = Number(prompt('Cantidad: '));
        
        const mangaElegido = listaMangas.find(mangaElegido => mangaElegido.id === opcion);

        if(opcion){
            total += cantidad * mangaElegido.precio;
        }
        else{
            alert('Opción invalida');
        }

        carritoActivo = confirm('¿Seguir comprando?');

        console.log('Manga: '+mangaElegido.nombreManga + '\nCandidad: ' + cantidad + '\nSubtotal: ' + mangaElegido.precio * cantidad);

    } while (carritoActivo);

    alert('Carrito total: ' + total);

    let totalDescuento = aplicarDescuento(total);

    alert('Carrito con Descuento: ' + totalDescuento);

    let totalEnvio = calcularEnvio(totalDescuento);

    alert('Total con envío: ' + totalEnvio);

    let totalIva = calcularIva(totalEnvio);

    console.log('Total con IVA: ' + totalIva);

    alert('Total con IVA: ' + totalIva);

    return totalIva;

}

function aplicarDescuento(carritoTotal){
    let descuento = 0;
    if(carritoTotal >= 7000){
        alert('Felicidades, aplicaste un descuento del 10%.');
        descuento = carritoTotal * 0.1;
        carritoTotal = carritoTotal - descuento;
    }
    return carritoTotal;
}

function calcularEnvio(carritoTotal){
    if(carritoTotal >= 5000){
        alert('Tenes envío gratis');
    } else{
        carritoTotal = carritoTotal + 750;
    }
    return carritoTotal;
}

function calcularIva(carritoTotal){
    return carritoTotal * 1.21;
}

const listaOrderAsc = () =>  {
    listaMangas.sort((a,b) => a.precio - b.precio);
    mostrarLista();
}

const listaOrderDesc = () =>  {
    listaMangas.sort((a,b) => b.precio - a.precio);
    mostrarLista();
}

const mostrarLista = () => {
    let lista = [];
    listaMangas.forEach(Manga => lista.push(Manga.nombreManga + ' $' + Manga.precio));
    alert('Mangas: \n' + lista.join('\n'));
}