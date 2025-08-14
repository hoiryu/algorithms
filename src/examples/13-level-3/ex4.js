/**
 * 재현이는 주변을 살펴보던 중 체스판과 말을 이용해서 새로운 게임을 만들기로 했다.
 * 새로운 게임은 크기가 N×N인 체스판에서 진행되고, 사용하는 말의 개수는 K개이다.
 * 말은 원판모양이고, 하나의 말 위에 다른 말을 올릴 수 있다.
 * 체스판의 각 칸은 흰색, 빨간색, 파란색 중 하나로 색칠되어있다.
 *
 * 게임은 체스판 위에 말 K개를 놓고 시작한다. 말은 1번부터 K번까지 번호가 매겨져 있고, 이동 방향도 미리 정해져 있다.
 * 이동 방향은 위, 아래, 왼쪽, 오른쪽 4가지 중 하나이다.
 *
 * 턴 한 번은 1번 말부터 K번 말까지 순서대로 이동시키는 것이다. 한 말이 이동할 때 위에 올려져 있는 말도 함께 이동한다.
 * 말의 이동 방향에 있는 칸에 따라서 말의 이동이 다르며 아래와 같다. 턴이 진행되던 중에 말이 4개 이상 쌓이는 순간 게임이 종료된다.
 *
 * 1. 1번 말이 이동하려는 칸이
 *     1) 흰색인 경우에는 그 칸으로 이동한다. 이동하려는 칸에 말이 이미 있는 경우에는 가장 위에 1번 말을 올려놓는다.
 *          - 1번 말의 위에 다른 말이 있는 경우에는 1번 말과 위에 있는 모든 말이 이동한다.
 *          - 예를 들어, 1, 2, 3로 쌓여있고, 이동하려는 칸에 4, 5가 있는 경우에는 1번 말이 이동한 후에는 4, 5, 1, 2, 3가 된다.
 *     2) 빨간색인 경우에는 이동한 후에 1번 말과 그 위에 있는 모든 말의 쌓여있는 순서를 반대로 바꾼다.
 *          - 1, 2, 3 가 이동하고, 이동하려는 칸에 말이 없는 경우에는 3, 2, 1가 된다.
 *          - 1, 4, 6, 7가 이동하고, 이동하려는 칸에 말이 5, 3, 2로 있는 경우에는 5, 3, 2, 7, 6, 4, 1가 된다.
 *     3) 파란색인 경우에는 1번 말의 이동 방향을 반대로 하고 한 칸 이동한다. 방향을 반대로 바꾼 후에 이동하려는 칸이 파란색인 경우에는 이동하지 않고 가만히 있는다.
 *     4) 체스판을 벗어나는 경우에는 파란색과 같은 경우이다.
 *
 * 다음은 크기가 4×4인 체스판 위에 말이 4개 있는 경우이다.
 *
 * 체스판의 크기와 말의 위치, 이동 방향이 모두 주어졌을 때,
 * 게임이 종료되는 턴의 번호를 반환하시오.
 *
 * 그 값이 1,000보다 크거나 절대로 게임이 종료되지 않는 경우에는 -1을 반환한다.
 *
 * 입력
 * 각 정수는 칸의 색을 의미한다. 0은 흰색, 1은 빨간색, 2는 파란색이다.
 * 말의 개수와 체스판의 정보, 현재 말의 위치와 방향을 주어진다.
 * 말의 정보는 세 개의 정수로 이루어져 있고,
 * 순서대로 행, 열의 인덱스, 이동 방향이다.
 * 행과 열의 번호는 0부터 시작하고, 이동 방향은 0, 1, 2, 3 이고
 * 0부터 순서대로 →, ←, ↑, ↓의 의미를 갖는다.
 *
 * ▣ 입력예제 1
 * 4,
 * [
 *  [0, 0, 0, 0],
 *  [0, 0, 0, 0],
 *  [0, 0, 0, 0],
 *  [0, 0, 0, 0]
 * ],
 * [
 *  [0, 0, 0],
 *  [0, 1, 0],
 *  [0, 2, 0],
 *  [2, 2, 2]
 * ]
 * ▣ 출력예제 1
 * 2
 *
 * ▣ 입력예제 2
 * 4,
 * [
 *  [0, 0, 0, 0],
 *  [0, 0, 0, 0],
 *  [0, 0, 0, 0],
 *  [0, 0, 0, 0]
 * ],
 * [
 *  [0, 0, 0],
 *  [0, 1, 0],
 *  [0, 2, 0],
 *  [2, 2, 2]
 * ]
 * ▣ 출력예제 2
 * 9
 *
 * ▣ 입력예제 3
 * 4,
 * [
 *  [0, 0, 0, 0],
 *  [0, 0, 0, 0],
 *  [0, 0, 0, 0],
 *  [0, 0, 0, 0]
 * ],
 * [
 *  [0, 1, 0],
 *  [0, 1, 1],
 *  [0, 1, 0],
 *  [2, 1, 2]
 * ]
 * ▣ 출력예제 3
 * 3
 */
function gameStart(k, chess, horses) {
	const n = chess.length;
	const horseMap = Array.from({ length: n }, () => Array.from({ length: n }, () => Array()));
	let turnCount = 1;
	const dr = [0, 0, -1, 1];
	const dc = [1, -1, 0, 0];

	for (let i = 0; i < k; i++) {
		const r = horses[i][0];
		const c = horses[i][1];
		horseMap[r][c].push(i);
	}

	while (turnCount <= 20) {
		for (let i = 0; i < k; i++) {
			const r = horses[i][0];
			const c = horses[i][1];
			const d = horses[i][2];
			let nr = r + dr[d];
			let nc = c + dc[d];

			if (!(nr >= 0 && nr < n) || !(nc >= 0 && nc < n) || chess[nr][nc] === 2) {
				const nd = d % 2 === 0 ? d + 1 : d - 1;
				nr = r + dr[nd];
				nc = c + dc[nd];
				horses[i][2] = nd;

				if (!(nr >= 0 && nr < n) || !(nc >= 0 && nc < n) || chess[nr][nc] === 2) continue;
			}

			let beforeMovingStack = [];
			const currentStack = horseMap[r][c];

			for (let j = 0; j < currentStack.length; j++) {
				const stack = currentStack[j];

				if (i === stack) {
					beforeMovingStack = currentStack.slice(j);
					horseMap[r][c] = currentStack.slice(0, j);
					break;
				}
			}

			if (chess[nr][nc] === 1) beforeMovingStack.reverse();

			for (let stack of beforeMovingStack) {
				horseMap[nr][nc].push(stack);
				horses[stack][0] = nr;
				horses[stack][1] = nc;
			}

			if (horseMap[nr][nc].length >= 4) return turnCount;
		}

		turnCount++;
	}

	return -1;
}

export default function solution(k, chess, horses) {
	let answer = gameStart(k, chess, horses);

	return answer;
}
