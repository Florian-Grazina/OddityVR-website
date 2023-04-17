// ----------------------------------------------------
// FORM
// ----------------------------------------------------


const formName = document.querySelector("#contactform-name");
formName.addEventListener('blur', CheckFieldBlur);

const formEmail = document.querySelector("#contactform-email");
formEmail.addEventListener('blur', ValidateEmailBlur);

const formPhone = document.querySelector("#contactform-phone");
formPhone.addEventListener('blur', CheckFieldBlur);

const formSubject = document.querySelector("#contactform-subject");
formSubject.addEventListener('blur', CheckFieldBlur);

const formMessage = document.querySelector("#contactform-message");
formMessage.addEventListener('blur', CheckFieldBlur);

const alertColor = "#c41a1a";


function CheckFieldBlur(e) {
    if (!e.target.value) {
        e.target.style.borderBottomColor = alertColor;
    } else {
        e.target.style.borderBottomColor = "";
    }
}


function ValidateEmailBlur(e) {

    var validRegex = /^[a-zA-Z0-9-.]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-]*$/;

    if (!e.target.value.match(validRegex)) {
        e.target.style.borderBottomColor = alertColor;
    } else {
        e.target.style.borderBottomColor = "";
    }
}


// ----------------------------------------------------
// CHECK DATA
// ----------------------------------------------------


const buttonSubmit = document.querySelector("#contactform-submit");
buttonSubmit.addEventListener('click', CheckAll);

function CheckSend(field) {
    if (!field.value) {
        field.style.borderBottomColor = alertColor;
        return false;
    }
    return true;
}


function CheckEmailSend(field) {
    var validRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]*$/;

    if (!field.value.match(validRegex)) {
        field.style.borderBottomColor = alertColor;
        return false;
    }
    return true;
}


function CheckAll(e) {
    let listOfChecks = [];
    console.log("checking data");

    listOfChecks.push(CheckSend(formName));
    listOfChecks.push(CheckEmailSend(formEmail));
    listOfChecks.push(CheckSend(formPhone));
    listOfChecks.push(CheckSend(formSubject));
    listOfChecks.push(CheckSend(formMessage));

    if (listOfChecks.every(x => x == true))
        SubmitData();
}


// ----------------------------------------------------
// SEND DATA
// ----------------------------------------------------

const alertSuccess = document.querySelector("#form-success");
const alertDanger = document.querySelector("#form-danger");
const loader = document.querySelector("#loader");

function sleep(wait){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, wait);
    });
}

async function TriggerAlert(alert){
    loader.style.visibility = "hidden";
    alert.style.visibility = "visible";
    await sleep(8000);
    alert.style.visibility = "hidden";
    buttonSubmit.disabled = false;
}

function SubmitData() {

    let name = formName.value;
    let email = formEmail.value;
    let phone = formPhone.value;
    let subject = formSubject.value;
    let message = formMessage.value;

    let form = {
        "Name" : name,
        "Email" : email,
        "Phone" : phone,
        "Subject" : subject,
        "Message" : message
    }

    postData("http://localhost:8081/api/v1/create_prospe", form);
}

// API
// --------------------------------------

async function postData(url = "", data = {}) {

    loader.style.visibility = "visible";
    buttonSubmit.disabled = true;

    fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    })

    .then(response => {
        console.log(response);
        if (response.ok){
            TriggerAlert(alertSuccess);
            return response.json();
        }
        throw new Error(error);
    })
    .then(data => {
        return data})

    .catch((error) => {
        TriggerAlert(alertDanger);
    })
}

