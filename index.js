const element = document.createElement("div");
document.body.appendChild(element);

const ul = document.createElement("ul");
let liHTML = "";
for (let i = 0; i < 3; i++) {
  liHTML += `<li>${i + 1}</li>`;
}
ul.innerHTML = liHTML;
element.appendChild(ul);

const newLi = document.createElement("li");
newLi.textContent = "Hi there!";
ul.replaceChild(newLi, ul.children[0]);

const main = document.createElement("main");
main.id = "main";
main.classList.add("pet-listing", "dog");
main.innerHTML = `
  <h1>Poodles!</h1>
  <h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3>
  <p><em>By: Byron Q. Poodle, Esq., BA.</em></p>
`;
document.body.appendChild(main);

element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.textContent = "You've changed what's on the screen!";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = "2";
element.classList.remove("dog");
element.classList.add("cat", "sale");

ul.removeChild(ul.children[1]);


const mainElement = document.getElementById("main");
if (mainElement) {
  mainElement.remove(main);
}

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Zach Haddad is the champion"; // Replace "YOUR-NAME" with your desired name

console.log(newHeader); // Check if the newHeader is created correctly