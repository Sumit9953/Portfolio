let isModalOpen = false;
let contrastToggle = false;
const scaleFcator = 1 / 20;

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFcator;
    const y = event.clientY * scaleFcator;

    while(true){
    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 === 0;
        const boolInt = isOdd ? -1 : 1; 
        shapes[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`;
        
    }
    }
}


function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme";
    }else{
        document.body.classList.remove("dark-theme");
    }
}

function contact(event){
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    event.preventDefault();
    emailjs
    .sendForm(
        'service_lvtjubc',
        'template_qgqezn5',
        event.target,
        '9UjCA7o-CK2T3D06L'
    ).then (() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert("The email service is temporarily unavaliable.")
    })
  
}

function toggleModal(){
    isModalOpen = !isModalOpen;
    if(isModalOpen === true){
        document.body.classList += " modal--open";
    }else{
        document.body.classList.remove("modal--open");
    }
  
    
}
