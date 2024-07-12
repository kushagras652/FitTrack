import { View, Text, Modal, ScrollView } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';
import { useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated from 'react-native-reanimated';

const ExerciseDesc = () => {
    const route = useRoute();
    const { image, name, equipment, secondaryMuscles, target, instructions } = route.params;

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View>
                <FastImage
                    source={{ uri: image }}
                    resizeMode='cover'
                    style={{ width: '100%', height: hp(50), borderWidth: 1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
                />
                <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25, marginBottom: 8 }}>{name}</Text>
                    <Text style={{ color: 'black', fontSize: 15, marginBottom: 8 }}>Equipment:
                        <Text style={{ fontWeight: 'bold' }}> {equipment}</Text>
                    </Text>
                    <Text style={{ color: 'black', fontSize: 15, marginBottom: 8 }}>Secondary Muscles:
                        <Text style={{ fontWeight: 'bold' }}> {secondaryMuscles[0]}</Text>
                    </Text>
                    <Text style={{ color: 'black', fontSize: 15, marginBottom: 8 }}>Target:
                        <Text style={{ fontWeight: 'bold' }}> {target}</Text>
                    </Text>
                    <Text style={{ color: 'black', fontSize: 25, marginBottom: 8, fontWeight: '500' }}>Instructions</Text>
                    {instructions.map((instruction, index) => (
                        <Text key={index} style={{ color: 'black' }}>{instruction}</Text>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default ExerciseDesc;
