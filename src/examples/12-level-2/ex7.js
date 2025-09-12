/**
 * 차수(Indegree/Outdegree) 기반 Graph
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
function bfs(graph, vertex) {
	const visited = new Set();
	const queue = [vertex];
	visited.add(vertex);

	while (queue.length) {
		const q = queue.shift();

		for (const v of graph[q]) {
			if (visited.has(v)) continue;
			visited.add(v);
			queue.push(v);
		}
	}

	return visited;
}

export default function solution(edges) {
	let answer = [0, 0, 0, 0];
	let max = -Infinity;
	for (const [r, c] of edges) max = Math.max(max, r, c);

	const graph = Array.from({ length: max + 1 }, () => []);

	let vertex = 0; // 선택된 정점
	for (const [r, c] of edges) graph[r].push(c);
	let inDegree = Array.from({ length: max + 1 }).fill(0);
	let outDegree = Array.from({ length: max + 1 }).fill(0);

	for (const [r, c] of edges) {
		graph[r].push(c);
		outDegree[r]++;
		inDegree[c]++;
	}

	for (let i = 1; i <= max; i++) {
		if (inDegree[i] !== 0 || outDegree[i] <= 1) continue;
		vertex = i;
		answer[0] = i;
	}

	const visited = bfs(graph, vertex);

	for (let i = 1; i <= max; i++) {
		if (!visited.has(i) || i === vertex) continue;

		if (inDegree[i] >= 2 && outDegree[i] >= 2) {
			answer[3]++;
		} else if (outDegree[i] === 0) {
			answer[2]++;
		}
	}

	answer[1] = outDegree[vertex] - answer[2] - answer[3];

	return answer;
}
