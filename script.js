const FadeOut = () => {
    const loaderWrapper =
    document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', FadeOut);

let expression = ""
let result = 0;
let screen_value = document.getElementById('input');
buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        button_text = e.target.innerText
        console.log("button : " + button_text);
        if (screen_value.innerText == 0 && button_text != 'C' && button_text != '=') {
            expression = button_text;
        } else {
            if (button_text == 'C') {
                expression = '0';
            } else if (button_text == '='){
                expression = eval(expression)
            } else {
                expression += button_text;
            }
        }
        screen_value.innerText = expression;
        if (expression.length > 34) {
            alert('too many characters for me to display :(')
            expression = '0';
            screen_value.innerText = expression;
        }
    });
}

window.onerror = function(){
    alert("PLEASE INPUT VALID EXPRESSION");
    expression = '0';
    screen_value.innerText = expression;
    console.clear();
}
