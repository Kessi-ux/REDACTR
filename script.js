const scrambleData = document.querySelector('#scrambleForm');

scrambleData.addEventListener('submit', function(e)
    {
    e.preventDefault();
    const textInput = (scrambleData.elements.text);
    const wordInput = (scrambleData.elements.word);

    console.log(textInput.value);
    console.log(wordInput.value);

    // addData (textInput.value)
    // textInput.value = "";
    });

