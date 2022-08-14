import './scss/style.scss';
//import Anime from './asset/Anime';
import { useRef, useState, useEffect } from 'react';

function App() {
	const data = [
		{ title: '111', subTitle: '111', pic: 'pic1.jpg' },
		{ title: '222', subTitle: '222', pic: 'pic2.jpg' },
		{ title: '333', subTitle: '333', pic: 'pic3.jpg' },
		{ title: '444', subTitle: '444', pic: 'pic4.jpg' },
		{ title: '555', subTitle: '555', pic: 'pic5.jpg' },
		{ title: '666', subTitle: '666', pic: 'pic6.jpg' },
		{ title: '777', subTitle: '777', pic: 'pic7.jpg' },
		{ title: '888', subTitle: '888', pic: 'pic8.jpg' },
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
