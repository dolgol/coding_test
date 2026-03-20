function solution(array, height) {
    let answer = 0;
    answer = array.reduce((accumulator, currentValue) => height < currentValue ? accumulator + 1 : accumulator, 0);
    return answer;
}