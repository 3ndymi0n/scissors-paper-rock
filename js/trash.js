const container = document.querySelector('#container');

const content1 = document.createElement('div');
content1.classList.add('specialP')
content1.textContent = "Hey I'm red!"

const content2 = document.createElement('h3');
content2.classList.add('specialHB')
content2.textContent = "Hey I'm blue!"

container.appendChild(content1);
container.appendChild(content2);

const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    alert("You get a rocket 8=====D - - -");
});