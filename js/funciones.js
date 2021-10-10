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
function obtenerItems() {
    $.ajax( {
        url:        "https://g2d19cca01d808e-db202109301603.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:        'GET',
        datatype:   'json',
        success:    function (response) {
                    
                 var misItems=response.items;

                 for(i=0;i<misItems.length;i++){

                    $("#miResultado").append("<tr>");
                    $("#miResultado").append("<td>"+misItems[i].name+"</td>");
                    $("#miResultado").append("<td>"+misItems[i].email+"</td>");
                    $("#miResultado").append("<td>"+misItems[i].age+"</td>");
                    $("#miResultado").append('<td><button onclick="borrar('+misItems[i].id+')">Borrar</button></td>');
                    $("#miResultado").append('<td><button onclick="obtenerItemEspecifico('+misItems[i].id+')">Cargar</button></td>');
                    $("#miResultado").append("</tr>");
                 }

                },

        error:      function(xhr,status) {
                    console.log(json)
                 }
        }
     );
}
function borrar(idElemento){
    
    var elemento={
        id:idElemento
        };
    
    var dataToSend=JSON.stringify(elemento);
        $.ajax({
            datatype:   'json',
            contentType:'application/json',
            data:       dataToSend,
            url:        "https://g2d19cca01d808e-db202109301603.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
            type:        'DELETE',
            
            success:    function (response) {
                        console.log(response);
                     },
    
            error:      function(jqXHR, textStatus, errorThrown) {
                     }
            }
         ); 

}

function obtenerItemEspecifico(idItem){
    $.ajax({
        url:        "https://g2d19cca01d808e-db202109301603.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client"+idItem,
        type:        'GET',
        datatype:   'json',
        success:    function (response) {
            console.log(response);
            var item=response.items[0];
            $("#miId").val(item.id);
            $("#name").val(item.name);
            $("#miEmail").val(item.enail);
            $("#miAge").val(item.age);
        },     
        error:      function(xhr,status) {
                   
                 }
        }
     );
}

function actualizar() {

    var elemento={
        id:$("#miId").val(),
        name:$("#name").val(),
        email:$("#miEmail").val(),
        age:$("#miAge").val()
    }
    
    var dataToSend=JSON.stringify(elemento);
        $.ajax({
            datatype:   'json',
            data:       dataToSend,
            contentType:'application/json',
            url:        "https://g2d19cca01d808e-db202109301603.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
            type:        'PUT',
            
            success:    function (response) {
                        console.log(response);
                     },
    
            error:      function(jqXHR, textStatus, errorThrown) {
                     }
            }
         );
    }