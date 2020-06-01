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
function fetchJSON() {
  console.log('Fetching JSON');

  // The fetch() function returns a Promise because the request is asynchronous.
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
