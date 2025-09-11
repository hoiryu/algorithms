/**
 * Greedy + Group
 * 광물 캐기
 * https://school.programmers.co.kr/learn/courses/30/lessons/172927
 *
 * ▣ 입력예제 1
 * [1, 3, 2],
 * ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]
 * ▣ 출력예제 1
 * 12
 *
 * ▣ 입력예제 2
 * [0, 1, 1],
 * ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]
 * ▣ 출력예제 2
 * 50
 */
export default function solution(picks, minerals) {
	let answer = 0;
	const max = (picks[0] + picks[1] + picks[2]) * 5;
	const arr = minerals.slice(0, max); // 캘 수 있는 최대
	const groups = [];

	for (let i = 0; i < arr.length; i += 5) {
		let diamond = 0,
			iron = 0,
			stone = 0;

		for (let j = i; j < i + 5 && j < arr.length; j++) {
			const mineral = arr[j];

			if (mineral === 'diamond') diamond++;
			else if (mineral === 'iron') iron++;
			else stone++;
		}

		groups.push({
			diamond,
			iron,
			stone,
			fatigue: 25 * diamond + 5 * iron + stone,
		});
	}

	groups.sort((a, b) => b.fatigue - a.fatigue);

	for (const { diamond, iron, stone } of groups) {
		if (picks[0]) {
			answer += diamond + iron + stone;
			picks[0]--;
		} else if (picks[1]) {
			answer += 5 * diamond + iron + stone;
			picks[1]--;
		} else if (picks[2]) {
			answer += 25 * diamond + 5 * iron + stone;
			picks[2]--;
		} else break;
	}

	return answer;
}
