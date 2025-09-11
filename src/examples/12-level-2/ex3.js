/**
 * BFS
 * 지게차와 크레인
 * https://school.programmers.co.kr/learn/courses/30/lessons/388353
 *
 * ▣ 입력예제 1
 * ["AZWQY", "CAABX", "BBDDA", "ACACA"],
 * ["A", "BB", "A"]
 * ▣ 출력예제 1
 * 11
 *
 * ▣ 입력예제 2
 * ["HAH", "HBH", "HHH", "HAH", "HBH"],
 * ["C", "B", "B", "B", "B", "H"]
 * ▣ 출력예제 2
 * 4
 */
function bfs(r, c, storage) {
	const n = storage.length;
	const m = storage[0].length;
	const dr = [-1, 0, 1, 0];
	const dc = [0, 1, 0, -1];
	let queue = [[r, c]];
	const visited = new Set();
	visited.add(`${r}-${c}`);

	while (queue.length) {
		const [cr, cc] = queue.shift();

		for (let i = 0; i < dr.length; i++) {
			const nr = cr + dr[i];
			const nc = cc + dc[i];
			if (nr < 0 || nr >= n || nc < 0 || nc >= m) return true;

			const key = `${nr}-${nc}`;

			if (nr < 0 || nr >= n || nc < 0 || nc >= m || storage[nr][nc] !== 0 || visited.has(key))
				continue;

			visited.add(key);
			queue.push([nr, nc]);
		}
	}

	return false;
}

export default function solution(storage, requests) {
	storage = storage.map(s => s.split(''));
	const n = storage.length;
	const m = storage[0].length;
	let answer = n * m;

	for (const request of requests) {
		const t = [];

		for (let i = 0; i < n; i++) {
			for (let j = 0; j < m; j++) {
				if (storage[i][j] !== request[0]) continue;
				if (request.length === 2) t.push([i, j]);
				else {
					if (bfs(i, j, storage)) t.push([i, j]);
				}
			}
		}

		for (const [r, c] of t) {
			storage[r][c] = 0;
			answer--;
		}
	}

	return answer;
}
