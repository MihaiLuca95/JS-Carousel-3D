class Component {
    constructor(x,y,w,h,root) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.root = root

        this.children = []
        this.render()
    }

    init() {

    }

    addChild(child) {
        if(child instanceof Component && !this.children.includes(child)) {
            this.children.push(child);
        }
    }

    updare(){

    }

    render(){
        let componentClassName = this.constructor.name // which class is this object from?

        // remember the LINK to the DOM element
        this.div = document.createElement('div')
            this.div.className = `carousel__${componentClassName}`
            this.div.id = `carousel__slide`
            this.div.style = `
                border: 1px solid yellow;
                width: ${this.w}rem;
                height: ${this.h}rem;
                position: absolute;
                top: ${this.y}rem;
                left: ${this.x}rem;
                `
        this.root.appendChild(this.div)
    }
}

class Carousel extends Component {

    start() {

    }

    stop() {

    }

}

class Slide extends Component {

    moveForward() {

    }
}

class SlideContainer extends Component {

    constructor(root) {
        super(32.5, 20, 5, 50, root)

        let slideCont
        let lastGcolor = 51
        let color = 57

        for(let i = 0; i < 10; i++) {
            slideCont += this.addChild(new Slide(32.5, 20, 5, 50, root))
            
            if(i<5) {
                document.getElementsByClassName('carousel__Slide')[i].style =` 
                    // border: 1px solid yellow;
                    width: ${this.w}rem;
                    height: ${this.h}rem;
                    position: absolute;
                    top: ${this.y}rem;
                    left: ${this.x}rem; 
                    transform: rotateY(${i*10-45}deg);
                    background-position: -5rem center, top, bottom, ${-5*i+1}rem center;
                    background-image: 
                            linear-gradient(90deg, rgb(${lastGcolor},${lastGcolor},${lastGcolor}), rgb(${lastGcolor + (i+1) * 13},${lastGcolor + (i+1) * 13},${lastGcolor + (i+1) * 13})),
                            radial-gradient(transparent 40%, rgb(${color}, ${color}, ${color}) 42%),
                            radial-gradient(transparent 40%, rgb(${color}, ${color}, ${color}) 42%),
                        url(../image/img640x480-1.png);   
                    background-blend-mode: color-burn;
                `

                lastGcolor += (i+1) * 13
                color += 25
            } else {
                document.getElementsByClassName('carousel__Slide')[i].style =` 
                    // border: 1px solid yellow;
                    width: ${this.w}rem;
                    height: ${this.h}rem;
                    position: absolute;
                    top: ${this.y}rem;
                    left: ${this.x}rem; 
                    transform: rotateY(${i*10-45}deg);
                    background-position: -5rem center, top, bottom, ${-5*i+1}rem center;
                    background-image: 
                            linear-gradient(90deg, rgb(${lastGcolor},${lastGcolor},${lastGcolor}), rgb(${lastGcolor - (i-4) * 13},${lastGcolor - (i-4) * 13},${lastGcolor - (i-4) * 13})),
                            radial-gradient(transparent 40%, rgb(${color}, ${color}, ${color}) 42%),
                            radial-gradient(transparent 40%, rgb(${color}, ${color}, ${color}) 42%),
                        url(../image/img640x480-1.png);   
                    background-blend-mode: color-burn;
                `

                lastGcolor -= (i-4) * 13
                color -= 25
            } 
        }
    }
}

class Button extends Component {
        

}

class ButtonContainer extends Component {
    constructor(root) {
        super(0, 0, 0, 0, root)

    let btnNext = this.addChild(new Button(0, 42.5, 10, 5, root))
    let btnPrev = this.addChild(new Button(60, 42.5, 10, 5, root))

    }
}


let carouselMap = new Carousel(10, 10, 50, 70, window['carousel'])

carouselMap.addChild(new ButtonContainer(window['carousel']))
carouselMap.addChild(new SlideContainer(window['carousel']))
