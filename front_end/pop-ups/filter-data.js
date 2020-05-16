export { filterContent };

const filterContent = document.createElement("form");

let data = ["Monday", "Thurday", "Ceva zi cu nume foarte lung"];
let options = [
  "POI:",
  "State:",
  "Year:",
  "Month:",
  "Day:",
  "Hour:",
  "Severity:",
  "Weather:",
];

const createContent = (data) => {
  filterContent.classList.add("filter-body");
  for (let i of options) {
    addInputField(filterContent, i, i, data);
  }
  let submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.innerText = "Apply";
  submit.classList.add("submitButton");
  filterContent.appendChild(submit);
};

const addInputField = (filterContent, fieldName, fieldDefault, data) => {
  let optionBox = document.createElement("div");
  let label = document.createElement("label");
  let input = document.createElement("select");

  label.innerText = fieldName;
  input.setAttribute("placeholder", fieldDefault);
  for (let i of data) {
    let option = document.createElement("option");
    option.setAttribute("value", i);
    option.innerText = i;
    input.appendChild(option);
  }

  optionBox.append(label, input);
  optionBox.classList.add("option");

  filterContent.appendChild(optionBox);
};

createContent(data);
