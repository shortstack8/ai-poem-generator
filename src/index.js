function showPoem(response) {
  console.log("Poem generated successfully!");
  new Typewriter("#poem-body", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7a8a3ab1of0tb43589746b74d2fe8452";
  let prompt = `User instructions: Please tell me a poem about ${instructionsInput.value}`;
  let context =
    "You are a talented wordsmith who loves to write poems. Your mission is to generate a haiku poem in basic HTML. Please be polite and follow user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Just a moment...generating a haiku poem especially for you! 💜");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  let poemBody = document.querySelector("#poem-body");
  poemBody.innerHTML =
    "Just a moment...generating a haiku poem especially for you! 💜";

  axios.get(apiUrl).then(showPoem);
}

let poemFormElement = document.getElementById("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
