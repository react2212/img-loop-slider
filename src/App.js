import './scss/style.scss';
import Anime from './asset/Anime';
import { useRef, useState, useEffect } from 'react';

function App() {
	const list = useRef(null);

	const next = () => {
		const firstEl = list.current.firstElementChild;
		console.log(firstEl);
		list.current.append(firstEl)
	}

	const prev = () => {
		const lastEl = list.current.lastElementChild;
		list.current.prepend(lastEl);
	}
	return (
		<main>
			<ul ref={list} className='list'>
				{Array(7).fill().map((item, idx) => {
					return (
						<li key={idx} >
							<div className='inner'>
								<img src={`${process.env.PUBLIC_URL}/img/pic${idx + 1}.jpg`} />
							</div>
						</li>
					)
				})}
			</ul>

			<button className="prev" onClick={prev}>prev</button>
			<button className="next" onClick={next}>next</button>
		</main>
	);
}

export default App;
