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
    $('select').formSelect();
});

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

/** Fetches tasks from the server and adds them to the DOM. */
function loadTasks() {
  fetch('/list-post').then(response => response.json()).then((tasks) => {
    const taskListElement = document.getElementById('post-list');
    tasks.forEach((task) => {
      taskListElement.appendChild(createTaskElement(task));
    })
  });
}

/** Creates an element that represents a task, including its delete button. */
function createTaskElement(task) {
  const taskElement = document.createElement('li');
  taskElement.className = 'task';

  const titleElement = document.createElement('span');
  titleElement.innerText = task.title;

  const deleteButtonElement = document.createElement('button');
  deleteButtonElement.innerText = 'Delete';
  deleteButtonElement.addEventListener('click', () => {
    deleteTask(task);

    // Remove the task from the DOM.
    taskElement.remove();
  });

  taskElement.appendChild(titleElement);
  taskElement.appendChild(deleteButtonElement);
  return taskElement;
}

/** Tells the server to delete the task. */
function deleteTask(task) {
  const params = new URLSearchParams();
  params.append('id', task.id);
  fetch('/delete-task', {method: 'POST', body: params});
}



