리액트 도구를 이용하여 프로젝트 생성
 - 출력 시간 단축
 - 모듈명 create-react-app
 - 설치
   > npm install -g create-react-app
 - html에서 사용하는 부분
   > 컴파일 시간이 느림
   > 콘텐츠가 커지면 로드 시간이 더 걸림
   > 단순 연습용으로 사용
   > 소스도 대놓고 노출
 - 프로젝트 생성
   > 해당 폴더 이동
   > create-react-app helloworld
   > cd helloworld
   > npm start
     http://localhost:3000 자동 접속
   > 개발
 - 배포 및 서비스 사용
   > npm run-script build 
   > build 폴더 내부의 내용을 가지고 원하는 페이지에 삽입
 - 개별 컴포넌트 만들기
 - 컴포넌트의 라이프사이클
 - 네트워크 처리 + 컴포넌트 처리 => 비동기적 상황
   ajax => 모듈 : axios,got,request,reqwest,superagent, jquery 
   https://npmcompare.com/compare/axios,got,request,reqwest,superagent
   superagent를 사용해본다
   프로젝트 신규 생성
   > create-react-app nettest
   > cd nettest
   > npm install --save superagent
   > npm start
   > 코딩
 - 라우트 작업
   > SPA 상에서 여러 페이지 구성시 사용
   > 즉, 한개의 HTML안에 여러 페이지를 구성할때 사용
   > 설치
     react-router-dom : 웹쪽에서 주로 사용
     react-router-native : 앱쪽에서 주로 사용
   > 프로젝트 폴더 이동
   > npm install --save react-router-dom@4.1.1