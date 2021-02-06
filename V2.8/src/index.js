import createAvatar from './createAvatar.js';
import avatar from './bilibili.svg';
import style from './index.css';

createAvatar();

let img = new Image();
img.src = avatar;
img.classList.add(style.avatar)

let root = document.getElementById('root');
root.append(img);