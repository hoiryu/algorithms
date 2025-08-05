/**
 * 자릿수의 합
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
 * 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
 * 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
 * ▣ 입력설명
 * 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
 * 각 자연수의 크기는 10,000,000를 넘지 않는다.
 * ▣ 출력설명
 * 자릿수의 합이 최대인 자연수를 출력한다.
 * ▣ 입력예제 1
 * 7
 * 128 460 603 40 521 137 123
 * ▣ 출력예제 1
 * 137
 */
export default function solution(arr) {
	let answer = Number.MIN_SAFE_INTEGER;
	let max = Number.MIN_SAFE_INTEGER;

	for (let i of arr) {
		let sum = 0;
		let v = i;

		while (v) {
			sum += v % 10;
			v = Math.floor(v / 10);
		}

		if (max <= sum) {
			if (max === sum && answer < i) {
				answer = i;
				continue;
			}

			max = sum;
			answer = i;
		}
	}

	return answer;
}
