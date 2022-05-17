new hoverEffect({
  parent: document.querySelector('.distortion'),
  intensity: 0.2,
  image1: './img/chelmikowski2.svg',
  image2: './img/12.png',

  displacementImage: './img/diss.png',
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false,
  });
});
