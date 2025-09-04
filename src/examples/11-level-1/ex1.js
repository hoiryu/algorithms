/**
 * 최대공약수와 최소공배수
 * https://school.programmers.co.kr/learn/courses/30/lessons/12940
 *
 * ▣ 입력예제 1
 * 3, 12
 * ▣ 출력예제 1
 * [3, 12]
 *
 * ▣ 입력예제 2
 * 2, 5
 * ▣ 출력예제 2
 * [1, 10]
 */
// 유클리드 알고리즘 활용
// 최대 공약수
function gcd(a, b) {
	while (b !== 0) {
		const t = b;
		b = a % b;
		a = t;
	}

	return a;
}

// 최소 공배수
function lcm(a, b, c) {
	return (a * b) / c;
}

export default function solution(n, m) {
	const divisor = gcd(n, m);
	const multiple = lcm(n, m, divisor);
	const answer = [divisor, multiple];

	return answer;
}
