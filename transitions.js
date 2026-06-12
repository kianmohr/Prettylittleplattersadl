document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.pathname === location.pathname) return;

    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.href;
      document.body.classList.add('is-leaving');
      setTimeout(() => { location.href = href; }, 250);
    });
  });
});
