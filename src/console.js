export const test = (f, cases) => {
	Array.from({ length: 5 }, (_, idx) => console.log(`${idx} =======================================`));

	cases.forEach(({ input, expected }, i) => {
		const args = Array.isArray(input) ? input : [input];

		console.time(`[${i + 1}] 걸린 시간`);
		const result = f(...args);
		console.timeEnd(`[${i + 1}] 걸린 시간`);

		const passed = JSON.stringify(result) === JSON.stringify(expected);

		console.log(`[${i + 1}] ${passed ? '✅ PASS' : '❌ FAIL'}`);

		if (!passed) {
			console.log(`Expected: ${JSON.stringify(expected)}`);
			console.log(`Received: ${JSON.stringify(result)}`);
		}
	});
};
