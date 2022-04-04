const button = document.querySelector('button')

button.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter a name');
  button.textContent = `Honorary Human: ${name}`;
}

const timeBtn = document.getElementById('timeBtn').addEventListener('click', wrangleDate);

function wrangleDate() {
  timeBtn.getElementById('time').innerHTML = Date();
}

document.querySelector('html').addEventListener('click',
funtion() {
  alert('Please stop. I hate it when people poke me!');
});
