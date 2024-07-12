import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyParts } from '../constant/index';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native'
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function BodyPart ()  {
   
    return (

        <View style={{ margin: 13,flex:1 }}>
            <Text style={{ fontSize: hp(4), color: '#494F55' }}>Exercises</Text>

            <View>
            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={(item) => item.name}
              showsVerticalScrollIndicator={true}
               contentContainerStyle={{ paddingBottom: 50, paddingTop: 20,paddingHorizontal:5}}
               columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item, index }) => (
                    <BodyPartCard item={item} index={index} />
                )}
            />
            </View>
        </View>


    )
}

const BodyPartCard = ({ item, index }) => {
    const navigation=useNavigation();
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
            <TouchableOpacity onPress={()=>navigation.navigate('Exercises',{image:item.image,name:item.name})}
            style={{ width: wp(44), height: wp(52), padding: 6, marginBottom: 8, position: 'relative' }}>
            <Image source={item.image}
                resizeMode='cover'
                style={{ width: '100%', height: '100%', borderRadius: 12, position: 'absolute', top: 0, left: 0 }}
            />
            <LinearGradient
            colors={['transparent','#18181b']}
            style={{width:'100%',height:'100%',position:'absolute',justifyContent:'flex-end',borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12}}
            start={{x:0.5,y:0}}
            end={{x:0.5,y:1}}
            />
            <View style={{ position: 'absolute', bottom: 10, left: 0, right: 0, padding: 6, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight:'600',fontSize:18}}>{item.name}</Text>
            </View>
        </TouchableOpacity>
        </Animated.View>
        
    )
}
