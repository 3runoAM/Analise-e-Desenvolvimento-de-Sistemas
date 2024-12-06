const likeButton = document.getElementById('like-button');

likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');

    const likeCountSpan = document.getElementById('like-count');
    let likeCount = Number(likeCountSpan.textContent);
    if(isNaN(likeCount)) return;
    
    likeButton.classList.contains('liked') ? likeCount++ : likeCount--;
    likeCountSpan.innerText = `${likeCount}`;
});


/*-----------------------------------------------------------------------------------------*/
const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', () => {
    saveButton.classList.toggle('saved');

    if(saveButton.classList.contains('saved')) alert('Salvo com sucesso!');
})


/*-----------------------------------------------------------------------------------------*/
const comments = [
    {
        username: "user123",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "20/10/2024"
    },
    {
        username: "user789",
        comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: "20/05/2024"
    },
    {
        username: "user101",
        comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        date: "15/11/2024"
    },
    {
        username: "user202",
        comment: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "25/09/2024"
    },
];

window.onload = () => {
    const commentSection = document.body.querySelector('footer').querySelector('#comments-section');

    comments.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    }).forEach(comment => {
        const commentDiv = createCommentStructure(comment);
        commentSection.appendChild(commentDiv);
    });
}

/*-----------------------------------------------------------------------------------------*/
const commentButton = document.getElementById('comment-button');

commentButton.addEventListener('click', () => {
    const footer = document.body.querySelector('footer');
    footer.classList.toggle('hidden');
});

const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    let commentText = document.getElementById('comment-input');
    if(!commentText.value) return;

    const commentObj = {
        username: "username",
        comment: commentText.value,
        date: new Date().toLocaleDateString('pt-BR')
    }

    comments.push(commentObj)
    commentText.value = '';

    const commentDiv = createCommentStructure(commentObj);

    const commentSection = document.getElementById('comments-section');
    commentSection.prepend(commentDiv);
});


function createCommentStructure(commentObj) {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';

    const userInfoContainer = document.createElement('div');
    userInfoContainer.className = 'user-info-container';

    const usernameH3 = document.createElement('h3');
    usernameH3.className = 'comment-username';
    usernameH3.textContent = commentObj.username;

    const commentDateP = document.createElement('p');
    commentDateP.className = 'comment-date';
    commentDateP.textContent = commentObj.date;

    userInfoContainer.append(usernameH3, commentDateP);

    const commentTextP = document.createElement('p');
    commentTextP.className = 'comment-text';
    commentTextP.textContent = commentObj.comment;

    commentDiv.append(userInfoContainer, commentTextP);

    return commentDiv;
}


/*-------------------------------------------------------------------------------*/
const closeButton = document.getElementById('close-button');

closeButton.addEventListener('click', () => {
    const footer = document.body.querySelector('footer');
    footer.classList.add('hidden');
});


/*-------------------------------------------------------------------------------*/
const userPictureStorie = document.getElementById('user-picture-storie');
const img = document.createElement('img');
img.setAttribute('id', 'user-picture-absolute');
img.setAttribute('src', userPictureStorie.src);
img.setAttribute('alt', 'user picture');

const contentContainer = document.getElementById('content-container');

userPictureStorie.addEventListener('mouseover', () => {
    document.body.appendChild(img);
    contentContainer.classList.add('blurred');
});

userPictureStorie.addEventListener('mouseleave', () => {
    img.remove();
    contentContainer.classList.remove('blurred');
});