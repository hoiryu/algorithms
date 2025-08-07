/**
 * BFS
 * 이진트리 넓이우선탐색
 * 아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.
 * 	  1
 * 	 2 3
 * 4 5 6 7
 * 넓이 우선 탐색 : 1 2 3 4 5 6 7
 */
export default function solution(n) {
	let answer = [];
	const queue = [];
	queue.unshift(1);

	while (queue.length) {
		const q = queue.shift();
		answer.push(q);

		for (let v of [q * 2, q * 2 + 1]) {
			if (v > n) continue;
			queue.push(v);
		}
	}

	return answer;
}
