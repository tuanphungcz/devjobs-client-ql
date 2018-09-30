export const CONTAINER_WIDTH = {
  mobile: 480,
  tablet: 640,
  desktop: 1040,
};

export const breakpoints = {
  mobile: `@media screen and (min-width: ${CONTAINER_WIDTH.mobile}px)`,
  tablet: `@media screen and (min-width: ${CONTAINER_WIDTH.tablet}px)`,
  desktop: `@media screen and (min-width: ${CONTAINER_WIDTH.desktop}px)`,
};
