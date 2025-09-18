/**
 * 리코쳇 로봇
 * https://school.programmers.co.kr/learn/courses/30/lessons/169199
 *
 * ▣ 입력예제 1
 * ["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]
 * ▣ 출력예제 1
 * 7
 *
 * ▣ 입력예제 2
 * [".D.R", "....", ".G..", "...D"]
 * ▣ 출력예제 2
 * -1
 */
function bfs(sr, sc, mr, mc, board) {
	const ds = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1],
	];
	const queue = [[sr, sc, 0]];
	const visited = new Set([`${sr}-${sc}`]);

	while (queue.length) {
		const [r, c, count] = queue.shift();
		if (board[r][c] === 'G') return count;

		for (const [dr, dc] of ds) {
			let nr = r,
				nc = c;

			while (true) {
				const cr = nr + dr,
					cc = nc + dc;
				if (cr < 0 || cr >= mr || cc < 0 || cc >= mc || board[cr][cc] === 'D') break;
				nr = cr;
				nc = cc;
			}

			const key = `${nr}-${nc}`;
			if (visited.has(key)) continue;

			visited.add(key);
			queue.push([nr, nc, count + 1]);
		}
	}

	return -1;
}

export default function solution(board) {
	const mr = board.length,
		mc = board[0].length;
	let sr = 0,
		sc = 0;

	for (let r = 0; r < mr; r++) {
		for (let c = 0; c < mc; c++) {
			if (board[r][c] !== 'R') continue;
			sr = r;
			sc = c;
			break;
		}
	}

	const answer = bfs(sr, sc, mr, mc, board);

	return answer;
}
