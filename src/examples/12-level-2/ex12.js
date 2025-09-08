/**
 * Two pointer
 * 연속된 부분 수열의 합
 * https://school.programmers.co.kr/learn/courses/30/lessons/178870
 *
 * ▣ 입력예제 1
 * [1, 2, 3, 4, 5], 7
 * ▣ 출력예제 1
 * [2, 3]
 *
 * ▣ 입력예제 2
 * [1, 1, 1, 2, 3, 4, 5], 5
 * ▣ 출력예제 2
 * [6, 6]
 *
 * ▣ 입력예제 3
 * [2, 2, 2, 2, 2], 6
 * ▣ 출력예제 3
 * [0, 2]
 *
 */
export default function solution(sequence, k) {
	let answer = [-1, -1];
	const n = sequence.length;
	let sum = 0,
		ml = Infinity,
		p1 = 0;

	for (let p2 = 0; p2 < n; p2++) {
		sum += sequence[p2];
		while (sum > k && p1 <= p2) sum -= sequence[p1++];

		if (sum === k) {
			const cl = p2 - p1 + 1;

			if (ml > cl || (ml === cl && p1 < answer.at(0))) {
				ml = cl;
				answer = [p1, p2];
			}

			sum -= sequence[p1++];
		}
	}

	return answer;
}
