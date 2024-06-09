// let apple = document.createElement("img");
// apple.src = "apple.png";
// apple.setAttribute("width", "8%");

// let kiwi = document.createElement("img");
// kiwi.src = "kiwi.jpeg";
// kiwi.setAttribute("width", "8%");

// let avocado = document.createElement("img");
// avocado.src = "avo.jpeg";
// avocado.setAttribute("width", "8%");

// let pomo = document.createElement("img");
// pomo.src = "pom.jpeg";
// pomo.setAttribute("width", "8%");

// let straw = document.createElement("img");
// straw.src = "straw.jpeg";
// straw.setAttribute("width", "8%");


// const fruitarr =[apple,kiwi,avocado,pomo,straw];
// let divv = document.createElement("div");
// let ul = document.createElement("ul");
// let p = document.createElement("p");

// document.body.appendChild(divv);
// divv.appendChild(ul);
// ul.appendChild(p);
// divv.setAttribute("id", "ic");
// p.setAttribute("id", "ip");
// document.getElementById("ip").innerHTML="Fruit Menu :";


// for(i=0;i<fruitarr.length;i++){
//     var item = document.createElement("li");
//    item.appendChild(fruitarr[i]);
//     ul.appendChild(item);
// }

// document.getElementById("ic").style.marginLeft="15%";
// document.getElementById("ic").style.marginTop="8%";
// document.getElementById("ip").style.textAlign="Left";
// document.getElementById("ip").style.fontSize="40px";




// fruitarr[1].setAttribute("src","pom.JPEG");
// fruitarr[2].setAttribute("src","kiwi.JPEG");
// fruitarr[3].setAttribute("src","straw.JPEG");
// fruitarr[4].setAttribute("src","avo.JPEG");



// document.getElementById("ic").style.backgroundColor="red";
// document.getElementById("ic").style.width="10%";
// document.getElementById("ic").style.height="10%";
// document.getElementById("ic").innerHTML="gii";


function find (a,b){
for(let i=0;i<a.length;i++){
    if ( parseInt(a[i])== parseInt(b)){
        alert("number found ! "+a[i]);
        break;
    }
    else {
        alert("-1");
        break;
        
    }
}
}

let arr = ["1","2","3","4","5"];
let user = prompt("please enter a number bigger than zero to check :");
find(arr,user);


