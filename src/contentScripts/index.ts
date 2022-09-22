/* eslint-disable no-console */
import { onMessage } from 'webext-bridge';
import 'virtual:windi.css';
// eslint-disable-next-line
// @ts-ignore
import App from './views/App.vue';

(() => {
  console.info('[vitesse-webext] Hello world from content script');

  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    // console.log(`[vitesse-webext] Navigate from page "${data.title}"`);
  });

  // mount component to context window
  const container = document.createElement('div');
  container.id = 'crxjs-ext';
  const root = document.createElement('div');
  root.id = 'crxjs-ext-root';

  // Todo: open on dev / close for production
  const shadowDOM = container.attachShadow?.({ mode: 'open' }); //  || container;

  shadowDOM.appendChild(root);
  document.body.appendChild(container);
  createApp(App).mount(root);
})();
