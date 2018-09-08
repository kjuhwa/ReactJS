- react를 다른 관점에서 ui 구성
- 내용
 -> jsonplaceholder.typicode.com 요청하여
    posts와 comment를 가져와서 화면 처리
 -> network 모듈은 axios 사용
 -> UI 구성 모듈 사용
    > semantic-ui-css, semantic-ui-react
    > semantic-ui.com
 -> 애니메이션 사용
    > https://daneden.github.io/animate.css/
 -> 배포 관련
    > node의 express 프로젝트 생성하는 제너레이터 설치
    > npm install -g express-generator
    > express -help
    > express -e deploy
 -> react build
    > 해당 프로젝트 이동
    > yarn 밀고 있다(페이스북이만든 에코시스템 npm)
    > npm install -g yarn
    > 빌드
      > yarn build
 -> 노드 서버 가동
    > cd deploy
    > npm install
    > npm start
 -> react 모듈 배포
    > newui>build> index.html 뺀 나머지 모두 카피
    > deploy>public> 여기서 붙여넣기
    > deploy>views>index.ejs 오픈
    > newui>build>index.html 오픈
    > 코드 이식
    > deploy>public>static>js>*.map 제거

2. newui 프로젝트 추가 모듈 구성
 > npm install --save axios semantic-ui-css semantic-ui-react
 > promise 패턴이 미지원되는 IE 브라워저를 위해서 처리를 해줘야함
 > npm install --save promise-polyfill