var i = 0;
var j = 0;
var done = false;
var txt = ['Hello!', 'My name is Anne!', 'Nice to meet you.']

function typeWriter() {
    if (j < txt.length) {
        if (i < txt[j].length) {
            document.getElementsByClassName('typewrite')[0].innerHTML += txt[j].charAt(i);
            i++;
            setTimeout(typeWriter, 65);
        } else {
            j++;
            i = 0;
            setTimeout(function () {
                document.getElementsByClassName('typewrite')[0].innerHTML = '';
                typeWriter();
            }, 2000)
        }
    }
}

typeWriter();


