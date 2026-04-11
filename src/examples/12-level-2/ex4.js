import { test } from '../../console.js';

/**
 * DFS 조합수
 * 비밀 코드 해독
 * https://school.programmers.co.kr/learn/courses/30/lessons/388352
 */
const compare = (chosen, q, ans) => {
	const mr = q.length;
	const mc = q[0].length;

	for (let r = 0; r < mr; r++) {
		let count = 0;

		for (let c = 0; c < mc; c++) {
			if (chosen.includes(q[r][c])) count++;
		}

		if (count !== ans[r]) return false;
	}

	return true;
};

const combination = (n, q, ans) => {
	let result = 0;
	const picked = 5;
	const stack = [{ start: 1, chosen: [] }];

	while (stack.length) {
		const { start, chosen } = stack.pop();

		if (chosen.length === picked) {
			if (compare(chosen, q, ans)) result++;
			continue;
		}

		for (let i = n; i >= start; i--) {
			stack.push({ start: i + 1, chosen: chosen.concat(i) });
		}
	}

	return result;
};

const solution = (n, q, ans) => {
	const answer = combination(n, q, ans);
	return answer;
};

test(solution, [
	{
		input: [
			10,
			[
				[1, 2, 3, 4, 5],
				[6, 7, 8, 9, 10],
				[3, 7, 8, 9, 10],
				[2, 5, 7, 9, 10],
				[3, 4, 5, 6, 7],
			],
			[2, 3, 4, 3, 3],
		],
		expected: 3,
	},
	{
		input: [
			15,
			[
				[2, 3, 9, 12, 13],
				[1, 4, 6, 7, 9],
				[1, 2, 8, 10, 12],
				[6, 7, 11, 13, 15],
				[1, 4, 10, 11, 14],
			],
			[2, 1, 3, 0, 1],
		],
		expected: 5,
	},
]);
