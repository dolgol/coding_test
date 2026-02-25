function solution(progresses, speeds) {
    let answer = [];
    
    let day = [];
    for (let i = 0; i < progresses.length; i++) {
        day[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    
    let index = 0;
    while (index < day.length) {
        let cnt = 1;
	let i = 0;
        for (i = index + 1; i < day.length; i++) {
            if (day[index] >= day[i]) {
                cnt++;
            } else {
                break;
            }
        }
	index = i;
        answer.push(cnt);
    }
    
    return answer;
}