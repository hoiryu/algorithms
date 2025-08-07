/**
 * BFS 상태 트리 검색
 * 송아지 찾기
 * 현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다. 현수의 위치와 송아
 * 지의 위치가 수직선상의 좌표 점으로 주어지면 현수는 현재 위치에서 송아지의 위치까지 다음
 * 과 같은 방법으로 이동한다. 송아지는 움직이지 않고 제자리에 있다.
 * 현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수
 * 있다. 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성하세요.
 * ▣ 입력설명
 * 첫 번째 줄에 현수의 위치 S와 송아지의 위치 E가 주어진다. 직선의 좌표 점은 1부터 10,000 까지이다.
 * ▣ 출력설명
 * 점프의 최소횟수를 구한다. 답은 1이상입니다.
 * ▣ 입력예제 1
 * 5 14
 * ▣ 출력예제 1
 * 3
 * ▣ 입력예제 2
 * 8 3
 * ▣ 출력예제 2
 * 5
 */
// 배열로 처리
export default function solution(s, e) {
	let answer = 0;
	const queue = [];
	const checks = Array(10001).fill(0);
	const distance = Array(10001).fill(0);

	checks[s] = 1;
	queue.push(s);

	while (queue.length) {
		const q = queue.shift();

		for (let nx of [q - 1, q + 1, q + 5]) {
			const level = distance[q] + 1;

			if (nx === e) return level;
			if (nx <= 0 || nx > 10000 || checks[nx] === 1) continue;

			checks[nx] = 1;
			distance[nx] = level;
			queue.push(nx);
		}
	}

	return answer;
}

// 변수로 처리
// export default function solution(s, e) {
// 	let answer = 0;
// 	let checks = Array(10001).fill(0);
// 	let queue = [];
// 	let l = 0;

// 	queue.push(s);
// 	checks[s] = 1;

// 	while (queue.length) {
// 		let n = queue.length;
// 		for (let i = 0; i < n; i++) {
// 			const q = queue.shift();
// 			for (let nx of [q - 1, q + 1, q + 5]) {
// 				if (nx === e) return l + 1;
// 				if (nx <= 0 || nx > 10000 || checks[nx] === 1) continue;

// 				checks[nx] = 1;
// 				queue.push(nx);
// 			}
// 		}

// 		l++;
// 	}

// 	return answer;
// }
