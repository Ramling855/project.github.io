import {useState}from 'react'
import React from 'react';

import Final from './Final';
import './style.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Like from './Like';

export default function App() {
const[data,setData]=useState();
const [but,setBut]=useState()
const srch=(r)=>{
	setData(r.target.value)
}
const click=()=>{
setBut(data)

}
	return (
		<div className="App">
			<Router>
			<nav class="navbar navbar-dark bg-primary">
				<input type="text"onChange={srch}/><button onClick={click}>Search</button>
          <Link to="/like">
            <h3>Home</h3>
          </Link>
          <Link to="unlike">
            <h3>liked </h3>
          </Link>
          
        </nav>
        
				<div>
					
					<Routes>
						<Route path="/like" element={<Final but={but} />} />
						<Route path="/unlike" element={<Like/>} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}
