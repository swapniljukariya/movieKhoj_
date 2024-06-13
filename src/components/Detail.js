import React from 'react'
import './Detail.css';

function Detail({selected, closeDetail }) {
  return (
	<div className='details'>
		<div className='left-box'>
			<img
			src={selected.Poster}
			alt={selected.title}
			/>
		</div>
		<div className='right-box'>
		<div>
			<h2>{selected.Title}</h2>
			<span>{selected.Year}</span>
			<p className="rating">
                Rating: {selected.imdbRating}
            </p>
		</div>
		<div className='plot'>
			<p>{selected.Plotcd}</p>
		</div>
	</div>
	<button onChangeCapture={closeDetail}>
		Close Deatail
	</button>
	  
	</div>
  )
}

export default Detail
