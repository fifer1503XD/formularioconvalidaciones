let users = [
    {
        usuario: "XMXFELIPE",
        nombre: "FELIPE",
        cargo: "Desarrollador",
        telefono:"+573202362",
        correo: "ejemplo@gmail.com",
        celular: 3212526000,
        tipoContacto: "Contacto comercial",
        permisoWebstore: true,
        permisoCrearOrdenes: false,
        permisoEnvioInformacion: false,
        claveAleatoria:"ASDF1234"
    }
]

function TableUsers(){

    const bodytable = document.getElementById('body-table-users')
    bodytable.innerHTML = '';
    console.log(bodytable)
   users.forEach((u)=>{
        row =`<tr>
              <td>${u.usuario}</td>
              <td>${u.nombre}</td>
              <td>${u.cargo}</td>
              <td>${u.telefono}</td>
              <td>${u.correo}</td>
              <td>${u.celular}</td>
              <td>${u.tipoContacto}</td>
              <td>${u.permisoWebstore}</td>
              <td>${u.permisoCrearOrdenes}</td>
              <td>${u.permisoEnvioInformacion}</td>
              <td>${u.claveAleatoria}</td>
            </tr>
             `
        bodytable.innerHTML +=row;1}
       
    )
   }
TableUsers()