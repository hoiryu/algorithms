/**
 * 도넛과 막대 그래프
 * https://school.programmers.co.kr/learn/courses/30/lessons/258711
 *
 * ▣ 입력예제 1
 * [[2, 3], [4, 3], [1, 1], [2, 1]]
 * ▣ 출력예제 1
 * [2, 1, 1, 0]
 *
 * ▣ 입력예제 2
 * [[4, 11], [1, 12], [8, 3], [12, 7],[4, 2], [7, 11], [4, 8], [9, 6],[10, 11], [6, 10], [3, 5],[11, 1], [5, 3], [11, 9], [3, 8]]
 * ▣ 출력예제 2
 * [4, 0, 1, 2]
 */
export default function solution(edges) {
	let max = 0;
	for (const [r, c] of edges) max = Math.max(max, r, c);
	const graph = Array.from({ length: max + 1 }, () => []);
	const inDegree = Array(max + 1).fill(0);
	const outDegree = Array(max + 1).fill(0);
	let start = 0;

	for (const [r, c] of edges) {
		graph[r].push(c);
		inDegree[c] += 1;
		outDegree[r] += 1;
	}

	for (let i = 1; i <= max; i++) {
		if (inDegree[i] === 0 && outDegree[i] >= 2) {
			start = i;
			break;
		}
	}

	const visited = Array(max + 1).fill(false);
	const stack = [start];

	while (stack.length) {
		const u = stack.pop();
		if (visited[u]) continue;
		visited[u] = true;
		for (const v of graph[u]) if (!visited[v]) stack.push(v);
	}

	let bars = 0;
	let eights = 0;

	for (let i = 1; i <= max; i++) {
		if (!visited[i] || i === start) continue;
		const oc = outDegree[i];
		const ic = inDegree[i];
		if (oc === 0) bars++;
		if (ic >= 2 && oc >= 2) eights++;
	}

	const donuts = outDegree[start] - bars - eights;

	return [start, donuts, bars, eights];
}
