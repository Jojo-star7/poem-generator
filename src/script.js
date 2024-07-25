function displayPoem(response) {
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

  poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating a poem about ${instructionsInput.value}. . .</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);
