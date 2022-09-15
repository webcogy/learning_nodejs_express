/* 서버 오픈을 위한 기본 문법 */
const express = require('express');
const res = require('express/lib/response');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true})) 

const portNumber = 8080;
const listenDB = () => {
    console.log('listening on 8080 db')
}

/* 
MongoClient.connect('아까 챙겨온 접속URL', function(에러, client){
    if (에러) return console.log(에러);
    //서버띄우는 코드 여기로 옮기기
    app.listen('8080', function(){
        console.log('listening on 8080')
    });
})
접속 URL은 대충 이렇게 생겼는데
mongodb+srv://디비계정아이디:디비계정패스워드@cluster0-qaxa3.mongodb.net/데이터베이스이름?retryWrites=true&w=majority
*/

const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb+srv://root:qwer1234@cluster0.uopdn.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(dbUrl, function(error, client){
    if (error) return console.log(error);
    //서버띄우는 코드 여기로 옮기기
    app.listen(portNumber, listenDB);
})


// node server.js
/* 
app.listen(portNumber, listenFn);


// 누군가가 /pet으로 방문하면 pet과 관련된 안내문을 띄어주자
app.get('/pet', function(req, res){
    res.send('펫용품 쇼핑할 수 있는 페이지입니다.');
})

app.get('/beauty', function(req, res){
    res.send('뷰티용품 쇼핑할 수 있는 페이지입니다.');
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.get('/write', function(req, res){
    res.sendFile(__dirname + '/write.html')
})

// 어떤 사람이 /add 경로로 POST 요청을 하면 ... ?? 를 해주세요 ~
app.post('/add', function(req, res){
    console.log(req.body)
    res.send('전송완료')
    // DB에 저장해주세요
}); 
*/