import React from "react";
import {useDispatch} from "react-redux";
//import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = (
    {
        post = {

            "topic": "Energy",
            "userName": "Tesla",
            "title": "Tesla FSD finally makes driving obsolete. After years of delay, Tesla Full Self Driving can drive you to work while you work, play, or sleep",
            "time": "4d",
            "image": "tesla.jpg",
            "replies": 849,
            "retuits": 3245,
            "likes": 888,
            "handle": "@Tesla",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a "
        }
    }
) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }


    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img width={42} className="float rounded-pill pe-0  " alt={"post-img"} src={`/images/${post.image}`}/>
                </div>
                <div className="col-11">
                    <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)}/>

                    <div className=" fw-bolder">

                        {post.userName} <i className={"fa fa-check-circle ps-1 pe-1"} />
                        <span className="text-secondary fw-normal wd-text-post-small">{post.handle} · {post.time}</span>
                    </div>

                    <div className="text-secondary ps-2 pe-1  wd-text-post-small">
                        {post.tuit}

                    </div>


                    <div >

                        <i className={"fa fa-comment ps-1 pt-3 text-secondary"}/>
                        <label className=" ps-1 pe-5 pt-3 text-secondary" >{post.replies}</label>

                        <i className={"fa fa-retweet ps-1 pt-3 text-secondary"}/>
                        <label className=" ps-1 pe-5 pt-3 text-secondary">{post.retuits}</label>

                        <i className={"fa fa-heart ps-1 pt-3 text-secondary"}/>
                        <label className=" ps-1 pe-5 pt-3 text-secondary">{post.likes}</label>

                        <i className={"fa fa-upload ps-1 pt-3 text-secondary"}/>

                    </div>

                </div>

            </div>
        </li>
    );
};

export default TuitItem;