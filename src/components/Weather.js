import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Weather extends Component {   
    
    getStyle = () => {
        return{
            
            color: 'white',
            textAlign: 'center',
        }
    }
    
    render() {
        const { city, date, currentTemp, low, high, condition  } = this.props.weather
        
        return (
            <div className="row pt-5">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 offset-md-4" style={{paddingTop: '30px'}}>
                    <div className="" style={this.getStyle()}>
                        <h2>{city}</h2>
                        <h5>{date}</h5>
                        <h1>{currentTemp}</h1>
                        <br></br>
                        <h4>{condition}</h4>
                        <h4>{low}</h4>
                        <h4>{high}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

// Add Prototypes
Weather.propTypes = {
    weather: PropTypes.object.isRequired
}

export default Weather
