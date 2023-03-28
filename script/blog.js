const title1 = document.querySelector("#title-1");
const title2 = document.querySelector("#title-2");
const title3 = document.querySelector("#title-3");
const title4 = document.querySelector("#title-4");

const titleArray = [title1, title2, title3, title4];

const tag1 = document.querySelector("#tag-1");
const tag2 = document.querySelector("#tag-2");
const tag3 = document.querySelector("#tag-3");
const tag4 = document.querySelector("#tag-4");

const tagArray = [tag1, tag2, tag3, tag4];


// fetch("http://localhost:8081/api/v1/get_top4_articles")

// .then(response => {
//     if (response.ok)
//     return response.json()
    
//     else
//         throw new Error
//     })

// .then(data => {
//     console.log(data);
    
//     for (let i = 0; i < 4; i++) {
//         titleArray[i].innerHTML = data[i]["Title_Article"];
//         // tagArray[i].innerHTML = data[i]["Tag_Article"];
//     }
// })

// .catch((error) => {
//     console.log(error.message);
// })