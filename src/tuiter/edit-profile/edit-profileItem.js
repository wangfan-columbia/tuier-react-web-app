import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import editProfile from "../profile/profile-reducer";
import {Link} from "react-router-dom";


const EditProfileItem = (
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

    const profileInfoConst = useSelector((state) => state.profileInfo)

    let [name, setProfileName] = useState(profileInfoConst.name);
    let [bio, setProfileBio] = useState(profileInfoConst.bio);
    let [location, setProfileLocation] = useState(profileInfoConst.location);
    let [website, setProfileWebsite] = useState(profileInfoConst.website);
    let [dateOfBirth, setProfileDateOfBirth] = useState(profileInfoConst.dateOfBirth);

    const editProfileClickHandler = () => {
        dispatch(editProfile({
                                   name,
                                   bio,
                                   location,
                                   website,
                                   dateOfBirth,
                               }));
    }

    const dispatch = useDispatch();


    return(

        <li className="list-group-item">
            <div className="col-1 flex">
                <Link to="/tuiter/profile" >
                    <i className="fa fa-window-close mt-2"/>
                </Link>
            </div>

            <div>
                <div className="fs-6 fw-bold">Edit Profile</div>

                <Link to="/tuiter/profile">
                    <button onClick={()=>editProfileClickHandler(profileInfoConst)}
                            className="btn btn-dark rounded-pill float-end pt-2">Save</button>
                </Link>
            </div>


            <div >
                <img width={'100%'} className="float pe-0 pt-2 pb-2 " alt={"post-img"} src={`/images/${item.bannerPicture}`}/>
            </div>

            <div >
                <img width={100} className="  rounded-pill " alt={"profilePicture"} src={`/images/${item.profilePicture}`}/>

            </div>


            <div className="text-secondary pt-1">
                <lable htmlFor="item_name text-secondary"> Name</lable>
                <textarea value={item.firstName + " " + item.lastName}
                          className="item_name text-secondary form-control border"
                          onChange={(e) => setProfileName(e.target.value) }>

                </textarea>

            </div>

            <div className="text-secondary  pe-1 pt-2 pb-2  wd-text-post-small">
                <lable htmlFor="item_bio text-secondary"> Bio</lable>
                 <textarea  value={item.bio}
                            className="item_bio form-control border text-secondary"
                            onChange={(e) => setProfileBio(e.target.value) }>

                </textarea>


            </div>

            <div className="text-secondary  pe-1 pt-2 pb-2  wd-text-post-small">
                <lable htmlFor="item_location text-secondary"> Location</lable>
                <textarea  value={item.location}
                          className="item_location form-control border text-secondary"
                           onChange={(e) => setProfileLocation(e.target.value) }>


                </textarea>

            </div>

            <div className="text-secondary  pe-1 pt-2 pb-2  wd-text-post-small">
                <lable htmlFor="item_website text-secondary"> Website</lable>
                <textarea  value= {item.website}
                          className="item_website form-control border text-secondary"
                           onChange={(e) => setProfileWebsite(e.target.value) }>


                </textarea>

            </div>

            <div className="text-secondary  pe-1 pt-2 pb-2  wd-text-post-small">
                <lable htmlFor="item_birthday text-secondary"> Birthday</lable>
                 <textarea  value={item.dateOfBirth}
                           className="item_birthday form-control border text-secondary"
                            onChange={(e) => setProfileDateOfBirth(e.target.value) }>

                </textarea>

            </div>

            <div>
                Switch to professional
                <br/><br/>
            </div>


        </li>
    );
};

export default EditProfileItem;