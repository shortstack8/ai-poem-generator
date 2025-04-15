function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-body", {
    strings: "Poem goes here",
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}

let poemFormElement = document.getElementById("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
