// let urlRequest = "https://jsonplaceholder.typicode.com/users"
// // XHR
// let xhr = new XMLHttpRequest()
// xhr.open("GET",urlRequest)
// xhr.onload=function(){
//     console.log(JSON.parse(xhr.response));
// }
// xhr.send()
// function sendRequest(method,url,body = null){
//     return new Promise((resolve,reject)=>{
//         let xhr = new XMLHttpRequest()
//         xhr.open(method,url,true)
//         xhr.setRequestHeader('Content-Type','application/json')
//         xhr.onload = ()=>{
//             if(xhr.status >= 400){
//                 reject(xhr.response)
//             }else{
//                 resolve(xhr.response)
//             }
//         }
//         xhr.send(JSON.stringify(body))
//     })
// }
// let body = {
//     name: "Narek",
//     age: 18,
//     job: "developer"
// }
// sendRequest("POST",urlRequest,body)
// .then((res)=>{console.log(JSON.parse(res));})
// .catch((err)=>{console.log(err);})


let block = document.getElementsByClassName("block")[0]
let a = [{
    name: "Narek",
    text: "Lav mard",
    photo: "./images/img1.webp",
},{
    name: "Vahan",
    text: "Aveli lav mard",
    photo: "./images/img2.jpg",
},{
    name: "Lianna",
    text: "El aveli lav mard",
    photo: "./images/img3.webp",
}]
for(let key of a){
    let box = document.createElement("div")
    box.setAttribute("class","box")
    box.innerHTML=`<h2>${key.name}</h2> <p>${key.text}</p> <img src=${key.photo}/>`
    block.append(box)
}


// let url = "https://jsonplaceholder.typicode.com/users"
// fetch
// let p = fetch
// function sendRequest(){
//     return fetch(url).then((response)=>{
//         return response.json();
//     }).catch((err)=>{
//         return err.json();
//     })
// }
// sendRequest("GET",url)
// .then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })

// let block = document.getElementsByClassName("block")[0]
// function sendRequest(method,url){
//     return fetch(url).then((aaa)=>{
//         return aaa.json()
//     }).catch((err)=>{
//         return err.json()
//     })
// }
//  sendRequest("GET",url).then((message)=>{
//         message.map((item)=>{
//             let img = {
//                 img: "../images/img1.webp"
//             }
//             let box = document.createElement("div")
//             box.setAttribute("Class","box")
//             box.innerHTML = `<h2>${item.id}</h2> <p>${item.name}</p> <img src =${img.img} width = "100%">`
//             block.append(box)
//         })
//     }).catch((err)=>{
//         return alert("Error")
//     })

// let block = document.getElementsByClassName("block")[0]
// function sendRequest(method,url){
//     let headers = {
//         "Content-Type":"application/json"
//     }
//     return fetch(url,{
//         method:method,
//         headers:headers,
//         body:JSON.stringify(body)
//     })
//     .then((aaa)=>{
//         return aaa.json()
//     }).catch((err)=>{
//         return err.json()
//     })
// }


// let body = {
//     name: "Narek",
//     age: 18,
//     job: "Developer",
//     car: "BMW"
// }

// sendRequest("POST",url,body).then((message)=>{
//     message.map((item)=>{
//         let box = document.createElement("div")
//         box.setAttribute("Class","box")
//         box.innerHTML = `<h2>${item.id}</h2> <p>${item.name}</p>`
//         block.append(box)
//     })
// }).catch((err)=>{
//     return alert("Error")
// })
























