import solution from './examples/10-dynamic-programming/ex4.js';

console.time('걸린 시간');
console.log(solution(3, [1, 2, 5], 15));
console.timeEnd('걸린 시간');

/**
 * ⊂ (Subset) 부분 집합: n 개 중 선택할 수 있는 모든 경우의 수를 ⊂ 표현
 * ex) n = 2
 * 1 2
 * 1
 * 2
 * 공집합
 *
 * ! (Factorial) 계승: n 개를 일렬로 늘여놓는 경우의 수를 n! 로 표현
 * ex) 3!
 * 3 * 2 * 1
 *
 * P (Permutation) 순열: 순서를 고려하여 n 개 중 r 개를 늘어놓는 경우를 nPr 로 표현
 * ex) n = 3, r = 2
 * 1 2
 * 1 3
 * 2 1
 * 2 3
 * 3 1
 * 3 2
 *
 * C (Combination) 조합: 순서를 고려하지 않고 n 개 중 r 개를 늘어놓는 경우를 nCr 로 표현
 * ex) n = 3, r = 2
 * 3C2
 * 1 2
 * 1 3
 * 2 3
 *
 * DFS (Depth-First-Search): 깊이 우선 탐색
 * 깊은 Node 부터 탐색
 * BFS (Breadth-First-Search): 넓이 우선 탐색
 * 최단 거리 탐색
 */
