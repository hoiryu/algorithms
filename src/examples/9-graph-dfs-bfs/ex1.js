/**
 * 인접 행렬 (노드수가 적을 때)
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
 * 5 9
 * 1 2
 * 1 3
 * 1 4
 * 2 1
 * 2 3
 * 2 5
 * 3 4
 * 4 2
 * 4 5
 * ▣ 출력예제 1
 * 6
 */
export default function solution(n, m, arr) {
	let answer = 0;
	const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
	const checks = Array(n + 1).fill(0);
	const t = [];

	for (let [row, column] of arr) graph[row][column] = 1;

	function dfs(l) {
		if (l === n) {
			console.log([...t]);
			answer++;
			return;
		}

		for (let i = 1; i <= n; i++) {
			if (graph[l][i] !== 1 || checks[i] === 1) continue;
			checks[i] = 1;
			t.push(i);
			dfs(i);
			checks[i] = 0;
			t.pop();
		}
	}

	checks[1] = 1;
	t.push(1);
	dfs(1);

	return answer;
}
