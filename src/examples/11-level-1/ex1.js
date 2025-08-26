/**
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
 * 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
 * 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
 *
 * 제한 사항
 * 두 수는 1이상 1000000이하의 자연수입니다.
 *
 * ▣ 입력예제 1
 * 3,
 * 12
 * ▣ 출력예제 1
 * [3, 12]
 *
 * ▣ 입력예제 2
 * 2,
 * 5
 * ▣ 출력예제 2
 * [1, 10]
 */
// 유클리드 알고리즘 활용
// 최대 공약수
function gcd(a, b) {
	if (b === 0) return a;
	return gcd(b, a % b);
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
