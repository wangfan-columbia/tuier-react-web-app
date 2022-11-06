import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import editProfile from "./profile-reducer";



const ProfileItem = (
    {
        item = {

            "firstName": "Fan",
            "lastName": "Wang",
            "handle": "@fanwang2364",
            "profilePicture": "Fan.png",
            "bannerPicture": "polyglot.png",
            "bio": " Incoming SDE intern @ Amazon | NEU MSCS student, Software Engineer, AI, Space, and renewable enthusiast.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",
            "dateOfBirth": "03/25/1996",
            "dateJoined": "05/2020",
            "followingCount": 340,
            "followersCount": 223
        }
    }
) => {


    const editProfileClickButton = () => {

    }


    const dispatch = useDispatch();




    return(
        <li className="list-group-item">

                <div className="fw-bolder fs-4 ps-5 pb-2">
                    {item.firstName} {item.lastName}
                </div>

                <div >
                    <img width={'100%'} className="float pe-0 pt-2 pb-2 " alt={"post-img"} src={`/images/${item.bannerPicture}`}/>
                </div>

                <div >
                    <img width={100} className="  rounded-pill " alt={"profilePicture"} src={`/images/${item.profilePicture}`}/>
                    <Link to="/tuiter/edit-profile">
                        <button onClick={()=>editProfileClickButton()}
                                className="btn btn-primary rounded-pill float-end pt-2">Edit Profile</button>
                    </Link>

                </div>


                <div className=" fw-bolder">

                    {item.firstName} {item.lastName}
                    <div className="text-secondary fw-normal wd-text-post-small">{item.handle}</div>
                </div>

                <div className="text-secondary  pe-1 pt-2 pb-2  wd-text-post-small">
                    {item.bio}

                </div>



                <div >

                    <i className={"fa fa-map-pin ps-1 pt-3 text-secondary"}/>
                    <label className=" ps-1 pe-5 pt-3 text-secondary" >{item.location}</label>

                    <i className={"fa fa-birthday-cake ps-1 pt-3 text-secondary"}/>
                    <label className=" ps-1 pe-5 pt-3 text-secondary">{item.dateOfBirth}</label>

                    <i className={"fa fa-calendar ps-1 pt-3 text-secondary"}/>
                    <label className=" ps-1 pe-5 pt-3 text-secondary">{item.dateJoined}</label>



                </div>

            <div >


                <label className=" ps-1 pe-5 pt-3 text-secondary" >{item.followingCount} Following</label>


                <label className=" ps-1 pe-5 pt-3 text-secondary">{item.followersCount} Followers</label>



            </div>


        </li>
    );
};

export default ProfileItem;