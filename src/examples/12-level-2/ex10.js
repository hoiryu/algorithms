/**
 * Greedy
 * 요격 시스템
 * https://school.programmers.co.kr/learn/courses/30/lessons/181188
 *
 * ▣ 입력예제 1
 * [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]]
 * ▣ 출력예제 1
 * 3
 */
export default function solution(targets) {
	targets.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

	let count = 0;
	let shot = Number.MIN_SAFE_INTEGER;

	for (const [s, e] of targets) {
		if (s < shot) continue;

		count += 1;
		shot = e;
	}

	return count;
}
