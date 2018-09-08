import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setStepRate} from '../actions'

class Option extends Component
{
    constructor (props) {
        super(props)
        this.state = {
            rate:1
        }
        this.onChangeStep = this.onChangeStep.bind(this)
    }
    onChangeStep (e) {
        this.setState( { rate:e.target.value} )
        this.props.setStep( parseInt(e.target.value, 10) )
    }
    render () {
        return (
            <div>
                <fieldset>
                    <input 
                    value = {this.state.rate}
                    onChange={this.onChangeStep}
                    placeholder='증감폭을 설정하세요' />
                </fieldset>
            </div>
        )
    }
}

let mapDispatchToProps= ( dispatch )=>{
    return {
        setStep: (rate)=>{ dispatch( setStepRate(rate) ) }
    }
}
Option = connect( undefined, mapDispatchToProps )(Option)
export default Option