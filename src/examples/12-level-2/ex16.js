/**
 * 당구 연습
 * https://school.programmers.co.kr/learn/courses/30/lessons/169198
 *
 * ▣ 입력예제 1
 * 10, 10, 3, 7,
 * [[7, 7], [2, 7], [7, 3]]
 * ▣ 출력예제 1
 * [52, 37, 116]
 */
export default function solution(m, n, startX, startY, balls) {
	const answer = [];

	for (let [targetX, targetY] of balls) {
		let minDist = Infinity;

		// 위
		if (!(startX === targetX && startY < targetY)) {
			const dx = startX - targetX;
			const dy = startY - (2 * n - targetY);
			minDist = Math.min(minDist, dx * dx + dy * dy);
		}

		// 아래
		if (!(startX === targetX && startY > targetY)) {
			const dx = startX - targetX;
			const dy = startY - -targetY;
			minDist = Math.min(minDist, dx * dx + dy * dy);
		}

		// 오른쪽
		if (!(startY === targetY && startX < targetX)) {
			const dx = startX - (2 * m - targetX);
			const dy = startY - targetY;
			minDist = Math.min(minDist, dx * dx + dy * dy);
		}

		// 왼쪽
		if (!(startY === targetY && startX > targetX)) {
			const dx = startX - -targetX;
			const dy = startY - targetY;
			minDist = Math.min(minDist, dx * dx + dy * dy);
		}

		answer.push(minDist);
	}

	return answer;
}
