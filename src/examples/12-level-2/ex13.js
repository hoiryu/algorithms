/**
 * Stack + Greedy
 * 과제 진행하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/176962
 *
 * ▣ 입력예제 1
 * [["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]]
 * ▣ 출력예제 1
 * ["korean", "english", "math"]
 *
 * ▣ 입력예제 2
 * [["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]]
 * ▣ 출력예제 2
 * ["science", "history", "computer", "music"]
 *
 * ▣ 입력예제 3
 * [["aaa", "12:00", "20"], ["bbb", "12:10", "30"], ["ccc", "12:40", "10"]]
 * ▣ 출력예제 3
 * ["bbb", "ccc", "aaa"]
 */
function timeToSeconds(time) {
	const t = time.split(':').map(Number);
	if (t.length === 1) return t[0] * 60;
	return t[0] * 3600 + t[1] * 60;
}

export default function solution(plans) {
	plans = plans.map(([cn, cs, cp]) => [cn, timeToSeconds(cs), timeToSeconds(cp)]);
	plans.sort((a, b) => a[1] - b[1]);
	const answer = [];
	const n = plans.length;
	const stack = [];

	for (let i = 0; i < n; i++) {
		const [cn, cs, cp] = plans[i];
		const ns = i + 1 < n ? plans[i + 1][1] : Infinity;
		stack.push([cn, cp]);

		let rest = ns - cs;

		while (rest > 0 && stack.length) {
			let [n, p] = stack.pop();

			if (p <= rest) {
				rest -= p;
				answer.push(n);
			} else {
				p -= rest;
				stack.push([n, p]);
				rest = 0;
			}
		}
	}

	while (stack.length) {
		const [n] = stack.pop();
		answer.push(n);
	}
	return answer;
}
