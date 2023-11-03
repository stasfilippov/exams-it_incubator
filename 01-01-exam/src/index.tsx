import React, {MouseEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button() {
	const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		const a = (typeof e)
		console.log(typeof a)
	}
	return <button onClick={onClickHandler}>Click</button>
}


ReactDOM.render(
	<Button/>, document.getElementById('root')
);

// Какой тип данных представляет аргумент функции-обработчика?
// Что надо написать вместо ххх, что бы в консоль вывело true?
