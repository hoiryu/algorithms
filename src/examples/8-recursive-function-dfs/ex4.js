/**
 * 부분 집합
 * DFS (Depth-First-Search)
 * 부분집합 구하기
 * 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램
 * 을 작성하세요.
 * ▣ 입력설명
 * 첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.
 * ▣ 출력설명
 * 첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다.
 * 단 공집합은 출력하지 않습니다.
 * ▣ 입력예제 1
 * 3
 * ▣ 출력예제 1
 * 1 2 3
 * 1 2
 * 1 3
 * 1
 * 2 3
 * 2
 * 3
 */
export default function solution(n) {
	let answer = [];
	const checks = Array(n + 1).fill(0);

	function dfs(l) {
		if (l === n + 1) {
			const t = [];
			for (let i = 1; i <= checks.length; i++) {
				if (checks[i] === 0) continue;
				t.push(i);
			}
			if (t.length > 0) answer.push(t);

			return;
		}

		checks[l] = 1;
		dfs(l + 1);
		checks[l] = 0;
		dfs(l + 1);
	}

	dfs(1);

	return answer;
}
