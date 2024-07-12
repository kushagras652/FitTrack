import { View, Text } from 'react-native'
import React from 'react'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { sliderImages } from '../constant/index';

export default function ImageSlider() {
    return (
        <Carousel
            data={sliderImages}
            loop={true}
            autoPlay={true}
            renderItem={ItemCard}
            hasParallaxImages={true}
            sliderWidth={wp(100)}
            firstItem={1}
            autoPlayInterval={2000}
            itemWidth={wp(100) - 70}
            slideStyle={{ display: 'flex', alignItems: 'center' }}
        />
    )
}

const ItemCard = ({ item, index }, parallaxProps) => {
    return (
        <View style={{ width: wp(100) - 70, height: hp(25), marginTop: 20 }}>
            <ParallaxImage
                source={item}
                containerStyle={{ borderRadius: 40, flex: 1 }}
                style={{ resizeMode: 'contain' }}
                parallaxFactor={1}
                {...parallaxProps}
            />
        </View>
    )
}