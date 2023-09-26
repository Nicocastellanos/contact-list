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
function agregarContacto(id, nombre, apellido, telefono, ubicacion) {
    const nuevoContacto = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        ubicacion: ubicacion,
    }
    listaContactos.push(nuevoContacto);
};
agregarContacto(121241, "mario", "paorew", 13294102951, ubicacion = "colombia", ubicacion = "ig293ug");
console.log(listaContactos);