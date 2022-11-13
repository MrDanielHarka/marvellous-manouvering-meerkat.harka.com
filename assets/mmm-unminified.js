document.body.append(
  Object.assign(document.createElement('img'), {
    src: 'https://marvellous-manouvering-meerkat.harka.com/mmm.png',
    width: '50',
    height: '50',
    alt: 'Marvellous Manouvering Meerkat',
    id: 'marvellousManouveringMeerkat',
  })
);

document.head.insertAdjacentHTML(
  'beforeend',
  '<link rel="stylesheet" href="https://marvellous-manouvering-meerkat.harka.com/mmm.css" />'
);

setInterval(() => {
  document.getElementById('marvellousManouveringMeerkat').style.left = `${
    Math.floor(Math.random() * 95) + 1
  }vw`;
}, 10000);
