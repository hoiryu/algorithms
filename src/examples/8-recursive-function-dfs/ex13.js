/**
 * 수열 추측하기
 * 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다. 그리고 둘째 줄부터 차례대로 파스칼
 * 의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다. 예를 들어 N이 4 이고 가장 윗 줄에
 * 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.
 *   3 1 2 4
 * 	  4 3 6
 * 	   7 9
 * 	   16
 * N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하
 * 시오. 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.
 * ▣ 입력설명
 * 첫째 줄에 두개의 정수 N(1≤N≤10)과 F가 주어진다. N은 가장 윗줄에 있는 숫자의 개수를 의
 * 미하며 F는 가장 밑에 줄에 있는 수로 1,000,000 이하이다.
 * ▣ 출력설명
 * 첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다. 답이 존재
 * 하지 않는 경우는 입력으로 주어지지 않는다.
 * ▣ 입력예제 1
 * 4 16
 * ▣ 출력예제 1
 * 3 1 2 4
 */
export default function solution(n, f) {
	let answer = [];
	const memo = Array.from({ length: n }, () => Array(n).fill(0));
	const t = Array(n).fill(0);
	const checks = Array(n + 1).fill(0);
	const c = Array(n).fill(0);

	function dfs(l, sum) {
		if (sum > f || answer.length > 0) return;
		if (l === n && sum === f) {
			answer = [...t];
			return;
		}
		for (let i = 1; i <= n; i++) {
			if (checks[i] === 1) continue;
			t[l] = i;
			checks[i] = 1;
			dfs(l + 1, sum + t[l] * c[l]);
			checks[i] = 0;
		}
	}

	function combination(n, r) {
		if (memo[n][r] !== 0) return memo[n][r];
		if (r === 0 || n === r) return 1;
		return (memo[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
	}

	for (let i = 0; i < n; i++) c[i] = combination(n - 1, i);

	dfs(0, 0);

	return answer;
}
