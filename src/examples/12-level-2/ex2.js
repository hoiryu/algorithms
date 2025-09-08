/**
 * 서버 증설 횟수
 * https://school.programmers.co.kr/learn/courses/30/lessons/389479
 *
 * ▣ 입력예제 1
 * [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5], 3, 5
 * ▣ 출력예제 1
 * 7
 *
 * ▣ 입력예제 2
 * [0, 0, 0, 10, 0, 12, 0, 15, 0, 1, 0, 1, 0, 0, 0, 5, 0, 0, 11, 0, 8, 0, 0, 0], 5, 1
 * ▣ 출력예제 2
 * 11
 *
 * ▣ 입력예제 3
 * [0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 5, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], 1, 1
 * ▣ 출력예제 3
 * 12
 */
export default function solution(players, m, k) {
	let answer = 0;
	const queue = [];

	for (let i = 0; i < players.length; i++) {
		let count = players[i];
		while (queue[0] === i) queue.shift();

		if (count < m) continue;

		while ((queue.length + 1) * m <= count) {
			queue.push(i + k);
			answer++;
		}
	}

	return answer;
}
