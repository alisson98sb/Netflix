import React from 'react';
import './Header.css';

export default ({black}) =>{
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">  
                <a href="/">
                    <img src="kisspng-netflix-streaming-media-television-show-logo-netflix-logo-5b35b03bb4e9d0.753613021530245179741.png" alt="Netflix "></img>
                </a>
            </div>

            <div className="header--user">  
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário"></img>
                </a>
            </div>
        </header>
    )
}