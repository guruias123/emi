import { React, Component } from 'react'
import './Emi.css'

class Emi extends Component {

    constructor() {
        super()
        this.state = {
            amount: '',
            interest: '',
            time: '',
            amount1: '',
            interest1: '',
            time1: ''
        }
    }

    onchange = (event) => {
        var amou = event.target.value
        this.setState({ amount: amou })
        console.log(amou)
    }

    onchange1 = (event) => {
        var inter = event.target.value
        this.setState({ amount: inter })
    }

    onchange2 = (event) => {
        var tim = event.target.value
        this.setState({ amount: tim })
    }

    onchange3 = () => {
        var noOfMonths = Math.floor(this.state.time) * 12;
        var monthlyRate = this.state.interest / (12 / 100);
        var onePlusR = Math.pow(1 + monthlyRate, noOfMonths);
        var denominator = onePlusR - 1;
        var emi = (this.state.amount * monthlyRate * (onePlusR / denominator)).toPrecision(5);
        var totalAmt = noOfMonths * parseFloat(emi);
        var totalInt = Math.floor(totalAmt - this.state.amount);
        this.setState({ amount1: totalAmt })
        this.setState({ interest1: totalInt })
        this.setState({ time1: emi })
        console.log(this.state)
    }


    render() {
        return (
            <div>

                <div className="container" style={{ display: "flex", marginTop: "2%" }}>

                    <div className="col-sm-6 col-12 card" >
                        <h1>EMI Calculator</h1>
                        <form name="loan-form">
                            <div className='loanBlock'>
                                <h3>Loan Amount</h3>
                                <input type="number" id="amount" onChange={this.onchange} style={{ borderRadius: "5px" }} /><br />
                            </div>
                            <div className='aprBlock'>
                                <h3>Interest Rate</h3>
                                <input type="number" name="apr" id="apr" onChange={this.onchange1} style={{ borderRadius: "5px" }} /><br />
                            </div>
                            <div className='tenureBlock'>
                                <h3>Time Periods(yrs)</h3>
                                <input type="number" name="tenure" id="tenure" onChange={this.onchange2} style={{ borderRadius: "5px" }} /><br />
                                <br />
                            </div>
                            <div className="d-flex">
                                <button style={{ borderRradius: "2px" }} id="find" className="btn-sub" onClick={this.onchange3}>Find Emi</button>
                            </div>
                        </form>



                    </div>
                    <div className="col-sm-5 col-12pl-3 card">

                        <h1>Results</h1><br />
                        <h3>Total EMI: {this.state.time1} <span id="emi"></span></h3>
                        <h3>Total Amount:  {this.state.amount1} <span id="totalAmt"></span></h3>
                        <h3>Total Interest: {this.state.interest1} <span id="totalInt"></span></h3>
                        <div id="chartContainer" style={{ height: "300px", width: "100%" }}></div>

                    </div>

                </div>
            </div>

        )
    }
}

export default Emi
