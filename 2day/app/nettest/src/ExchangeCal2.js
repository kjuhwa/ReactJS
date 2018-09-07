// 강사님 코드.....
// 단독 컴포넌트만 있는 코드
// 1. import 
import React, { Component } from 'react'
import request from 'superagent'
// 2. 컴포넌트 정의
class ExchangeCal extends Component
{
    constructor (props) {
        super(props)
        this.state = {
            // 환율 정보
            exchange:null,
            // 현재 통화 국가 설정
            //curNational:'',
            // 현재 한화값
            curWon:0,
            // 상대 국가 환전값
            curOther:0,
            // 현재 환전 비율
            rate:1
        }
    }
    componentWillMount()
    {
        // 통신 => 비동기이기 때문에 화면 블럭은 하지 않는다
        const url = 'http://api.manana.kr/exchange/rate/KRW/JPY,EUR,USD.json'
        request.get(url).end( (err, res)=>{
            if(err){
                // 환율정보를 가져오는데 실패
            }else{
                // 환율 정보를 가져왔다
                // res.body = [{...},{...},{...}]
                
                this.setState( { rate:res.body[0].rate, exchange:res.body } )
                // 1. 기본 환전 국가를 설정한것인가?
                //    이 부분을 처리해서 rate 를 세팅하는 방법
                // 2. 환전 국가를 선택하면 -> 환전 계산을 위해
                //    필요한 수식값 rate를 어떻게 유지할것인가
                // 3. 계산
            }
        })
    }
    render () {
        if( !this.state.exchange ){
            // 환율 정보가 아직 도착하지 않았다
            return (
                <div>환율 정보를 조회중입니다...</div>
            )
        }
        // 통화를 바꾸면
        const onNatinalChange = (e) => {
            // 현재 통화 환전 비율 저장
            this.setState( {rate:e.target.value})
            // 환전 -> 원화기준으로 
            // 타입 확인
            console.log('->',this.state.won)
            console.log('->',e.target.value)
            this.setState( { curWon:this.state.curWon, 
                curOther:this.state.curWon/e.target.value
            } )
        }
        // 원화를 입력하면 현재 환전통화 비율에 맞춰서 환전값 세팅
        const onWonChange = (e) => {
            const won = e.target.value.replace(/[^0-9]/g, '')
            console.log(won);
            // 현재 원화 설정
            this.setState( { curWon:won, 
                // 타국가 통화 = 원화 / 환전값
                curOther:won/this.state.rate
            } )

        }
        // 타 국가 통화로 환전
        const onOtherChange = (e) => {
            const other = e.target.value.replace(/[^0-9]/g, '')
            console.log(other);
            // 현재 원화 설정
            this.setState( { 
                // 원화 = 타국다통화 * 환전값
                curWon:other * this.state.rate,
                curOther:other
            } )

        }
        // 환율 목록 세팅
        const options = this.state.exchange.map( (item)=>{
            return <option value={item.rate} key={ item.name }>{ item.name }</option>
        })
        return (
            <div style={{ margin:20 }}>
                <fieldset>
                    환율 목록
                    <select onChange={onNatinalChange}
                            value={this.state.rate}
                    >
                        {options}
                    </select>
                    <br/>
                    원화
                    <input type='text' 
                           value={this.state.curWon}
                           onChange={onWonChange}/>
                    <br/>
                    환전 통화
                    <input type='text' 
                           value={this.state.curOther}
                           onChange={onOtherChange}/>
                </fieldset>
            </div>
        )
    }
}
// 3. 모듈화
export default ExchangeCal