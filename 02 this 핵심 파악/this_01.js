{
    const someone = {
        name : '코드종'
        ,whoAmI : function(){console.log(this)}
    };
    
    someone.whoAmI(); //{name: '코드종', whoAmI: ƒ}
    //여기서 this는 someone
    
    const call_who_am_i = someone.whoAmI;
    call_who_am_i(); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    //여기선 this가 window
    //window.name은 ''기 때문 ㅋ
    
    //호출하는 방법에 따라 this는 달라진다고 했지?
    
    //call_who_am_i는 전역객체로써 윈도우가 호출한거랑 같아지기 때문 -_-    

//4:50
    const btn_1 = document.getElementById('btn_1');
    btn_1.addEventListener('click',someone.whoAmI); 
    //<button id="btn_1">버튼</button>
    //여기서 this는 button이 되었음
    //결국 뭐냐 여기시 someone의 함수"만"넘긴거랑 똑같은거거든
    //someone이 호출한게 아니야. 버튼이 호출한거고 someone이 한건 그 함수를 넘긴거밖에 없음


    // 💖 결국 호출한놈 === THIS

    //호출한놈에 상관없이 해볼까.
    const binded = call_who_am_i.bind(someone);
    binded(); //{name: '코드종', whoAmI: ƒ}

    const btn_2 = document.getElementById('btn_2');
    btn_2.addEventListener('click',binded); //{name: '코드종', whoAmI: ƒ}
}

{
    //call,apply는 호출할 당시에만 묶어주고
        // apply는 call과 똑같지만 this 이후 받는 param을 array로 받을뿐
    //bind는 영구히 묶어부림
}