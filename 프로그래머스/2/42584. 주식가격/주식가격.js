function solution(prices) {
    let answer = [];
    for (let i = 0; i < prices.length - 1; i++) {
        answer.push(prices.length - 1 - i);
        for (let j = i + 1; j < prices.length - 1; j++) {
            if (prices[i] > prices[j]) {
                answer.pop();
                answer.push(j - i);
                break;
            }
        }
    }
    answer.push(0);
    return answer;
}