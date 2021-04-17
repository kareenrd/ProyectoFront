class operaciones {

    top_3(){
        //cargando los datos
        $.ajax({
            url: "datos.json"
        }).done(function (resultado) {

            var canciones = resultado['canciones'];

            canciones.sort(function (a, b) {
                if (a.reproducciones < b.reproducciones) {
                    return 1;
                }
                if (a.reproducciones > b.reproducciones) {
                    return -1;
                }
                return 0;
            
            });
            console.log('---- ',canciones);

            for(var i = 0; i < 3; i++) {
                document.getElementById('top_canciones').innerHTML += 
                '<tr>'+
                    '<td class="nombre_cancion">'+canciones[i].nombre+'</td>'+
                    '<td>'+
                        '<div class="audio">'+
                            '<audio controls >'+
                                '<source src="canciones/'+canciones[i].ruta+'" type="audio/mpeg">'+
                            '</audio>'+
                        '</div>'+
                    '</td>'+
                '</tr>';
            }
        });
    }

    btn_contacto(){
        var existe = document.getElementById('btn_contacto');
        console.log(existe);
        if(existe == null){
            var newDiv = document.createElement("div");
            newDiv.id = 'btn_contacto';
            newDiv.classList = 'modal fade';
            newDiv.innerHTML = 
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                        '<div class="modal-header">'+
                            '<h4 class="modal-title">Contacto</h4>'+
                            '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                        '</div>'+
                        '<div class="modal-body">'+
                            '<p>info@oye.com</p>'+
                            '<p>+1 123 12 34</p>'+
                        '</div>'+
                        '<div class="modal-footer">'+
                            '<button type="button" class="btn btn-info" data-dismiss="modal">Cerrar</button>'+
                        '</div>'+
                    '</div>'+
                '</div>';
            var currentDiv = document.getElementById("footer");
            document.body.insertBefore(newDiv, currentDiv);
            $("#btn_contacto").modal();
        } else {
            $("#btn_contacto").modal();
        }
    }

    lista_canciones(){
        $.ajax({
            url: "datos.json"
        }).done(function (resultado) {

            var canciones = resultado['canciones'];

            
            //console.log('---- ',canciones);
            for(var i in canciones){
                console.log(canciones[i]);
                document.getElementById('lista_canciones').innerHTML += 
            }

            
        });
    }
}

var op = new operaciones();