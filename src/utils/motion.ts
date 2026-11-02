export const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;
export const EASE_BOUNCE = [0.34, 1.56, 0.64, 1] as const;
export const EASE_SNAP = [0.87, 0, 0.13, 1] as const;
export const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const;

export const fadeInVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_EDITORIAL },
  },
};

export const scaleUpVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_EDITORIAL },
  },
};

export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};
