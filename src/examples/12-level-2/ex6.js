/**
 * [PCCP 기출문제] 3번 / 충돌위험 찾기
 * https://school.programmers.co.kr/learn/courses/30/lessons/340211
 *
 * ▣ 입력예제 1
 * [[3, 2], [6, 4], [4, 7], [1, 4]],
 * [[4, 2], [1, 3], [2, 4]],
 * ▣ 출력예제 1
 * 1
 *
 * ▣ 입력예제 2
 * [[3, 2], [6, 4], [4, 7], [1, 4]],
 * [[4, 2], [1, 3], [4, 2], [4, 3]],
 * ▣ 출력예제 2
 * 9
 *
 * ▣ 입력예제 3
 * [[2, 2], [2, 3], [2, 7], [6, 6], [5, 2]],
 * [[2, 3, 4, 5], [1, 3, 4, 5]],
 * ▣ 출력예제 3
 * 0
 */
function getPath(i, sr, sc, er, ec, paths) {
	while (sr !== er || sc !== ec) {
		if (sr > er) sr -= 1;
		else if (sr < er) sr += 1;
		else if (sc > ec) sc -= 1;
		else if (sc < ec) sc += 1;
		paths[i].push([sr, sc]);
	}
}

export default function solution(points, routes) {
	let answer = 0;
	const n = points.length; // 좌표 개수
	const x = routes.length; // 로봇 개수
	const m = routes[1].length; // 운송 경로
	let maxTime = Number.MIN_SAFE_INTEGER;
	const paths = routes.reduce((acc, cur, idx) => {
		if (!cur.length) return acc;
		acc[idx] = [points[routes[idx][0] - 1]];
		return acc;
	}, {});

	for (let i = 0; i < x; i++) {
		for (let j = 1; j < m; j++) {
			const [sr, sc] = points[routes[i][j - 1] - 1];
			const [er, ec] = points[routes[i][j] - 1];
			getPath(i, sr, sc, er, ec, paths);
		}
	}

	for (const [k, v] of Object.entries(paths)) maxTime = Math.max(maxTime, v.length);

	for (let i = 0; i < maxTime; i++) {
		const hash = new Map();

		for (let j = 0; j < x; j++) {
			if (paths[j].length <= i) continue;
			const key = paths[j][i].join('-');
			if (hash.has(key)) hash.set(key, hash.get(key) + 1);
			else hash.set(key, 1);
		}

		for (const [k, v] of hash) if (v > 1) answer++;
	}

	return answer;
}
