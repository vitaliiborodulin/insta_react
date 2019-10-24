import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="http://isha.sadhguru.org/blog/wp-content/uploads/2016/05/natures-temples.jpg" alt="first" />
                <Post src="https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w1920/marquee/1025957/72e1f4c7b764c8d2_mwp_hp_hero_landscape.jpg" alt="second" />
            </div>
        )
    }
}