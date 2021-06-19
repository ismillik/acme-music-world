import React from 'react';

const Artists = (props) => {
    const { artists } = props;
    return (
        <div>
            <h3>Artists</h3>
            <ul>
                { 
                artists.map(artist => {
                    return <li key= {artist.id}>{artist.name}</li>
                })
                }
            </ul>
        </div>
    )
}

export default Artists;