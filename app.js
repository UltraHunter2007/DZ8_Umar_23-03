function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const button = answer.previousElementSibling;

    answer.classList.toggle("visible");
    if(answer.classList.contains("visible")){
        button.textContent = "Скрыть ответ";
        document.getElementById(id).style.display = "block";
    }else{
        button.textContent = "Показать ответ";
        document.getElementById(id).style.display = "none";
    }
}