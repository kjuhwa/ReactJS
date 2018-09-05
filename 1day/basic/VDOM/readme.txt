# 리액트 (Reactjs)
- 개요
페이스북 개발, 클라이언트 웹기반 UI js 라이브러리
웹 화면에 각 부분들을 컴포넌트로 제작하여 다룰수 있게 제공
- JSX (컴포넌트의 render() 함수의 리턴값)
컴포넌트별로 HTML 태그를 작성할수 있게 환경을 제공해주는 파트
- Virtual DOM (가상돔)
랜더링 성능의 극대화
변화된 부분만 찾아서 거기만 새로 그린다(부분갱신)
- 개발
1) html안에 react, react-dom, babel을 넣어서 간단하게 구성 연습
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
2) react cli를 이용하여 react 프로젝트를 생성
   js안에서 html을 구성하여 -> 최종 js를 만드는 방법
