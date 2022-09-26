const UIname = document.getElementById('name');
const UIemail = document.getElementById('email');
const UItext = document.getElementById('message');
const submit = document.getElementById('submit');
const form = document.querySelector('.form-group')
submit.addEventListener('click', check);
function check(e){
  if(UIname.value ==='' && UIemail.value==='' && UItext.value === ''){
   document.querySelector('.warning').style.display = 'block';
    e.preventDefault();
  }
}
