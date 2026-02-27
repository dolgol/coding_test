function solution(s) {
    s = s.toLowerCase();
    
    let arr = s.split(" ");
    arr = arr.map((item) => {
        return item[0]?.toUpperCase() ? item[0].toUpperCase() + item.slice(1) : "";
    });
    
    return arr.join(" ");
}