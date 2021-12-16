'use strict';

const images = [
    { 'id': '1', 'url':'./img/420408.png' },
    { 'id': '2', 'url':'./img/536426.png' },
    { 'id': '3', 'url':'./img/600528.png' },
    { 'id': '4', 'url':'./img/651136.png' },
    { 'id': '5', 'url':'./img/627080.png' },
    { 'id': '6', 'url':'./img/1019228.png' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item'); 

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);