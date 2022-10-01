let isModalOpen = false;
let contrastToggle = false;

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