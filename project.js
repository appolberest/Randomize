let btn = document.querySelector('button');
let min = document.querySelector('#min');
let max = document.querySelector('#max');
let amount = document.querySelector('#amount');
let results = document.querySelector('.results');
let check = document.querySelector('.checkbox');

function randomaizer(min, max, amount) {
  if(min > max) return 'Неверно заданный диапазон!'

  let arr = [];
  if(check.checked){
    if(min - max > amount){
      let set = new Set();
      while(set.size != amount){
      let num = Math.floor(min + Math.random()*(max - min +1));
      set.add(num);
    }
      return Array.from(set);
    }
    else{
      return 'Невозможно избежать повторов';
    }
    
  }
  else{
    for(let i = 0; i < amount; i++){
      let num = Math.floor(min + Math.random()*(max - min +1));
      arr.push(num);
    }
    return arr;
  }
 
  
}

function prepareToGenerate(){
  let minNum = +min.value;
  let maxNum = +max.value;
  let amountNum = +amount.value;
  results.style.opacity = '1';
  results.innerHTML = '<b>Результат:<b><br><br> ' +  randomaizer(minNum, maxNum, amountNum);
}

btn.addEventListener('click', prepareToGenerate);