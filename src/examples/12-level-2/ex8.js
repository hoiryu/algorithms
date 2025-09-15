/**
 * BFS + Graph
 * [PCCP 기출문제] 2번 / 석유 시추
 * https://school.programmers.co.kr/learn/courses/30/lessons/250136
 *
 * ▣ 입력예제 1
 * [
 * [0, 0, 0, 1, 1, 1, 0, 0],
 * [0, 0, 0, 0, 1, 1, 0, 0],
 * [1, 1, 0, 0, 0, 1, 1, 0],
 * [1, 1, 1, 0, 0, 0, 0, 0],
 * [1, 1, 1, 0, 0, 0, 1, 1]
 * ]
 * ▣ 출력예제 1
 * 9
 *
 * ▣ 입력예제 2
 * [
 * [1, 0, 1, 0, 1, 1],
 * [1, 0, 1, 0, 0, 0],
 * [1, 0, 1, 0, 0, 1],
 * [1, 0, 0, 1, 0, 0],
 * [1, 0, 0, 1, 0, 1],
 * [1, 0, 0, 0, 0, 0],
 * [1, 1, 1, 1, 1, 1]
 * ]
 * ▣ 출력예제 2
 * 16
 */
function bfs(land, memo, id, sr, sc, mr, mc) {
	let count = 1;
	const dr = [-1, 0, 1, 0],
		dc = [0, 1, 0, -1],
		queue = [[sr, sc]];
	memo[sr][sc] = id;

	while (queue.length) {
		const [cr, cc] = queue.shift();

		for (let i = 0; i < dr.length; i++) {
			const nr = cr + dr[i],
				nc = cc + dc[i];

			if (
				nr < 0 ||
				nr >= mr ||
				nc < 0 ||
				nc >= mc ||
				land[nr][nc] === 0 ||
				memo[nr][nc] !== -1
			)
				continue;

			memo[nr][nc] = id;
			count++;
			queue.push([nr, nc]);
		}
	}

	return count;
}

export default function solution(land) {
	let answer = -Infinity,
		id = 0;
	const mr = land.length,
		mc = land[0].length,
		memo = Array.from({ length: mr }, () => Array.from({ length: mc }).fill(-1)),
		sizes = [];

	for (let r = 0; r < mr; r++) {
		for (let c = 0; c < mc; c++) {
			if (land[r][c] === 0 || memo[r][c] !== -1) continue;
			sizes[id] = bfs(land, memo, id, r, c, mr, mc);
			id++;
		}
	}

	for (let c = 0; c < mc; c++) {
		const visited = new Set();
		let sum = 0;

		for (let r = 0; r < mr; r++) {
			const id = memo[r][c];
			if (id === -1 || visited.has(id)) continue;
			visited.add(id);
			sum += sizes[id];
		}

		answer = Math.max(answer, sum);
	}

	return answer;
}
