let btn = document.getElementsByTagName("button")[0];
let body = document.getElementsByTagName("body")[0];

const colorRandomizer = () => {
    let hexList = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += hexList[Math.floor(Math.random() * 16)];
    }
    
    body.style.backgroundColor = hex;
};


btn.addEventListener('click', colorRandomizer);