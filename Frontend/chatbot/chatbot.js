const btn = document.getElementById("chatbot-btn");
const box = document.getElementById("chatbot-box");
const messages = document.getElementById("chatbot-messages");

btn.onclick = () => {
  box.classList.toggle("hidden");
  showMainMenu();
};

function showMainMenu() {
  messages.innerHTML = "<p>Hello 👋<br>Select an option:</p>";

  addOption("Services", showServices);
  addOption("Pricing Plans", showPricing);
  addOption("Book Free Class", bookClass);
  addOption("Other Services", otherServices);
}

function addOption(text, callback) {
  const button = document.createElement("button");
  button.innerText = text;
  button.className = "option-btn";
  button.onclick = callback;
  messages.appendChild(button);
}

function showServices() {
  messages.innerHTML = "<p>Our Services:</p>";

  addOption("Web Development", () => reply("We build websites 🌐"));
  addOption("App Development", () => reply("We build apps 📱"));
  addOption("AI Solutions", () => reply("We provide AI solutions 🤖"));
  addOption("⬅ Back", showMainMenu);
}

function showPricing() {
  messages.innerHTML = "<p>Pricing Plans:</p>";

  addOption("Basic - ₹999", () => reply("Basic plan details"));
  addOption("Pro - ₹1999", () => reply("Pro plan details"));
  addOption("Enterprise - ₹4999", () => reply("Enterprise plan details"));
  addOption("⬅ Back", showMainMenu);
}

function bookClass() {
  reply("Visit our site to book a free class 🎓");
}

function otherServices() {
  messages.innerHTML = "<p>Other Services:</p>";

  addOption("Consulting", () => reply("We provide consulting"));
  addOption("Support", () => reply("24/7 support"));
  addOption("⬅ Back", showMainMenu);
}

function reply(text) {
  messages.innerHTML = `<p>${text}</p>`;
  addOption("⬅ Back to Menu", showMainMenu);
}