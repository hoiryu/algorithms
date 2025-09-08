/**
 * 순열 구하기
 * 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.
 * ▣ 입력설명
 * 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
 * 두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.
 * ▣ 출력설명
 * 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
 * 출력순서는 사전순으로 오름차순으로 출력합니다.
 * ▣ 입력예제 1
 * 3, 2, [3, 6, 9]
 * ▣ 출력예제 1
 * [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]], 6
 */
function dfs(n, m, arr) {
	let result = [];
	const stack = [{ chosen: [], checked: Array.from({ length: n }).fill(false) }];

	while (stack.length) {
		const { chosen, checked } = stack.pop();

		if (chosen.length === m) {
			result.push(chosen);
			continue;
		}

		for (let i = n - 1; i >= 0; i--) {
			if (checked[i]) continue;
			const newChecked = checked.slice();
			newChecked[i] = true;
			stack.push({ chosen: chosen.slice().concat(arr[i]), checked: newChecked });
		}
	}

	return result;
}

export default function solution(n, m, arr) {
	const answer = dfs(n, m, arr);
	return answer;
}

// export default function solution(n, m, arr) {
// 	let answer = [];
// 	const t = Array(m).fill(0);
// 	const checks = Array(n).fill(0);

// 	function dfs(l) {
// 		if (l === m) return answer.push([...t]);

// 		for (let i = 0; i < n; i++) {
// 			if (checks[i] === 1) continue;
// 			t[l] = arr[i];
// 			checks[i] = 1;
// 			dfs(l + 1);
// 			checks[i] = 0;
// 		}
// 	}

// 	dfs(0);
// 	return answer;
// }
