// Login Function
function loginUser() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "Shaikheena" && password === "heenavali") {
    alert("Welcome to Bean Bliss Coffee, Shaikheena!");
    window.location.href = "intro.html";
    return false;
  } else {
    alert("Invalid username or password!");
    return false;
  }
}

// Dynamic Coffee Gallery Logic
const coffeeForm = document.getElementById("coffeeForm");
const gallery = document.getElementById("gallery");

if (coffeeForm) {
  coffeeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("coffeeName").value;

    const item = document.createElement("div");
    item.classList.add("coffee-item");
    item.innerHTML = `
      <h4>${name}</h4>
      <button class="remove-btn">Remove</button>
    `;

    item.querySelector(".remove-btn").addEventListener("click", () => {
      gallery.removeChild(item);
    });

    gallery.appendChild(item);
    coffeeForm.reset();
  });
}

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill all the fields.");
    } else if (!email.includes("@")) {
      alert("Enter a valid email.");
    } else {
      alert("Thank you for contacting us! ");
    }
  });
}
