import {comments} from "./comments.js"
export function renderComments() {
    addList.innerHTML = comments.map((comment, index) => {
      return `
    <li class="comment" data-index=${index}>
      <div class="comment-header">
        <div class="head-name">${comment.name}</div>
        <div class="head-time">${comment.time}
        </div>
      </div>  
      <div class="comment-body">
        <div class="comment-text">
          ${comment.text}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">${comment.likes}</span>
          <button data-index="${index}" class="like-button ${comment.liked ? "-active-like" : ""}"></button>
        </div>
      </div>
    </li>`
    })
    .join("");
    const likeButtons = document.querySelectorAll(".like-button");
    for (const likeButton of likeButtons) {
      likeButton.addEventListener("click", function (event) {
        event.stopPropagation();
        const index = likeButton.dataset.index;
        const comment = comments[index];
        comment.likes = comment.liked ? comment.likes -1 : comment.likes +1;
        comment.liked =!comment.liked;
        renderComments();
    });}
    const commentElements = document.querySelectorAll(".comment");
    for (const commentElement of commentElements) {
      commentElement.addEventListener('click', () => {
        const currentComment = comments[commentElement.dataset.index];
        responceComment.value = `${currentComment.name}:${currentComment.text}`;
      })
    }
}