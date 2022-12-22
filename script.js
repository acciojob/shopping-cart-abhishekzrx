//your code here
let iteminput=document.getElementById("item-name-input");
let priceinput=document.getElementById("item-price-input")

let button=document.getElementById('add')

let table=document.getElementById('table')
let total=document.getElementById('total')
let priceArr=[];
//function for adding
function addItem(){
    
    let sum=0;
    let  item=iteminput.value;
    let price=priceinput.value;
    if(item !='' && price !=""){
      let row=document.createElement('tr');
      priceArr.push(parseInt(price));
      row.innerHTML=` <td>${item}</td> <td>${price}</td> `
    //row.innerHTML="<td> abc </td> <td> 100</td>"
     //console.log(row);
     for(let i=0;i<priceArr.length;i++){
             sum=sum+priceArr[i];
     }
    table.append(row);
   total.innerHTML=sum;
   iteminput.value=''
   priceinput.value=''
}
}

button.addEventListener('click',addItem)