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
function secretCheck(arr, q, ans) {
	let result = true;

	for (let i = 0; i < q.length; i++) {
		let count = 0;

		for (let j = 0; j < arr.length; j++) {
			if (q[i].includes(arr[j])) count++;
		}

		if (count !== ans[i]) return false;
	}

	return result;
}

function dfs(n, m, q, ans) {
	let result = 0;
	const stack = [{ start: 1, chosen: [] }];
	const visited = new Set();

	while (stack.length) {
		const { start, chosen } = stack.pop();
		const key = `${start}-${chosen.join('-')}`;

		if (visited.has(key)) continue;
		else visited.add(key);

		if (chosen.length === m) {
			if (secretCheck(chosen, q, ans)) result++;
			continue;
		}

		for (let i = n; i >= start; i--) {
			stack.push({ start: i + 1, chosen: chosen.slice().concat(i) });
		}
	}

	return result;
}

export default function solution(n, q, ans) {
	let answer = 0;
	const m = q[0].length;
	answer = dfs(n, m, q, ans);

	return answer;
}
