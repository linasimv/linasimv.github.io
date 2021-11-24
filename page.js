let toggle = document.querySelector('.toggle');
let topBar = document.querySelector('.topBar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    topBar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    navigation.classList.remove('active');
    main.classList.remove('active');
}