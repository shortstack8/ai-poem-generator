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
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}.`;
  let context =
    "You are a talented wordsmith who loves to write poems. Your mission is to generate a haiku poem. Please format your response in basic HTML. Please be polite and follow user instructions. DO NOT write: 'formatted in HTML' in your answer.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemBody = document.querySelector("#poem-body");
  poemBody.classList.remove("hidden");
  poemBody.innerHTML = `<div class="blink">⏳ Generating a haiku poem about ${instructionsInput.value} especially for you! 💜</div>`;

  console.log(
    `⏳ Generating a haiku poem about ${instructionsInput.value} especially for you! 💜`
  );
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(showPoem);
}

let poemFormElement = document.getElementById("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
