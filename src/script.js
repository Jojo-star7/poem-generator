function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "A Light exists in Spring",
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);
