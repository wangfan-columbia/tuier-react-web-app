import React from "react";
import postArray from './postInfo.json';

import PostItem from "./postList-item";

const HomeComponent = () => {
    return(
        <ul className="list-group">

            {
                postArray.map(post =>
                                 <PostItem
                                     key={post._id}
                                     post={post}/>
                )
            }
        </ul>
    );
};

export default HomeComponent;