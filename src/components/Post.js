import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native-web'
import PropTypes from 'prop-types';

export default function Post(props){
    return (
        <View style={styles.container}>
            <Text>{props.titulo}</Text>
            <Image
                source={{ uri: props.url }}
                style={styles.remoteImage}
            />
            <Text>{props.resumo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    remoteImage: {
        width: 200, 
        height: 200,
    },
});


Post.propTypes = {
  titulo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  resumo: PropTypes.string,
};