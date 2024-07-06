//using XMLHTTPRequest

const url2 = `https://jsonplaceholder.typicode.com/comments`
const xhr = new XMLHttpRequest()
xhr.open('GET',url2,true)

xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.responseText)
        const contentDiv = document.getElementById('content')
        data.map((post,i) =>{
            const postDiv = document.createElement('div');
            postDiv.id = 'post-div'
            postDiv.key = {i}
            postDiv.innerHTML = `<h2 id='post-h2'>${post.id}. ${post.name}</h2>
            <p class='post-body'>${post.body}</p>
            <p class='post-body'>Email : ${post.email}</p>`
            contentDiv.appendChild(postDiv)
        })
    }
}
xhr.onerror = function(){
    console.error('Request Failed')
}
xhr.send()
