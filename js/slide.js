 import debounce from "./debounce.js";
 export default function slide(slideSelect, wrapperSelect){
    const slide = document.querySelector(slideSelect)
    const wrapper = document.querySelector(wrapperSelect)
    const dist = { finalPosition:0, startX:0, movement:0,}
    
    function moveSlide(distX){
        dist.movePosition = distX
        slide.style.transform = `translate3d(${distX}px, 0, 0)`
    }

    function updatePosition(clientX){
        dist.movement = (dist.startX - clientX) * 2
        return  dist.finalPosition - dist.movement;
    }

    function onMove(e){
        const pointerPosition = (e.type === 'mousemove')
        ?e.clientX:e.changedTouches[0].clientX
        const finalPosition = updatePosition(pointerPosition)
        moveSlide(finalPosition);
    }
    function onStart(e){
        let movetype;
        if(e.type === 'mousedown'){
             e.preventDefault();
             movetype = 'mousemove'
             dist.startX = e.clientX
        }
        else{
            dist.startX = e.changedTouches[0].clientX
            movetype = 'touchmove'
        }
        
        wrapper.addEventListener(movetype,onMove)
    }

    function onEnd (e){
        const movetype = (e.type === 'mouseup')?'mousemove':'touchmove'
        wrapper.removeEventListener(movetype,onMove)
        dist.finalPosition = dist.movePosition

    }

    function addSlideEvents(){
        wrapper.addEventListener('mousedown',onStart)
        wrapper.addEventListener('touchstart',onStart)
        wrapper.addEventListener('mouseup',onEnd)
        wrapper.addEventListener('touchend',onEnd)
        
    }
    function init(){
        addSlideEvents();
        return this;
    }
    return{
        init,
    }
}