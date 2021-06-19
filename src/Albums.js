import React from 'react';

const Albums = (props) => {
    const { albums } = props;
    return (
        <div>
            <h3>Albums</h3>
            <ul>
                { 
                albums.map(album => {
                    return <li key= {album.id}>{album.name} --- {album.artist.name}</li>
                })
                }
            </ul>
        </div>
    )
}

export default Albums;