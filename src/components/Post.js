import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg" 
                    alt="man"
                    name="Jack"
                    min />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui doloribus rem facilis quasi maiores error, eligendi earum magni quis. Molestias harum ratione obcaecati. Optio consequuntur ipsa nam nemo sapiente!   
                </div>
            </div>
        )
    }
}