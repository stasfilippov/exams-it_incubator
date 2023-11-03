import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from './components/Scoreboard/Scoreboard';
import {Button} from './components/Button/Button';

function App() {

	let [count, setCount] = useState<number>(0)

	const incrementCount = () => {
		setCount(count + 1); //исправить, добавить сравнение maxValue, добавить функцию
	}

	const resetCount = () => {
		setCount(0) //исправить, добавить minValue
	}

	return (
		<div className="App">
			<div className="wrapper">
				<Scoreboard count={count}/>
				<div className="battons-wrapper">
					<Button title={'Add'} callback={incrementCount} countValue={count}
					        name={'add'}/> {/*убрать name, создать функцию, принимающая название кнопки, добавить аттрибут disabled с проверкой на count*/}
					<Button title={'Reset'} callback={resetCount} countValue={count}
					        name={'reset'}/> {/*убрать name, создать функцию, принимающая название кнопки, добавить аттрибут disabled с проверкой на count*/}
				</div>
			</div>
		</div>
	);
}

export default App;
