/**
 * 동영상 재생기
 * https://school.programmers.co.kr/learn/courses/30/lessons/340213
 */
const zeroPaddedFormat = t => (t < 10 ? `0${t}` : t);

const stringToSeconds = str => {
	const arr = str.split(':').map(str => Number(str));
	return arr[0] * 60 + arr[1];
};

const secondsToString = num => {
	const hours = Math.floor(num / 60);
	const minutes = num % 60;
	return `${zeroPaddedFormat(hours)}:${zeroPaddedFormat(minutes)}`;
};

const solution = (video_len, pos, op_start, op_end, commands) => {
	video_len = stringToSeconds(video_len);
	pos = stringToSeconds(pos);
	op_start = stringToSeconds(op_start);
	op_end = stringToSeconds(op_end);

	for (const command of commands) {
		if (pos >= op_start && pos < op_end) pos = op_end;

		pos += command === 'next' ? 10 : -10;

		if (pos > video_len) pos = video_len;
		else if (pos < 0) pos = 0;

		if (pos >= op_start && pos < op_end) pos = op_end;
	}

	return secondsToString(pos);
};

console.time('걸린 시간');
/**
 * "13:00"
 */
// const log = solution('34:33', '13:00', '00:55', '02:55', ['next', 'prev']);
/**
 * "00:05"
 */
const log = solution('30:00', '00:08', '00:00', '00:05', ['prev']);
/**
 * "06:55"
 */
// const log = solution('10:55', '00:05', '00:15', '06:55', ['prev', 'next', 'next']);
/**
 * "04:17"
 */
// const log = solution('07:22', '04:05', '00:15', '04:07', ['next']);
console.timeEnd('걸린 시간');
console.log(JSON.stringify(log));
