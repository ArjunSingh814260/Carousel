var num;
var preValue = [];
var imgNum;
function display(imgNum = 1) {
  num = imgNum;
  preValue.push(num);
  document.getElementById("getImg").src = `./assets/img=${imgNum}.jpg`;

  if (imgNum == 1) {
    document.getElementById("pre").innerHTML = " ";
  } else if (imgNum > 1) {
    document.getElementById("pre").innerHTML = "< previous";
  }
  if (imgNum < 5) {
    document.getElementById("next").innerHTML = "Next >";
  } else if (imgNum == 5) {
    document.getElementById("next").innerHTML = " ";
  }

  font();
  return num;
}

num = display();

function pre() {
  num = num - 1;
  preValue.push(num);

  imgNum = num;

  if (imgNum > 0) {
    document.getElementById("next").innerHTML = " Next >";
    if (imgNum == 1) {
      document.getElementById("pre").innerHTML = " ";
    }
    document.getElementById("getImg").src = `./assets/img=${imgNum}.jpg`;
  }

  font();
}

function next() {
  num = num + 1;
  imgNum = num;
  preValue.push(num);

  if (imgNum < 5) {
    document.getElementById("next").innerHTML = " Next >";
    document.getElementById("pre").innerHTML = "< previous";
  }

  if (imgNum == 5) {
    document.getElementById("next").innerHTML = " ";
  }
  document.getElementById("getImg").src = `./assets/img=${imgNum}.jpg`;
  font();
}

function font() {
  newIndex = preValue.length - 1;
  oldIndex = preValue.length - 2;

  console.log(preValue[newIndex]);
  console.log("old" + preValue[oldIndex]);

  console.log(preValue);

  document.getElementById(`font-${preValue[newIndex]}`).style.fontWeight =
    "600";

  document.getElementById(`font-${preValue[newIndex]}`).style.textDecoration =
    "underline";

  document.getElementById(`font-${preValue[oldIndex]}`).style.fontWeight =
    "normal";

  document.getElementById(`font-${preValue[oldIndex]}`).style.textDecoration =
    "none";
}
