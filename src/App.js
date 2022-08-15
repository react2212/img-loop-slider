import './scss/style.scss';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
	const data = [
		{ title: 'WOODED', subTitle: 'CALM VALLEY', pic: 'pic1.jpg' },
		{ title: 'SERENE', subTitle: 'WIDE PLAINS', pic: 'pic2.jpg' },
		{ title: 'FOGGY', subTitle: 'CALM LAKE', pic: 'pic3.jpg' },
		{ title: 'QUIET', subTitle: 'ROADSIDE ', pic: 'pic4.jpg' },
		{ title: 'WINDY', subTitle: 'MOUNTAIN', pic: 'pic5.jpg' },
		{ title: 'DIMMED', subTitle: 'LANDSCAPE', pic: 'pic6.jpg' },
		{ title: 'SUNSET', subTitle: 'GRASSLAND', pic: 'pic7.jpg' },
		{ title: 'LAPPING', subTitle: 'SEA WAVES', pic: 'pic8.jpg' },
	];
	const path = process.env.PUBLIC_URL;
	const len = 8;
	const list = useRef(null);
	const prevEl = useRef(null);
	const nextEl = useRef(null);
	const counter = useRef(null);
	let [Active, setActive] = useState(0);

	const next = (e) => {
		const firstEl = list.current.firstElementChild;
		list.current.append(firstEl);
		nextEl.current.classList.add('on');

		setTimeout(() => {
			nextEl.current.classList.remove('on');
		}, 500);

		setActive((Acitve) => (Acitve === len - 1 ? (Acitve = 0) : ++Active));
	};

	const prev = () => {
		const lastEl = list.current.lastElementChild;
		list.current.prepend(lastEl);

		prevEl.current.classList.add('on');

		setTimeout(() => {
			prevEl.current.classList.remove('on');
		}, 1000);

		setActive((Acitve) => (Acitve === 0 ? len - 1 : --Active));
	};

	useEffect(() => {
		const lastEl = list.current.lastElementChild;
		list.current.prepend(lastEl);
	}, []);

	useEffect(() => {
		console.log(Active);
		counter.current.classList.add('on');
		setTimeout(() => {
			counter.current.classList.remove('on');
		}, 500);
	}, [Active]);

	return (
		<main>
			<header>
				<h1>DCODELAB</h1>

				<nav>
					<ul>
						<li>ABOOUT</li>
						<li>COMPANY</li>
						<li>TRAVEL</li>
						<li>RESERVATION</li>
						<li>CONTACT</li>
					</ul>

					<ul className='sns'>
						<li>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</li>
						<li>
							<FontAwesomeIcon icon={faEnvelope} />
						</li>
					</ul>
				</nav>
			</header>
			<p className='notice'>
				What's the Hurry?
				<br />
				Calm Down..
			</p>
			<ul ref={list} className='list'>
				{data.map((item, idx) => {
					let activeClass = '';
					Active === idx && (activeClass = 'on');
					return (
						<li key={idx} className={activeClass}>
							<div className='inner'>
								<img src={`${path}/img/${item.pic}`} alt={idx} />

								<div className='txtActive'>
									<h2>
										<span>
											{item.title} {item.subTitle}
										</span>
									</h2>
									<div className='upper'>
										<p>{item.title}</p>
									</div>
									<div className='lower'>
										<p>{item.subTitle}</p>
									</div>

									<p className='desc'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo esse
										suscipit non. molestiae dignissimos sit amet consectetur.
									</p>

									<nav>
										<p>
											<FontAwesomeIcon icon={faBookmark} />
										</p>
										<button>VIEW DETAILS</button>
									</nav>
								</div>

								<div className='txtThumb'>
									<p>
										{item.title}
										<br />
										{item.subTitle}
									</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>

			<nav className='navi'>
				<p className='prev' onClick={prev} ref={prevEl}>
					<span></span>
				</p>
				<p className='next' onClick={next} ref={nextEl}>
					<span></span>
				</p>

				<div className={`bar move${Active + 1}`}></div>

				<h3 ref={counter}>{'0' + (Active + 1)}</h3>
			</nav>
		</main>
	);
}

export default App;
