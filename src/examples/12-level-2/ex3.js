import { test } from '../../console.js';

/**
 * BFS
 * 지게차와 크레인
 * https://school.programmers.co.kr/learn/courses/30/lessons/388353
 */
const bfs = (sr, sc, storage) => {
	const queue = [[sr, sc]];
	const mr = storage.length;
	const mc = storage[0].length;
	const ds = [
		[0, -1],
		[1, 0],
		[0, 1],
		[-1, 0],
	];
	const visited = new Set([`${sr}-${sc}`]);

	while (queue.length) {
		const [cr, cc] = queue.shift();

		for (const [dr, dc] of ds) {
			const nr = cr + dr;
			const nc = cc + dc;

			if (nr < 0 || nr >= mr || nc < 0 || nc >= mc) return true;

			const key = `${nr}-${nc}`;
			if (visited.has(key) || storage[nr][nc] !== 0) continue;

			visited.add(key);
			queue.push([nr, nc]);
		}
	}

	return false;
};

const solution = (storage, requests) => {
	storage = storage.map(s => s.split(''));
	const mr = storage.length;
	const mc = storage[0].length;
	let answer = mr * mc;

	for (const request of requests) {
		const t = [];

		for (let r = 0; r < mr; r++) {
			for (let c = 0; c < mc; c++) {
				if (storage[r][c] !== request[0]) continue;

				if (request.length === 1 && !bfs(r, c, storage)) continue;

				t.push([r, c]);
			}
		}

		while (t.length) {
			const [r, c] = t.shift();

			storage[r][c] = 0;
			answer--;
		}
	}

	return answer;
};

test(solution, [
	{
		input: [
			['AZWQY', 'CAABX', 'BBDDA', 'ACACA'],
			['A', 'BB', 'A'],
		],
		expected: 11,
	},
	{
		input: [
			['HAH', 'HBH', 'HHH', 'HAH', 'HBH'],
			['C', 'B', 'B', 'B', 'B', 'H'],
		],
		expected: 4,
	},
]);
