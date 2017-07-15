import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator, View } from 'react-native';
import ListComponent from '../components/ListComponent';

class ListContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      yearsToPay : 1,
      downpayment: 10
    };
  }

  isLoading = () => this.props.allHouses.loading
  getListData = isLoading => {
    return {houses: (isLoading ? [] : this.props.allHouses.allHouses)};
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
    const isLoading = this.isLoading();

    return (
      <View>
        <ActivityIndicator animating={isLoading} size={'large'} />
        <ListComponent {...this.getListData(isLoading)} {...this.state} setYearstoPay={this.setYeartoPay} setDownPayment={this.setDownPayment} />
      </View>
    );
  }
}

const allHouses = gql`
{
  allHouses {
    id
    seller {
      fullName
    }
    price
    location {
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
