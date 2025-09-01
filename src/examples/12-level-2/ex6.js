/**
 * [PCCP 기출문제] 3번 / 충돌위험 찾기
 * 어떤 물류 센터는 로봇을 이용한 자동 운송 시스템을 운영합니다. 운송 시스템이 작동하는 규칙은 다음과 같습니다.
 *
 * 물류 센터에는 (r, c)와 같이 2차원 좌표로 나타낼 수 있는 n개의 포인트가 존재합니다.
 * 각 포인트는 1~n까지의 서로 다른 번호를 가집니다.
 * 로봇마다 정해진 운송 경로가 존재합니다. 운송 경로는 m개의 포인트로 구성되고
 * 로봇은 첫 포인트에서 시작해 할당된 포인트를 순서대로 방문합니다.
 * 운송 시스템에 사용되는 로봇은 x대이고, 모든 로봇은 0초에 동시에 출발합니다.
 * 로봇은 1초마다 r 좌표와 c 좌표 중 하나가 1만큼 감소하거나 증가한 좌표로 이동할 수 있습니다.
 * 다음 포인트로 이동할 때는 항상 최단 경로로 이동하며
 * 최단 경로가 여러 가지일 경우, r 좌표가 변하는 이동을 c 좌표가 변하는 이동보다 먼저 합니다.
 * 마지막 포인트에 도착한 로봇은 운송을 마치고 물류 센터를 벗어납니다.
 * 로봇이 물류 센터를 벗어나는 경로는 고려하지 않습니다.
 * 이동 중 같은 좌표에 로봇이 2대 이상 모인다면 충돌할 가능성이 있는 위험 상황으로 판단합니다.
 * 관리자인 당신은 현재 설정대로 로봇이 움직일 때 위험한 상황이 총 몇 번 일어나는지 알고 싶습니다.
 * 만약 어떤 시간에 여러 좌표에서 위험 상황이 발생한다면 그 횟수를 모두 더합니다.
 *
 * 운송 포인트 n개의 좌표를 담은 2차원 정수 배열 points와
 * 로봇 x대의 운송 경로를 담은 2차원 정수 배열 routes가 매개변수로 주어집니다.
 * 이때 모든 로봇이 운송을 마칠 때까지 발생하는 위험한 상황의 횟수를 return 하도록 solution 함수를 완성해 주세요.
 *
 * 제한사항
 * 2 ≤ points의 길이 = n ≤ 100
 * points[i]는 i + 1번 포인트의 [r 좌표, c 좌표]를 나타내는 길이가 2인 정수 배열입니다.
 * 1 ≤ r ≤ 100
 * 1 ≤ c ≤ 100
 * 같은 좌표에 여러 포인트가 존재하는 입력은 주어지지 않습니다.
 * 2 ≤ routes의 길이 = 로봇의 수 = x ≤ 100
 * 2 ≤ routes[i]의 길이 = m ≤ 100
 * routes[i]는 i + 1번째 로봇의 운송경로를 나타냅니다. routes[i]의 길이는 모두 같습니다.
 * routes[i][j]는 i + 1번째 로봇이 j + 1번째로 방문하는 포인트 번호를 나타냅니다.
 * 같은 포인트를 연속으로 방문하는 입력은 주어지지 않습니다.
 * 1 ≤ routes[i][j] ≤ n
 *
 * ▣ 입력예제 1
 * [[3, 2], [6, 4], [4, 7], [1, 4]],
 * [[4, 2], [1, 3], [2, 4]],
 * ▣ 출력예제 1
 * 1
 *
 * ▣ 입력예제 2
 * [[3, 2], [6, 4], [4, 7], [1, 4]],
 * [[4, 2], [1, 3], [4, 2], [4, 3]],
 * ▣ 출력예제 2
 * 9
 *
 * ▣ 입력예제 3
 * [[2, 2], [2, 3], [2, 7], [6, 6], [5, 2]],
 * [[2, 3, 4, 5], [1, 3, 4, 5]],
 * ▣ 출력예제 3
 * 0
 */
function getPath(i, sr, sc, er, ec, paths) {
	while (sr !== er || sc !== ec) {
		if (sr > er) sr -= 1;
		else if (sr < er) sr += 1;
		else if (sc > ec) sc -= 1;
		else if (sc < ec) sc += 1;
		paths[i].push([sr, sc]);
	}
}

export default function solution(points, routes) {
	let answer = 0;
	const n = points.length; // 좌표 개수
	const x = routes.length; // 로봇 개수
	const m = routes[1].length; // 운송 경로
	let maxTime = Number.MIN_SAFE_INTEGER;
	const paths = routes.reduce((acc, cur, idx) => {
		if (!cur.length) return acc;
		acc[idx] = [points[routes[idx][0] - 1]];
		return acc;
	}, {});

	for (let i = 0; i < x; i++) {
		for (let j = 1; j < m; j++) {
			const [sr, sc] = points[routes[i][j - 1] - 1];
			const [er, ec] = points[routes[i][j] - 1];
			getPath(i, sr, sc, er, ec, paths);
		}
	}

	for (const [k, v] of Object.entries(paths)) maxTime = Math.max(maxTime, v.length);

	for (let i = 0; i < maxTime; i++) {
		const hash = new Map();

		for (let j = 0; j < x; j++) {
			if (paths[j].length <= i) continue;
			const key = paths[j][i].join('-');
			if (hash.has(key)) hash.set(key, hash.get(key) + 1);
			else hash.set(key, 1);
		}

		for (const [k, v] of hash) if (v > 1) answer++;
	}

	return answer;
}
