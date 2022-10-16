
import postInfo from "./postInfo.js";
import PostItem from "./PostItem.js";

function PostList() {

    return(`
     
        <ul class="list-group">
        ${PostItem(postInfo)}
        </ul>
    
    `);


}

export default PostList;