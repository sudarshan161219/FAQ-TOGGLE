const toggle = document.querySelectorAll('.faq-toggle');
const faq = document.querySelectorAll('.faq')


toggle.forEach((btn, i) => {
    btn.addEventListener("click", () =>{
faq[i].classList.toggle('active')
    })
})

// for (let i = 0; i < toggle .length; i++) {
//     const btn = toggle [i];
//         btn.addEventListener("click", () =>{
// faq[i].classList.toggle('active')
// console.log('hello')
//     })
// }