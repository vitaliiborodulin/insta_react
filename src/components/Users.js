import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg" 
                alt="man"
                name="Jack"
                />
            <div className="users__block">
            <User 
                src="https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg" 
                alt="woman"
                name="Rachel"
                min />
            <User 
                src="https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg" 
                alt="man"
                name="Daniel"
                min />
            <User 
                src="https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg" 
                alt="woman"
                name="Rachel"
                min />
            <User 
                src="https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg" 
                alt="man"
                name="Daniel"
                min />
            </div>
        </div>
    )
}