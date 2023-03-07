const wrapper = document.querySelector(".sliderWrapper")

console.log(wrapper)

// slider -- giving +ve number the wrapper moves to right side and -ve to left
// -200vw=2nd item -300vw=3rd items....
// wrapper.style.transform = "translateX(-300vw)"


// here we are choosing all the items(we have 5)
const menuItems = document.querySelectorAll(".menuItem")

// DOM MANUPULATION-----
const products = [
    {
        id: 1,
        title: "Air Force",
        price: "Rs 19,999",
        colors:[
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },

    {
        id: 2,
        title: "Air Jordan",
        price: "Rs 12,999",
        colors:[
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },

    {
        id: 3,
        title: "Blazer",
        price: "Rs 10,999",
        colors:[
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },

    {
        id: 4,
        title: "Crater",
        price: "Rs 15,999",
        colors:[
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },

    {
        id: 5,
        title: "Hippie",
        price: "Rs 9,999",
        colors:[
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];

// by default it would be air force one
let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

//insted of req, res we are writing this----- for click event we giving that
menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        // console.log("you clicked!" + index);
        /*
        what happens here at index 0 -100*0 = 0 nothing happens
        at index 1  -100 so we move to second one .. ans so on
        */
        //changing the current slide 1st one
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        // changing the down one 2nd slide, i.e changing the choosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        // assigning colors in the color box
        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code
        });
    });
});


//changing the shoe color when choosing the color
currentProductColors.forEach((color, index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img     
    });
});


currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white"
            size.style.color = "black "
        })
        size.style.backgroundColor="black"
        size.style.color = "white"
    })
})


// productButton is buy now in the product class
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// when we click on buy now the we want it to appear
productButton.addEventListener("click",()=>{
    payment.style.display="flex";
})

//when we click the X button then we want it to close
close.addEventListener("click",()=>{
    payment.style.display="none";
})
