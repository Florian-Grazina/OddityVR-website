

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

async function getData(url = "") {
    fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
    })
    .then(response => {
        return response.json()})

    .then(data => {
        console.log(data);
        return data})
}

// fetch("http://localhost:8081/api/v1/get_all_authors", form)
