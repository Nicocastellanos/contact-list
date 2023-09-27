//cree una constante donde guardo la lista de contactos 
const listaContactos = [
    {
        id: 1224,
        nombre: "sergio",
        apellido: "Sanchez",
        telefono: 124136231,
        ubicacion: { ciudad: "Colombia", direccion: "2t2466" },
    },
    {
        id: 13434,
        nombre: "Mario",
        apellido: "Castañeda",
        telefono: 324745141,
        ubicacion: { ciudad: "Guatemala", direccion: "232gwd42" },
    },
    {
        id: 65432,
        nombre: "Mario",
        apellido: "Martinez",
        telefono: 12423323521,
        ubicacion: { ciudad: "si", direccion: "2t2qwfq6" },
    },
];
//cree una funcion la cual se va a encargar de poder crear un nuevo contacto 
function agregarContacto(id, nombre, apellido, telefono, ubicacion) {
    const nuevoContacto = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        ubicacion:{ciudad , direccion},
    }
    listaContactos.push(nuevoContacto);
};
//cree una funcion que se va a encargar de buscar y borrar a un usuario SOLO POR EL ID, es decir busca el id y borra todo el contacto
function borrarContactoPorId(id) {
    const indice = listaContactos.findIndex(function (agregarContacto) {
        return agregarContacto.id === id;
    });

    if (indice !== -1) {
        let nombreBorrado = listaContactos[indice].nombre + " " + listaContactos[indice].apellido;
        listaContactos.splice(indice, 1);
        console.log("Contacto borrado:", nombreBorrado);
    } else {
        console.log("No se encontró el contacto con ID:", id);
    }
}
//ejemplos 
agregarContacto(1246241, "Patroclo", "Morales", 7352462646, ciudad = "Ecuador", direccion = "gah5322yg");
agregarContacto(121241, "Armando", "Casas", 13294102951, ciudad = "Argentina", direccion = "ig293ug");
borrarContactoPorId(1224);
console.log(listaContactos);