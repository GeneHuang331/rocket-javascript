var bodyEl = document.body;
bodyEl.addEventListener('keydown',shootRocket);
function shootRocket(e) {
    var key = e.keyCode;
    // console.log(key);
    switch (key) {
        case 49:
            document.querySelector('.rocket-1').style.bottom = '1800px';
            document.querySelector('.btn1').style.boxShadow = "3px 3px 5px #0a0a0a";
            break;
        case 97:
            document.querySelector('.rocket-1').style.bottom = '1800px';
            document.querySelector('.btn1').style.boxShadow = "3px 3px 5px #0a0a0a";
            break;   
        case 50:
            document.querySelector('.rocket-2').style.bottom = '1800px';
            document.querySelector('.btn2').style.boxShadow = "3px 3px 5px #0a0a0a"; 
            break;
        case 98:
            document.querySelector('.rocket-2').style.bottom = '1800px';
            document.querySelector('.btn2').style.boxShadow = "3px 3px 5px #0a0a0a";
            break;       
        case 51:
            document.querySelector('.rocket-3').style.bottom = '1800px';
            document.querySelector('.btn3').style.boxShadow ="3px 3px 5px #0a0a0a";
            break;
        case 99:
            document.querySelector('.rocket-3').style.bottom = '1800px';
            document.querySelector('.btn3').style.boxShadow = "3px 3px 5px #0a0a0a";
            break;                         
        default:
            break;
    }
}

var  btnEl = document.querySelectorAll('.btn');
for (var i = 0; i<btnEl.length; i++){
    btnEl[i].addEventListener('click', btnShootRocket);
}

function btnShootRocket(e){
    var sel = e.target.value;
    switch (sel){
        case '1':
            document.querySelector('.rocket-1').style.bottom = '1800px';
            document.querySelector('.btn1').style.boxShadow = "3px 3px 5px #0a0a0a";
            break;
        case '2':
            document.querySelector('.rocket-2').style.bottom = '1800px';
            document.querySelector('.btn2').style.boxShadow = "3px 3px 5px #0a0a0a";
            break;
        case '3':
            document.querySelector('.rocket-3').style.bottom = '1800px';
            document.querySelector('.btn3').style.boxShadow = "3px 3px 5px #0a0a0a";
            break;


    }
}

var reEl = document.querySelector('.btnReset');
reEl.addEventListener('click',resetRocket);

function resetRocket(){
    var rocketEl = document.querySelectorAll('.rocket');
    // console.log(rocketEl);
    for(var i = 0; i<rocketEl.length ;i++){
        rocketEl[i].style.bottom = '0px';
    }

}