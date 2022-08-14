import './scss/style.scss';
//import Anime from './asset/Anime';
import { useRef, useState, useEffect } from 'react';

function App() {
	const list = useRef(null);
	let [Active, setActive] = useState(0);

	const next = () => {
		const firstEl = list.current.firstElementChild;
		list.current.append(firstEl);

		setActive((Acitve) =>
			Acitve === 0 ? (7 - 1) : --Active
		);
	}

	const prev = () => {
		const lastEl = list.current.lastElementChild;
		list.current.prepend(lastEl);

		setActive((Acitve) =>
			Acitve === 7 - 1 ? (Acitve = 0) : ++Active
		);
	}

	useEffect(() => {
		console.log(Active);
	}, [Active])

	return (
		<main>
			<ul ref={list} className='list'>
				{Array(7).fill().map((item, idx) => {
					return (
						<li key={idx} >
							<div className='inner'>
								<img src={`${process.env.PUBLIC_URL}/img/pic${idx + 1}.jpg`} alt={idx} />
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
