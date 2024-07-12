import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fetchExerciseByBodyParts } from '../api/exerciseDB';
import { demoExercise } from '../constant';
import Back from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import ExerciseList from '../component/ExerciseList'
import {ScrollView} from 'react-native-virtualized-view'

const Exercises = () => {
  const route = useRoute();
  const { image, name } = route.params;
  //console.log('Image source:', image);
  const [exercice,setExercice]=useState([]);
  const navigation=useNavigation();
 
 // console.log(route.params);

  useEffect(()=>{
  if(name) getExercises(name);
  },[name]);

  const getExercises = async (bodypart)=>{
    let data=await fetchExerciseByBodyParts(bodypart);
   //console.log('got data',data);
   setExercice(data);
  }

  return (
    <ScrollView style={{flex:1 }}>
      <View style={{ position: 'relative' }}>
        <Image source={image} style={{ width: wp(100), height: hp(50), borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} />
        <TouchableOpacity style={{ position: 'absolute', top: hp(2), left: wp(3),backgroundColor:'#e32636',borderRadius:20,alignContent:'center'}} onPress={()=>navigation.navigate('Home')}>
          <Back name="chevron-back" size={30} color='#fff' />
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: 'flex-start', marginTop: wp(3), marginLeft: wp(4) }}>
        <Text style={{ color: 'black', textAlign: 'left', fontSize: wp(7) }}>{name} exercises</Text>
        <Text style={{ color: 'black', fontSize: wp(5), marginTop: wp(1) }}>Exercise List</Text>
      </View>
      <View style={{}}>
        <ExerciseList data={exercice}/>
      </View>
      
    </ScrollView>
  )
}

export default Exercises
