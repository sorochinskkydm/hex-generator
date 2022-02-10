function loop() {
    const characters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    const submit = document.querySelector('.submit');
    const box = document.querySelector('.box');
    let outputHex = document.querySelector('.hex__output');
    const body = document.getElementsByTagName('body')[0];
    let hex = '';

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * characters.length);
        hex = hex + characters[random];
    }

    submit.addEventListener('click', () => {
        outputHex.innerHTML = "#" + hex;
        body.style.backgroundColor = "#" + hex;
    });
}


