function pncheck(){
    const exp= /^\d{3}-\d{4}-\d{4}$/;
    const phone = document.getElementById('pn').value;
    const result = document.getElementById('phone-check-result');

    if(phone.match(exp)){
        result.innerHTML ="유효한 형식입니다."
        result.style.color="green";
    }
    else{
        result.innerHTML="유효하지 않은 형식입니다"
        result.style.color="red"
    }

}

function pw1check(){
    pw1ch=document.getElementById("pw1").value;
    pw1out=document.getElementById("pw1output");
    pwlength=pw1ch.length;

  
    const exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;

    if(pwlength==0){
        pw1out.innerHTML="필수 입력값입니다.";
        pw1out.style.color="red";
    }
    else if (pw1ch.match(exp)){
        pw1out.innerHTML="유효한 형식입니다.";
        pw1out.style.color="green"
    }
    else{
        pw1out.innerHTML="8~16자 영문 대 소문자, 숫자로 입력하세요";
        pw1out.style.color="red";
    }

}

function pw2check(){
    pw1ch=document.getElementById("pw1").value;
    pw2ch=document.getElementById("pw2").value;
    pw2out=document.getElementById("pw2output");            

    if(pw1ch==pw2ch){
        pw2out.innerHTML="비밀번호가 일치합니다.";
        pw2out.style.color="green";
    }

    else{
        pw2out.innerHTML="비밀번호가 일치하지않습니다.";
        pw2out.style.color="red";
    }


}




function idCheck(){   
 
 
    const exp = /^(?=.*[a-z])(?=.*\d)[a-z\d-_]{5,20}$/; 

    const id=document.getElementById('id').value;
    const ch=document.getElementById('idoutput');

    if(id.length==0){
        ch.innerHTML="필수 입력값입니다.";
        ch.style.color="red";
    }
    else if(id.match(exp)){
        console.log("유효한 형식입니다.")
        ch.innerHTML="유효한 형식입니다.";
        ch.style.color="green"
    }
    else{
        console.log("유효하지 않은 형식입니다.")
        ch.innerHTML="유효하지 않은 형식입니다.";
        ch.style.color="red"
    }
}