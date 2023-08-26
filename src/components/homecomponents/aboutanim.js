

export const slideUp = {
  initial: { y: '100%' },
  open: (i) => ({
    y: '0%',
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: ({
    y: '100%',
    transition: { duration: 0.5 }
  })
}

export const slider = {
  animate: (i) => ({
    x: [0, (i * -1035)],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 4,
        ease: 'linear'
      },
    },
  })
}
