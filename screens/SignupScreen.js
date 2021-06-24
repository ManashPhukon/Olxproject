import React,{useState} from 'react';
import { View, Text , Image ,StyleSheet ,KeyboardAvoidingView ,TouchableOpacity, Alert} from 'react-native';
import { TextInput ,Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState('')
     const [password,setPassword] = useState('')

    const userSignup = async ()=>{
      const result = await auth().createUserWithEmailAndPassword(email,password)
      console.log(result.user)
   }

//  const userSignup = async ()=>{
//    if(!email||!password) {
//       Alert.alert("Please all the field")
//        return
//    }
//    try{
//       await auth().createUserWithEmailAndPassword(email,password)
//  }catch(err){
//    Alert.alert("something went wrong please try different password")
//  }       
// }
     
    return (
        <KeyboardAvoidingView behavior="position">
            <View style={styles.box1}>
               <Image style={{width:200,height:200}} source={require('../assets/productbuy.png')}/>
               <Text style={styles.text}>Please SignUp</Text>
            </View>

            <View style={styles.box2}>
             <TextInput
      label="Email"
      value={email}
      mode="outlined"
      onChangeText={text => setEmail(text)}
    />

    <TextInput
      label="password"
      value={password}
      mode="outlined"
      secureTextEntry={true}
      onChangeText={text => setPassword(text)}
    />

    <Button mode="contained" onPress={() => userSignup()}>
                 SignUp
                  </Button>
             <TouchableOpacity onPress={()=>navigation.goBack() }><Text style={{textAlign:"center"}}>Login</Text></TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  box1: {
     alignItems: 'center',
     height:"50%",
     justifyContent: "space-evenly",
    //justifyContent: 'center',//
  },
  box2: {
   paddingHorizontal:40,
   height:"40%",
   justifyContent:"space-evenly",
  }, 
  text: {
      fontSize: 22
  },
});


export default LoginScreen
