import gsap from 'gsap';

export function beforeNavEnter(el) {
  gsap.set(el, {
    css: { opacity: '0' },
    ease: 'power3.inOut',
  });
}

export function enterNav(el, done) {
  gsap.to(el, {
    duration: 0.2,
    css: { opacity: '1' },
    ease: 'power3.inOut',
    onComplete: () => {
      done();
    },
  });
}

export function beforeNavLeave() {}

export function leaveNav(el, done) {
  gsap.to(el, {
    duration: 0.2,
    css: { opacity: '0' },
    ease: 'power3.inOut',
    onComplete: () => {
      done();
    },
  });
}
