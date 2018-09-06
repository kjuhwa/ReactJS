import React, {Component} from 'react'
import request from 'superagent'

class ExchangeCal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exchange:null,
            krw:'',
            calc:''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSelectChangeHandler = this.onSelectChangeHandler.bind(this)
    }
    componentWillMount() {
        // 통신 => 비동기이기 때문에 화면 블럭은 하지 않는다
        const url = 'http://api.manana.kr/exchange/rate/KRW/JPY,EUR,USD.json'
        request.get(url).end((err, res)=>{
            if(err){
                // 환률정보를 가져오는데 실패
            }else{
                // 환률 정보를 가져왔다
                // res.body = [{...},{...},{...}]
                this.setState( {exchange:res.body, calc:res.body[0].name} )
            }
        })
    }
    onChangeHandler(e) {
        const value = e.target.value.replace(/[^0-9]/g, '')
        this.setState( {krw:value} )
    }
    onSelectChangeHandler(e) {
        this.setState( {calc:e.target.value} )
    }
    render() {
        if( !this.state.exchange ) {
            // 환율 정보가 아직 도착하지 않았다
            return (
                <div>환율 정보를 조회중입니다...</div>
            )
        }

        var exchange = 0
        const selectList = this.state.exchange.map((item)=>{
            if(item.name === this.state.calc ) {
                exchange = this.state.krw / item.rate    
            }
            return <option key={item.name}>{item.name}</option>
        })

        return (
            <div style={{margin:20}}>
                <fieldset>
                    환율 목록
                    <select value={this.state.calc} onChange={this.onSelectChangeHandler}>
                        {selectList}
                    </select>
                    <br/>
                    원화
                    <input type='text' onChange={this.onChangeHandler} value={this.state.krw} />
                    <br/>
                    환전 통화
                    <input type='text' value={exchange}/>
                </fieldset>
            </div>
        )
    }
}

export default ExchangeCal