// ES Module 模块引入方式
import Header from './header.js'
import Sidebar from './sidebar.js'
import Content from './content.js'

let dom = document.getElementById('root');

new Header();
new Sidebar();
new Content();