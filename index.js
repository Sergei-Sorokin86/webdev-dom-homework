
import { addInitCommentListener } from "./initListeners.js"
import { renderComments } from "./renderComments.js"
renderComments();
addInitCommentListener(renderComments)
