/**
 * 두 원 사이의 정수 쌍
 * https://school.programmers.co.kr/learn/courses/30/lessons/181187
 *
 * ▣ 입력예제 1
 * 2, 3
 * ▣ 출력예제 1
 * 20
 */
export default function solution(r1, r2) {
	const r1sqrt = r1 * r1;
	const r2sqrt = r2 * r2;
	let total = 0;

	for (let x = 1; x <= r2; x++) {
		const x2 = x * x;
		const maxY = Math.floor(Math.sqrt(r2sqrt - x2));
		const minY = x2 > r1sqrt ? 0 : Math.ceil(Math.sqrt(r1sqrt - x2));
		total += maxY - minY + 1;
	}

	return total * 4;
}
