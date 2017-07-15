import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import ListComponent from '../components/ListComponent';

class ListContainer extends React.Component {

  getListData = () => {
    const isLoading = this.props.allHouses.loading;
    return {houses: (isLoading ? [] : this.props.allHouses.allHouses)};
  }
  constructor(props){
    super(props);
   this.state = {
      yearsToPay : 1,
      downpayment: 10
   };
  }

  setYeartoPay = (year) => {
    this.setState({
        yearsToPay: year
    })
  }
  setDownPayment = (payment) => {
    this.setState({
      downpayment: payment
    });
  }

  render() {
    return (
      <ListComponent {...this.getListData()} {...this.state} setYearstoPay={this.setYeartoPay} setDownPayment={this.setDownPayment} />
    );
  }
}

const allHouses = gql`
{
  allHouses {
    seller{
      fullName
    }
    price
    location{
      latitude
      longitude
      name
    }
    description
    image
  }
}`;

export default compose(
  graphql(allHouses, { name: 'allHouses' })
)(ListContainer);
