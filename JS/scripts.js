$(document).ready(function() {

    //  **Selectores**

    $("li[name='paris']").hover(function(){
        $("img").attr("src", "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpg") ;
    }, function(){
        $("img").attr("src", "https://cdn.forbes.com.mx/2018/09/cancun_0-e1537917376271-640x360.jpg")
    });

    $("li[name='tokyo']").hover(function(){
        $("img").attr("src", "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9raW8lMjB0b3dlcnxlbnwwfHwwfHx8MA%3D%3D.jpg") ;
    }, function(){
        $("img").attr("src", "https://cdn.forbes.com.mx/2018/09/cancun_0-e1537917376271-640x360.jpg")
    });

    $("li[name='ny']").hover(function(){
        $("img").attr("src", "https://i.insider.com/5824cb6f46e27a1b058b5f52?width=700.jpg") ;
    }, function(){
        $("img").attr("src", "https://cdn.forbes.com.mx/2018/09/cancun_0-e1537917376271-640x360.jpg")
    });

    //  **Efectos**
    $("#ocultar").click(function(){
        $(".contenido p").hide();
    });

    $("#mostrar").click(function(){
        $(".contenido p").show();
    });

    $("#alternar").click(function(){
        $(".contenido p").fadeToggle();
    });

    //  **Manipulación del DOM**
    $("#agregarDestino").click(function(){
        $("ul").append("<li>Nueva Destinación</li><br>");
    });

    $("#eliminarDestino").click(function(){
        $("ul li:last").remove();
    });

    //  **Eventos**
    $("#nombre").focus(function(){
        $(this).css("background-color", "#e0f7fa");
    }).blur(function(){
        $(this).css("background-color", "#fff");
    });

    $("#email").keyup(function(){
        $("#mensajeTeclado").text("Correo ingresado: " + $(this).val());
    });

    //  **Animación**
    $("#mover").click(function(){
        $(".contenido").animate({marginLeft: '+=50px', opacity: '0.7'}, "slow");
    });

});
