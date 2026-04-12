import { test } from '../../console.js';

/**
 * Two Pointers
 * 퍼즐 게임 챌린지
 * https://school.programmers.co.kr/learn/courses/30/lessons/340212
 */
const solution = (diffs, times, limit) => {
	let answer = Infinity;
	let pl = 1;
	let pr = diffs.reduce((acc, curr) => Math.max(acc, curr), 0);

	while (pl <= pr) {
		const pm = Math.floor((pl + pr) / 2);
		let sum = 0;

		for (let i = 0; i < diffs.length; i++) {
			if (sum > limit) break;

			if (diffs[i] > pm) {
				sum += (times[i] + times[i - 1]) * (diffs[i] - pm) + times[i];
			} else sum += times[i];
		}

		if (sum <= limit) {
			pr = pm - 1;
			answer = Math.min(answer, pm);
		} else pl = pm + 1;
	}

	return answer;
};

test(solution, [
	{
		input: [[1, 5, 3], [2, 4, 7], 30],
		expected: 3,
	},
	{
		input: [[1, 4, 4, 2], [6, 3, 8, 2], 59],
		expected: 2,
	},
	{
		input: [[1, 328, 467, 209, 54], [2, 7, 1, 4, 3], 1723],
		expected: 294,
	},
	{
		input: [[1, 99999, 100000, 99995], [9999, 9001, 9999, 9001], 3456789012],
		expected: 39354,
	},
]);
