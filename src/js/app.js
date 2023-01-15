


// let body = document.querySelector('body').addEventListener('click', () =>{
//   console.log('click')
//   let article = document.querySelectorAll('article')
//   // console.log(article)
//   article.forEach(element => {
//     // console.log(element.attributes)
//     // console.log(element.attributes.style)
//     // console.log(element.attributes.style.value)
//     element.attributes.style.value = 'display:block'
// })

// });



window.addEventListener("DOMContentLoaded", () =>{
  document.body.addEventListener("click" , () =>{
    const lenght = 5;
let count = 0;
for(let i = 0; i < lenght; i++){
  let element = document.createElement('article');
  count += lenght;
  element.setAttribute('id' , 'article' + count);
  document.body.appendChild(element);
  let text = 'sampletext';
  document.getElementById('article' + count).innerHTML += text;
  document.getElementById('article' + count).classList.add('message');
}
  })
})


