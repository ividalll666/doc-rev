
// funcão que muda o estado do dropdown: o parâmetro "number" é o ID do DD.
function dropdownChange(number)
{
    let id = number;
    // Iremos passar esse ID para a funcão que pega o elemento.
    let btn = document.getElementById(id);

    // E agora é questão de checarmos se ele está aberto ou fechado - vulgo exibido ou oculto.
    if( btn.classList.contains("dropdown-openned"))
    {
        btn.classList.remove("dropdown-openned");
        btn.classList.add("dropdown-closed");

        // Muito importante dar display none pois caso só ocultemos, ele continuará ativo.
        setTimeout( function() {btn.style.display = "none"} , 502);
    }

    else
    {
        btn.classList.remove("dropdown-closed");
        btn.style.display = "block";
        btn.classList.add("dropdown-openned");
    }
}