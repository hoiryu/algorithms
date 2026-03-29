/**
 * Permutation + DFS
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
 * [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]]
 */
const solution = (n, m, arr) => {
	const answer = [];
	const depth = n;
	const stack = [{ chosen: [], checked: Array.from({ length: n }).fill(false) }];

	while (stack.length) {
		const { chosen, checked } = stack.pop();

		if (chosen.length === m) {
			answer.unshift(chosen.slice());
			continue;
		}

		for (let i = 0; i < depth; i++) {
			if (checked[i]) continue;
			stack.push({ chosen: chosen.concat(arr[i]), checked: checked.with(i, true) });
		}
	}

	return answer;
};

console.time('걸린 시간');
const log = solution(3, 2, [3, 6, 9]);
console.timeEnd('걸린 시간');
console.log(JSON.stringify(log));
