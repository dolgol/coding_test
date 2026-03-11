const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let idx = 0;

const T = parseInt(input[idx++]);
for (let t = 0; t < T; t++) {
  const [N, M] = input[idx++].split(' ').map(Number);
  const A = input[idx++].split(' ').map(Number);
  const B = input[idx++].split(' ').map(Number);

  const answer = solve(A, B, N, M);
  console.log(answer);
}

function solve(A, B, N, M) {
  B.sort((a, b) => a - b);

  let min = null, max = null, mid = null, answer = null;

  // A > B
  for (let i = 0; i < N; i++) {
    min = 0;
    max = M - 1;

    while (min <= max) {
      mid = parseInt((max + min) / 2);
      if (A[i] > B[mid]) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    answer += min;
  }

  return answer;
}
