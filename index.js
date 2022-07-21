$(document).ready(function() {
  var datamap = new Map([
    [
      document.getElementById("logoAppleButton"),
      document.getElementById("myMacMaster")
    ],
    [
      document.getElementById("myBtn2"),
      document.getElementById("aboutMeMaster")
    ],
    [
      document.getElementById("myBtn3"),
      document.getElementById("finderMaster")
    ],
    [
      document.getElementById("terminalButton"),
      document.getElementById("TerminalMaster")
    ],
    [
      document.getElementById("chromePageButton"),
      document.getElementById("chromePageMaster")
    ],
    [
      document.getElementById("linkedinButton"),
      document.getElementById("LinkdinMaster")
    ],
    [
      document.getElementById("unfinishButton"),
      document.getElementById("unfinishMaster")
    ], 
    [
      document.getElementById("githubButton"),
      document.getElementById("githubMaster")
    ]
  ]);
  console.log(datamap, 'datamap');
/* open stuff */
  function doModal(buttonClick, popupbox) {
    console.log('buttonClick', buttonClick);
    let closeButton = popupbox.querySelector(".close");
    
    buttonClick.addEventListener("click", function handleClick(event) {
      console.log(event, "event")
      checkisClicked();
      popupbox.style.display = "block";
      event.preventDefault();
  
      closeButton.addEventListener("click", function handleClick(event) {
        if ((event.target == popupbox.style.display) == "block"); {
          popupbox.style.display = "none";
        }
        event.stopPropagation();
      });   
    });

    let clicked = false;
    function checkisClicked() {
      clicked = true;
      if (clicked === true) {
      } else {
        console.log("else switch");
      }
    }
  }

  datamap.forEach((value, key) => {
    doModal(key, value);
  });
});
/*close open stuff*/ 
document.addEventListener("DOMContentLoaded", function () {
  console.log('start');
  function moveWindows() {
    var dropBtns = document.querySelectorAll(".dropdown-button");
    console.log(dropBtns, "btnSho");
    function closeOpenItems() {
      openMenus = document.querySelectorAll(".dropMenu-list");
      openMenus.forEach(function (menus) {
        menus.classList.remove("show");
      });
    }

    dropBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        let dropContent = btn.querySelector(".dropMenu-list"),
          shouldOpen = !dropContent.classList.contains("show");
        e.preventDefault();
        // First close all open items.
        closeOpenItems();
        // Check if the clicked item should be opened. It is already closed at this point so no further action is required if it should be closed.
        if (shouldOpen) {
          // Open the clicked item.
          dropContent.classList.add("show");
        }
        e.stopPropagation();
      });
    });
    window.addEventListener("click", function (event) {
      if (event.target != dropBtns) {
        closeOpenItems();
      }
    });
    console.log('middle');

    dragElement(document.getElementById("finderBox"));
    dragElement(document.getElementById("adobeXDBox"));
    dragElement(document.getElementById("chromePageBox"));
    dragElement(document.getElementById("aboutmeBox"));
    dragElement(document.getElementById("aboutmacBox"));
    dragElement(document.getElementById("terminalBox"));
    dragElement(document.getElementById("linkdinBox"));
    dragElement(document.getElementById("unfinishBox"));
    dragElement(document.getElementById("githubBox"));
    
    // dragElement(document.getElementById("chromeBox"));

    function dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }


  function test() {
    let day;
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:

        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }
    console.log(day, "day");
    document.getElementById("demo").innerHTML = "Today is " + day;
  }

  moveWindows();
  // window.addEventListener("click", function (event) {
  //   if (event.target == popupbox) {
  //     popupbox.style.display = "none";
  //   }
  // });
  // console.log(buttonClick, "buttonClick");
  // console.log(closeButton, "closeButton");
  // console.log(popupbox, "popupbox");
  // console.log(logoAppleButton, "button mac press");
  // console.log(myBtn2, "button about me press");
  // console.log(myBtn3, "button finder press");
  // console.log(terminalButton, "button terminal press");
  // $("#iconsBoxJss").load("./template/assets/icons/icons.html");
});


$("#adobeXDBoxJs").load("./template/assets/windows/adobexd/adobeXD.html");
$("#chromePageBoxJs").load("./template/assets/windows/chrome/chromePage.html");
$("#terminalBoxJs").load("./template/assets/windows/terminal/terminal.html");
$("#linkdinBoxJs").load("./template/assets/windows/linkdin/linkdin.html");
$("#unfinishBoxJs").load("./template/assets/windows/unfinish/unfinish.html");
$("#githubBoxJs").load("./template/assets/windows/github/github.html");


// $("#bottomIconsJs").load("./template/assets/icons/icons.html");

/*
const button = document.getElementById('btn');
let elementClicked = false;
button.addEventListener('click', function handleClick() {
  console.log('element clicked');

  elementClicked = true;
});
setInterval(() => {
  if (elementClicked) {
    console.log('element was clicked');
  } else {
    console.log("element hasn't been clicked yet");
  }
}, 1500); // 👉️ invoke every 1500 milliseconds

*/
// document.getElementById("terminalBox").innerHTML='<object type="text/html" data="./terminal.html" ></object>';

/*
 $(".press-me-button").click(function () {
    $("#newcontact").toggle();
  });

  $(".container-aboutMe").click(function () {
    $(".overlay").toggleClass("active2");
    $(".overlay").addClass("active");
    console.log("overlay", "pass1");
  });

  $(".close").click(function () {
    $(".overlay").addClass("active2");
    console.log("overlay", "pass2");
  });
  $("#dropDown").click(function () {
    $(".drop-down").toggleClass("drop-down--active");
  });
  $("#dropDown2").click(function () {
    $(".drop-down2").toggleClass("drop-down--active");
  });
}
const openPopupButtons = document.querySelectorAll("[data-popup-target]");
const closePopupButtons = document.querySelectorAll("[data-popup-close]");
const overlay = document.getElementById("overlayP");
const popupClass = document.querySelector(".popupMac");
const popupClass2 = document.querySelector(".popupMac2");
const popall = {popupClass, popupClass2};
// const popupClass1 = document.querySelector('.popupMac2');
console.log(popupClass, "popupClass");
console.log(popall, "popupClass2all");
// console.log(popupClass1, "popupClass1");


overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.popupMac.active');
  modals.forEach(popupTarget => {
    closeModal(popupTarget);
  });
});
const boxes = document.querySelectorAll('#box1, #box2, #box3');
openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button, "button clicked");
      const popupOpen = document.querySelector(button.dataset.popupTarget);
      openPopup(popupOpen);
      e.preventDefault();
     

    
  });
});

function openPopup(popupOpen) {
  if (popupOpen == null) return;
  popupClass.classList.add("active");
  // overlay.classList.add('active');
  console.log(popupOpen, "open");
}

closePopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popupClose = button.closest(".popupMac");

    closePopup(popupClose);
  });
});

function closePopup(popupClose) {
  if (popupClose == null) return;
  popupClose.classList.remove("active");
  // overlay.classList.remove('active');
  console.log(popupClose, "close");
}
*/