function solution(s) {
    let s_length = s.length
    if (s_length % 2 === 0) {
        return s[(s_length / 2) - 1] + s[s_length / 2];
    } else {
        return s[parseInt(s_length / 2)];
    }
}