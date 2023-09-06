let bar = document.querySelector(".bar");
let sidebar = document.querySelector(".sidebar1");
let toggle = document.querySelector(".toggle");
let items = document.querySelector(".items");
let id = document.querySelector(".name");
let id1 = document.querySelector(".naam");
let box = document.querySelector(".input");
let value = document.querySelector(".searchli");
let cvalue = document.querySelector("#cvalue");
let listele = document.querySelectorAll(".searchdiv li");
let sbox = document.querySelector(".searchdiv");
let themebox = document.querySelector(".themebox");
let para = document.querySelector(".pa");
let appear = document.querySelector(".app");
let leftarrow = document.querySelector(".fa-arrow-left");
let back = document.querySelector(".back");
let dark = document.querySelector(".dark");
let navbar = document.querySelector(".nav");
let sidecont = document.querySelector(".side-cont");
let searchbox = document.querySelector("#search");
let light = document.querySelector(".light");
let body = document.querySelector(".body");
let header = document.querySelector(".header");

function themedark() {
    // document.body.style.backgroundColor = "black";
    body.classList.toggle("darkbody");
    // navbar.style.backgroundColor = "black";
    header.classList.toggle("darkheader");
    sidebar.classList.toggle("sidebar4");
    items.classList.toggle("items1");
    toggle.classList.toggle("toggle1");
    navbar.classList.toggle("nav1");
    themebox.classList.toggle("themebox1");
    sidecont.classList.toggle("sidecont1");
    id1.classList.toggle("naam1");
    sbox.classList.toggle("sbox1");
    themebox.style.display = "none";
}

function themelight() {
    // document.body.style.backgroundColor = "white";
    body.classList.remove("darkbody");
    // navbar.style.backgroundColor = "white";
    header.classList.remove("darkheader");
    sidebar.classList.remove("sidebar4");
    items.classList.remove("items1");
    toggle.classList.remove("toggle1");
    navbar.classList.remove("nav1");
    themebox.classList.remove("themebox1");
    sidecont.classList.remove("sidecont1");
    id1.classList.remove("naam1");
    sbox.classList.remove("sbox1");
    themebox.style.display = "none";
}
dark.addEventListener("click", themedark);
light.addEventListener("click", themelight);




searchbox.addEventListener("click", function () {

    sbox.style.display = "none";


})



back.addEventListener("click", function () {
    if (id1.style.display === "none") {
        id1.style.display = "block";
        themebox.style.display = "none";
        sbox.style.display = "none";

    } else {
        id1.style.display = "none";
    }

})



appear.addEventListener("click", function () {
    if (themebox.style.display === "none") {
        themebox.style.display = "block";
        id1.style.display = "none";
        sbox.style.display = "none";

    } else {
        themebox.style.display = "none";
    }

})






bar.addEventListener("click", function () {

    sidebar.classList.toggle("smallbar");
    toggle.classList.toggle("tog");
    items.classList.toggle("pic");
})




id.addEventListener("click", function () {

    if (id1.style.display === "none") {
        id1.style.display = "block";
        themebox.style.display = "none";
        sbox.style.display = "none";

    } else {
        id1.style.display = "none";
    }

})




box.addEventListener("click", function () {

    if (sbox.style.display === "none") {
        sbox.style.display = "block";
        themebox.style.display = "none";
        id1.style.display = "none";

    } else {
        sbox.style.display = "none";
    }

})



listele.forEach(function (li) {

    li.addEventListener("click", function () {
        const textContentToAdd = this.querySelector('#endgame');
        const searchBar = document.getElementById('bar');
        if (textContentToAdd && searchBar) {

            const textContentTo = textContentToAdd.textContent;
            searchBar.value = textContentTo;
            sbox.style.display = "none";
        }
        // searchBar.value = textContentToAdd;
        // input.style.display = "none";


    })

});












// dark mode






// dark.addEventListener("click", function () {
//     navbar.classList.toggle("navdark");
//     sidecont.classList.toggle("sidecont1");
//     naam.classList.toggle("naam1");
//     sidebar.classList.toggle("sidebar4");
//     toggle.classList.toggle("toggle1");
//     items.classList.toggle("items1");
//     sbox.classList.toggle("searchdiv1");

// })



