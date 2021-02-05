import avatar from './bilibili.svg';

console.log(avatar)

let img = new Image();
img.src = avatar;

let root = document.getElementById('root');
root.append(img);