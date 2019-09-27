// ここにJavaScriptコードを書く
const tareas = document.getElementById('tarea');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

for (let i = 0; i < tareas.length; i++) {
    tareas[i].value = tareas[i].value.replace(/な/g, 'にゃ');
    tareas[i].value = tareas[i].value.replace(/無/g, 'にゃ');
}

result.innerText = tareas;
/*
btn.addEventListener('click', () => {
    let findtxt = input_na.value;
    let reptxt = input_nya.value;
    let tagtxt = tarea.value;

    findtxt = new RegExp(findtxt, 'g');
    tagtxt = tagtxt.replace(findtxt, reptxt);

    result.innerText = tagtxt;
});
*/