const photoText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const imgContainer = document.getElementById('meme-image-container');
const firstImg = document.getElementById('meme-1');
const secondImg = document.getElementById('meme-2');
const thirdImg = document.getElementById('meme-3');
const fourthImg = document.getElementById('meme-4');
const output = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');

function printText() {
  if (photoText.value !== '') {
    memeText.innerText = photoText.value;
  }
}

function addOutputSrc({ target }) {
  if (target.src !== undefined) {
    output.src = target.src;
  }
}
// função loadFile retirada desse link, não entendi 100% dela, mas funcionou https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
const loadFile = (event) => {
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = () => {
    URL.revokeObjectURL(output.src);
  };
};

photoText.addEventListener('keyup', printText);

memeInsert.addEventListener('change', loadFile);

fireButton.addEventListener('click', () => {
  imgContainer.className = 'fire';
});

waterButton.addEventListener('click', () => {
  imgContainer.className = 'water';
});

earthButton.addEventListener('click', () => {
  imgContainer.className = 'earth';
});

firstImg.addEventListener('click', addOutputSrc);

secondImg.addEventListener('click', addOutputSrc);

thirdImg.addEventListener('click', addOutputSrc);

fourthImg.addEventListener('click', addOutputSrc);
