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
        const finalPosition = updatePosition(e.clientX)
        moveSlide(finalPosition);
    }
    function onStart(e){
        e.preventDefault();
        dist.startX = e.clientX
        wrapper.addEventListener('mousemove',onMove)
    }

    function onEnd (e){
        wrapper.removeEventListener('mousemove',onMove)
        dist.finalPosition = dist.movePosition

    }

    function addSlideEvents(){
        wrapper.addEventListener('mousedown',onStart)
        wrapper.addEventListener('mouseup',onEnd)
    }
    function init(){
        addSlideEvents();
        return this;
    }
    return{
        init,
    }
}