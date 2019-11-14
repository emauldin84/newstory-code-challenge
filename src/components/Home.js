import React, { Component } from 'react'
// reinstall axios
import axios from 'axios'

// correct route is '../styles/Home.css'
import './styles/Home.css'

class Home extends Component {
    state = {
        latestImg: '',
        latestAlt: '',
        latestTitle: '',
    }

    componentDidMount() {
        axios.get('https://xkcd.now.sh/?comic=latest')
        .then(response => {
            let latestImg = response.data.img
            let latestAlt = response.data.title
            let latestTitle = response.data.alt
            this.setState({
                latestImg,
                latestAlt,
                latestTitle,
            })
        })
    }

    render() {


        return (
            <div className='imgContainer'>
                    {/* should be this.state.latestImg */}
                <img src={this.props.latestImg} alt={this.state.latestAlt} title={this.state.latestTitle} className='latestImage' />
            </div>
        )

    }
}
// should be export
exports default Home