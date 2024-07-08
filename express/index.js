const express = require('express');
const app = express();

let users = [
    {
        id: 1,
        name: 'lili',
        age: 22
    }
]

// 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// GET method
// 유저 정보 가져오기
app.get('/users', (req, res) => {
    res.status(200).json({users});
});

// POST method
app.post('/users/', (req, res) => {
    const {name, age} = req.body;
    console.log('body', req.body);
    users.push({
        id: new Date().getTime(),
        name,
        age
    });
    res.status(201).json({users});
});

// PATCH method
app.patch('/users/:id', (req, res) => {
    const {id} = req.params;
    const {name, age} = req.body;
    console.log("param", req.params);

    const targetUserIdx = users.findIndex((user) => user.id === Number(id));

    users[targetUserIdx] = {
        id: users[targetUserIdx].id,
        name: name ? name : users[targetUserIdx].name,
        age: age ? age : users[targetUserIdx].age,
    };

    res.status(204).json({});

});

// DELETE method
app.delete('/users/:id', (req, res) => {
    const {id} = req.params;

    const deleteUsers = users.filter((user) => user.id !== Number(id));
    users = deleteUsers;

    res.status(204).json({});
});


// req: 요청
// res: 응답
app.get('/', (req, res) => {
    res.send('express');
})

app.listen(8988, () => {
    console.log('서버 실행');
})


// 어플리케이션 레벨 미들웨어: 클라이언트의 모든 요청이 서버에 가기 전에 거쳐 가는 곳.
// 라우터 레벨 미들웨어: 메소드마다 

// headers: 요청과 응답의 추가 정보 응답을 주고 받음
// body: 진짜 중요한 정보를 담고 있으며 응답을 주고 받음

// REST API


// app.use() // 미들웨어 등록
// app.use() // 라우터 등록

