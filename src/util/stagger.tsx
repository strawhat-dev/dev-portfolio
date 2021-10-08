import anime from 'animejs';

export const stagger = (setDisabled: Function, setSecret: Function) => {
  setDisabled(true);
  const staggerElement = document.querySelector('.stagger')!;
  anime.remove(staggerElement);

  const fragment = document.createDocumentFragment();
  const grid = [17, 17];
  const col = grid[0];
  const row = grid[1];
  const numberOfElements = col * row;

  for (let i = 0; i < numberOfElements; i++) {
    fragment.appendChild(document.createElement('div'));
  }

  staggerElement.appendChild(fragment);

  const staggerAnimation = anime
    .timeline({
      targets: '.stagger div',
      easing: 'easeInOutSine',
      loop: false,
      autoplay: false,
      complete: () => {
        setSecret(0);
        setDisabled(false);
      },
    })
    .add({
      translateX: [
        {
          value: anime.stagger('-.1rem', {
            grid: grid,
            from: 'center',
            axis: 'x',
          }),
        },
        {
          value: anime.stagger('.1rem', {
            grid: grid,
            from: 'center',
            axis: 'x',
          }),
        },
      ],
      translateY: [
        {
          value: anime.stagger('-.1rem', {
            grid: grid,
            from: 'center',
            axis: 'y',
          }),
        },
        {
          value: anime.stagger('.1rem', {
            grid: grid,
            from: 'center',
            axis: 'y',
          }),
        },
      ],
      duration: 200,
      scale: 0.5,
    })
    .add({
      translateX: () => anime.random(-10, 10),
      translateY: () => anime.random(-10, 10),
    })
    .add({
      translateX: anime.stagger('.25rem', {
        grid: grid,
        from: 'center',
        axis: 'x',
      }),
      translateY: anime.stagger('.25rem', {
        grid: grid,
        from: 'center',
        axis: 'y',
      }),
      rotate: 0,
      scaleX: 2.5,
      scaleY: 0.25,
    })
    .add({
      rotate: anime.stagger([90, 0], { grid: grid, from: 'center' }),
    })
    .add({
      translateX: 0,
      translateY: 0,
      scale: 0.5,
      scaleX: 1,
      rotate: 180,
      duration: 200,
    })
    .add({
      scaleY: 1,
      scale: 1,
    });

  staggerAnimation.play();
};
