/* eslint-disable no-console */
import { onMessage } from 'webext-bridge';
import { createApp } from 'vue';
import vws from 'virtual:windi.css?inline';
import appCss from './app.css?inline';

// eslint-disable-next-line
// @ts-ignore
import App from './views/App.vue';

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(() => {
  console.info('[vitesse-webext] Hello world from content script');
  console.log(appCss, vws);

  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    // console.log(`[vitesse-webext] Navigate from page "${data.title}"`);
  });

  // mount component to context window
  const container = document.createElement('div');
  const root = document.createElement('div');
  const styleWindi = document.createElement('script');
  // styleWindi.textContent = vws;

  const styleApp = document.createElement('script');
  // styleApp.textContent = appCss;
  /* const shadowDOM =
    container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) ||
    container; */
  const shadowDOM = container.attachShadow?.({ mode: 'closed' }) || container;
  // styleWindi.setAttribute('src', 'stylesheet');
  styleWindi.setAttribute(
    'src',
    // eslint-disable-next-line
    // @ts-ignore
    browser.runtime.getURL(appCss),
    // appCss,
  );

  shadowDOM.appendChild(styleWindi);
  shadowDOM.appendChild(styleApp);
  shadowDOM.appendChild(root);
  document.body.appendChild(container);
  createApp(App).mount(root);

  if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', (newModule) => {
      if (
        newModule.type === 'update' &&
        newModule.updates.some((u) => u.path.includes('windi.css.js'))
      ) {
        console.log(`Receving new module...`, newModule);
      }
    });
  }
})();
