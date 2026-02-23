function solution(s){
    let temp = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            temp.push('(');
        } else {
            if (temp[temp.length - 1] === '(') {
                temp.pop();
            } else {
                return false;
            }
        }
    }
    
    if (temp.length === 0) {
        return true;
    } else {
        return false;
    }
}