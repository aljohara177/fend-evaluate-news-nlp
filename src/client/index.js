import { handleSubmit } from './js/formHandler';
import './styles/resets.css';
import './styles/base.css';
import './styles/footer.css';
import './styles/form.css';
import './styles/header.css';

const submit = document.querySelector('.submit');

submit.addEventListener('click', e => {
   handleSubmit(e); 
});

