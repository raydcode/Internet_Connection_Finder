const image = document.getElementById('image');
const status = document.getElementById('status');
const background = document.getElementById('main');

const setBackground = (status) => {
  if (status) {
    background.classList.remove('offline');
    background.classList.add('online');
  } else {
    background.classList.add('offline');
    background.classList.remove('online');
  }
};

const connection = async () => {
  try {
    const result = await fetch('https://picsum.photos/200');
    console.log(result);
    return result.status >= 200 && result.status <= 300;
  } catch (error) {
    return false;
  }
};

const navigator = () => {
  setInterval(async () => {
    const connect = await connection();

    if (connect) {
      setBackground(true);
      status.textContent = 'Connected';
    } else {
      setBackground(false);
      status.textContent = 'Oops ! No internet found';
    }
  }, 5000);
};

window.addEventListener('load', navigator);
