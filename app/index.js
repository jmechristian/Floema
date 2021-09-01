import About from './pages/About'
import Collections from './pages/Collections'
import Home from './pages/Home'
import Details from './pages/Details'

class App {
  constructor() {
    this.createContent()
    this.createPages()
  }

createContent () {
  this.content = document.querySelector('.content')
  this.template = this.content.getAttribute('data-template')

}


createPages() {
  this.pages = {
    about: new About(),
    collections: new Collections(),
    details: new Details(),
    home: new Home()
  }

  this.page = this.pages[this.template]
  this.page.create()

  console.log(this.page)
}}

new App()