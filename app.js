const colors = [
    'red',
    'orange',
    'Yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
];

const container = document.querySelector('#boxes');
for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    container.appendChild(box);
    box.classList.add('box');
box.addEventListener('click',function(){
    console.log(box.style.backgroundColor);
} );

}