function solution(n) {
    let answer = 0;
    let start = 1;
    
    while (start < n) {
        let temp = 0;
        for (let i = start; i < n; i++) {
            temp += i;
            if (temp === n) {
                answer++;
                break;
            } else if (temp > n) {
                break;
            }
        }
        start++;
    }
    
    return answer + 1;
}