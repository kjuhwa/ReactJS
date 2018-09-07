1. 필요성(why)
 - 리액트는 컴포넌트를 조립해서 제작
 - 중첩이 많아지고 -> 복잡한 계층 구조를 가지게 된다
 - 밑에서 위로, 위에서 밑으로 밑에서 옆으로 등등 이벤트라든지
   데이터들을 어떻게 전달할것인가 ?
 - 이것을 해결위해서 나온 방식 => flux => 개선 => redux
 - flux
   > 정보가 한방향으로 흐른다!!
   > Action -> Dispatcher -> Store -> View -> Action
   > Action     : 실행. 어떤 일을 하게되는 원인(이벤트)
   > Dispatcher : 액션을 스토어에 전달하는 역할(통신)
   > Store      : Dispatcher를 통해 전달된 액션을 분석하여 상태저장(기록)
   > View       : Store에서 상태변화를 일으키면 랜더링 진행(출력)
 - 설치
   > npm install --save flux