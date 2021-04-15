console.log("TODO JS LOADED");

// fetching Required Elements__________________________________
var deleteDiv = document.getElementById("delete-btn");
var taskDiv = document.querySelectorAll("#task-container");
var dateArray = document.querySelectorAll("#date-text");
var tasktext = document.querySelectorAll("#task-text");
var headingText = document.getElementById("app-heading-text");
var checkboxes = document.querySelectorAll("#checkbox");
var categories = document.querySelectorAll("#category-text");
var categoryDiv = document.querySelectorAll("#category-div");
var taskdisplay = document.getElementById("task-display-container");
var AddBtn = document.getElementById("add-icon-div");
var inputForm = document.getElementById("input-form");
var buttonContainer = document.getElementById("button-container");
var addIconDiv = document.getElementById("icon-img-div");
var addNewText = document.getElementById("add-new-text");
var Body = document.getElementById("Body");
var taskWrapper = document.querySelectorAll("#task-wrapper");
var headingDiv = document.getElementById("app-heading-div");
var calenderIcon = document.querySelectorAll("#calender");
var ToggleDiv = document.getElementById("toggle-container");
var ToggleSwitch = document.getElementById("toggle-switch");
var LightText = document.getElementById("light-text");
var DarkText = document.getElementById("dark-text");
var deleteCan = document.getElementById("delete-can");
var divisionLine = document.querySelectorAll("#division-line");
var NoTaskDiv = document.getElementById("No-task-div");
var NoTaskText = document.getElementById("no-task-text");
var NoTaskIcon = document.getElementById("no-task-icon");
var appIcon = document.getElementById("app-icon");

if (taskWrapper.length == 0) {
  // alert("Add your first Task :)");
  NoTaskDiv.classList.toggle("No-task-div-show");
}
console.log(taskWrapper.length);

//_to handle clicks on add new button__________________//
var p = true;
AddBtn.addEventListener("click", function () {
  taskdisplay.classList.toggle("shrink");
  inputForm.classList.toggle("expand");
  buttonContainer.classList.toggle("Add-border-radius");
  addIconDiv.classList.toggle("change-img");
  console.log(addNewText);

  if (p == true) {
    console.log("true");
    addNewText.innerHTML = "COLLAPSE";
    p = false;
  } else if (p == false) {
    console.log("false");
    addNewText.innerHTML = "ADD NEW";
    p = true;
  }
});

//___code to give different colors to category divs___//
console.log(categories);
for (let i = 0; i < categories.length; i++) {
  if (categories[i].innerHTML == "Personal") {
    categoryDiv[i].classList.add("color1");
  } else if (categories[i].innerHTML == "Work") {
    categoryDiv[i].classList.add("color2");
  } else if (categories[i].innerHTML == "School") {
    categoryDiv[i].classList.add("color3");
  } else if (categories[i].innerHTML == "Home") {
    categoryDiv[i].classList.add("color4");
  } else if (categories[i].innerHTML == "Other") {
    categoryDiv[i].classList.add("color5");
  }
  var x = categories[i].innerHTML;
  console.log(x);
}

//___to formatt date in required formatt before displaying__//
for (j = 0; j < dateArray.length; j++) {
  var date = dateArray[j].innerHTML;
  var d = date.slice(0, 10);
  var a = d.slice(0, 3);
  var b = d.slice(4, 7);
  var c = d.slice(8, 10);
  var f = c + " " + b + ", " + a;
  dateArray[j].innerHTML = f;
}

// ___Code which handles checkbox event
//___clicking on checkboxes activates the delete button and makes it red___//
//__if none of the checkboxes are selected then the delete button remains white_______//
var checkedArray = {};
console.log(checkedArray);

deleteDiv.addEventListener("click", function () {
  if (!Object.values(checkedArray).includes("true")) {
    alert("Please Select a Task to delete !");
  }
});

for (let i = 0; i < checkboxes.length; i++) {
  checkedArray[i] = "false";
}

console.log(checkboxes);
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", function () {
    taskWrapper[i].classList.toggle("selected");
    console.log("clicked");

    if (checkedArray[i] == "false") {
      checkedArray[i] = "true";
    } else {
      checkedArray[i] = "false";
    }
    changeColor();
  });

  function changeColor() {
    console.log("reached");
    console.log(checkedArray);

    if (Object.values(checkedArray).includes("true")) {
      console.log("yes");
      deleteDiv.classList.add("active");
    } else {
      console.log("no");
      deleteDiv.classList.remove("active");
    }
  }
}

//____dark mode toggle switch  event handling__//
//____various ui colors , text and icons changes on toggling dark mode switch__//
var darkIcon = true;
ToggleDiv.addEventListener("click", function () {
  ToggleSwitch.classList.toggle("toggled");
  this.classList.toggle("toggled-div-color");
  DarkText.classList.toggle("light-text");
  NoTaskText.classList.toggle("no-task-light-text");

  if (darkIcon == true) {
    NoTaskIcon.src = "/images/add2.png";
    darkIcon = false;
  } else if (darkIcon == false) {
    NoTaskIcon.src = "/images/add1.png";
    darkIcon = true;
  }

  ChangeTheme();
  fontColor();
  changeIcons();
});

function ChangeTheme() {
  console.log("hey there");
  console.log(Body);
  Body.classList.toggle("darkBg");
  taskdisplay.classList.toggle("dark-theme");
  buttonContainer.classList.toggle("dark-theme");
  headingDiv.classList.toggle("dark-theme");
  deleteDiv.classList.toggle("btn-color");
  AddBtn.classList.toggle("btn-color");
  for (let t = 0; t < taskWrapper.length; t++) {
    taskWrapper[t].classList.toggle("task-container-style");
    divisionLine[t].classList.toggle("dark-division-line");
  }
  return;
}

function fontColor() {
  for (let x = 0; x < dateArray.length; x++) {
    tasktext[x].classList.toggle("dark-task-text");
    dateArray[x].classList.toggle("dark-date-text");
    headingText.classList.toggle("dark-task-text");
  }
}

var calIconChanged = false;

function changeIcons() {
  if (calIconChanged == false) {
    appIcon.src = "/images/app-icon1.png";
    for (let n = 0; n < calenderIcon.length; n++) {
      calenderIcon[n].src = "/images/calender2.png";
      deleteCan.src = "/images/delete-icon1.png";
    }
    calIconChanged = true;
  } else if (calIconChanged == true) {
    appIcon.src = "/images/app-icons.png";
    for (let n = 0; n < calenderIcon.length; n++) {
      calenderIcon[n].src = "/images/calender1.png";
      deleteCan.src = "/images/delete-icon1.png";
    }
    calIconChanged = false;
  }
}

// for (k = 0; k < dateArray.length; k++) {
//   //   dateArray[k].innerHTML = finaldate;
// }
// for (let k = 0; k < checkboxes.length; k++) {
//   checkboxes[k].addEventListener("click", function () {
//     tasktext[k].classList.toggle("strike");
//   });
// }
// console.log(deleteDiv);
// console.log(taskDiv);

// for (let i = 0; i < taskDiv.length; i++) {
//   taskDiv[i].addEventListener("click", function () {
//     console.log("clicked");
//   });
// }
// function shrinkTaskDiv(i) {
//   taskDiv[i].classList.toggle("change-color");
// }

// function showDelBtn(i) {
//   deleteDiv[i].classList.toggle("show-del-btn");
// }
