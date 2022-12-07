$(document).ready(() =>{
    $(".btn-header").click(() =>{
        $('form').slideDown();
    })
    
    $("#btn-cancelar").click(() =>{
        $("form").slideUp();
    })

    $("form").on('submit',(e) =>{
        e.preventDefault();
        let img = $("#img-up").val();
        let novaImg = $('<li style="display: none"></li>');
        $(`<img src="${img}"/>`).appendTo(novaImg);  
        $(`<div class="overlay">
                <a href="${img}" target="blank" title="Ver em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novaImg);  
        $(novaImg).appendTo('ul');
        $(novaImg).fadeIn(1000);
        $('#img-up').val('');
    })
})