/**
 * 혼자서 하는 틱택토
 * https://school.programmers.co.kr/learn/courses/30/lessons/160585
 *
 * ▣ 입력예제 1
 * ["O.X", ".O.", "..X"]
 * ▣ 출력예제 1
 * 1
 *
 * ▣ 입력예제 2
 * ["OOO", "...", "XXX"]
 * ▣ 출력예제 2
 * 0
 *
 * ▣ 입력예제 3
 * ["...", ".X.", "..."]
 * ▣ 출력예제 3
 * 0
 *
 * ▣ 입력예제 4
 * ["...", "...", "..."]
 * ▣ 출력예제 4
 * 1
 */
function isWin(board, s) {
	for (let i = 0; i < board.length; i++) {
		if (board[i][0] === s && board[i][1] === s && board[i][2] === s) return true;
		if (board[0][i] === s && board[1][i] === s && board[2][i] === s) return true;
	}

	if (board[0][0] === s && board[1][1] === s && board[2][2] === s) return true;

	if (board[0][2] === s && board[1][1] === s && board[2][0] === s) return true;

	return false;
}

export default function solution(board) {
	let oc = 0,
		xc = 0;
	for (const r of board) {
		for (const c of r) {
			if (c === 'O') oc++;
			else if (c === 'X') xc++;
		}
	}

	if (!(oc >= xc && oc <= xc + 1)) return 0;
	const oWin = isWin(board, 'O');
	const xWin = isWin(board, 'X');

	if (oWin && xWin) return 0;
	if (oWin && oc !== xc + 1) return 0;
	if (xWin && oc !== xc) return 0;

	return 1;
}
