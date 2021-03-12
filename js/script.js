// Esrcizio uno palidrome

var str = prompt('Inserisci la parola:')
function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome(str));
var risult = document.getElementById('wordpalin')
risult.innerHTML = 'La vostra parola inserita ' + '"' + str + '"' + 'e una palidrome' + ':' + ' ' + palindrome(str);


// Esercizio pari o dispari
