

  function moveWindows() {
    var dropBtns = document.querySelectorAll('.dropdown-button');
console.log(dropBtns , "btnSho")
    function closeOpenItems() {
      openMenus = document.querySelectorAll('.dropMenu-list');
      openMenus.forEach(function (menus) {
        menus.classList.remove('show');
      });
    }
    dropBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        var
          dropContent = btn.querySelector('.dropMenu-list'),
          shouldOpen = !dropContent.classList.contains('show');
        e.preventDefault();
        // First close all open items.
        closeOpenItems();
        // Check if the clicked item should be opened. It is already closed at this point so no further action is required if it should be closed.
        if (shouldOpen) {
          // Open the clicked item.
          dropContent.classList.add('show');
        }
        e.stopPropagation();
      });
    });
    window.addEventListener('click', function (event) {
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
      document.getElementById(elmnt.id + "header").onmousedown =
          dragMouseDown;
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

  moveWindows() ;


const openPopupButtons = document.querySelectorAll('[data-popup-target]');
const closePopupButtons = document.querySelectorAll('[data-popup-close]');
const overlay = document.getElementById('overlayP');
const popupClass = document.querySelector('.popupMac');
const popupClass1 = document.querySelector('.popupMac2');
console.log(popupClass, "popupClass");
console.log(popupClass1, "popupClass1");



openPopupButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    console.log(button, "2");
    const popupOpen = document.querySelector(button.dataset.popupTarget);
    openPopup(popupOpen);
    e.preventDefault();
  });

});
/*
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.popupMac.active');
  modals.forEach(popupTarget => {
    closeModal(popupTarget);
  });
});*/
closePopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popupClose = button.closest('.popupMac');
    const popupClose1 = button.closest('.popupMac2');
    closePopup(popupClose, popupClose1);
  });
});

function openPopup(popupOpen) {
  if (popupOpen == null) return;
  popupClass.classList.add('active');
  overlay.classList.add('active');
  console.log(popupOpen, "2");
}

function closePopup(popupClose) {
  if (popupClose == null) return;
  popupClose.classList.remove('active');
  overlay.classList.remove('active');
  console.log(popupClose, "test");
}





