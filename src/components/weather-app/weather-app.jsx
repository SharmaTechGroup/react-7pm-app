import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react"

export function WeatherApp(){


    const [weatherObj, setWeatherObj] = useState({name:'', main:{temp:0, humidity:0}, wind:{speed:0}});
    const [searchCity, setSearchCity] = useState();
    const [city, setCity] = useState();
    const [today] = useState(new Date()); 

    const API_KEY = "1318ca6725c69160d346c41fc0612596";

    function handleSearchChange(e){
        setSearchCity(e.target.value);
    }
    function handleSearchClick(){
        setCity(searchCity);
        LoadWeatherData();
    }
     function LoadWeatherData(){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response=>{
            setWeatherObj(response.data);
        })
    }
    useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition((position)=>{
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`)
            .then(response=>{
                setWeatherObj(response.data);
            })
        })
    },[])

    return(
        <div className="container-fluid row">
            <div className="col-2">
                <div className="fs-4 fw-bold bi bi-cloud"> Weahter App</div>
                <div className="my-3 bi bi-columns-gap"> Dashboard</div>
                <div className="bi my-3 bi-map"> Maps</div>
                <div className="bi my-3 bi-clock-history"> Historical</div>
                <div className="bi bi-gear-fill my-3"> Settings </div>
            </div>
            <div className="col-10">
                <div className="mt-2 d-flex justify-content-between">
                    <div className="input-group w-50">
                        <input type="text" onChange={handleSearchChange} className="form-control" placeholder="Search by city" />
                        <button onClick={handleSearchClick} className="btn bi-search btn btn-dark"></button>
                    </div>
                    <div>
                        <button className="btn btn-dark bi bi-person-fill"> Signin</button>
                    </div>
                </div>

                <div className="row  g-4 mt-5" style={{height:'300px'}}>
                    <div className="col-8 bg-light shadow shadow-md">
                        <div className="fs-1 fw-bold">{weatherObj.name}</div>
                        <div className="mt-2">
                            {moment(today).format('dddd DD, MMMM yyyy')}
                        </div>
                        <div className="mt-5">
                            <span className="fs-1 fw-bold"> {weatherObj.main.temp.toFixed(0)}&deg;C </span>
                        </div>
                    </div>
                    <div className="col-4 bg-light shadow shadow-md">

                    </div>
                </div>
                
                <div className="d-flex justify-content-between mt-3 w-50">
                    <div className="card p-2 shadow" style={{width:'150px', height:'80px'}}>
                        <div>Wind Speed</div>
                        <div className="bi bi-wind"> {weatherObj.wind.speed}</div>
                    </div>
                    <div className="card p-2 shadow" style={{width:'150px', height:'80px'}}>
                        <div>Humidity</div>
                        <div className="bi bi-thermometer"> {weatherObj.main.humidity} </div>
                    </div>
                    <div className="card shadow" style={{width:'150px', height:'80px'}}>

                    </div>
                </div>
            </div>
        </div>
    )
}