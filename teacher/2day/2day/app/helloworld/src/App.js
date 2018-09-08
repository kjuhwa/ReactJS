import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 라이프 싸이클
// 최초 구동시 호출 순서
// constructor -> componentWillMount -> render -> componentDidMount
// 이후 상태값변화, props변환 => .. .. .. .. -> render
class App extends Component {
  // 최초 구동후 호출 순서 ==============================
  constructor (props) {
    super(props)
    this.state = { id:0 }
    console.log('[] constructor call');
  }
  componentWillMount() {
    console.log('[] componentWillMount call');
  }
  render() {
    console.log('[] render call');
    console.log( `this.state.id = ${this.state.id}` )
    const onCount = (e)=>{
      this.setState( { id:this.state.id+1 } )
      // 상태값 갱신을 호출해도 즉시 변경되는 것이 아니다!!
      // 다음번 render()가 호출될때 그때 변경된것을 사용할수 있다
      console.log( `this.state.id = ${this.state.id}` )
    }
    return (
      <div className="App">
        <button onClick={onCount}>갱신 {this.state.id}</button>
      </div>
    );
  }
  componentDidMount(){
    console.log('[] componentDidMount call');
  }
  // ===================================================
  // 상태변화, props의 변화에 따른 호출 순서 =============
  componentWillReceiveProps(){
    console.log('[] componentWillReceiveProps call');
  }
  // 랜더를 호출할것인가? 여부 판단
  shouldComponentUpdate(nextProps, nextState)
  {
    // 변경될 다음번 값을 인자를 통해 받을수 있다
    console.log(`nextProps=${nextProps}, 
                 this.state.id=${this.state.id},
                 nextState=${nextState.id}`);
    console.log('[] shouldComponentUpdate call');
    return true
  }
  componentWillUpdate(){
    console.log( `this.state.id = ${this.state.id}` )
    console.log('[] componentWillUpdate call');
  }
  componentDidUpdate(){
    console.log('[] componentDidUpdate call');
  }
  // ===================================================
  componentWillUnmount(){
    // 컴포넌트가 화면에서 사라지는 직전 호출
    // 컨포넌트각 죽는 시점
    console.log('[] componentWillUnmount call');
  }
}

export default App;
