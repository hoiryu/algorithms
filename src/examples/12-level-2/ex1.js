/**
 * DFS subset
 * 완전범죄
 * https://school.programmers.co.kr/learn/courses/30/lessons/389480
 *
 * ▣ 입력예제 1
 * [[1, 2], [2, 3], [2, 1]], 4, 4
 * ▣ 출력예제 1
 * 2
 *
 * ▣ 입력예제 2
 * [[1, 2], [2, 3], [2, 1]], 1, 7
 * ▣ 출력예제 2
 * 0
 *
 * ▣ 입력예제 3
 * [[3, 3], [3, 3]] 7, 1
 * ▣ 출력예제 3
 * 6
 *
 * ▣ 입력예제 4
 * [[3, 3], [3, 3]], 6, 1
 * ▣ 출력예제 4
 * -1
 */
export default function solution(info, n, m) {
	let answer = Infinity;
	const ml = info.length;
	const stack = [{ index: 0, a: 0, b: 0 }];
	const visited = new Set();

	while (stack.length) {
		const { index, a, b } = stack.pop();

		if (a >= n || b >= m) continue;
		if (index === ml) {
			if (a < n && b < m) answer = Math.min(answer, a);
			continue;
		}

		const key = `${index}-${a}-${b}`;
		if (visited.has(key)) continue;
		else visited.add(key);

		stack.push({ index: index + 1, a: a + info[index][0], b });
		stack.push({ index: index + 1, a: a, b: b + info[index][1] });
	}

	if (answer === Infinity) answer = -1;

	return answer;
}
