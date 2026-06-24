import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { TutorialHome } from "./tutorial-home";
import { PythonTutorial } from "./python-tutorial";
import { JavaTutorial } from "./java-tutorial";
import { UITutorial } from "./ui-tutorial";
import { EMICalculator } from "../components/emi-calculator/emi-calculator";
import { WeatherApp } from "../components/weather-app/weather-app";
import { Details } from "./details";

export function TutorialIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="text-center p-3 border bg-dark text-white">
                    <h2>Online Tutorials</h2>
                    <nav className="bg-warning p-2">
                        <Link to="/">Home</Link> | 
                        <Link to="emi">EMI</Link> | 
                        <Link to="weather">Weather</Link> |
                        <Link to="java">Java</Link>
                    </nav>
                </header>
                <section className="mt-4">
                    <Routes>
                         <Route path="/" element={<TutorialHome />} />
                         <Route path="python" element={<PythonTutorial />} />
                         <Route path="java" element={<JavaTutorial />} />
                         <Route path="ui" element={<UITutorial />} />
                         <Route path="emi" element={<EMICalculator />} />
                         <Route path="weather" element={<WeatherApp />} />
                         <Route path="details/:id/:name/:price" element={<Details/>} />
                         <Route path="*" element={<div className="text-danger"><h4>Not Found</h4><p>Page you requested not found</p></div>} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}