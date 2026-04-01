/**
 * 인접 리스트 (노드수가 많을 때)
 * 경로 탐색
 * 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프
 * 로그램을 작성하세요. 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는
 * 1 2 3 4 5
 * 1 2 5
 * 1 3 4 2 5
 * 1 3 4 5
 * 1 4 2 5
 * 1 4 5
 * 총 6 가지입니다.
 * ▣ 입력설명
 * 첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 그 다음부터 M줄에 걸쳐 연결정보가 주어진다.
 * ▣ 출력설명
 * 총 가지수를 출력한다.
 * ▣ 입력예제 1
 * 5, 9,
 * [
 * [1, 2],
 * [1, 3],
 * [1, 4],
 * [2, 1],
 * [2, 3],
 * [2, 5],
 * [3, 4],
 * [4, 2],
 * [4, 5],
 * ]
 * ▣ 출력예제 1
 * 6
 */
const solution = (n, m, arr) => {
	let answer = [];

	const graph = Array.from({ length: n + 1 }, () => []);

	for (const [r, c] of arr) graph[r].push(c);

	const stack = [{ vertex: arr[0][0], chosen: new Set([arr[0][0]]) }];

	while (stack.length) {
		const { vertex, chosen } = stack.pop();

		if (vertex === n) {
			answer.unshift([...chosen]);
			continue;
		}

		for (const nv of graph[vertex]) {
			if (chosen.has(nv)) continue;
			stack.push({ vertex: nv, chosen: new Set([...chosen, nv]) });
		}
	}

	return answer;
};

console.time('걸린 시간');
const log = solution(5, 9, [
	[1, 2],
	[1, 3],
	[1, 4],
	[2, 1],
	[2, 3],
	[2, 5],
	[3, 4],
	[4, 2],
	[4, 5],
]);
console.timeEnd('걸린 시간');
console.log(JSON.stringify(log));
