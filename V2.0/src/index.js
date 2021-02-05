// CommonJS 模块引入方式
let Header = require('./header.js');
let Sidebar = require('./sidebar.js');
let Content = require('./content.js');
let image = require('./bilibili.svg');

new Header();
new Sidebar();
new Content();