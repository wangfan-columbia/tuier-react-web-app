import React from "react";

const TuitStats = (
    {
        replies,
        retuits,
        likes,
        liked
    }
) => {

    return (
        <div className='row ms-5'>
            <div className='col-3'>
                <i className="far fa-comment"></i>
                <span className='ps-2'>{replies}</span>
            </div>
            <div className='col-3'>
                <i className="fas fa-retweet"></i>
                <span className='ps-2'>{retuits}</span>
            </div>
            <div className='col-3'>
                {liked && <i className="fas fa-heart text-danger"></i>}
                {!liked && <i className="fas fa-heart"></i>}
                <span className='ps-2'>{likes}</span>
            </div>
            <div className='col-3'><i className="fas fa-share-square"></i></div>
        </div>
    )
};

export default TuitStats;