import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
//import editProfile from "../profile/profile-reducer";
import {Link} from "react-router-dom";
import {updateName, updateBio, updateLocation,
    updateWebsite,updateBirth } from '../reducers/profile-reducer';

const EditProfile = () => {

    const profileInfoConst = useSelector((state) => state.profile)

    let [Name, setProfileName] = useState(profileInfoConst.name);
    let [bio, setProfileBio] = useState(profileInfoConst.bio);
    let [location, setProfileLocation] = useState(profileInfoConst.location);
    let [website, setProfileWebsite] = useState(profileInfoConst.website);
    let [dateOfBirth, setProfileDateOfBirth] = useState(profileInfoConst.dateOfBirth);

    //const editProfileClickHandler = () => {
     //   dispatch(editProfile({
     //                            name,
      //                           bio,
      //                           location,
       //                          website,
       //                          dateOfBirth,
       //                      }));
   // }

    const dispatch = useDispatch();

    const saveClickHandler = () => {
        dispatch(updateName(Name));
        dispatch(updateBio(bio));
        dispatch(updateLocation(location));
        dispatch(updateWebsite(website));
        dispatch(updateBirth(dateOfBirth));
    }


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
                    <button onClick={saveClickHandler}
                            className="btn btn-dark rounded-pill float-end pt-2">Save</button>
                </Link>
            </div>


            <div >
                <img width={'100%'} className="float pe-0 pt-2 pb-2 " alt={"post-img"} src={`/images/${profileInfoConst.bannerPicture}`}/>
            </div>

            <div >
                <img width={100} className="  rounded-pill " alt={"profilePicture"} src={`/images/${profileInfoConst.profilePicture}`}/>

            </div>


            <div className="text-secondary pt-1">
                <label htmlFor="Textarea1 item_name text-secondary"> Name</label>
                <textarea value={Name}
                         // placeholder={item.firstName + " " + item.lastName}
                          id ="Textarea1"
                          className="item_name text-secondary form-control border"
                          onChange={(e) => setProfileName(e.target.value) }>

                </textarea>

            </div>

            <div className="text-secondary  pe-1 pt-2 pb-2  wd-text-post-small">
                <label htmlFor="Textarea2 item_bio text-secondary"> Bio</label>
                <textarea  value={bio}
                           //placeholder={item.bio}
                           id="Textarea2"
                           className="item_bio form-control border text-secondary"
                           onChange={(e) => setProfileBio(e.target.value) }>

                </textarea>


            </div>

            <div className="text-secondary  pe-1 pt-2 pb-2  wd-text-post-small">
                <label htmlFor="Textarea3 item_location text-secondary"> Location</label>
                <textarea  //placeholder={item.location}
                           value={location}
                           id="Textarea3"
                           className="item_location form-control border text-secondary"
                           onChange={(e) => setProfileLocation(e.target.value) }>


                </textarea>

            </div>

            <div className="text-secondary  pe-1 pt-2 pb-2  wd-text-post-small">
                <label htmlFor=" Textarea4 item_website text-secondary"> Website</label>
                <textarea  //placeholder= {item.website}
                           value={website}
                           id="Textarea4"
                           className="item_website form-control border text-secondary"
                           onChange={(e) => setProfileWebsite(e.target.value) }>


                </textarea>

            </div>

            <div className="text-secondary  pe-1 pt-2 pb-2  wd-text-post-small">
                <label htmlFor="Textarea5 item_birthday text-secondary"> Birthday</label>
                <textarea  //placeholder={item.dateOfBirth}
                           value={dateOfBirth}
                           id="Textarea5"
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

export default EditProfile;