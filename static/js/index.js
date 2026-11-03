// DSSP interactions. No external JavaScript dependencies.
document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  function selectTab(name, focus = false) {
    tabs.forEach(tab => {
      const selected = tab.dataset.tab === name;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) panel.hidden = !selected;
      if (selected && focus) tab.focus();
    });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab.dataset.tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectTab(tabs[next].dataset.tab, true); }
    });
  });
  document.querySelectorAll('[data-result-target]').forEach(link => {
    link.addEventListener('click', () => selectTab(link.dataset.resultTarget));
  });
  const copyButton = document.querySelector('.copy-bibtex-btn');
  const bibtex = document.getElementById('bibtex-code');
  const status = document.getElementById('copy-status');
  let resetTimer;
  if (copyButton && bibtex && status) copyButton.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(bibtex.textContent);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = bibtex.textContent;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand('copy');
        textarea.remove();
        copyButton.focus();
        if (!copied) throw new Error('Copy unavailable');
      }
      copyButton.textContent = 'Copied!';
      status.textContent = 'BibTeX copied to clipboard.';
    } catch {
      status.textContent = 'Select the citation text and copy it manually.';
      const range = document.createRange();
      range.selectNodeContents(bibtex);
      const selection = window.getSelection();
      if (selection) { selection.removeAllRanges(); selection.addRange(range); }
    }
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; status.textContent = ''; }, 3500);
  });
  const scrollButton = document.querySelector('.scroll-to-top');
  if (scrollButton) {
    const update = () => scrollButton.classList.toggle('visible', window.scrollY > 600);
    window.addEventListener('scroll', update, { passive: true });
    update();
    scrollButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }));
  }
});
