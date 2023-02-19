// ストップウォッチ関数とする
function stopWatch(options){
    function addMessage(message){
        let messageElm = document.createElement('div');
        let now = new Date();
        messageElm.innerText = now.getHours() + '時' + now.getMinutes() + '分' + now.getSeconds() + '秒' + message;
        messageElm.classList = ['message'];
        logElm.appendChild(messageElm);
    }

    options = options || {};
    let color = options.color || 'lightblue';
    let backgroundColor = options.backgroundColor || 'black';
    let displayElm = document.getElementsByClassName('display')[0];
    displayElm.style.color = color;
    displayElm.style.backgroundColor = backgroundColor;

    let logElm = document.querySelector('.log');
    let timer = null;
    let startButton = document.getElementsByClassName('startButton')[0];
    startButton.disabled = false;
    startButton.addEventListener('click', function(){
        if(timer === null){
            let seconds = 0;
            timer = setInterval(function(){
                seconds++;
                displayElm.innerText = seconds + '秒';
                console.log(seconds);
                startButton.disabled = true;
            }, 1000);
            addMessage('開始');
            startButton.disabled = false;
        }
    });
    
    let stopButton = document.getElementsByClassName('stopButton')[0];
    stopButton.addEventListener('click', function(){
        if(timer !== null){
            clearInterval(timer);
            timer = null;
            addMessage('終了');
        }
    });

    let clearButton = document.getElementsByClassName('clearButton')[0];
    clearButton.addEventListener('click', function(){
        displayElm.innerText = null;
        timer = null;
        startButton.disabled = false;
    });
}

let options = {
    color: 'limegreen',
    backgroundColor: '#333'
};

stopWatch(options);
