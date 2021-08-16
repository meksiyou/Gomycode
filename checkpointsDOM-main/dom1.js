//Declaration Var

let favs = Array.from(document.querySelectorAll(".fa-heart"))
let deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"))
let cards = Array.from(document.querySelectorAll(".card"))
let plusBtns = Array.from(document.querySelectorAll(".plus-btn"))
let minusBtns = Array.from(document.querySelectorAll(".minus-btn"))
let totals = Number( document.getElementById("total-price").textContent ) ;

// Fav

for (let fav of favs) {
    fav.addEventListener("click",function() {
        if (fav.style.color === "black") {
            fav.style.color = "red";
        } else  {
            fav.style.color = "black";
        }
    })
}

// Remove btn 

for ( let i in deleteBtns ) {
    deleteBtns[i].addEventListener("click",function() {
        
        let quantity = Number(deleteBtns[i].parentNode.children[1].textContent);
        let price =Number( document.getElementById(`unitprice_${i}`).textContent ) ;
        
        totals = totals - (quantity * price) ; 
        document.getElementById("total-price").textContent=totals ;
       

        // delete card
        cards[i].remove() ;
        
        //animation
        gsap.from(".cards", {duration : 1 , y : '-100%', ease: "bounce" }) ;
        
    })
}

// ADD BUTON

for (let plusBtn of plusBtns)
plusBtn.addEventListener("click",function(){
    plusBtn.nextElementSibling.textContent++ ;
    total();
})

// Minus BUTON

for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click",function(){
      minusBtn.previousElementSibling.textContent > 0 ? minusBtn.previousElementSibling.textContent-- : null ;
      total();
    })
}

// Function total 

function total () {
    let quantities = Array.from(document.querySelectorAll(".qute"))
    let prices = Array.from(document.querySelectorAll(".unitt-price"))
    let sum = 0 ;

    for (let i=0 ;i< prices.length; i++ ) {
       
        sum = sum + quantities[i].textContent * prices[i].textContent ;
    }

    totals=sum ;
   document.getElementById("total-price").textContent = sum ;

}



// Animation :

//animation header
gsap.from(".header", {duration : 1 , y : '-100%', ease: "bounce" }) ;
gsap.from(".ul" , {duration: 3, opacity : 0 , delay : 1 , stagger : .5 }) ;
// animation card 
gsap.from(".card", {duration : 2 , x: "-100vw" , delay : 1 , stagger : .5 , ease : "back"})

