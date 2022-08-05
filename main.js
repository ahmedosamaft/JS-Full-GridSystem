let allHtml = document.getElementsByTagName("html")[0];
let header = document.createElement("header");
let logo = document.createElement("div");
let nav = document.createElement("nav");
let navUl = document.createElement("ul");
let text = ["Home", "About", "Services", "Contact"];

document.body.style.cssText =
  "background-color: #ececec; padding: 0; margin: 0; font-Family: sans-serif";
document.body.style.boxSizing = "border-box";
logo.className = "logo";
logo.append("OSOS");
document.body.appendChild(header);
header.appendChild(logo);
header.appendChild(nav);
nav.appendChild(navUl);
for (let i = 0; i < 4; i++) {
  let navli = document.createElement("li");
  navUl.appendChild(navli);
  navli.append(text[i]);
}

header.style.cssText = `display: flex;
width: 100%;
align-items: center;
background-color: white;
justify-content: space-between;
padding: 20px;
box-sizing: border-box;`;

navUl.style.cssText = `list-style: none;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
width: calc(100%);
margin: 0 42px 0 0;
padding: 0;`;

logo.style.cssText = `color: #23a96e;
font-size: 20px;
font-weight: bold;`;

let parent = document.createElement("div");

for (let i = 0; i < 15; i++) {
  let mainBox = document.createElement("div");
  let DivText = document.createElement("div");
  let boxText = document.createTextNode(i + 1);
  let boxP = document.createTextNode("Product");
  DivText.appendChild(boxText);
  mainBox.appendChild(DivText);
  mainBox.appendChild(boxP);
  parent.appendChild(mainBox);
  DivText.style.cssText = `font-weight: bold;
  display: flex;
  width: 100%;
  margin: 0 0 10px;
  justify-content: center;
  color:black;
  font-size: 30px`;
  mainBox.style.cssText = `background-color: white;
  flex-flow: column;
  margin: 20px 0 0 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#777;
  font-size:10px`;
}
parent.style.cssText =
  "display: grid; grid-template-columns: repeat(3, minmax(300px, 1fr)); gap: 20px;height: calc(100vh - 130px); margin-bottom: 20px";

document.body.appendChild(parent);

let footer = document.createElement("footer");
footer.append("Copyright 2022");
document.body.appendChild(footer);

footer.style.cssText = `    height: 47px;
background: #23a96e;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-weight: bold;`;
