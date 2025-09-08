/**
 * 중복순열 구하기
 * 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열
 * 하는 방법을 모두 출력합니다.
 * ▣ 입력설명
 * 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
 * ▣ 출력설명
 * 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
 * 출력순서는 사전순으로 오름차순으로 출력합니다.
 * ▣ 입력예제 1
 * 3, 2
 * ▣ 출력예제 1
 * [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]], 9
 */
function dfs(n, m) {
	const result = [];
	const stack = [{ chosen: [] }];

	while (stack.length) {
		const { chosen } = stack.pop();
		if (chosen.length === m) {
			result.push(chosen);
			continue;
		}

		for (let i = n; i >= 1; i--) {
			stack.push({ chosen: chosen.slice().concat(i) });
		}
	}

	return result;
}

export default function solution(n, m) {
	const answer = dfs(n, m);
	return answer;
}

// 재귀
// export default function solution(n, m) {
// 	const answer = [];
// 	const checks = Array(n + 1).fill(0);
// 	const t = Array(m).fill(0);

// 	function dfs(l) {
// 		if (l === m) {
// 			answer.push([...t]);
// 			return;
// 		}

// 		for (let i = 1; i <= n; i++) {
// 			t[l] = i;
// 			checks[i] = 1;
// 			dfs(l + 1);
// 			checks[i] = 0;
// 		}
// 	}

// 	dfs(0);

// 	return answer;
// }
