function solution(n, lost, reserve) {
    let attend = new Array(n + 1).fill(false);
    
    reserve = reserve.sort((a, b) => a - b);
    lost = lost.sort((a, b) => a - b);
    
    const originalReserve = [...reserve];
    reserve = reserve.filter((item) => !lost.includes(item));
    lost = lost.filter((item) => !originalReserve.includes(item));
    
    for (let i = 1; i < attend.length; i++) {
        if (lost.includes(i) && reserve.includes(i)) {
            attend[i] = true;
        }
        if (!lost.includes(i) && !reserve.includes(i)) {
            attend[i] = true;
        } 
        if (reserve.includes(i)) {
            attend[i] = true;
        }
    }
    
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i] - 1)) {
            attend[lost[i]] = true;
            let idx = reserve.findIndex((el) => el === lost[i] - 1);
            reserve.splice(idx, 1);
        } else if (reserve.includes(lost[i] + 1)) {
            attend[lost[i]] = true;
            let idx = reserve.findIndex((el) => el === lost[i] + 1);
            reserve.splice(idx, 1);
        }
    }
    
    attend = attend.filter((item) => item);
    
    return attend.length;
}