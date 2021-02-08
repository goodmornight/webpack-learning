import './index.css';

const btn = document.createElement('button');
btn.innerHTML = "new";
document.body.appendChild(btn);

btn.onclick = function () {
    const div = document.createElement('div');
    div.innerHTML = "div";
    document.body.appendChild(div);
}