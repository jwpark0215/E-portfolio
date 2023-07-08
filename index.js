//  template_l0zr64j 
// service_dei8z1c 
// 6r-IG9Xjf2BQZrYME
let isModalOpen = false
let contrastToggle = false

function toggleContrast(){
    contrastToggle = !contrastToggle
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector ('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";
    
    emailjs
    .sendForm(
            'service_dei8z1c',
            'template_l0zr64j',
            event.target,
            '6r-IG9Xjf2BQZrYME'
        ).then(() => {
             loading.classList.remove('modal__overlay--visible');
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly on jwpark021523@outlook.com"
            );
        })
    
    setTimeout(() => {
        console.log('it worked')
    }, 1000);

}

function toggleModal(){
    if(isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += ' modal--open';
}