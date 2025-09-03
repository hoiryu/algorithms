/**
 * [PCCP 기출문제] 2번 / 퍼즐 게임 챌린지
 * https://school.programmers.co.kr/learn/courses/30/lessons/340212
 *
 * ▣ 입력예제 1
 * [1, 5, 3], [2, 4, 7]
 * ▣ 출력예제 1
 * 30
 *
 * ▣ 입력예제 2
 * [1, 4, 4, 2], [6, 3, 8, 2]
 * ▣ 출력예제 2
 * 59
 *
 * ▣ 입력예제 3
 * [1, 328, 467, 209, 54], [2, 7, 1, 4, 3]
 * ▣ 출력예제 3
 * 1723
 *
 * ▣ 입력예제 4
 * [1, 99999, 100000, 99995], [9999, 9001, 9999, 9001]
 * ▣ 출력예제 4
 * 3456789012
 */
export default function solution(diffs, times, limit) {
	let answer = Number.MAX_SAFE_INTEGER;
	const n = diffs.length;
	let maxLevel = Number.MIN_SAFE_INTEGER;
	for (let diff of diffs) maxLevel = Math.max(maxLevel, diff);
	let p1 = 1,
		p2 = maxLevel;

	while (p1 <= p2) {
		const mid = Math.floor((p1 + p2) / 2);
		let sum = 0;

		for (let i = 0; i < n; i++) {
			if (sum > limit) break;

			if (diffs[i] <= mid) {
				sum += times[i];
			} else if (diffs[i] > mid) {
				sum += (times[i] + times[i - 1]) * (diffs[i] - mid) + times[i];
			}
		}

		if (sum > limit) {
			p1 = mid + 1;
		} else if (sum <= limit) {
			p2 = mid - 1;
			answer = Math.min(answer, mid);
		}
	}

	return answer;
}
