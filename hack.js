(function () {
        const GO = false;
        document.addEventListener('click', () => {
            if (GO) return;
        const bg = document.createElement('div');
        bg.setAttribute('style', 'position: absolute;z-index:1000;width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;font-size: 150px;font-weight: bold;top:0;left:0;');
        bg.innerText = 'YOU WERE HACKED!!!!'
        document.body.appendChild(bg);
        setInterval(() => {
            bg.style.background = bg.style.background == 'red' ? 'white' : 'red';
        bg.style.color = bg.style.color !== 'red' ? 'white' : 'red';
    }, 50);
    })
    } ())
