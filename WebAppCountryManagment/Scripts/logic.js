function Check() {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/management/checkcountry',
        data: {},
        success: function (respuesta) {
            console.log(respuesta);

            let bodyTable = document.getElementById('bodyTable');
            bodyTable.innerHTML = '';

            for (let i = 0; i < respuesta.Querry.length; i++) {
                let row = bodyTable.insertRow();

                let idCell = row.insertCell(0);
                idCell.innerHTML = respuesta.Querry[i].id;

                let paisCell = row.insertCell(1);
                paisCell.innerHTML = respuesta.Querry[i].pais;

                let capitalCell = row.insertCell(2);
                capitalCell.innerHTML = respuesta.Querry[i].capital;

                let poblacionCell = row.insertCell(3);
                poblacionCell.innerHTML = respuesta.Querry[i].poblacion;
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}


function Insert() {
    let Country = document.getElementById('txtCountry').value;
    let Captital = document.getElementById('txtCapital').value;
    let Poblation = document.getElementById('txtPopulation').value;
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/management/CountryInsertion',
        data: { 'country': Country, 'capital': Captital, 'poblation': Poblation },
        success: function (respuesta) {
            console.log(respuesta);

            if (parseInt(respuesta.Querry) > 0) {
                alert('The information was succesfully added');
            } else {
                alert('Theres a mistake');
            }
        },
        error: function (error) {

            console.error('Error:', error);
        }
    });
}