import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'


const imageLinkHtml = (link, src, alt) => `<a href="${link}" target="_blank"><img src="${src}" alt="${alt}" /></a>`;

/** Image of Vite logo inside an anchor tag */
export const viteLogoLink = imageLinkHtml('https://vitejs.dev', viteLogo, 'Vite logo');
/** Image of the JavaScript logo inside an anchor tag */
export const javascriptLogoLink = imageLinkHtml('https://developer.mozilla.org/en-US/docs/Web/JavaScript', javascriptLogo, 'JavaScript logo');

