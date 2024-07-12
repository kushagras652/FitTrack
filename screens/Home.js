import { StyleSheet, Text, View, Image ,SafeAreaView} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import avatar from '../assests/avatar.png'
import Alert from 'react-native-vector-icons/Ionicons'
import ImageSlider from '../component/ImageSlider';
import BodyPart from '../component/BodyPart';
const Home = () => {
  return (
    <View style={{flex:1}}>
       <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 8, justifyContent: 'space-between', marginRight: 8 }}>
      <View>
        <Text style={{ color: 'black', fontSize: hp(5), fontWeight: 'bold' }}>
          READY TO
        </Text>
        <Text style={{ color: '#D21F3C', fontSize: hp(5), fontWeight: "bold" }}>
          WORKOUT
        </Text>
      </View>
      <View style={{ justifyContent: 'flex-end', alignItems: 'center', bottom: 15 }}>
        <Image style={{ height: hp(6), marginBottom: 3, width: hp(6) }} source={avatar} />
        <Alert name="notifications-sharp" color='#800000' size={30} style={{ marginTop: 5 }} />
      </View>
    </View>
    <View>
      <ImageSlider/>
    </View>

    <View style={{flex:1}}>
    <BodyPart/>
    </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})