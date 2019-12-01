import React, { Component, Fragment } from 'react'
import { Text, View, Image, StyleSheet, TextInput } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

import LinearGradient from 'react-native-linear-gradient';


const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    smallText: {
        fontSize: 15,
        color: 'gray',
        justifyContent: 'center',

    },
    textContent: {
        justifyContent: 'center',
        // alignItems:'center',
        flexDirection: 'row',
        padding: 5

    },
    textInput: {
        borderWidth: 1,
        borderColor: 'silver',
        justifyContent: 'center',
        width: 'auto',
        backgroundColor: '#DDD',
        padding: 5,
        marginTop: 5,
        width: 350,
        borderRadius: 30
    },
    textButton: {
        borderColor: 'silver',
        justifyContent: 'center',
        width: 'auto',
        backgroundColor: '#DDD',
        padding: 15,
        marginTop: 5,
        width: 350,
        height: 30,
        borderRadius: 30,
        marginLeft: 30
    }

});


export default class BaiTap1 extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Image
                        style={{ width: '100%', height: 'auto' }}
                        source={require('../assets/images/img1.jpg')}
                        resizeMode='stretch'
                    />
                </Row>
                <Row size=''>
                    <Col>
                        <View style={styles.textContent}>
                            <Text style={[styles.heading]}>Welcome to cybersoft</Text>
                        </View>
                        <View style={styles.textContent}>
                            <Text style={[styles.smallText]}>Login to your account</Text>
                        </View>
                        <View style={styles.textContent}>
                            <TextInput style={styles.textInput} placeholder='Email' />
                        </View>
                        <View style={styles.textContent}>
                            <TextInput style={styles.textInput} placeholder='Password' />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <LinearGradient start={{x: 1, y: 1}} end={{x: 0.0, y: 0.0}} style={[styles.textButton]} colors={['#FF6633', '#FFCC99']} >
                               
                                <Text style={{ fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',}}>
                                    Sign in with Facebook
                                </Text>
                            </LinearGradient>
                        </View>
                    </Col>
                </Row>




            </Grid>



        )
    }
}
