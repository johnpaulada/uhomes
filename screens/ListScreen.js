import React from 'react';
import { StyleSheet, View,ListView,Text } from 'react-native';
import { Icon,List,ListItem } from 'react-native-elements';

class ListScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'List',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='list'
        type='font-awesome'
        color={tintColor}
      />
    )
  };
 constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };

    this.state = {
              list : [{
                  name: 'Amy Farha',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  subtitle: 'Vice President'
                },    
                {
                  name: 'Chris Jackson',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  subtitle: 'Vice Chairman'
                }]
         }

    
  }
  componentDidMount(){

  }
  render(){
    var listItems = this.state.list.map((l,i)=>{
      return (<ListItem
        roundAvatar
        avatar={{uri:l.avatar_url}}
        key={i}
        title={l.name}
        subtitle={l.subtitle} />
      )
    });
    return (
        <List containerStyle={{marginBottom: 20}} >
          {listItems}
        </List>
      );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
})

export default ListScreen;
