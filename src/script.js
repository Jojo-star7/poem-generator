function displayPoem(response) {
  console.log(`poem generator`);
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o0a84d23edbd856fet0dd8ae716ab462";
  let context = `User instructions are: Generate a poem about ${instructionsInput.value}`;
  let prompt =
    "You are poem expert. Write a short four line poem according to the user instructions in basic HTML and seperate the lines with </br>. Sign poem with 'shecodes AI' inside a <strong> element at the bottom of poem. Do not include the title";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`generation poems`);
  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);
