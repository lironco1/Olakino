function initPageBody(className) {
  document.body.classList.add(className);
  document.body.classList.add("sidebar-collapse");
  document.documentElement.classList.remove("nav-open");
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  return function cleanup() {
    document.body.classList.remove(className);
    document.body.classList.remove("sidebar-collapse");
  };
}

export default initPageBody;
