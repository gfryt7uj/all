let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let leave = document.getElementById('leave');
let land = document.getElementById('land');
let ac = document.getElementById('ac');
let btn = document.getElementById('btn');
let header = document.getElementById('header');
let loud = document.getElementById('loud');

window.addEventListener('scroll' , function(){
    let value = window.scrollY;

            
     text.style.bottom = 350 + value * 1.5 + 'px';      
     bird1.style.top = value * -1.5 + 'px';
     bird1.style.left = value * 2 + 'px';
     leave.style.top = value * -2 + 'px';
     leave.style.right = value * -5 + 'px';
     btn.style.marginTop = value * 1.5 + 'px';
     ac.style.top = value * -1.5 + 'px';
     loud.style.top = value * 0.2 + 'px';
     

})

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
document.querySelectorAll('.pic').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.querySelector('img').getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}

// const openModal = (itemNumber) => {
//     const modalId = `modal-${itemNumber}`;
//     const modal = document.getElementById(modalId);
//     modal.style.display = "block";
// }

// const closeModal = (itemNumber) => {
//     const modalId = `modal-${itemNumber}`;
//     const modal = document.getElementById(modalId);
//     modal.style.display = "none";
// }

// const buttons = document.querySelectorAll("[id^='buy-button-4']")
// buttons.forEach( button => {
//     button.addEventListener("click", function() {
//         const itemNumber = button.id.split("buy-button-4")[1]
//         openModal(itemNumber);
//     });
// });

// const closeButtons = document.querySelectorAll("[id^='modal-close-button-3']")
// closeButtons.forEach( button => {
//     button.addEventListener("click", function() {
//         const itemNumber = button.id.split("modal-close-button-3")[1]
//         closeModal(itemNumber);
//     });
// });
$(document).ready(function(){
    $(".card-link").click(function(){
        $(".rounded").attr("src",$(this).parent().siblings().attr("Src"));
        $(".product_name").text($(this).siblings("h2").text());
        $(".product_desc").text($(this).siblings("div").find("p:nth(0)").text());
        $(".product_price").text($(this).siblings("div").find("p:nth(1)").text());
    });
    $(window).resize(function (){
        if($(window).width() < 600){
            $(".modal-content").css("transform" , "scaleX(1)");
        }
        else{
            $(".modal-content").css("transform" , "scaleX(1.4");
        }
    });
});

