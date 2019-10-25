import React, { Component } from 'react';
import InstaService from '../services/instaService';
import User from './User';

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostLoaded)
        .catch(this.onError);
    }

    onPostLoaded = (posts) => {
        this.setState({
            posts, //short object notation - es6
            error: false
        })
        console.log(this.state.posts);
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo, src, alt, descr, id} = item;

            return (
                <div key={id} className="post">
                    <User 
                        src={photo} 
                        alt={altname}
                        name={name}
                        min />
                    <img src={src} alt={alt}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        });
    }

    render() {
        const {error, posts} = this.state;

        const items = this.renderItems(posts);
        return (
            <div className="left">
               {items}
            </div>
        )
    }
}