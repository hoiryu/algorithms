/**
 * 택배 상자 꺼내기
 * https://school.programmers.co.kr/learn/courses/30/lessons/389478
 *
 * ▣ 입력예제 1
 * 22, 6, 8
 * ▣ 출력예제 1
 * 3
 *
 * ▣ 입력예제 2
 * 13, 3, 6
 * ▣ 출력예제 2
 * 4
 */
function solution(n, w, num) {
	let answer = 1;
	const gr = Math.ceil(n / w);
	const arr = [];

	for (let i = 0; i < gr; i++) {
		const t = [];

		for (let j = 0; j < w; j++) {
			const b = j + i * w + 1;
			t.push(b <= n ? b : 0);
		}

		if (i % 2 !== 0) t.reverse();

		arr.unshift(t);
	}

	let finded = -1;
	for (let r = gr - 1; r >= 0; r--) {
		for (let c = 0; c < w; c++) {
			if (finded < 0 && arr[r][c] === num) finded = c;
			else if (finded >= 0 && finded === c && arr[r][c] > 0) answer++;
		}
	}

	return answer;
}

console.time('걸린 시간');
const log = solution(22, 6, 8);
// const log = solution(13, 3, 6);
console.timeEnd('걸린 시간');
console.log(JSON.stringify(log));
