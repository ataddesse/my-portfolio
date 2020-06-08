var submitAnswer = function() {

  var radios = document.getElementsByName('group1');
  var val= "";
  for (var i = 0;  i < (radio.length);  i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  switch(val){
      case "":
   alert('please select choice answer');
   break;
   case "answer":
   alert('Answer is correct !');
   break;
     default:
    alert('Answer is wrong');
    break;

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

function getComment() {
  var limit = document.getElementById("num-results").value;
  var limitParsed = +limit;
   
  fetch('/list-post').then(response => response.json()).then((comment) => {
     const statsListElement = document.getElementById('post-list');
     statsListElement.innerHTML = '';

     //Get the right value of the limit based on the user's input.  
     var difference;
    if(comment.length < limitParsed || comment.length == limitParsed){
    difference = comment.length;
    }else{
    difference = limitParsed;
    }

    //Output every comment until reaching the limit
    for (var i = 0; i < difference; i++) {
        statsListElement.appendChild(createListElement(comment[i]));
    };
  });
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.classList.add("collection-item");
  liElement.innerText = text;
  return liElement;
}

function deleteComments(){
  const request = new Request('/delete-task', {method: 'POST'});
  const responsePromise = fetch(request);
}



