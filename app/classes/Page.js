export default class Page {
    constructor({ id, elements, element }) {
        this.id = id
        this.selector = element
        this.selectorChildren = elements
    }

     create () {
         this.element = document.querySelector(this.selector)
        console.log('Create', this.id, this.element)
    }
}