let miLista =
    ['Juan Castillo',
        'Miguel Martinez',
        'Maria Gomez']
function agregarNuevoContacto(contacto) {
    miLista.push(contacto);
    console.log('Contacto agregado ' + contacto);
}
console.log(miLista);
const borrarContacto = (contacto) => {
    let indice = miLista.indexOf(contacto);
    if (indice !== -1) {
        miLista.splice(indice, 1);
        console.log('Contacto borrado: ' + contacto);
    } else {
        console.log('No se encontro ese contacto');
    }
}
const mostrarLista = () => {
    for (const i of miLista) {
        console.log('Estos son los usuarios: ' + i);
    }
}
agregarNuevoContacto('Mauricio Cardenas');
agregarNuevoContacto('Pepito Fernandez');
borrarContacto('Mauricio Cardenas');
mostrarLista(miLista);