import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setStepRate} from '../actions'

class Option extends Component
{
    constructor (props) {
        super(props)
        this.state = {
        }
        this.onChangeStep = this.onChangeStep.bind(this)
    }
    onChangeStep (e) {
        this.props.setStep( parseInt(e.target.value, 10) )
    }
    render () {
        return (
            <div>
                <fieldset>
                    <input 
                    value = {this.props.stepValue}
                    onChange={this.onChangeStep}
                    placeholder='증감폭을 설정하세요' />
                </fieldset>
            </div>
        )
    }
}
let mapStateProps = ( state )=>{
    return { stepValue:state.counterReducer.step }
}
let mapDispatchToProps= ( dispatch )=>{
    return {
        setStep: (rate)=>{ dispatch( setStepRate(rate) ) }
    }
}
Option = connect( mapStateProps, mapDispatchToProps )(Option)
export default Option