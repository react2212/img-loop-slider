import './scss/style.scss';
//import Anime from './asset/Anime';
import { useRef, useState, useEffect } from 'react';

function App() {
	const data = [
		{ title: 'EMERALD', subTitle: 'DEEP GREEN', pic: 'pic1.jpg' },
		{ title: 'ORANGE', subTitle: 'SUNST BEACH', pic: 'pic2.jpg' },
		{ title: 'VIVID', subTitle: 'FOREST', pic: 'pic3.jpg' },
		{ title: 'CALM', subTitle: 'DESERT', pic: 'pic4.jpg' },
		{ title: 'SILVER', subTitle: 'SHALLOWS', pic: 'pic5.jpg' },
		{ title: 'PURPLE', subTitle: 'CABIN', pic: 'pic6.jpg' },
		{ title: 'GRAY', subTitle: 'LABORATORY', pic: 'pic7.jpg' },
		{ title: 'ORCHID', subTitle: 'MIDTOWN', pic: 'pic8.jpg' },
	]
	const path = process.env.PUBLIC_URL;
	const len = 8;
	const list = useRef(null);
	let [Active, setActive] = useState(0);

	const next = () => {
		const firstEl = list.current.firstElementChild;
		list.current.append(firstEl);

		setActive((Acitve) =>
			Acitve === len - 1 ? (Acitve = 0) : ++Active
		);
	}

	const prev = () => {
		const lastEl = list.current.lastElementChild;
		list.current.prepend(lastEl);

		setActive((Acitve) =>
			Acitve === 0 ? (len - 1) : --Active
		);
	}

	useEffect(() => {
		const lastEl = list.current.lastElementChild;
		list.current.prepend(lastEl);
	}, [])

	useEffect(() => {
		console.log(Active);
	}, [Active])

	return (
		<main>
			<ul ref={list} className='list'>
				{data.map((item, idx) => {
					let activeClass = '';
					Active === idx && (activeClass = 'on')
					return (
						<li key={idx} className={activeClass} >
							<div className='inner'>
								<img src={`${path}/img/${item.pic}`} alt={idx} />

								<div className="txtActive">
									<div className="upper"><p>{item.title}</p></div>
									<div className="lower"><p>{item.subTitle}</p></div>
								</div>

								<div className="txtThumb">
									<p>{item.title}<br />{item.subTitle}</p>
								</div>
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
