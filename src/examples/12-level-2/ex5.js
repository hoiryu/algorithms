/**
 * Two Pointers
 * 퍼즐 게임 챌린지
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
	let answer = Infinity,
		maximum = -Infinity;
	for (const diff of diffs) maximum = Math.max(maximum, diff);
	let p1 = 1,
		p2 = maximum;

	while (p1 <= p2) {
		const level = Math.floor((p1 + p2) / 2);
		let sum = 0;
		for (let i = 0; i < diffs.length; i++) {
			if (sum > limit) break;
			if (level >= diffs[i]) sum += times[i];
			else sum += (times[i] + times[i - 1]) * (diffs[i] - level) + times[i];
		}
		if (sum > limit) p1 = level + 1;
		else {
			p2 = level - 1;
			answer = Math.min(answer, level);
		}
	}

	return answer;
}
