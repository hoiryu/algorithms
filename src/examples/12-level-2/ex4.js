/**
 * 비밀 코드 해독
 * https://school.programmers.co.kr/learn/courses/30/lessons/388352
 *
 * ▣ 입력예제 1
 * 10,
 * [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [3, 7, 8, 9, 10], [2, 5, 7, 9, 10], [3, 4, 5, 6, 7]],
 * [2, 3, 4, 3, 3]
 * ▣ 출력예제 1
 * 3
 *
 * ▣ 입력예제 2
 * 15,
 * [[2, 3, 9, 12, 13], [1, 4, 6, 7, 9], [1, 2, 8, 10, 12], [6, 7, 11, 13, 15], [1, 4, 10, 11, 14]],
 * [2, 1, 3, 0, 1]
 * ▣ 출력예제 2
 * 5
 */
export default function solution(n, q, ans) {
	let answer = 0;
	const m = 5;
	const t = Array.from({ length: m }, () => 0);
	const checked = Array.from({ length: n + 1 }, () => 0);

	function dfs(l, s) {
		if (l === m) {
			const arr = [...t];

			for (let i = 0; i < q.length; i++) {
				let count = 0;
				for (let v of q[i]) if (arr.includes(v)) count++;
				if (count !== ans[i]) return;
			}

			answer++;
			return;
		}

		for (let i = s; i <= n; i++) {
			if (checked[i] === 1) continue;
			checked[i] = 1;
			t[l] = i;
			dfs(l + 1, i + 1);
			checked[i] = 0;
		}
	}

	dfs(0, 1);

	return answer;
}
