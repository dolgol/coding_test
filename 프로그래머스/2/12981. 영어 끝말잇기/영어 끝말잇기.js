function solution(n, words) {
    let answer = [0, 0];
    
    // 1. 중복 단어 체크 2. 앞에 끝글자에 맞춰서 했는가
    for (let i = 1; i < words.length; i++) {
        let front = words[i - 1];
        let now = words[i];
        
        let isDuplicate = words.slice(0, i).some((item) => item === now);
        let isWrong = now[0] !== front[front.length - 1];
        
        if (isDuplicate || isWrong) {
            answer = [(i + 1) % n || n, Math.ceil((i + 1) / n)];
            return answer;
        }
    }

    return answer;
}
