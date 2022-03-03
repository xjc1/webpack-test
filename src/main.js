import increaseNum from './utils/tools'
import './style/test.css'
import './style/test.less'

console.log('increaseNum', increaseNum(1, 3));

const divElement = document.createElement('div')
divElement.className = 'title'
divElement.innerHTML = 'hhhhh好呵呵呵呵呵呵呵呵'
document.body.appendChild(divElement)
const imgElement = document.createElement('div')
imgElement.className = 'img-block'
document.body.appendChild(imgElement)
