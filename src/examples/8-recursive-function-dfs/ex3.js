/**
 * DFS (Depth-First-Search)
 * 이진트리 순회(깊이우선탐색)
 * 아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.
 * 	  1
 * 	 2 3
 * 4 5 6 7
 * 전위순회 출력 : 1 2 4 5 3 6 7
 * 중위순회 출력 : 4 2 5 1 6 3 7
 * 후위순회 출력 : 4 5 2 6 7 3 1
 */
function dfs(a, n) {
	if (n > 7) return;

	// a[0].push(n);
	dfs(a, n * 2);
	// a[1].push(n);
	dfs(a, n * 2 + 1);
	a[2].push(n);
}

export default function solution(n) {
	let answer = [[], [], []];
	dfs(answer, n);
	return answer;
}
