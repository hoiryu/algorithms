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

	// 검사 속도를 위해 선택여부 표시 배열 사용(contains O(1))
	function checkPicked(picked) {
		const chosen = new Array(n + 1).fill(0);
		for (const v of picked) chosen[v] = 1;

		for (let i = 0; i < q.length; i++) {
			let cnt = 0;
			for (const v of q[i]) if (chosen[v]) cnt++;
			if (cnt !== ans[i]) return false;
		}
		return true;
	}

	// 스택 원소: { l: 현재까지 고른 개수, s: 다음 시작값, picked: 배열 }
	const stack = [{ l: 0, s: 1, picked: [] }];

	while (stack.length) {
		const { l, s, picked } = stack.pop();

		if (l === m) {
			if (checkPicked(picked)) answer++;
			continue;
		}

		// 조합 특성상 오름차순으로만 확장
		// 재귀와 동일하게 s..n 순회하되, DFS이므로 push 순서를 뒤집어야 원래와 동일한 전개
		for (let i = n; i >= s; i--) {
			// 남은 슬롯 수로 가지치기 (필수는 아니지만 속도 ↑)
			const remain = m - l - 1;
			if (n - (i + 1) + 1 < remain) continue;

			stack.push({ l: l + 1, s: i + 1, picked: [...picked, i] });
		}
	}

	return answer;
}
