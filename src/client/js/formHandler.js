
import {checkForName} from './nameChecker'



function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.querySelector('#name').value

    if (formText !== undefined) {
      getTextAnalysis('/getTextAnalysis', formText)
       .then(res => res.json())
          .then(function(res) {
              document.getElementById('model').innerHTML = res.model;
              document.getElementById('agreement').innerHTML = res.agreement;
              document.getElementById('subjectivity').innerHTML = res.subjectivity;
              document.getElementById('confidence').innerHTML = res.confidence;
              document.getElementById('irony').innerHTML = res.irony;

        })
    } else {
        console.log(error);
    }
    
}


export const getTextAnalysis = async(apiUrl, formInput) => {
  const res = await fetch(apiUrl, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: formInput,      
  });
  try {
    const result = await res.json();
    return result;
  } catch (error) {
    console.log("error", error);
  }
}


export {handleSubmit}