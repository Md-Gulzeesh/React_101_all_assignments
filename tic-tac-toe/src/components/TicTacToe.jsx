import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
	const [turn, setTurn] = useState('x');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();

	const checkForWinner = (box) => {
		let checks = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (let combo in checks) {
			checks[combo].forEach((pattern) => {
				if (
					box[pattern[0]] === '' ||
					box[pattern[1]] === '' ||
					box[pattern[2]] === ''
				) {
					// do nothing
				} else if (
					box[pattern[0]] === box[pattern[1]] &&
					box[pattern[1]] === box[pattern[2]]
				) {
					setWinner(box[pattern[0]]);
				}
			});
		}
	};

	const handleClick = (val) => {
		if (cells[val] !== '') {
			alert('Already Clicked');
			return;
		}

		let box = [...cells];

		if (turn === 'x') {
			box[val] = 'x';
			setTurn('o');
		} else {
			box[val] = 'o';
			setTurn('x');
		}

		checkForWinner(box);
		setCells(box);
	};

	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
	};

	const Cell = ({ val }) => {
		return <td onClick={() => handleClick(val)}>{cells[val]}</td>;
	};

	return (
		<div className='container'>
            <h1>{turn}'s Turn</h1>
			<table>
            <tbody>
					<tr>
						<Cell val={0} />
						<Cell val={1} />
						<Cell val={2} />
					</tr>
					<tr>
						<Cell val={3} />
						<Cell val={4} />
						<Cell val={5} />
					</tr>
					<tr>
						<Cell val={6} />
						<Cell val={7} />
						<Cell val={8} />
					</tr>
				</tbody>
			</table>
			{winner && (
				<div className='winner_div'>
					<p>{winner} is the winner!</p>
					<button onClick={() => handleRestart()}>Play Again</button>
				</div>
			)}
		</div>
	);
};

export default TicTacToe;