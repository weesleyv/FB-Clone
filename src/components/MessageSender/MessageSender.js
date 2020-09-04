import React, {useState} from 'react';
import './styles/MessageSender.css';
import {Avatar} from '@material-ui/core';

// Icons
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    
    const [input, setInput] = useState('')
    const [img, setImg] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        setInput('')
        setImg('')
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)} 
                        className="messageSender__input" 
                        placeholder="What`s in your mind?" />
                    <input
                        value={img}
                        onChange={(e) => setImg(e.target.value)} 
                        placeholder="image URL (Optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: 'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
