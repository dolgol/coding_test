function solution(n) {
    let answer = 0;
    if (n % 2 === 0) { // 짝수 - n 이하 짝수 제곱 합
        while (n > 0) {
            answer += n * n;
            n -= 2;
        }
    } else { // 홀수 - n 이하 홀수 합
        while (n > 0) {
            answer += n;
            n -= 2;
        }
    }
    return answer;
}