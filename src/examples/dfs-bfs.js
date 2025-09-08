/**
 * DFS
 * Subset 부분집합
 *
 * ▣ 입력예제 1
 * [1, 2, 3]
 * ▣ 출력예제 1
 * [[1, 2, 3],[1, 2],[1, 3],[1],[2, 3],[2],[3],[]]
 */
export function subset(arr) {
	const n = arr.length;
	const result = [];
	const stack = [{ index: 0, chosen: [] }];

	while (stack.length) {
		const { index, chosen } = stack.pop();

		if (index === n) {
			result.push(chosen);
			continue;
		}

		stack.push({ index: index + 1, chosen });
		stack.push({ index: index + 1, chosen: chosen.slice().concat(arr[index]) });
	}

	return result;
}

/**
 * DFS
 * Permutation with repetition 중복 순열
 *
 * ▣ 입력예제 1
 * 3, 2
 * ▣ 출력예제 1
 * [[ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 1, 0 ], [ 1, 1 ], [ 1, 2 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ]]
 */
export function permutationWithRepetition(n, m) {
	const result = [];
	const stack = [{ chosen: [] }];

	while (stack.length) {
		const { chosen } = stack.pop();

		if (chosen.length === m) {
			result.push(chosen);
			continue;
		}

		for (let i = n - 1; i >= 0; i--) {
			stack.push({ chosen: chosen.slice().concat(i) });
		}
	}
	return result;
}

/**
 * DFS
 * Permutation 순열
 *
 * ▣ 입력예제 1
 * 3, 2
 * ▣ 출력예제 1
 * [[0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1]]
 */
export function permutation(n, m) {
	const result = [];
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
			stack.push({ chosen: chosen.slice().concat(i), checked: newChecked });
		}
	}

	return result;
}

/**
 * DFS
 * Combination 조합수
 *
 * ▣ 입력예제 1
 * 5, 3
 * ▣ 출력예제 1
 * [[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5]]
 */
export function combination(n, m) {
	const result = [];
	// 스택에 상태 저장: { start: 다음 선택 시작 위치, chosen: 지금까지 뽑은 배열 }
	const stack = [{ start: 1, chosen: [] }];

	while (stack.length) {
		const { start, chosen } = stack.pop();

		if (chosen.length === m) {
			result.push(chosen);
			continue;
		}

		// 뒤쪽부터 push 하면 pop 했을 때 앞쪽 숫자가 먼저 나옵니다.
		for (let i = n; i >= start; i--) {
			stack.push({ start: i + 1, chosen: chosen.slice().concat(i) });
		}
	}

	return JSON.stringify(result, null);
}
