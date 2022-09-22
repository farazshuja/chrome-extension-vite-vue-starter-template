const sheetsMap = new Map();
export function updateStyle(id: string, content: string) {
  let style = sheetsMap.get(id);
  {
    if (style && !(style instanceof HTMLStyleElement)) {
      removeStyle(id);
      style = undefined;
    }
    if (!style) {
      style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.innerHTML = content;
      // document.head.appendChild(style);
      const root = document.getElementById('crxjs-ext');

      // if no root try again in a second
      if (!root) {
        setTimeout(() => updateStyle(id, content), 1000);
        return;
      }
      const shadowEl = root?.shadowRoot;
      shadowEl?.appendChild(style);
    } else {
      style.innerHTML = content;
    }
  }
  sheetsMap.set(id, style);
}

export function removeStyle(id: string) {
  debugger;
  const style = sheetsMap.get(id);
  if (style) {
    const root = document.getElementById('crxjs-ext');
    const shadowEl = root?.shadowRoot;
    if (style instanceof CSSStyleSheet) {
      if (shadowEl) {
        shadowEl.adoptedStyleSheets = shadowEl.adoptedStyleSheets.filter(
          (s) => s !== style,
        );
      }
    } else if (shadowEl) {
      shadowEl.removeChild(style);
    }
    sheetsMap.delete(id);
  }
}
