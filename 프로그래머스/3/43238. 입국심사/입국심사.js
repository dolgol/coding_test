function solution(n, times) {
    let answer = 0;
    let min = 1, max = Math.max(...times) * n;
    
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let count = 0;
        
        for (let time of times) {
            count += Math.floor(mid / time);
        }
        
        if (count >= n) {
            answer = mid;
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    
    return answer;
}