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
            view: 'Home'
        };
        this.selectView = this.selectView.bind(this);
    }

    async componentDidMount() {
        try {
            const artistRes = await axios.get('/api/artists');
            const artists = artistRes.data;
            this.setState({ artists });
            const albumRes = await axios.get('/api/albums');
            const albums = albumRes.data;
            this.setState({ albums });
        }
        catch(err) {
            console.log('There was a problem making contact!');
        };
    }

    selectView(view) {
        this.setState({ view: view });
    }
    
    render () {
        return (
            <div id='main'>
                <NavBar 
                    artists = {this.state.artists}
                    albums = {this.state.albums}
                />
                <div id= 'container'>
                    {
                    this.state.view === 'Home' ? (
                        <h1>Welcome to Acme Music World!!!</h1>
                     ) : (<div></div>)
                    }
                    {
                    this.state.view === 'Artists' ? (
                        <Artists artists = {this.state.artists}/>
                    ) : (<div></div>)
                    }
                    {
                    this.state.view === 'Albums' ? (
                        <Albums albums = {this.state.albums}/>
                    ) : (<div></div>)
                    }
                </div>
            </div>
        )
    }
}

render(<Main />, document.querySelector('#root'));
