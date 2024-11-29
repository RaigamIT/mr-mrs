import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import List from '../components/theater/List'
import { useParams } from 'react-router-dom';	

function ViewTheaters() {
	let {id} = useParams();
	console.log(id);
  return (
	<div>
		<Navbar/>
		<List theaterId={id}/>
		<Footer/>
	</div>
  )
}

export default ViewTheaters;