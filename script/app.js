const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****"
const CONTENT_ARTICLE_TEASERS = [
  "This is an article about first party that happened this weekend",
  "This is an article about second party that happened this weekend",
  "This is an article about third party that happened this weekend" ];

const dynamicContent = () => {
  const teasers = document.querySelectorAll('.teaser__text');
  const marqueeBar = document.querySelector('marquee');

  // mock content delay
  setTimeout(() => marqueeBar.innerHTML = CONTENT_BREAKING_NEWS, 3000);

  // create dynamic content
  teasers.forEach((teaser, index) => {
    teaser.innerHTML = CONTENT_ARTICLE_TEASERS[index];
  });
};

const acceptCookies = () => {
  document.body.classList.remove('no-scroll');
  document.querySelector('.cookieLayer__base').classList.add('cookieLayer__base--hidden');
};

const cookieLayerInit = () => {
  document.body.classList.add('no-scroll');
  const cookieBanner = document.querySelector('#cookie-banner')
  const cookieTemplate = `
  <div class="cookieLayer__content cookieLayer__base">
    <h2 class="cookieLayer__title">Do you like cookies?</h2>
    <p class="cookieLayer__text">This is the best chocolate chip cookies recipe ever! No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time!</p>
    <p class="cookieLayer__text">The first step in making these easy chocolate chip cookies to to combine the dry ingredients in a medium size bowl. Next, cream together butter and sugars. Add the eggs & vanilla and beat to combine. Add dry ingredients and stir until just combined. Then add the chocolate chips and beat until they are evenly distributed throughout the dough.</p>
    <button class="cookieLayer__button" onclick="acceptCookies()">I solemny swear I will bake these cookies</button>
    <div class="cookieLayer__disclaimer">This box is made using <s>Vue.js</s> Vanilla JS</div>
  </div>
  `

  cookieBanner.innerHTML = cookieTemplate
};

const layoutTrashing = (n) => {
  for (let i = 0; i < n; i++) {
    const container = document.querySelector('header');
    console.log(container.clientTop);
  }
};

const initApp = () => {
  const lazyLoadInstance = new LazyLoad();
  
  layoutTrashing(20);
  dynamicContent();
  cookieLayerInit();
  lazyLoadInstance.update();
};

initApp();