function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>displayPosts(data))
}


const postDisplay=document.getElementById('postcontainer');

function displayPosts(data) {
    console.log(data);
    for(const posts of data){
        console.log(posts.title);
        const li=document.createElement('div');
        li.classList.add('post');
        li.innerHTML=`<h3>New Title :${posts.title}</h3>
        <p>New Description:${posts.body}</p>`;
        postDisplay.appendChild(li);
    }
}