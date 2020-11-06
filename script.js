$(function(){

/*Al clikear el link que este se abra en una ventana nueva*/

    $("a").attr('target','_blank');

/*Agregar los icomos de fontawasome*/

    $("a.facebook").prepend('<i class="fab fa-facebook-f"></i>');

    $("a.instagram").prepend('<i class="fab fa-instagram"></i>');

    $("a.twitter").prepend('<i class="fab fa-twitter"></i>'); 

    $("a.snapchat").prepend('<i class="fab fa-pinterest"></i>');

/*Al dar un click a cierto texto este cambie de color*/

    $("h2").click(function(){
        $(this).css("color", "red")
    });

/*Seleccionar un Li de un seccion, añadi una clase y use el selector de hijos*/

    $("li.ultimo:nth-last-child(1)").append('<ul><li><a href="#">link 4.a</a></li></ul>');

/*Use el mismo codigo anterior solo cambie el metodo y el contenido*/

    $("li.ultimo:nth-last-child(1)").after('<li><a href="#">link 5</a></li>');

});