
import { fetchComments } from "./api.js";
import { updateComments } from "./comments.js";
import { addInitCommentListener } from "./initListeners.js"
import { renderComments } from "./renderComments.js"
fetchComments().then((data) => {
    updateComments(data)
    renderComments()
});

addInitCommentListener(renderComments)
