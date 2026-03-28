/**
 * 유연근무제
 * https://school.programmers.co.kr/learn/courses/30/lessons/388351
 *
 * ▣ 입력예제 1
 * [700, 800, 1100],
 * [[710, 2359, 1050, 700, 650, 631, 659],
 * 	[800, 801, 805, 800, 759, 810, 809],
 * 	[1105, 1001, 1002, 600, 1059, 1001, 1100]],
 * 5
 * ▣ 출력예제 1
 * 3
 *
 * ▣ 입력예제 2
 * [730, 855, 700, 720],
 * [[710, 700, 650, 735, 700, 931, 912],
 * 	[908, 901, 805, 815, 800, 831, 835],
 * 	[705, 701, 702, 705, 710, 710, 711],
 * 	[707, 731, 859, 913, 934, 931, 905]],
 * 1
 *
 * ▣ 출력예제 2
 * 2
 */
const timeToMinutes = t => Math.floor(t / 100) * 60 + (t % 100);

const solution = (schedules, timelogs, startday) => {
	let answer = 0;

	for (let i = 0; i < timelogs.length; i++) {
		let currentDay = startday;
		const schedule = timeToMinutes(schedules[i]) + 10;
		let pass = true;

		for (let j = 0; j < timelogs[0].length; j++) {
			if (currentDay < 6) {
				const currentSchedule = timeToMinutes(timelogs[i][j]);

				if (schedule < currentSchedule) {
					pass = false;
					break;
				}
			}

			currentDay = (currentDay % 7) + 1;
		}

		if (pass) answer++;
	}

	return answer;
};

console.time('걸린 시간');
const log = solution(
	[700, 800, 1100],
	[
		[710, 2359, 1050, 700, 650, 631, 659],
		[800, 801, 805, 800, 759, 810, 809],
		[1105, 1001, 1002, 600, 1059, 1001, 1100],
	],
	5,
);
// const log = solution(
// 	[730, 855, 700, 720],
// 	[
// 		[710, 700, 650, 735, 700, 931, 912],
// 		[908, 901, 805, 815, 800, 831, 835],
// 		[705, 701, 702, 705, 710, 710, 711],
// 		[707, 731, 859, 913, 934, 931, 905],
// 	],
// 	1,
// );
console.timeEnd('걸린 시간');
console.log(JSON.stringify(log));
