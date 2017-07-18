import React from 'react';
import PriceCalculator from '../components/PriceCalculator';
import Config from '../env.json';

class LoanCalculatorContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calculating: false,
      price: '',
      yearsToPay: 1,
      downPayment: 10,
      calculatedPrice: 0
    }
  }

  handlers = {
    setPrice: price => this.setState({price}),
    setYearsToPay: yearsToPay => this.setState({yearsToPay}),
    setDownPayment: downPayment => this.setState({downPayment}),
    calculateMonthlyPrice: () => {
      this.setState({calculating: true});

      fetch(`https://api-uat.unionbankph.com/uhac/sandbox/housing/loans/compute?term=${this.state.yearsToPay}&price=${this.state.price}&dp=${this.state.downPayment}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'x-ibm-client-secret': Config.UNIONBANK_CLIENT_SECRET,
          'x-ibm-client-id': Config.UNIONBANK_CLIENT_ID
        }
      })
      .then(response => response.json())
      .then(({amortization}) => {
        this.setState({
          calculating: false,
          calculatedPrice: amortization.monthly
        });
      })
      .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <PriceCalculator {...this.state} {...this.handlers} />
    )
  }
}

export default LoanCalculatorContainer;
