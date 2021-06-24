import React from 'react'
import { View, Text ,FlatList ,StyleSheet } from 'react-native'
import LoginScreen from './LoginScreen'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const ListItemScreen = () => {
      
    const myitems = [
        {
            name:"iphone",
            year:"2014",
            phone:"12345678",
            image:"https://images.unsplash.com/photo-1600541519467-937869997e34?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc:"i am selling my iphone in good condition",
        },
         {
            name:"camera",
            year:"2015",
            phone:"12345864",
            image:"https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
            desc:"i am selling my camera in good condition",
        },
    ]
    
    const renderItem = (item)=>{
        return(
            <Card style={styles.card}>
    <Card.Title title={item.name} />
    <Card.Content>
      <Paragraph>{item.desc}</Paragraph>
      <Paragraph>{item.year}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: item.image }} />
    <Card.Actions>
      <Button>200</Button>
      <Button>call seller</Button>
    </Card.Actions>
  </Card>
        )
    }

    return (
        <View>
            <FlatList
             data={myitems}
             keyExtractor={(item)=>item.phone}
             renderItem={({item})=>renderItem(item)}

            />
        </View>
    )
}

const styles = StyleSheet.create({
 card:{
    margin:10,
    elevation:2,
  },
});

export default ListItemScreen
