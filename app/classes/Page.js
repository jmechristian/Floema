import each from 'lodash/each';
import GSAP from 'gsap';

export default class Page {
    constructor({ id, elements, element }) {
        this.id = id
        this.selector = element
        this.selectorChildren = { ...elements }
    }

     create () {
        this.element = document.querySelector(this.selector)
        this.elements = {}
        
        each(this.selectorChildren, (selector, key) => {
            if (selector instanceof window.HTMLElement || selector instanceof window.NodeList) {
              this.elements[key] = selector
            } else if (Array.isArray(selector)) {
              this.elements[key] = selector
            } else {
              this.elements[key] = this.element.querySelectorAll(selector)
      
              if (this.elements[key].length === 0) {
                this.elements[key] = null
              } else if (this.elements[key].length === 1) {
                this.elements[key] = this.element.querySelector(selector)
              }
            }
          })
    }

    show() {
        return new Promise(resolve => {
            GSAP.fromTo(this.element, {
              autoAlpha: 0 },
              {
                autoAlpha: 1,
                onComplete: resolve
            })
        })
    }

    hide() {
        return new Promise(resolve => {
            GSAP.from(this.element, {
                autoAlpha: 0,
                onComplete: resolve
            })
        })
    }
}