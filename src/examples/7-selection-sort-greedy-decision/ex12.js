/**
 * 결정알고리즘
 * 마구간 정하기
 * N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며,
 * 마구간간에 좌표가 중복되는 일은 없습니다.
 * 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
 * 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을
 * 마구간에 배치하고 싶습니다.
 * C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대
 * 값을 출력하는 프로그램을 작성하세요.
 * ▣ 입력설명
 * 첫 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다.
 * 둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집니다.
 * ▣ 출력설명
 * 첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.
 * ▣ 입력예제 1
 * 5 3
 * 1 2 8 4 9
 * 1,4,9
 * ▣ 출력예제 1
 * 3
 */
function getCount(arr, midPoint) {
	let count = 1,
		p1 = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] - p1 >= midPoint) {
			p1 = arr[i];
			count++;
		}
	}

	return count;
}

export default function solution(n, c, arr) {
	let answer = 0,
		p1 = 1,
		p2 = arr.at(-1);
	arr.sort((a, b) => a - b);

	while (p1 <= p2) {
		let midPoint = Math.floor((p1 + p2) / 2);
		if (getCount(arr, midPoint) >= c) {
			answer = midPoint;
			p1 = midPoint + 1;
		} else {
			p2 = midPoint - 1;
		}
	}

	return answer;
}
