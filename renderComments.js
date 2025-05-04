import {comments} from "./comments.js"
import { initLikeListeners, initReplyListeners } from "./initListeners.js";
export const renderComments = () => {
    const addList = document.querySelector(".comments");
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
          <button aria-label="like-button" data-index="${index}" class="like-button ${comment.liked ? "-active-like" : ""}"></button>
        </div>
      </div>
    </li>`
    })
    .join("");
    initLikeListeners(renderComments);
    initReplyListeners();}