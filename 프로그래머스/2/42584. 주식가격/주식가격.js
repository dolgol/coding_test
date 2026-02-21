function solution(prices) {
    let answer = [];
    for (let i = 0; i < prices.length - 1; i++) {
        let isEnd = false;
         // i번보다 큰 배열 prices 요소에서 i보다 작은 수 index 찾아서 빼고 answer 배열에 넣기
        for (let j = i + 1; j < prices.length - 1; j++) {
            if (prices[i] > prices[j]) {
                answer.push(j - i);
                isEnd = true;
                break;
            }
        }
        if (!isEnd) {
            answer.push(prices.length - 1 - i);
        }
        // indexOf()
        // -1이면 prices.length - 1 - i
    }
    answer.push(0);
    return answer;
}