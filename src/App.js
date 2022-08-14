import './scss/style.scss';
//import Anime from './asset/Anime';
import { useRef, useState, useEffect } from 'react';

function App() {
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

	//컴포넌트 처음 마운트시 제일 마지막 패널을 첫번째로 보내서 화면상에 1번 패널이 활성화되게 처리
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
				{Array(len).fill().map((item, idx) => {
					return (
						<li key={idx} >
							<div className='inner'>
								<img src={`${path}/img/pic${idx + 1}.jpg`} alt={idx} />
								<div className="txt">{idx + 1}</div>
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
