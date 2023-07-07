let outputScreen = document.getElementById("output-screen");

function display(value) {
  outputScreen.value += value;
}

function Calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (e) {
    outputScreen.value = "Error";
  }
}

function Clear() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
