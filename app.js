var i = 0;
// var txt = 'Hi, I\'m Anne.';

wordIndex = 0;
var txts = ['hello!', 'bonjour!', 'beeeeetch.']


function typeWriter(txt) {
    var conTxt = txt;
    if (i < conTxt.length) {
        document.getElementsByClassName('typewrite')[0].innerHTML += conTxt.charAt(i);
        i++;
        setTimeout(typeWriter(conTxt), 65);
    }
    setTimeout(function () {
        document.getElementsByClassName('typewrite')[0].innerHTML = '';
    }, 3000);
}



// if (wordIndex < txts.length){   
    setTimeout(typeWriter(txts[0]), 1000);



//     i = 0;
//     wordIndex = wordIndex + 1;
//     typeWriter();
// }


