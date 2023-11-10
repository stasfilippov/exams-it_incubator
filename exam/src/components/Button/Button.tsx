import React from 'react';

type ButtonPropsType = {
	title: string
	callback: () => void
	countValue: number
	name: string
}

export const Button = (props: ButtonPropsType) => {

	const onClickHandler = () => {
		props.callback()
	}

	const styleButton = {
		width: '100px',
		height: '50px',
		backgroundColor: 'azure',
		border: '2px cadetblue solid',
		marginRight: '5px',
		cursor: 'pointer',
		fontWeight: 'bold',
		borderRadius: '10px',
	}

	return (
		<button style={styleButton} onClick={onClickHandler} className={'Button'}
		        disabled={props.name === 'add' && props.countValue >= 5 // исправить и вынести вверх, упростить сравнение
			        ? true
			        : props.name === 'reset' && props.countValue === 0}>
			{props.title}
		</button>
	);
};

