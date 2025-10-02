import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import PropTypes from 'prop-types';

export default function Post(props){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Image
                source={{ uri: props.url }}
                style={styles.remoteImage}
            />
            <Text style={styles.alignLeft}>{props.resumo}</Text>
            <Text style={styles.alignLeft}>Comments</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#91919134',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 10
    },
    remoteImage: {
        width: 200, 
        height: 200,
    },
    titulo:{
        fontWeight:'bold',
        fontSize: 20,
        color:'darkslategrey'
    },
    alignLeft:{
        alignSelf:'flex-start'
    }
});


Post.propTypes = {
  titulo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  resumo: PropTypes.string,
};