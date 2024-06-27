const express = require('express'); // express 모듈 가져오기
const app = express(); // express 애플리케이션 객체 생성
const PORT = 8888; 

app.set('view engine', 'ejs'); // view engine을 ejs로 설정한다
app.set('views', './views'); // 정적 파일 불러올 때 views 폴더로 경로 설정
app.use('/static', express.static(__dirname + '/static'));
// static file(정적 파일) 제공하는 명령어
// app.use('요청 경로', express.static('실제경로')) 보안을 위해 이렇게 한다.



// 미들웨어 연결 : request & response 중간에서 작업하고 express에서는 app.use()로 등록

// 미들웨어 중 하나인 body-parser 모듈 등록, post 방식으로 받을때 body를 볼 수 있게 도와줌
app.use(express.urlencoded({extended: true})); //urlencoded로 파싱(풀어헤치는)된 body를 요청
// => post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // 요청의 body 객체에 json형태로 온다.



app.get('/', (req, res) => {
    res.render('index', {title: '실습을 해보자규'});
    // index 파일 화면 렌더링 하자
});

app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('result', {title: 'GET 요청 결과', userInfo: req.query});
    
});
// get은 req의 query를 받는다



// post는 req의 body를 받는다.





// listen(포트번호, 서버가 실행될 때 실행할 콜백 함수): 서버 시작 메소드
app.listen(PORT, () => {
    console.log(`서버 접속!! local host ${PORT}`);
});