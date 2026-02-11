function solution(a, b) {
    let answer = 0;
    if (a === b) {
        return a;
    } else {
        let n = Math.abs(a - b);
        answer = (a + b) * (n + 1) / 2
    }
    return answer;
}