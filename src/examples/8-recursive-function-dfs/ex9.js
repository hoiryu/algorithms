/**
 * 동전교환
 * 다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환
 * 해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.
 * ▣ 입력설명
 * 첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종
 * 류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
 * 각 동전의 종류는 100원을 넘지 않는다.
 * ▣ 출력설명
 * 첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.
 * ▣ 입력예제 1
 * 3, [1, 2, 5], 15
 * ▣ 출력예제 1
 * 3
 * 설명 : 5 5 5 동전 3개로 거슬러 줄 수 있다.
 */

const solution = (n, arr, m) => {
	let answer = Number.MAX_SAFE_INTEGER;
	const depth = n;
	const stack = [{ sum: 0, count: 0 }];
	const visited = new Set();

	while (stack.length) {
		const { sum, count } = stack.pop();
		const key = `${sum}-${count}`;

		if (visited.has(key)) continue;
		else visited.add(key);

		if (sum > m || count > answer) continue;

		if (sum === m) {
			answer = Math.min(answer, count);
			continue;
		}

		for (let i = 0; i < depth; i++) {
			stack.push({ sum: sum + arr[i], count: count + 1 });
		}
	}

	return answer;
};

console.time('걸린 시간');
const log = solution(3, [1, 2, 5], 15);
console.timeEnd('걸린 시간');
console.log(JSON.stringify(log));
