# nodejs + express 학습

### 1. 설치

- npm 설치
- express 설치

```
npm init
npm install express
```

### 2. 실행

- server.js 를 터미널에 실행해보기

```
node server.js
```

### 3. 서버 수정 자동화 nodemon

```
npm install -g nodemon
nodemon server.js
```

### 4. nodemon 실행시 PowerShell 보안오류가 뜨면?

1. 관리자권한으로 powershell 실행 후 executionpolicy 입력
2. set-executionpolicy unrestricted
3. y 입력

### 5. POST request 라이브러리 body-parser

```
npm install body-parser
```

---

### 내 서버랑 통신할 수 있는 방법 = API

#### Uniform Interface

인터페이스는 일관성이 있어야한다는 소리가... 뭔소리냐면

- 하나의 URL로는 하나의 데이터를 가져와야함 (하나를 가져오기 위한 두개의 URL을 만들지 말자)

- 간결하고 예측가능하게 짜세요 (URL 하나를 알면 둘을 알게)

- URL 이름짓기 관습을 잘 따라주세요

이름짓기 관습이 뭔지는 밑에 가서 더 알아보도록 합시다.

#### URL 이름짓기 관습

- instagram.com/explore/tags/kpop
- instagram.com/explore/tags/food
- facebook.com/natgeo/photos
- facebook.com/bbc/photos

### 6. mongoDB 설치하기

```
npm install mongodb
```
