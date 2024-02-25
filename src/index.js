
window.addEventListener('resize', ()=>{
    const desktopImage = document.getElementById('desktop-image');
    const mobileImage = document.getElementById('mobile-image');
    const windowWidth = window.innerWidth;

    if(windowWidth<768){
        desktopImage.classList.add('hidden');
        mobileImage.classList.remove('hidden')
    }else{
        desktopImage.classList.remove('hidden');
        mobileImage.classList.add('hidden')
    }
})

document.getElementById('subscribe').addEventListener('click', ()=>{
    console.log("this sucks");
    const emailInput = document.getElementById('email');
    const email = emailInput.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        document.getElementById('error-message').classList.remove('hidden');
        emailInput.classList.add('border-red-500');
        emailInput.classList.add('bg-red-50');
        emailInput.classList.add('placeholder-red-500');
        emailInput.classList.add('text-red-500');
    } else{
        document.getElementById('error-message').classList.add('hidden');
        localStorage.setItem('myValue', email);
        emailInput.classList.remove('border-red-500');
        emailInput.classList.remove('bg-red-50');
        emailInput.classList.remove('placeholder-red-500');
        emailInput.classList.remove('text-red-500')
        window.location.href = "success.html"
    }
})

