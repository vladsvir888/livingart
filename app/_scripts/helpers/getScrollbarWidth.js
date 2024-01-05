const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);

export default getScrollbarWidth;
