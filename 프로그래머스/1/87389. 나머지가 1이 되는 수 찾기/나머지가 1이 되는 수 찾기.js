function solution(n) {
    let loop = true;
    let answer = 1;
    while (loop) {
        if (n % answer === 1) {
            loop = false
        } else {
            answer++;
        }
    }
    return answer;
}