// Esrcizio uno palidrome

// var str = prompt('Inserisci la parola:')
// function palindrome(str) {
//
//     var len = str.length;
//     var mid = Math.floor(len/2);
//
//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//
//     return true;
// }
//
// console.log(palindrome(str));
// var risult = document.getElementById('wordpalin')
// risult.innerHTML = 'La vostra parola inserita ' + '"' + str + '"' + 'e una palidrome' + ':' + ' ' + palindrome(str);


// Esercizio pari o dispari

var pairodd = prompt('Inserisci "pari" o "dispari":');
var modality = document.getElementById('modality').innerHTML = 'Tu hai scelto modalita:' + ' ' + pairodd;
// console.log('Tu hai scelto modalita:' + pairodd);

var number = parseInt(prompt('Inserisci un numero da 1 fino 5:'));
var numberUser = document.getElementById('numberUser').innerHTML = 'Tu hai scelto numero:' + ' ' + number;
// console.log('Tu hai scelto numero:' + number);

var min = 1;
var max = 5 - min;
var rnd = Math.floor(Math.random() * max) + min;
var numberPc = document.getElementById('numberPc').innerHTML = 'Il computer randomizzato numero:' + ' ' + rnd;

var sum = number + rnd;
var sumNumber = document.getElementById('sumNumber').innerHTML = 'La somma dei numeri e:' + ' ' + sum;
// console.log('La somma dei numeri e:' + sum);

function ifpair() {
    if (sum % 2 == 0) {
        var risultWin = document.getElementById('risultWin').innerHTML = 'You Win';
        // console.log('You Win');
    } else if(sum % 2 == 1) {
        var risultLose = document.getElementById('risultLose').innerHTML = 'You Lose';
        // console.log('You Lose');
    }
}

function ifodd() {
    if (sum % 2 == 1) {
        var risultWin = document.getElementById('risultWin').innerHTML = 'You Win';
        // console.log('You Win');
    }
    else if(sum % 2 == 0) {
        var risultLose = document.getElementById('risultLose').innerHTML = 'You Lose';
        // console.log('You Lose');
    }
}

if (pairodd == 'pari') {
  ifpair();
}
else if (pairodd == 'dispari') {
  ifodd();
}
