let count = 0;

document.querySelector('h1').innerText = count;

document.querySelectorAll('button')[0].addEventListener('click', () => {
    count--;

    document.querySelector('h1').innerText = count;
});

document.querySelectorAll('button')[1].addEventListener('click' , () => {
    count = 0;
    document.querySelector('h1').innerText = count;
})

document.querySelectorAll('button')[2].addEventListener('click' , () => {
    count++;
    document.querySelector('h1').innerText = count;
})