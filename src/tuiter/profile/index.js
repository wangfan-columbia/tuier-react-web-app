import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
//import editProfile from "./profile-reducer";
import {useSelector} from "react-redux";


const ProfileComponent = (
    {
        item = {

            "name": "Fan Wang",
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

    const profileData = useSelector(state => state.profile);


    return(
        <li className="list-group-item">

                <div >
                    <img width={'100%'} className="float pe-0 pt-2 pb-2 " alt={"post-img"} src={`/images/${profileData.bannerPicture}`}/>
                </div>

                <div >
                    <img width={100} className="  rounded-pill " alt={"profilePicture"} src={`/images/${profileData.profilePicture}`}/>
                    <Link to="/tuiter/edit-profile">
                        <button onClick={()=>editProfileClickButton()}
                                className="btn btn-primary rounded-pill float-end pt-2">Edit Profile</button>
                    </Link>

                </div>


                <div className=" fw-bolder">


                    <div className="text-secondary fw-normal wd-text-post-small">{profileData.handle}</div>
                </div>


                <div className="fw-bolder fs-4 ps-0 pb-2 pt-1">
                    {profileData.name}

                </div>

                <div className="text-secondary  pe-1 pt-2 pb-2  wd-text-post-small">
                    {profileData.bio}

                </div>



                <div >

                    <i className={"fa fa-map-pin ps-1 pt-3 text-secondary"}/>
                    <label className=" ps-1 pe-5 pt-3 text-secondary" >{profileData.location}</label>

                    <i className={"fa fa-birthday-cake ps-1 pt-3 text-secondary"}/>
                    <label className=" ps-1 pe-5 pt-3 text-secondary">{profileData.dateOfBirth}</label>

                    <i className={"fa fa-calendar ps-1 pt-3 text-secondary"}/>
                    <label className=" ps-1 pe-5 pt-3 text-secondary">{profileData.dateJoined}</label>



                </div>

            <div >


                <label className=" ps-1 pe-5 pt-3 text-secondary" >{profileData.followingCount} Following</label>


                <label className=" ps-1 pe-5 pt-3 text-secondary">{profileData.followersCount} Followers</label>



            </div>


        </li>
    );
};

export default ProfileComponent;