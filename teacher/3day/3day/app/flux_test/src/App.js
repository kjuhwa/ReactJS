import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// flux 관련 사항 추가
// 액션 발동을 위해 
import {Actions} from './flux_actions'
// 스토어의 저장된 상태값을 가져오기 위해서 
import {travelStore, travelRegiStore} from './flux_store'


// 입력창에 글자를 입력한다->onChange 이벤트
// 등록버튼을 누른다->onClick 이벤트
class App extends Component 
{
  constructor (props) {
    super(props)
    this.state = {
      // 여행지 입력값
      travel:'',
      // 등록후 나오는 데이터
      msg:''
    }
    // 스토어에 내가 입력한 상태값을을 변경하고 통보하는 함수
    // 이 함수를 여기서 정의
    travelStore.onChange = ()=>{
      // 저장소에 저장된 value값을 나의 상태변수 travel에 수정
      this.setState( {travel:travelStore.value} )
    }
    travelRegiStore.onChange = ()=>{
      // 저장소에 저장된 value값을 나의 상태변수 travel에 수정
      this.setState( {msg:travelRegiStore.msg} )
    }
  }
  render() {
    return (
      <div className="App">
        <fieldset>
          <p><b>좋아하는 여행지를 입력하세요</b></p>
          <input value={this.state.travel}
                 onChange={ (e)=>{Actions.updateTravel(e.target.value)} }
          />
          <button onClick={ (e)=>{Actions.sendTravel()}}>등록</button>
          <div>입력한 여행지는:<strong>{this.state.msg}</strong></div>
        </fieldset>
      </div>
    );
  }
}

export default App;
