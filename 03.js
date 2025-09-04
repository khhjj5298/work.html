//기존방식
//  function Hello(n, name) {
//     if (n =='1')  alert(name + "님 안녕하세요");
//     else alert(" 반갑습니다");
//     console.log(콘솔출력입니다);
//  }

const Hello = (n, name) => {
    //==, ===을 비교
    if (n ==1)  alert(name + "님 안녕하세요");
    else alert('반갑습니다');
    console.log('콘솔출력입니다');
}

const Checkvar = () => {
   
    //var x;
    let x;
    x = 10;
    //x = 'test' ;
    const y = 20;
    x= 'test';
    console.log(`x = ${typeof(x)}, y = ${typeof(y)}`)
    console.log(`문자열 ${1}은 문자인가요?${isNaN(x)?'예':'아니오'}`);
    console.log(`문자열 ${2}은 문자인가요?${isNaN(y)?'예':'아니오'}`);

}


