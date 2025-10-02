import React, { useState } from 'react';
import {StyleSheet, Text, Image, View, TextInput, Button} from 'react-native';
import PropTypes from 'prop-types';

export default function Post(props){
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Image
                source={props.imagem}
                style={styles.remoteImage}
            />
            <Text style={styles.alignLeft}>{props.resumo}</Text>
            <Text style={[styles.alignLeft, styles.bold]}>Comments</Text>
            <View style={styles.alignLeft}>
                {comments.map((comment, index) => (
                    <Text key={index} style={styles.commentText}>
                        <Text style={styles.autor}>anonimous</Text> - {comment}
                    </Text>
                ))}
            </View>
            <View style={styles.textArea}>
                <TextInput 
                    style={styles.input}
                    placeholder="Write a comment..."
                    multiline={true}
                    numberOfLines={4}
                    value={comment}
                    onChangeText={setComment}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title='submit' 
                    onPress={()=>{
                        setComments([...comments, comment]);
                        setComment('');
                    }} 
                    style={styles.button}
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
        padding:10,
        borderWidth: .5,
        width:300,
        height: 100,
        textAlignVertical: 'top',
    },
    commentText: {
        padding: 5,
    },
    autor:{
        fontWeight: 500
    },
    bold:{
        fontWeight:'bold'
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'flex-end',
        marginTop: 10,
    }
});

Post.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagem: PropTypes.number.isRequired,
  resumo: PropTypes.string,
};