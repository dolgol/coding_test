function solution(sizes) {
	let w = 0, h = 0;

    sizes = sizes.map((item) => item.sort((a, b) => b - a));
    sizes.map((item) => {
        w = Math.max(w, item[0]);
        h = Math.max(h, item[1]);
    })
    
	return w * h;
}