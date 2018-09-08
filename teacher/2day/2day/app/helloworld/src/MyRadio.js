// 단독 컴포넌트만 있는 코드
// 1. import 
import React, { Component } from 'react'
// 2. 컴포넌트 정의
class MyRadio extends Component
{
    constructor (props) {
        super(props)
        this.state = {
            mySelect:''
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }
    onSubmitHandler (e) {
        e.preventDefault()
        console.log('사용자 선택값', this.state.mySelect);
    }
    render () {
        var radioList = this.props.items.map( (item)=>{
            return (
                <div key={item}>
                    <input type='radio' name='food' 
                    value={item}
                    onChange={e=>this.setState({mySelect:item}) }
                    checked={ this.state.mySelect === item }
                    />{item}
                </div>
            )
        } )
        return (
            <div style={{ margin:20}}>
                <form onSubmit={this.onSubmitHandler}>
                    {radioList}
                    &nbsp;                  
                    <input type='submit' value='전송'/>
                </form>
            </div>
        )
    }
}
// 3. 모듈화
export default MyRadio