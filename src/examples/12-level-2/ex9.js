/**
 * [PCCP 기출문제] 3번 / 아날로그 시계
 * https://school.programmers.co.kr/learn/courses/30/lessons/250135
 *
 * ▣ 입력예제 1
 * 0, 5, 30, 0, 7, 0
 * ▣ 출력예제 1
 * 2
 *
 * ▣ 입력예제 2
 * 12, 0, 0, 12, 0, 30
 * ▣ 출력예제 2
 * 1
 *
 * ▣ 입력예제 3
 * 0, 6, 1, 0, 6, 6
 * ▣ 출력예제 3
 * 0
 *
 * ▣ 입력예제 4
 * 11, 59, 30, 12, 0, 0
 * ▣ 출력예제 4
 * 1
 *
 * ▣ 입력예제 5
 * 11, 58, 59, 11, 59, 0
 * ▣ 출력예제 5
 * 1
 *
 * ▣ 입력예제 6
 * 1, 5, 5, 1, 5, 6
 * ▣ 출력예제 6
 * 2
 *
 * ▣ 입력예제 7
 * 0, 0, 0, 23, 59, 59
 * ▣ 출력예제 7
 * 2852
 */
function countMeets(start, end, count, point) {
	const sc = Math.floor((start * count) / point);
	const ec = Math.floor((end * count) / point);
	return ec - sc + (start % point === 0 ? 1 : 0);
}

export default function solution(h1, m1, s1, h2, m2, s2) {
	let answer = 0;
	const start = h1 * 3600 + m1 * 60 + s1;
	const end = h2 * 3600 + m2 * 60 + s2;
	const sm = countMeets(start, end, 59, 60 * 60);
	const sh = countMeets(start, end, 719, 60 * 60 * 12);
	const smh = countMeets(start, end, 1, 60 * 60 * 12);
	answer = sm + sh - smh;
	return answer;
}
