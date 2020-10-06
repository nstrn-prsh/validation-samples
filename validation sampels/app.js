document.querySelector('form').addEventListener( 'submit', validationForm)
document.querySelector('#name').addEventListener( 'blur', validationName)
document.querySelector('#zip-code').addEventListener( 'blur', validationZip)
document.querySelector('#email1').addEventListener( 'blur', validationEmailOne)
document.querySelector('#email2').addEventListener( 'blur', validationEmailTwo)
document.querySelector('#email3').addEventListener( 'blur', validationEmailThree)
document.querySelector('#phone').addEventListener( 'blur', validationPhone)
document.querySelector('#id').addEventListener( 'blur', validationID)

function validationName(e){
    let re = /^[a-zA-Z]{2,12}$/
    if(re.test(e.target.value)){
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
    else{
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    }
}

function validationZip(e){
    let re = /^[\d]{5}\-?[\d]{5}$/
    if(re.test(e.target.value)){
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
    else{
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    }
}

function validationEmailOne(e){
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/
    if(re.test(e.target.value)){
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
    else{
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    }
}

function validationEmailTwo(e){
    let re = /^[\w\-?\.?]+@[a-zA-Z]+\.[a-zA-Z]{2,5}$/
    if(re.test(e.target.value)){
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
    else{
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    }
}

function validationEmailThree(e){
    let re = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if(re.test(e.target.value)){
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
    else{
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    }
}

function validationPhone(e){
    let re = /^\+[\d]{2}\s[\d]{3}\s[\d]{8}$/
    if(re.test(e.target.value)){
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
    else{
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    }
}

function validationID(e){
    let re = /^[\d]{3}\-[\d]{6}\-[\d]$/
    if(re.test(e.target.value)){
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
    else{
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    }
}

function validationForm(e){
    let inputs = document.getElementsByClassName('is-invalid')
    if(inputs.length>0){
        console.log('hi')
        e.preventDefault()
    }
}