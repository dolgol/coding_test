function solution(n) {
    let answer = n + 1;
    let isLoop = true;
    
    let cnt_n = n.toString(2).split(1).length - 1;
    let cnt_answer = null;
    
    while (answer <= 1000000) {
        cnt_answer = answer.toString(2).split(1).length - 1;
        
        if (cnt_answer === cnt_n) {
            return answer;
        } else {
            answer++;
        }
    }
    
    return answer;
}