import anime from 'animejs';

export const animate = () => {
  const textWrappers = document.querySelectorAll('.ani-letters')!;
  textWrappers.forEach((textWrapper) => {
    textWrapper.innerHTML = textWrapper.textContent!.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
  });

  anime.timeline({ loop: false }).add({
    targets: '.ani-letters .letter',
    translateX: [40, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 5000,
    delay: (_, i) => 30 * i,
  });

  anime.timeline({ loop: false }).add({
    targets: '.ani-right',
    translateX: [1000, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 5000,
    delay: (_, i) => 30 * i,
  });

  anime.timeline({ loop: false }).add({
    targets: '.ani-left',
    translateX: [-1000, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 5000,
    delay: (_, i) => 30 * i,
  });

  anime.timeline({ loop: false }).add({
    targets: '.ani',
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 5000,
    delay: (_, i) => 30 * i,
  });
};
