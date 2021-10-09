function registrar() {

var elemento={
    id:$("#miId").val(),
    name:$("#name").val(),
    email:$("#miEmail").val(),
    age:$("#miAge").val()
}

var dataToSend=JSON.stringify(elemento);
    $.ajax({
        datatype:   'json',
        data:       elemento,
        url:        "https://g2d19cca01d808e-db202109301603.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:        'POST',
        
        success:    function (response) {
                    console.log(response);
                 },

        error:      function(jqXHR, textStatus, errorThrown) {
                 }
        }
     );
}
function consultar() {
    $.ajax( {
        url:        "https://g2d19cca01d808e-db202109301603.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:        'GET',
        datatype:   'json',
        success:    function (json) {
                    $("#idConsulta").empty();
                    for(i=0; i < json.items.length; i++){
                        $("#idConsulta").append(json.items[i].id + json.items[i].name + json.items[i].email + json.items[i].age + " ");
                    }
                    console.log(json)
                 },

        error:      function(xhr,status) {
                    console.log(json)
                 }
        }
     );
}