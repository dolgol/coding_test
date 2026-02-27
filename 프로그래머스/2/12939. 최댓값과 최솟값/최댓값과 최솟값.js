function solution(s) {
    let answer = '';
    
    let arr = s.split(' ');
    arr = arr.map((item) => Number(item));
    answer = Math.min(...arr) + ' ' + Math.max(...arr)
    
    return answer;
}