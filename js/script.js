// Esrcizio uno palidrome

// var word = prompt('Inserisci la parola:')
// function palindrome(word) {
//
//   var lng = word.length;
//   var mid = Math.floor(lng/2);
//
//   for ( var i = 0; i < mid; i++ ) {
//     if (word[i] !== word[lng - 1 - i]) {
//       return false;
//     }
//   }
//
//   return true;
//
// }
//
// console.log(palindrome(word));
// var risult = document.getElementById('risult');
// risult.innerHTML = 'La vostrada parola inserita ' + '"' + word + '"' + 'e una palindrome' + ':' + ' ' + palindrome(word);


// Esercizio pari o dispari

var pairOdd = prompt('Inserisci "pari" o "dispari":');
if (pairOdd === 'pari' || pairOdd === 'dispari') {
  var modality = document.getElementById('modality').innerHTML = 'Tu hai scelto modalita:' + ' ' + pairOdd;
  // console.log('Tu hai scelto modalita:' + pairOdd);

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
    }
    else if(sum % 2 == 1) {
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
  if (pairOdd == 'pari') {
    ifpair();
  }
  else if (pairOdd == 'dispari') {
    ifodd();
  }

}
else {
  var errore = document.getElementById('errore').innerHTML = 'Caro giocatore, avete sbagliato di scegliere modalita di gioco, cliccare F5 è riprovate';
}
