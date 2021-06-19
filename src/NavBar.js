import React from 'react';

const NavBar = (props) => {
   const { artists, albums } = props;
    return (
        <div id='navbar'>
            <h2>Home</h2>
            <h2>Artists ({ artists.length })</h2>
            <h2>Albums ({ albums.length })</h2>
        </div>
    )
}


export default NavBar;