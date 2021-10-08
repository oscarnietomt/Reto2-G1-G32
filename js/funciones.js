function consultar() {
    $.ajax( {
        url:        "https://g2d19cca01d808e-db202109301603.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:        GET,
        datatype:   "JSON",
        success:    function (json) {
                    $("#idConsulta").empty();
                    for(i=0; i < json.items.length; i++){
                        $("#idConsulta").append(json.items[i].id + json.items[i].name + json.items[i].email + json.items[i].age + " ");
                    }
                    console.log(json)
                },
        }
     );
}