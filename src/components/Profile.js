import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg"
                alt="man"
                name="Jack"/>
            <Palette />
        </div>
    )
}

export default Profile;
