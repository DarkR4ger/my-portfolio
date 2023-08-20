export const SlideIn = {
  initial: { y: "100%", height: "100%" },
  enter: (i) => ({
    y: '0%',
    height: '0%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const SlideNom = {
  initial: { y: "100%", height: "100%" },
  enter: {
    y: "0%",
    height: "0%",
    transition: { duration: 2, ease: [0.76, 0, 0.24, 1] },
  },
};
export const ExitSlide = {
  intial: { y: '0%', height: '0%' },
  exit: {
    y: "-100%",
    height: "100%",
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
  },
}
export const ExitSlideSep = {
  initial: { y: '0%', height: '0%' },
  exit: i => ({
    y: "-100%",
    height: '100%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

