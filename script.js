const DATA_API = 'https://jsonplaceholder.typicode.com/users';

function postData(){

    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let bornDate = document.getElementById('bornDate').value;

    let values ={name, surname, bornDate};
    
    fetch(DATA_API, {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify(values)        
    })
    .then(response=> response.json())
    .then(data => {        
        Swal.fire({
            title: 'Datos Enviados',
            html:( `<p>Nombre: ${data.name}</p> 
                    <p>Apellido: ${data.surname}</p> 
                    <p>Fecha de Nacimiento: ${data.bornDate}</p>`),
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        });
        console.log(data);
    });    
}

document.addEventListener('DOMContentLoaded', ()=>{

    let btnSend = document.getElementById('btnSend');

    btnSend.addEventListener('click',()=>{
        postData();
    });
});