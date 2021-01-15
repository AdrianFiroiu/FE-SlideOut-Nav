let card = document.getElementById('activator');
let tl = gsap.timeline({defaults: {ease: "power2.inOut"}});
let toggle = false;

tl.to('.activator', {
    background: '#e34c26',
    'borderRadius': '50% 0 0 50%'
});
tl.to('nav', {
    'clipPath': 'ellipse(100% 100% at 50% 50%)'
}, '-=.5');
tl.to('nav img', {
    opacity: 1,
    transform: 'translateX(0)',
    stagger: .05
}, '-=.5');
tl.pause();

card.addEventListener('click', () => {
    toggle = !toggle;
    toggle ? tl.play() : tl.reverse();
})