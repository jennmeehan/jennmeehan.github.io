const btn = document.querySelector('button')

btn.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter a name');
  btn.textContent = `Honorary Human: ${name}`;
}

//document.getElementById('timeBtn').addEventListener('click', wrangleDate);

//function wrangleDate() {
//  document.getElementById('time').innerHTML = Date();
//}

//document.querySelector('html').addEventListener('click',
//funtion() {
//  alert('Please stop. I hate it when people poke me!');
//});
