function solution(brown, yellow) {
    let w = 0, h = 0; // w >= h
    let isEnd = false;

    // brown + yellow = w * h;
    for (w = 3; w <= 2000002; w++) {
        h = (brown + yellow) / w;
        if (!(Number.isInteger(h)) || h > w) {
            continue;
        }
        if (brown === 2 * (w + h - 4) + 4) {
            break;
        }
    }
    
    return [w, h];
}