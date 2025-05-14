const btn = document.getElementById('check-btn');
let text = document.getElementById('text-input');
const result = document.getElementById('result');
const form = document.getElementById('form');

function palindrome(event){
  event.preventDefault();
  let entree = text.value.replace(/\b(?!.*[\p{L}].*[\p{L}])[\p{L}\p{M}\p{N}\p{P}]+\b/gu, '').toLowerCase();
  let entree2 = [...entree].reverse().join('');
  if (entree === ''){
    alert("Please input a value");
  }else if (entree === entree2){
    result.innerText = entree + " is a palindrome"
  } else{
    result.innerText = entree + " is not a palindrome"
  }
}



form.addEventListener("submit", palindrome);