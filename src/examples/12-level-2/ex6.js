/**
 * Brute force + Hash
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
function setPath(paths, i, cr, cc, er, ec) {
	while (cr !== er || cc !== ec) {
		if (cr > er) cr--;
		else if (cr < er) cr++;
		else if (cc > ec) cc--;
		else if (cc < ec) cc++;
		paths[i].push([cr, cc]);
	}
}

export default function solution(points, routes) {
	let answer = 0;
	const x = routes.length; // 로봇 수
	const m = routes[0].length; // 운송 경로 수
	let max = -Infinity;
	const paths = routes.reduce((a, c, i) => {
		a[i] = [points[c[0] - 1]];
		return a;
	}, {});

	for (let i = 0; i < x; i++) {
		for (let j = 1; j < m; j++) {
			const [cr, cc] = points[routes[i][j - 1] - 1];
			const [er, ec] = points[routes[i][j] - 1];
			setPath(paths, i, cr, cc, er, ec);
		}
	}

	for (const [k, v] of Object.entries(paths)) max = Math.max(max, v.length);

	for (let i = 0; i < max; i++) {
		const hash = new Map();

		for (let j = 0; j < x; j++) {
			if (!paths[j][i]) continue;
			const key = paths[j][i].join('-');

			if (hash.has(key)) hash.set(key, hash.get(key) + 1);
			else hash.set(key, 1);
		}

		for (const [k, v] of hash) if (v > 1) answer++;
	}

	return answer;
}
