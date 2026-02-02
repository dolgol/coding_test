function solution(a, b) {
    let n = String(a) + String(b);
    n = Number(n);
    let m = 2 * a * b;
    return n >= m ? n : m;
}