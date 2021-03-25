import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,TouchableOpacity,TextInput,Button,Keyboard
} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class login extends Component {
	static navigationOptions= ({navigation}) =>({
		  title: 'Login',	
		  headerRight:	
		  <TouchableOpacity
			onPress={() => navigation.navigate('Home')}
			style={{margin:10,backgroundColor:'orange',padding:10}}>
			<Text style={{color:'#ffffff'}}>Home</Text>
		  </TouchableOpacity>
		
	});  
	constructor(props){
		super(props)
		this.state={
			userName:'',
			userPassword:''
		}
	}
	
	login = () =>{
		const {userName,userPassword} = this.state;

		if(userName==""){
			//alert("Please enter username address");
		  this.setState({username:'Please enter username address'})
			
		}

		else if(userPassword==""){
		this.setState({username:'Please enter password'})
		}
		else{
		
		fetch('http://localhost/New%20folder/Trainee-Associate-Assignment-master/bizlogic/index.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				username: userName,
				password: userPassword
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "ok"){
				 // redirect to profile page
				 alert("Successfully Login");
				 this.props.navigation.navigate("Profile");
			 }else{
				 alert("Wrong Login Details");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		
		
		Keyboard.dismiss();
	}
	
  render() {
    return (
	<View style={styles.container}>    
	<Text style={{padding:10,margin:10,color:'red'}}>{this.state.username}</Text>
	
	<TextInput
	placeholder="Enter User name: "
	style={{width:200, margin:10}}
	onChangeText={userName => this.setState({userName})}
	/>
	
	<TextInput
	placeholder="Enter Password: "
	style={{width:200, margin:10}}
	onChangeText={userPassword => this.setState({userPassword})}
	
	/>
	
	
	<TouchableOpacity
	onPress={this.login}
	style={{width:200,padding:10,backgroundColor:'green',alignItems:'center'}}>
	<Text style={{color:'white'}}>Login</Text>
	</TouchableOpacity>
	
	
     </View>
  
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('login', () => login);