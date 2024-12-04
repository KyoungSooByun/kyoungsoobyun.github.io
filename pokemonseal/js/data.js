let pokemon = [
    {name : "피카츄", number : "0025_1"},
    {name : "피카츄", number : "0025_2"},
    {name : "알로라 라이츄", number : "0026"},
    {name : "가라르 나옹", number : "0052"},
    {name : "팔데아 켄타로스(컴뱃종)", number : "0128"},
    {name : "치코리타", number : "0152"},
    {name : "베이리프", number : "0153"},
    {name : "메가니움", number : "0154"},
    {name : "브케인", number : "0155"},
    {name : "마그케인", number : "0156"},
    {name : "블레이범", number : "0157"},
    {name : "리아코", number : "0158"},
    {name : "엘리게이", number : "0159"},
    {name : "장크로다일", number : "0160"},
    {name : "꼬리선", number : "0161"},
    {name : "다꼬리", number : "0162"},
    {name : "부우부", number : "0163"},
    {name : "야부엉", number : "0164"},
    {name : "크로뱃", number : "0169"},
    {name : "피츄", number : "0172"},
    {name : "삐", number : "0173"},
    {name : "푸푸린", number : "0174"},
    {name : "토게피", number : "0175"},
    {name : "토게틱", number : "0176"},
    {name : "마릴", number : "0183"},
    {name : "마릴", number : "0183"},
    {name : "마릴리", number : "0184"},
    {name : "에이팜", number : "0190"},
    {name : "팔데아 우파", number : "0194"},
    {name : "에브이", number : "0196"},
    {name : "블래키", number : "0197"},
    {name : "야도킹", number : "0199"},
    {name : "마자용", number : "0202"},
    {name : "강철톤", number : "0208"},
    {name : "핫삼", number : "0212"},
    {name : "헤라크로스", number : "0214"},
    {name : "깜지곰", number : "0216"},
    {name : "링곰", number : "0217"},
    {name : "무장조", number : "0227"},
    {name : "델빌", number : "0228"},
    {name : "헬가", number : "0229"},
    {name : "코코리", number : "0231"},
    {name : "코리갑", number : "0232"},
    {name : "애버라스", number : "0246"},
    {name : "데기라스", number : "0247"},
    {name : "마기라스", number : "0248"},
    {name : "연꽃몬", number : "0270"},
    {name : "로토스", number : "0271"},
    {name : "로파파", number : "0272"},
    {name : "깜까미", number : "0302"},
    {name : "입치트", number : "0303"},
    {name : "플러시", number : "0311"},
    {name : "마이농", number : "0312"},
    {name : "비버니", number : "0399"},
    {name : "비버통", number : "0400"},
    {name : "체리버", number : "0420"},
    {name : "체리꼬(포지폼)", number : "0421"},            
    {name : "딥상어동", number : "0443"},
    {name : "한바이트", number : "0444"},
    {name : "한카리아스", number : "0445"},
    {name : "눈쓰개", number : "0459"},            
    {name : "눈설왕", number : "0460"},
    {name : "쌔비냥", number : "0509"},
    {name : "레파르다스", number : "0510"},
    {name : "소미안", number : "0546"},
    {name : "멜풍", number : "0547"},
    {name : "곤율랭", number : "0559"},
    {name : "곤율거니", number : "0560"},
    {name : "치라미", number : "0572"},
    {name : "치라치노", number : "0573"},
    {name : "바닐프티", number : "0582"},
    {name : "바닐리치", number : "0583"},
    {name : "베바닐라", number : "0584"},            
    {name : "골비람", number : "0622"},
    {name : "골루그", number : "0623"},
    {name : "도치마론", number : "0650"},
    {name : "도치보구", number : "0651"},
    {name : "브리가론", number : "0652"},
    {name : "푸호꼬", number : "0653"},
    {name : "테르나", number : "0654"},
    {name : "마폭시", number : "0655"},
    {name : "개구마르", number : "0656"},
    {name : "개굴반장", number : "0657"},
    {name : "개굴닌자", number : "0658"},
    {name : "파르빗", number : "0659"},
    {name : "파르토", number : "0660"},
    {name : "화살꼬빈", number : "0661"},
    {name : "불화살빈", number : "0662"},
    {name : "파이어로", number : "0663"},
    {name : "레오꼬", number : "0667"},
    {name : "화염레오(수컷의 모습)", number : "0668_1"},
    {name : "화염레오(암컷의 모습)", number : "0668_2"},
    {name : "티고라스", number : "0696"},
    {name : "견고라스", number : "0697"},
    {name : "아마루스", number : "0698"},
    {name : "아마루트가", number : "0699"},
    {name : "님피아", number : "0700"},
    {name : "데덴네", number : "0702"},
    {name : "멜리시", number : "0703"},
    {name : "미끄메라", number : "0704"},
    {name : "미끄네일", number : "0705"},
    {name : "미끄래곤", number : "0706"},
    {name : "나목령", number : "0708"},
    {name : "대로트", number : "0709"},
    {name : "호바귀", number : "0710"},
    {name : "펌킨인", number : "0711"},
    {name : "음뱃", number : "0714"},
    {name : "음번", number : "0715"},
    {name : "제르네아스", number : "0716"},
    {name : "이벨타르", number : "0717"},
    {name : "디안시", number : "0719"},
    {name : "에블리", number : "0742"},
    {name : "에리본", number : "0743"},
    {name : "암멍이", number : "0744"},
    {name : "루가루암(한낮의 모습)", number : "0745_1"},
    {name : "루가루암(한밤중의 모습)", number : "0745_2"},
    {name : "루가루암(황혼의 모습)", number : "0745_3"},
    {name : "머드나기", number : "0749"},
    {name : "만마드", number : "0750"},
    {name : "포곰곰", number : "0759"},
    {name : "이븐곰", number : "0760"},
    {name : "따라큐", number : "0778"},
    {name : "탐리스", number : "0819"},
    {name : "요씽리스", number : "0820"},
    {name : "모래뱀", number : "0843"},
    {name : "사다이사", number : "0844"},
    {name : "피카츄&윽우지", number : "PU"},
    {name : "태우지네", number : "0850"},
    {name : "다태우지네", number : "0851"},            
    {name : "나이킹", number : "0863"},
    {name : "나오하", number : "0906"},
    {name : "나로테", number : "0907"},
    {name : "마스카나", number : "0908"},
    {name : "뜨아거", number : "0909"},
    {name : "악뜨거", number : "0910"},
    {name : "라우드본", number : "0911"},
    {name : "꾸왁스", number : "0912"},
    {name : "아꾸왁", number : "0913"},
    {name : "웨이니발", number : "0914"},
    {name : "토오", number : "0980"},
    {name : "여섯 영웅 올리르바", number : "0930"},
    {name : "여섯 영웅 가라르 파이어", number : "0146"},
    {name : "여섯 영웅 라프라스", number : "0131"},
    {name : "캡틴 피카츄", number : "0025_3"},
    {name : "라티아스", number : "0380"},
    {name : "라티오스", number : "0381"},
    {name : "테오키스(노말폼)", number : "0386"},
    {name : "코바르온", number : "0638"},
    {name : "테라키온", number : "0639"},
    {name : "비리디온", number : "0640"},
    {name : "케르디오(평상시 모습)", number : "0647"},
    {name : "자시안(검왕)", number : "0888"},
    {name : "자마젠타(방패왕)", number : "0889"},
    {name : "자루도", number : "0893"},
    {name : "검은 레쿠쟈", number : "0384"},
]