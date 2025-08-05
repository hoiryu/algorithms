/**
 * 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
 * S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
 * 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
 * ▣ 입력설명
 * 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
 * S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
 * ▣ 출력설명
 * S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
 * ▣ 입력예제 1
 * bacaAacba
 * abc
 * ▣ 출력예제 1
 * 3
 * 출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
 */
function hasSameEntries(a, b) {
	if (a.size !== b.size) return false;

	for (let [k, v] of a) if (!b.has(k) || b.get(k) !== v) return false;

	return true;
}

export default function solution(s, t) {
	let answer = 0,
		p1 = 0,
		hash1 = new Map(),
		hash2 = new Map();

	for (let i = 0; i < t.length; i++) {
		if (hash1.has(t[i])) hash1.set(t[i], hash1.get(t[i]) + 1);
		else hash1.set(t[i], 1);

		if (i > t.length - 2) continue;

		if (hash2.has(s[i])) hash2.set(s[i], hash2.get(s[i]) + 1);
		else hash2.set(s[i], 1);
	}

	for (let i = t.length - 1; i < s.length; i++) {
		if (hash2.has(s[i])) hash2.set(s[i], hash2.get(s[i]) + 1);
		else hash2.set(s[i], 1);

		if (hasSameEntries(hash1, hash2)) answer++;

		hash2.set(s[p1], hash2.get(s[p1]) - 1);

		if (hash2.get(s[p1]) === 0) hash2.delete(s[p1]);

		p1++;
	}

	return answer;
}
