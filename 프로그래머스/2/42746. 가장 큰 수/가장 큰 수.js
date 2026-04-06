function solution(numbers) {
    numbers = numbers.sort((a, b) => {
        let firstA = "" + a + b;
        let firstB = "" + b + a;
        return Number(firstB) - Number(firstA);
    });

    // 배열 요소가 전부 다 0이면 '0' return
    let isAllZero = numbers.every((item) => item == 0);

    return isAllZero ? '0' : numbers.join('');
}