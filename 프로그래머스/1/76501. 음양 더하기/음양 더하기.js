function solution(absolutes, signs) {
    let answer = 0;
    
    signs = signs.map((item) => item ? 1 : -1);
    absolutes.forEach((item, index) => {
        answer += item * signs[index];
    })
    
    return answer;
}