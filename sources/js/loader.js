function loader() {
    let mask = document.querySelector('.mask');
    window.addEventListener('load', () => {
        mask.classList.add('hide');
        // setTimeout(() => {
        mask.remove();
        document.querySelector('body').style.overflow = "scroll";
        // }, 0,6)
        
    })
}
loader();