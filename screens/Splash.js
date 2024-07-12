import { StyleSheet, Text, View,Image, TouchableOpacity, Easing} from 'react-native'
import React from 'react'
import splashImg from '../assests/splash2.jpg'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native'

const Splash = () => {
  const navigation=useNavigation();
  return (
    <View >
      <Image  style={{height:hp(100),width:wp(100),resizeMode:'cover',position:'absolute'}}source={splashImg}/>

      <LinearGradient colors={['transparent','#18181b']}
      style={{width:wp(100),height:hp(100),justifyContent:'flex-end'}}
      start={{x:0.5,y:0}}
      end={{x:0.5,y:0.8}}>
        <Animated.View entering={FadeInDown.delay(300).springify().easing(Easing.ease)}  style={{paddingBottom:hp(5),justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:hp(5),color:'#fff',fontWeight:'bold'}}>BEST 
            <Text style={{fontSize:hp(5),color:'red'}}> WORKOUT</Text>
            </Text>

            <Text style={{fontSize:hp(5),color:'white',fontWeight:'bold'}}>FOR
            <Text style={{fontSize:hp(5),color:'white'}}> YOU</Text>
            </Text>
            <Animated.View entering={FadeInDown.delay(500).springify().easing(Easing.ease)}>
            <TouchableOpacity style={{borderRadius:30,marginTop:20,borderColor:'#fff',borderWidth:2,backgroundColor:'#C21807'}} onPress={()=>(navigation.navigate("Home"))}>
              <Text style={{fontSize:hp(4.5),fontWeight:'bold',color:'#fff',paddingHorizontal:28,justifyContent:'center',alignItems:'center'}}>Get Started</Text>
            </TouchableOpacity>
            </Animated.View>
            
        </Animated.View>
      </LinearGradient>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})