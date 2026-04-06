/**
 * DFS subset
 * 완전범죄
 * https://school.programmers.co.kr/learn/courses/30/lessons/389480
 */
const solution = (info, n, m) => {
	let answer = Infinity;
	const depth = info.length;
	const stack = [{ index: 0, a: 0, b: 0 }];
	const visited = new Set();

	while (stack.length) {
		const { index, a, b } = stack.pop();
		if (a >= n || b >= m) continue;

		const key = `${index}-${a}-${b}`;

		if (visited.has(key)) continue;
		else visited.add(key);

		if (index === depth) {
			answer = Math.min(answer, a);
			continue;
		}

		stack.push({ index: index + 1, a: a + info[index][0], b });
		stack.push({ index: index + 1, a, b: b + info[index][1] });
	}

	if (answer === Infinity) answer = -1;

	return answer;
};

console.time('걸린 시간');
// 2
const log = solution(
	[
		[1, 2],
		[2, 3],
		[2, 1],
	],
	4,
	4,
);
// const log = solution([[1, 2], [2, 3], [2, 1]], 1, 7); // 0
// const log = solution([[3, 3], [3, 3]] 7, 1); // 6
// const log = solution([[3, 3], [3, 3]], 6, 1); // -1
console.timeEnd('걸린 시간');
console.log(JSON.stringify(log));
