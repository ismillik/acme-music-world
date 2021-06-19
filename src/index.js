import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Artists from './Artists';
import Albums from './Albums';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            artists: [],
            albums: [],
            selection: 'Home'
        }
    }

    async componentDidMount() {
        try {
            const artistRes = await axios.get('/api/artists');
            const artists = artistRes.data;
            this.setState( { artists });
            const albumRes = await axios.get('/api/albums');
            const albums = albumRes.data;
            this.setState( { albums });
            console.log(this.state.artists);
            console.log(this.state.albums);
        }
        catch(err) {
            console.log('There was a problem making contact!');
        };
    }
    
    render () {
        return (
            <div id='main'>
                <NavBar 
                    artists = {this.state.artists}
                    albums = {this.state.albums}
                />
                <div id='container'>
                    <h1>Welcome to Acme Music World!!!</h1>
                    <Artists artists = {this.state.artists}/>
                    <Albums albums = {this.state.albums}/>
                </div>
            </div>
        )
    }
}

render(<Main />, document.querySelector('#root'));
