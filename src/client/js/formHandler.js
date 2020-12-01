
import {checkForName} from './nameChecker'



function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (formText !== "") {
      getApiKey('/getApiKey')
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


export const getApiKey = async(apiUrl) => {
  const res = await fetch(apiUrl);
  try {
    const result = await res.json();
    return result;
  } catch (error) {
    console.log("error", error);
  }
}


export {handleSubmit}