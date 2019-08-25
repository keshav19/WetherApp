import React, {Component} from 'react'

class Weather extends Component{
    render(){
        const{ temp,
            city,
            country,
            humidity,
            desc,
            error } = this.props
        return(
            <div className="weather__info">
               { city && country && <p className="weather__key"
>Location: 
               <span className="weather__value" >{ city}, {country}</span></p>
            }
               { temp && <p className="weather__key">Temperature:
                <span className="weather__value" > {temp}</span></p>
                    }
               { humidity &&<p className="weather__key">Humidity: 
                <span className="weather__value" > {humidity}</span></p>
            }
               { desc && <p className="weather__key">Description: 
                <span className="weather__value" >{ desc}</span></p>
            }
               { error &&<p className="weather__key">Error: 
                <span className="weather__value" > {error}</span></p>
            }
            </div>
        )
    }
}
export default Weather