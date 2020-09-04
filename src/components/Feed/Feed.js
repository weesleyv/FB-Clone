import React from 'react';
import './styles/Feed.css';
import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';

function Feed() {
    return(
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
                message="Wow it works"
                timestamp="this is a timestamp"
                username="weesley"
                image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            />

            <Post 
                profilePic="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
                message="Wow it works"
                timestamp="this is a timestamp"
                username="weesley"
            />
        </div>
    )
}

export default Feed