/**
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
export default function solution(land) {
	let answer = 0;
	const mr = land.length;
	const mc = land[0].length;
	const memo = Array.from({ length: mr }, () => Array(mc).fill(-1));
	const sizes = [];
	const dr = [-1, 0, 1, 0];
	const dc = [0, 1, 0, -1];
	let id = 0;

	for (let r = 0; r < mr; r++) {
		for (let c = 0; c < mc; c++) {
			if (land[r][c] !== 1 || memo[r][c] !== -1) continue;
			let count = 0;
			const queue = [[r, c]];
			memo[r][c] = id;

			while (queue.length) {
				const [r, c] = queue.shift();
				count++;

				for (let k = 0; k < dr.length; k++) {
					const nr = r + dr[k];
					const nc = c + dc[k];
					if (
						nr < 0 ||
						nr >= mr ||
						nc < 0 ||
						nc >= mc ||
						land[nr][nc] !== 1 ||
						memo[nr][nc] !== -1
					)
						continue;

					memo[nr][nc] = id;
					queue.push([nr, nc]);
				}
			}

			sizes[id] = count;
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
