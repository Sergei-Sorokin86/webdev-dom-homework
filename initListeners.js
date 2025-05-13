import { postComments } from "./api.js";
import {comments, updateComments} from "./comments.js"
import { sanitizeHTML } from "./sanitize.js"
export const initLikeListeners = (renderComments) => {
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
}

export const initReplyListeners = () => {
    const responceComment = document.getElementById("text-input");
    const commentElements = document.querySelectorAll(".comment");
        for (const commentElement of commentElements) {
          commentElement.addEventListener('click', () => {
            const currentComment = comments[commentElement.dataset.index];
            responceComment.value = `${currentComment.name}:${currentComment.text}`
          });
        }
}

export const addInitCommentListener = (renderComments) => {
  const addComment = document.querySelector(".add-form-button");
  const addName = document.querySelector(".add-form-name");
  const addText = document.querySelector(".add-form-text");
  addComment.addEventListener("click", function () {
    if (addName.value!== "" && addText.value!== "") {
     /*   const pushComment = {
        name: sanitizeHTML(addName.value),
        time: `${new Date().toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit' })} ${new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`,
        text: sanitizeHTML(addText.value),
        likes: 0,
        liked: false
      }; */
      postComments(sanitizeHTML(addText.value), sanitizeHTML(addName.value)).then(
        (data) => {
          updateComments(data)
          renderComments()
          addName.value = "";
          addText.value = ""; 
      });
      }
      else if (addName.value === '') {
      alert("Введите ваше имя.");
    } else if (addText.value === '') {
      alert("Введите ваш коментарий.");
    }
      
      //comments.push(pushComment);
      //renderComments();
      //addName.value = "";
      //addText.value = "";
    
  })}