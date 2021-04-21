import x from './x.js'
import './style.scss'
import './style2.less'
import './a.styl'
import png from './assets/1.png'

console.log(png)

const div = document.querySelector('#app1')
div.innerHTML = `
<img src="${png}">
`
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
  const promise = import('./lazy.js')
  promise.then(
    module => {
      const fn = module.default
      fn()
    },
    () => {}
  )
}
document.body.appendChild(button)
