// for my baby girl alishbah
// from saddam

function submitForm() {

    var user_input = document.getElementById("floatingInput").value.toString();
    var display_msg = document.getElementById("display-answer");

    if (user_input.toLowerCase() == "alishbah"){
        display_msg.innerHTML = "Yess Alishbah, You're Saddam's WHOLE HEART and he LOVEEES YOU SOOOOO MUCHHHH!!!"
    }
    else{
        display_msg.innerHTML = "Nope, You've entered the wrong name."
    }
}