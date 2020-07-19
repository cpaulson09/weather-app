import React, { Component } from 'react'

export class Search extends Component {
    state = {
        city: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    onSubmit = (e) => {
        e.preventDefault()
        this.props.searchCity(this.state.city)
        // Clear the field
        this.setState({ city: '' })
    }

    render() {
        return (
            <div className="pt-5">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group col-7">
                        <input
                        className="form-control"
                        type="text" 
                        name="city" 
                        placeholder="Enter City Name..."
                        value={this.state.city}
                        onChange={this.onChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search
