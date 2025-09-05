//회문
const check1 = (e) => {
    //0. 버튼의 submit 기능 막기
    // e.preventDefault();
    //1. 사용자가입력한 내용 가져오기

    const inputV = document.getElementById('txt1').value;
    //2. 사용자가 입력한 문자열을 뒤집기

    console.log(typeof (inputV));
    console.log(inputV.length);
    console.log(inputV[0]);

    //입력한 문자열에서 공백 제거.문자열 크기는 inputV임
    let inputVt = inputV.replaceAll(' ', '');
    // for(let i =inputVt.length -1 ; i>= 0; i--){
    //     console.log(inputVt[i]);
    //     resertV += inputVt[i];
    //}
    resertV = inputVt.split('').reverse().join('');
    console.log(resertV)
    //3. 사용자가 입력한 문자열과 뒤집은 문자열이 같은 지 비교
    ///3-1.결과를 input 요소에 출력.VALUE를 사용
    //

    if (inputVt == resertV) {
        document.getElementById('txt2').value = `${inputV}는 회문입니다.`;
    }
    else
        document.getElementById('txt2').value = `${inputV}는 회문이 아닙니다.`;

    //3-2.결과를 div 요소에 출력.일반div 요소는 .innerHTML로 받음
    document.getElementById('msg').innerHTML = `<span> "${inputV}"</span>는 ${inputV == resertV ? '회문입니다.' : '회문이 아닙니다.'}`;
}


const check2 = () => {
    //. 사용자가 입력한  문자열 가져오기

    const inputV = document.getElementById('txt1').value;

    //2. 문자열에서 숫자인식해서 더하기.문자는 정수로 
    let sum = 0;
    //  for(let i =0; i < inputV.length; i++){
    //     if(!isNaN(inputV[i])) {
    //         sum += parseInt(inputV[i]);
    //     }
    //  }  
    //파이썬의 for in >> for let of임
    for (let ch of inputV) {
        if (!isNaN(ch)) {
            sum += parseInt(ch);
        }
    }
    //3. 합계 출력
    document.getElementById('txt2').value = sum;
    document.getElementById('msg').innerHTML = `합계 = <span>${sum}</span>`;

//취소처리; input요소는 value 사용

}
const check3 = () => {
    //1.입력요소 초기화
    document.getElementById('txt1').value = '';
    document.getElementById('txt2').value = '';
    //2.메시지 초기화
    document.getElementById('msg').innerHTML = '';
    //3.입력요소에 포커스 주기
    document.getElementById('txt1').focus();
}
