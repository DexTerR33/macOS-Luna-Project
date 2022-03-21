console.log("start Firebase......");
// your page initialization code here
// the DOM will be available here
var firebaseConfig = {
    apiKey: "x",
    authDomain: "x",
    projectId: "xgarage-fa",
    storageBucket: "x",
    messagingSenderId: "x",
    appId: "x",
    measurementId: "x"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var dbRef = firebase.database();
var counter = 1;
//var keytext = getElementById("keytext2");

// display data from db


$(document).ready(function() {
    console.log("CONTACT IS READY FOR PAGE!....");
    console.log("Load Contacts!");
    //getRealtimeupdate();
    readUserData();
});
$("#btnSaveContact").on("click", saveData);
$("#btnEditContact").on("click", editData);
$("#btnDeleteContact").on("click", deleteData);
//  function push data from inputs to firebase

console.log("Start: Welcome To FA Motor Repair!");
console.log("Middle: saveData");

function saveData() {
    var checkBox = document.getElementById("myCheck");
    console.log("clicked succesfully on Button");
    if (checkBox.checked == true && $("#fname").val() !== "") {
        var contactsRef = dbRef.ref("/contacts").push();
        var uidKey = contactsRef.key;
        var counterAll = counter;
        console.log(uidKey, "is set...Please continue");
        contactsRef.set({
                First_name: $("#fname").val().trim(),
                Second_name: $("#lname").val().trim(),
                Location: {
                    Address: $("#address").val().trim(),
                    Country: $("#country").val().trim(),
                    City: $("#city").val().trim(),
                    AreaCode: $("#areaCode").val().trim(),
                },
                Phone: $("#phone").val().trim(),
                Data_Join: $("#dataEntry").val().trim(),
                Email: $("#contactEmail").val().trim(),
                Vehicle: {
                    RegistrationNR: $("#registrationNr").val().trim(),
                    VINnr: $("#vinNr").val().trim(),
                    Model: $("#vehicleModel").val().trim(),
                    Type: $("#vehicleType").val().trim(),
                    Miles: $("#vehicleMilesOnBoard").val().trim(),
                    Fuel: $("#vehicleFuelType").val().trim(),
                    Engine: $("#vehicleEngineType").val().trim(),
                    Year: $("#vehicleYear").val().trim(),
                    MotDate: $("#vehicleMotDate").val().trim(),
                    MotExpired: $("#vehicleMotExpired").val().trim(),
                    CamData: $("#vehicleCamBelt").val().trim(),
                    CamExpMiles: $("#vehicleCamBeltExpiredMiles").val().trim(),
                    CamExpYears: $("#vehicleCamBeltExpiredYears").val().trim(),
                    Next_service: $("#vehicleNextService").val().trim()
                },
                More_info: $("#vehicleMoreInfo").val().trim(),
                startedAt: firebase.database.ServerValue.TIMESTAMP,
                user_key: uidKey,
                ID_contacts: counterAll
            })
            .then(function() {
                console.log("Document successfully written in Data Base!", counter);
                $("#contactForm").trigger("reset");
                console.log("reset Form");
            })
            .then(function() {
                $('.success-message').show();
                console.log("Show Message Succes!");
                setTimeout(function() {
                    $('.success-message').hide();
                    console.log("Hide Message Succes");
                }, 2000);
            })
            .catch(function(error) {
                console.log("Something is wrong with Data: ", error);
            });
    } else {
        elseData();
        console.log("Please Check the box");
    }
}


function elseData() {
    console.log("Show Message");
    $('.myCheck2').show();
    setTimeout(function() {
        $('.myCheck2').hide();
        console.log("Hide Message");
    }, 2000);
}

$("#myBtn").click(function() {
    $("#myModalContact").modal();
});

function readUserData() {
    var showProductList = document.getElementById("productList");
    var productRef = dbRef.ref('contacts/');
    productRef.on("value", function(snap) {
        showProductList.innerHTML = "";
        snap.forEach(function(childSnap) {
            var key = childSnap.key;
            var value = childSnap.val();
            var $li = document.createElement("li");
            console.log("s", value, key);
            // edit icon
            var editIcon = document.createElement("span");
            editIcon.class = "edit-user";
            editIcon.innerHTML = "✎";
            editIcon.setAttribute("userid", key);
            editIcon.addEventListener("click", editButtonClicked);
            // delete icon
            var deleteIcon = document.createElement("span");
            deleteIcon.class = "delete-user";
            deleteIcon.innerHTML = " ☓";
            deleteIcon.setAttribute("userid", key);
            deleteIcon.addEventListener("click", deleteButtonClicked);
            $li.innerHTML = value.fname;

            $li.append(editIcon);
            $li.append(deleteIcon);
            $li.setAttribute("user-key", key);
            $li.addEventListener("click", prodClicked);
            showProductList.append($li);
        });
    });
}


function prodClicked(e) {
    var userID = e.target.getAttribute("user-key");
    var productRefe = dbRef.ref('contacts/' + userID);
    var prodDetail = document.getElementById("productDetail");
    productRefe.on("value", function(snap) {
        prodDetail.innerHTML = "";
        snap.forEach(function(childSnap) {
            var $p = document.createElement("p");
            $p.innerHTML = childSnap.key + " - " + childSnap.val();
            prodDetail.append($p);
        });
    });
}
// --------------------------




// --------------------------
// DELETE
// --------------------------
function deleteButtonClicked(e) {
    e.stopPropagation();
    var userID = e.target.getAttribute("userid");
    var productRefeee = dbRef.ref('contacts/' + userID);
    productRefeee.remove();
}
// --------------------------
// EDIT
// --------------------------
function editButtonClicked(e) {

    console.log("edit IS Clicked");
    document.getElementById('edit-user-module').style.display = "block";
    //set user id to the hidden input field
    document.querySelector(".edit-userid").value = e.target.getAttribute("userid");
    var productRefeeee = dbRef.ref('contacts/' + e.target.getAttribute("userid"));
    // set data to the user field
    var editProductForms = document.querySelectorAll(".edit-product");
    productRefeeee.on("value", function(snap) {
        for (var i = 0, len = editProductForms.length; i < len; i++) {
            var key = editProductForms[i].getAttribute("data-key");
            editProductForms[i].value = snap.val()[key];
        }
    });
    var saveBtn = document.querySelector("#edit-user-btn");
    saveBtn.addEventListener("click", saveProductBtnEdit);
}

function saveProductBtnEdit(e) {
    e.stopPropagation();
    var userID = document.querySelector(".edit-userid").value;
    var productRefeeeee = dbRef.ref('contacts/' + userID);
    var editedUserObject = {};
    var editUserInputsUI = document.querySelectorAll(".edit-product");
    editUserInputsUI.forEach(function(textField) {
        let key = textField.getAttribute("data-key");
        let value = textField.value;
        editedUserObject[textField.getAttribute(key)] = value;
    });
    productRefeeeee.update(editedUserObject);
    document.getElementById('edit-user-module').style.display = "none";
}

function editData() {
    console.log("clicked succesfully:");
}

function deleteData() {
    console.log("DeleteData");
}
console.log("End!");