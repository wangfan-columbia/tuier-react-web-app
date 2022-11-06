import React from "react";
import ProfileItem from "../profile/profileItem";
import {useSelector} from "react-redux";


const ProfileComponent = () => {
    const profileArray = useSelector(state => state.profileInfo)

    return(
        <>
            {

                profileArray.map(item =>
                                   <ProfileItem
                                       key={item._id}
                                       item={item}
                                   />
                )
            }


        </>
    );
};
export default ProfileComponent;