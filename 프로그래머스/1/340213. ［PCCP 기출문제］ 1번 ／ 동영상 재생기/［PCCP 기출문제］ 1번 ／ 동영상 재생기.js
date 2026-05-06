function solution(video_len, pos, op_start, op_end, commands) {
	let video_sec = getSec(video_len);
	let pos_sec = getSec(pos);
	let op_start_sec = getSec(op_start);
	let op_end_sec = getSec(op_end);

	let now = pos_sec;
	if (pos_sec >= op_start_sec && pos_sec < op_end_sec) {
		now = op_end_sec;
	}

	for (let i = 0; i < commands.length; i++) {
		switch(commands[i]) {
			case "next":
				now = Math.min(now + 10, video_sec);
				break;
			case "prev":
				now = Math.max(now - 10, 0);
				break;
			default:
				break;
		}

		if (now >= op_start_sec && now < op_end_sec) {
			now = op_end_sec;
		}
	}

	let m = parseInt(now / 60);
	let s = now % 60;

	return String(m).padStart(2, '0') + ":" + String(s).padStart(2, '0');
}

function getSec(str) {
	let arr = str.split(":");
	return Number(arr[0]) * 60 + Number(arr[1]);
}
