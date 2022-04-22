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
      var dropContent = btn.querySelector(".dropMenu-list"),
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
  dragElement(document.getElementById("finderclone"));
  dragElement(document.getElementById("finderclonetest"));
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

moveWindows();
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
var datamap = new Map([
  [document.getElementById("myBtn"), document.getElementById("myModal")],
  [document.getElementById("myBtn1"), document.getElementById("myModal1")],
  [document.getElementById("myBtn2"), document.getElementById("myModal2")],
  [document.getElementById("myBtn3"), document.getElementById("myModal3")],
]);
datamap.forEach((value, key) => {
  doModal(key, value);
});

function doModal(anchor, popupbox) {
  // Get the <span> element that closes the modal
  var span = popupbox.getElementsByClassName("close")[0];

  anchor.addEventListener("click", function (event) {
    popupbox.style.display = "block";
  });

  span.addEventListener("click", function (event) {
    popupbox.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popupbox) {
      popupbox.style.display = "none";
    }
  });
}
