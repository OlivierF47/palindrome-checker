const btn = document.getElementById('check-btn');
let text = document.getElementById('text-input');
const result = document.getElementById('result');

function palindrome(){
  let entree = text.value.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let entree2 = [...entree].reverse().join('');
  if (entree === ''){
    alert("Please input a value");
  }else if (entree === entree2){
    result.innerText = text.value + " is a palindrome"
  } else{
    result.innerText = text.value + " is not a palindrome"
  }
}

btn.addEventListener("click", palindrome);