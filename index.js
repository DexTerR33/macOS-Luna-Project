(function () {
  var dropBtns = document.querySelectorAll('.dropdown-button');
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

  //   close menus when clicking outside of them
  window.addEventListener('click', function (event) {
    if (event.target != dropBtns) {
      // Moved the code here to its own function.
      closeOpenItems();
    }
  });




  dragElement(document.getElementById("mydiv"));
  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown =
        dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  //Make the DIV element draggagle:
  dragElement(document.getElementById("mydiv2"));
  function dragElement2(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown =
        dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  //Make the DIV element draggagle:
  dragElement3(document.getElementById("mystickyNotes"));
  function dragElement3(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown =
        dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

$(".press-me-button").click(function() {
  $("#newcontact").toggle();
});
  // Close the dropdown if the user clicks outside of it
  $(".container-aboutMe").click(function () {
    $(".overlay").toggleClass("active2");
    $(".overlay").addClass("active");
    console.log("overlay", "dasfa");
  });

  $(".close").click(function () {
    $(".overlay").addClass("active2");
    console.log("overlay", "rrrrdasfa");
  });
  $("#dropDown").click(function () {
    $(".drop-down").toggleClass("drop-down--active");
  });
  $("#dropDown2").click(function () {
    $(".drop-down2").toggleClass("drop-down--active");
  });
})();