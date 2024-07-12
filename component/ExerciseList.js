import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import GifImage from '@lowkey/react-native-gif';
import FastImage from 'react-native-fast-image';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function BodyPart({ data }) {
  const [loading, setLoading] = useState(true); // State for loading

  // Update loading state when data changes
  useEffect(() => {
    // Set loading to true when data is passed as a prop
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  return (
    <View style={{ margin: 10 }}>
      {loading ? ( // Render loader if loading is true
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ paddingBottom: 50, paddingTop: 20, paddingHorizontal: 5 }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item, index }) =>
            <ExerciseCard item={item} index={index} />
          }
        />
      )}
    </View>
  );
}

const ExerciseCard = ({ item, index }) => {
  const navigation = useNavigation();

  const handleImageError = () => {
    // Handle image loading errors
    console.log('Error loading image:', item?.gifUrl);
  };

  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
      <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => navigation.navigate('Desc', { image: item.gifUrl, name: item.name, equipment: item.equipment, secondaryMuscles: item.secondaryMuscles, target: item.target, instructions: item.instructions })}>

        <FastImage
          source={{ uri: item?.gifUrl }}
          resizeMode='cover'
          style={{ width: wp(45), height: hp(25), borderWidth: 1, borderColor: 'red', borderRadius: 20 }}
          onError={handleImageError}
        />
        <View>
          <Text style={{ color: 'black', textAlign: 'center' }}>
            {item.name.length > 20 ? item.name.slice(0, 20) + '...' : item?.name}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>

  );
};
