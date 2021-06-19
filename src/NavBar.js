import React from 'react';

const NavBar = (props) => {
   const { artists, albums } = props;
    return (
        <div id='navbar'>
            <h2 onClick= {() => selectView('Home')}>Home</h2>
            <h2 onClick= {() => selectView('Artists')}>Artists ({ artists.length })</h2>
            <h2 onClick= {() => selectView('Albums')}>Albums ({ albums.length })</h2>
        </div>
    )
}


export default NavBar;