import React from 'react';
import PriceCalculator from '../components/PriceCalculator';

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
          'x-ibm-client-secret': 'S0cG8rY4iE0yP5gX6fX3wM7kX6cJ5qE0lI0uM7wO2sS6qJ7mT6',
          'x-ibm-client-id': '22c6b6f6-d8de-4e67-b203-6c2e1e265f47'
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
