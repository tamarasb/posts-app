import React from 'react';
import {StyleSheet, Text, Image, View, TextInput} from 'react-native';
import PropTypes from 'prop-types';

export default function Post(props){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Image
                source={props.imagem}
                style={styles.remoteImage}
            />
            <Text style={styles.alignLeft}>{props.resumo}</Text>
            <Text style={styles.alignLeft}>Comments</Text>
            <View style={styles.textArea}>
                <TextInput 
                    style={styles.input}
                    placeholder="Write a comment..."
                    multiline={true}
                    numberOfLines={4}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#91919134',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 10,
        margin: 10
    },
    remoteImage: {
        width: 300, 
        height: 200,
        borderRadius: 10,
        marginVertical:5
    },
    titulo:{
        fontWeight:'bold',
        fontSize: 20,
        color:'darkslategrey'
    },
    alignLeft:{
        alignSelf:'flex-start',
        paddingBottom:10
    },
    textArea:{
        backgroundColor: 'white',
        width:"100%"
    },
    input:{
        height:40,
        padding:10,
        borderWidth: .5,
        width:300,
        height: 100,
        textAlignVertical: 'top',
    }
});


Post.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagem: PropTypes.number.isRequired,
  resumo: PropTypes.string,
};