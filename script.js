const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const copyButton = document.querySelector('#copy-domain');
const copyFeedback = document.querySelector('#copy-feedback');

document.querySelector('#year').textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

copyButton.addEventListener('click', async () => {
  const domain = copyButton.dataset.domain;

  try {
    await navigator.clipboard.writeText(domain);
    copyFeedback.textContent = '域名已复制到剪贴板。';
  } catch {
    copyFeedback.textContent = `请手动复制：${domain}`;
  }
});
