import React, {Component} from 'react';
import '../styles/CityInput.css';


class CityInput extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            errorMessage: ""
        }
    }

    onChange = (e) => this.setState({city: e.target.value})

    onSubmit = (e) => {
        e.preventDefault();

        const { city } = this.state
        if (city) {
            this.setState({ errorMessage: '' })
            this.props.getCitisWeatherData(this.state.city);
        } else {
            this.setState({
                errorMessage: "Please enter city name, before even trying to search for it."
            })
        }
    }

    render(){
        const { errorMessage } = this.state

        return (
            <form className="search-form" onSubmit = {this.onSubmit}>
                <input 
                    type = "text" 
                    name = "city"
                    className="city"
                    placeholder = "City..."
                    value = {this.state.city}
                    onChange = {this.onChange}/>
                <button
                    type = "submit"
                    className="search-btn"
                    > 
                    <img src="https://i.ibb.co/0J6q21Q/search-icon.png" alt="img"/>
                </button>    
                { errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>  }
            </form>
        )
    }
}

export default CityInput;