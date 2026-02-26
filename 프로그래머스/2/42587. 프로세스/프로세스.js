function solution(priorities, location) {
	let arr = [];
	let cnt = 0;
	
	for (let i = 0; i < priorities.length; i++) {
		arr[i] = [i, priorities[i]];
	}

	while (arr.length > 0) {
		let result = arr.some((item, index) => item[1] > arr[0][1]);
		if (result) { 
			arr.push(arr[0]);
			arr.shift();
		} else {
			cnt++;
			if (arr[0][0] === location) {
				return cnt;
			} else {
				arr.shift();
			}
		}
	}

	return cnt;
}