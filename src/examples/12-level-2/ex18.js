/**
 * 미로 탈출
 * https://school.programmers.co.kr/learn/courses/30/lessons/159993
 *
 * ▣ 입력예제 1
 * ["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"]
 * ▣ 출력예제 1
 * 16
 *
 * ▣ 입력예제 2
 * ["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"]
 * ▣ 출력예제 2
 * -1
 */
function bfs(maps, dest, sr, sc, mr, mc) {
	const queue = [[sr, sc, 0]],
		drc = [
			[-1, 0],
			[0, 1],
			[1, 0],
			[0, -1],
		];
	let totalTime = Infinity,
		visited = new Set([`${sr}-${sc}`]);

	while (queue.length) {
		const [r, c, time] = queue.shift();

		for (const [dr, dc] of drc) {
			const nr = r + dr,
				nc = c + dc;
			const key = `${nr}-${nc}`;

			if (
				nr < 0 ||
				nr >= mr ||
				nc < 0 ||
				nc >= mc ||
				visited.has(key) ||
				maps[nr][nc] === 'X'
			)
				continue;

			if (maps[nr][nc] === dest) {
				totalTime = Math.min(totalTime, time + 1);
				break;
			}

			visited.add(key);
			queue.push([nr, nc, time + 1]);
		}
	}

	return totalTime === Infinity ? -1 : totalTime;
}

export default function solution(maps) {
	const mr = maps.length,
		mc = maps[0].length;
	let S, L;

	for (let r = 0; r < mr; r++) {
		for (let c = 0; c < mc; c++) {
			if (maps[r][c] === 'S') S = [r, c];
			if (maps[r][c] === 'L') L = [r, c];
		}
	}

	const toLever = bfs(maps, 'L', S[0], S[1], mr, mc);
	if (toLever === -1) return -1;
	const toExit = bfs(maps, 'E', L[0], L[1], mr, mc);
	if (toExit === -1) return -1;

	return toLever + toExit;
}
