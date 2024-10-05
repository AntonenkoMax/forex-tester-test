export const scrollToTop = (topCoordinate?: number) => {
  return setTimeout(() => {
    window.scrollTo({
      top: topCoordinate ?? 0,
      behavior: "smooth",
    });
  }, 100);
};
