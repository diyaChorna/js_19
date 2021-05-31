let sel = x =>document.querySelector(x);
let person = document.forms['person']

person.button.addEventListener('click', function(){
    let name = /^[a-zA-Z]{2,20}$/;
    console.log(name.test(`${person.name.value}`));
    if(name.test(`${person.name.value}`) ==false){
        document.querySelector('.name').style.background = 'rgb(231, 34, 8)';
        document.querySelector('.b1').style.color = 'rgb(231, 34, 8)';
    }
    else{
        document.querySelector('.name').style.background = 'rgb(8, 231, 38)';
        document.querySelector('.b1').style.color = 'rgba(235, 27, 0, 0)';
    }
})

person.button.addEventListener('click', function(){
    let lastName = /^[a-zA-Z]{2,20}$/; 
    console.log(lastName.test(`${person.lastName.value}`));
    if(lastName.test(`${person.lastName.value}`) ==false){
        console.log('BLABLA');
        document.querySelector('.lastName').style.background = 'rgb(231, 34, 8)';
        document.querySelector('.b2').style.color = 'rgb(231, 34, 8)';
    }
    else{
        document.querySelector('.lastName').style.background = 'rgb(8, 231, 38)';
        document.querySelector('.b2').style.color = 'rgba(235, 27, 0, 0)';
    }
})



person.button.addEventListener('click', function(){
    let email = /^[\d\.\w\s]{2,20}@[\d\.\w\s]{2,20}\.(((net)|(org))\.(ua))|((gmail)\.(ua))$/;
    console.log(email.test(`${person.email.value}`));
    if(email.test(`${person.email.value}`) ==false){
        console.log('BLABLA');
        document.querySelector('.email').style.background = 'rgb(231, 34, 8)';
        document.querySelector('.b3').style.color = 'rgb(231, 34, 8)';
    }
    else{
        document.querySelector('.email').style.background = 'rgb(8, 231, 38)';
        document.querySelector('.b3').style.color = 'rgba(235, 27, 0, 0)';
    }
})

person.button.addEventListener('click', function(){
    let number = /^\+38\(0[679]3\)\-\d{3}\-\d{2}\-\d{2}$/;
    console.log(number.test(`${person.number.value}`));
    if(number.test(`${person.number.value}`) ==false){
        console.log('BLABLA');
        document.querySelector('.number').style.background = 'rgb(231, 34, 8)';
        document.querySelector('.b4').style.color = 'rgb(231, 34, 8)';
    }
    else{
        document.querySelector('.number').style.background = 'rgb(8, 231, 38)';
        document.querySelector('.b4').style.color = 'rgba(235, 27, 0, 0)';
    }
})


person.button.addEventListener('click', function(){
    let password = /^[\w]{8,15}$/;
    console.log(password.test(`${person.password.value}`));
    if(password.test(`${person.password.value}`) ==false){
        console.log('BLABLA');
        document.querySelector('.password').style.background = 'rgb(231, 34, 8)';
        document.querySelector('.b5').style.color = 'rgb(231, 34, 8)';
    }
    else{
        document.querySelector('.password').style.background = 'rgb(8, 231, 38)';
        document.querySelector('.b5').style.color = 'rgba(235, 27, 0, 0)';
    }
})