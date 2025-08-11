/**
 * 연인 코니와 브라운은 광활한 들판에서 ‘나 잡아 봐라’ 게임을 한다.
 * 이 게임은 브라운이 코니를 잡거나, 코니가 너무 멀리 달아나면 끝난다.
 * 게임이 끝나는데 걸리는 최소 시간을 구하시오.
 *
 * 조건은 다음과 같다.
 * 코니는 처음 위치 C에서 1초 후 1만큼 움직이고,
 * 이후에는 가속이 붙어 매 초마다 이전 이동 거리 + 1만큼 움직인다.
 * 즉 시간에 따른 코니의 위치는 C, C + 1, C + 3, C + 6, …이다.
 * 1 2 5
 * 브라운은 현재 위치 B에서 다음 순간 B – 1, B + 1, 2 * B 중 하나로 움직일 수 있다.
 * 코니와 브라운의 위치 p는 조건 0 <= x <= 200,000을 만족한다.
 * 브라운은 범위를 벗어나는 위치로는 이동할 수 없고, 코니가 범위를 벗어나면 게임이 끝난다.
 *
 * 11, 2
 * 답 5
 *
 * 10, 3
 * 답 3
 *
 * 51, 50
 * 답 8
 */

export default function solution(c, b) {
	let answer = 0;
	const queue = [];

	queue.push(b);

	const dp1 = Array(200001).fill(0);
	dp1[0] = c;

	for (let i = 1; i < dp1.length; i++) {
		dp1[i] = dp1[i - 1] + i;

		const size = queue.length;
		for (let j = 0; j < size; j++) {
			const q = queue.shift();

			for (let x of [q + 1, q - 1, q * 2]) {
				if (x < 0 || x > 200000) continue;

				if (x === dp1[i]) return i;
				queue.push(x);
			}
		}
	}

	return answer;
}
