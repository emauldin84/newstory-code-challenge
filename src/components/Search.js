import React, { Component } from 'react'
import axios from 'axios'

import '../styles/Search.css'

class Home extends Component {
    state = {
        img: '',
        alt: '',
        title: '',
        number: '',
        search: '',
    }

    handleChange = (e) => {
        let search = e.target.value
        this.setState({
            search
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        // should be axios.get
        axios.post(`https://xkcd.now.sh/?comic=${this.state.search}`)
        .then(response => {
            let img = response.data.img
            let alt = response.data.title
            let title = response.data.alt
            let number = response.data.num
            this.setState({
                img,
                alt,
                title,
                number,
                search: '',
            })
        })
        .catch(err => err)
    }

    render() {
        let comicDisplay = this.state.img ? 
        <div className='comicContainer'>
            <h4>Comic #{this.state.number}: {this.state.alt}</h4>
            {/* should be <img src=... */}
            <img href={this.state.img} alt={this.state.alt} title={this.state.title} className='searchImage' /> 
        </div>
        : null


        return (
            <div className="searchContainer">
                <div className='formContainer'>
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.search} placeholder='Enter comic #' type="number" min="1" max="2219" className="searchInput" onChange={this.handleChange} />
                        <button type="submit" className='searchSubmit'>submit</button>
                    </form>
                </div>
                {/* should be wrapped in {} */}
                (comicDisplay)
    
            </div>
        )

    }
}

export default Home