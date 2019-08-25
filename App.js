import React, {Component} from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import { Container, Row, Col} from 'react-bootstrap';


const api_key ='73491bc4d75e03f62e032195930e653a'

class App extends Component {
  constructor(props){
    super(props)
    this.state=({
      temp:'',
      city:'',
      country:'',
      humidity:'',
      desc:'',
      error:''
    })
  }

 getWeather = async (e) =>{
  e.preventDefault()
  const city = e.target.elements.city.value
  const country = e.target.elements.country.value
  

  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`)
  const data = await api_call.json()



  if( city && country){
    this.setState({
      temp:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      desc:data.weather[0].description,
      error:''
    })}else{
      this.setState({
        temp:'',
      city:'',
      country:'',
      humidity:'',
      desc:'',
      error:'Please Enter the values.'
      }) 
    }


    


  
}



  render(){
  return (
    <div>
<div className="wrapper">
<div className="main">
<Container >
  <Row >
  <Col xs={5} className="title-container"><Titles /></Col>
    <Col xs={7} className="form-container">
<Form handleWeather ={this.getWeather} />
<Weather temp={this.state.temp} city={this.state.city}  country={this.state.country} humidity={this.state.humidity} desc={this.state.desc} error={this.state.error} /></Col>
    
  </Row>
</Container>
</div>
</div>

    </div>
  );
}
}
export default App


