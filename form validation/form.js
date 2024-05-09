const form = document.getElementById('form');
const username= document.getElementById('username');
const sub = document.getElementById('sub');
const pho= document.getElementById('phone');
const email= document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    ValidateInputs();
});

const setError = (Element,message)=> {
    const inputControl = element.parentElement;
    const errorDisplay =
    inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess =  element => {
    const inputControl = element.parentElement;
    const errorDisplay =
    inputControl.querySelector('.error');

    errorDisplay.innerText= ' ';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};