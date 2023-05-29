import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

//Components
import DetailsTextRow from '../../components/DetailsTextRow';
import ScreenTitle from '../../components/ScreenTitle';

const DetailsScreen = ({route, navigation}) => {

    const {item} = route.params;

    return (
        <View>
            <ScreenTitle>
                    Details Screen
                </ScreenTitle>
            <View>
                <View>
                <Image
                    style={styles.image}
                    source={{
                    uri: item.picture.large,
                    }}
                />
                </View>
                <DetailsTextRow title={"Fisrt Name"}>
                    {item.name.first}
                </DetailsTextRow>
                <DetailsTextRow title={"Last Name"}>
                    {item.name.last}
                </DetailsTextRow>
                <DetailsTextRow title={"Email"}>
                    {item.email}
                </DetailsTextRow>
                <DetailsTextRow title={"Location"}>
                    {item.location.country} {item.location.city}
                </DetailsTextRow>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: null,
        height: 300,
    }
})
export default DetailsScreen;