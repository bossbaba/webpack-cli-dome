import _ from 'lodash'
import './assets/css/style.css'
import BJKimage from './assets/img/23.jpg'
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  var myImage = new Image()
  myImage.src = BJKimage
  element.appendChild(myImage)
  alert(9999999999999999999999999)
  return element;
}

document.body.appendChild(component());