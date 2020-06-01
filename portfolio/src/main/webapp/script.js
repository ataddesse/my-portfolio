var submitAnswer = function() {

  var radios = document.getElementsByName('group1');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == "answer" ) {
    alert('Answer is correct !');
  } else {
    alert('Answer is wrong');
  }
};

$(document).ready(function(){
    $('.parallax').parallax();
});

//This is the begining of fetching the JSON string 
function fetchingJson() {
  console.log('Fetching JSON');

 
  const responsePromise = fetch('/portfolio');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleResponse);
}

/**
 * Handles response by converting it to text and passing the result to
 * addToDom().
 */
function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = response.text();

  // When the response is converted to text, pass the result into the
  // addQuoteToDom() function.
  textPromise.then(addToDom);
}

/** Adds a random quote to the DOM. */
function addToDom(quote) {
  console.log('Adding quote to dom: ' + quote);

  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}

//Fetch comments and build UI
function getContact() {
  fetch('/get-contact').then(response => response.json()).then((game) => {
    const totalEl = document.getElementById('total');
    

    // Build the list of history entries.
    const historyEl = document.getElementById('history');
    game.history.forEach((line) => {
      historyEl.appendChild(createListElement(line));
    });
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
