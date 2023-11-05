// get the form data from the html file

const scrambleData = document.querySelector('#scrambleForm');
const output = document.querySelector('#outputData')

scrambleData.addEventListener('submit', function(e)
    {
    e.preventDefault();

    const textInput = (scrambleData.elements.text);
    const wordInput = (scrambleData.elements.word);

    console.log(textInput.value);
    console.log(wordInput.value);

    // Get the input value
    const sentence = textInput.value

    // Split the sentence into an array of words
    const wordsArray = sentence.split(" ");

    // Display the words array in the console (for demonstration purposes)
    console.log(wordsArray);

    // You can do further processing with the wordsArray here
    
    // If you want to display the words in an HTML element (for demonstration purposes)
        // addData(wordsArray);

    addData (textInput.value, wordInput.value)
    textInput.value= "";
    wordInput.value= "";

});

const addData = (textInput, wordInput, words) => {
    
    const post = document.createElement('div');

    const ptag = document.createElement('p');

    ptag.append(`${textInput}`);

    post.append(ptag);

    output.append(post)
    
    // function to display the words to the DOMgit commit
    // const outputDiv = document.createElement('div');
    //     outputDiv.textContent = "Words in the sentence: " + words.join(", ");
    //     document.body.appendChild(outputDiv);
        
    };

    