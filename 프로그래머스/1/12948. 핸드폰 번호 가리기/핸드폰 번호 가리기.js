function solution(phone_number) {
    let answer = '';
    answer = phone_number.slice(0, phone_number.length - 4).replaceAll(/\d/g, "*") + phone_number.slice(phone_number.length - 4)
    return answer;
}