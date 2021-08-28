 import debounce from "./debounce.js";
 export default function slide(slideSelect, wrapperSelect){
    const slide = document.querySelector(slideSelect)
    const wrapper = document.querySelector(wrapperSelect)






    function onMove(e){
        
    }
    function onStart(e){
        e.preventDefault();
        wrapper.addEventListener('mousemove',onMove)
 
    }

    function onEnd (e){
        wrapper.removeEventListener('mousemove',onMove)
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