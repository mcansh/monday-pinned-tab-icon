const addPin = () => {
  const pin = document.createElement('link');
  pin.rel = 'mask-icon';
  pin.href = 'https://mcansh.github.io/monday-pinned-tab-icon/monday.svg';
  pin.color = '#fc405b';

  document.querySelector('head').appendChild(pin);
};

addPin();
