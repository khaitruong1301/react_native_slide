import React, { Component, Fragment } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";



const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    textContent: {
        justifyContent: 'center',
      

    },
});


export default class BaiTap1 extends Component {
    render() {
        return (
                // <View>
                //     <Text>dsakjdhksja</Text>
                //             <Text>dsakjdhksja</Text>
                //             <Text>dsakjdhksja</Text>
                //             <Text>dsakjdhksja</Text>
                //             <Text>dsakjdhksja</Text>
                // </View>
            <Grid>
               
                    <Row>
                        <Image
                            style={{ width: '100%', height: 'auto' }}
                            source={require('../assets/images/img1.jpg')}
                            resizeMode='stretch'
                        />
                    </Row>
                    <Row>
                        <Col>
                            <Text>djsahda</Text>
                            <Text>djsahda</Text>
                            <Text>djsahda</Text>
                            <Text>djsahda</Text>
                        </Col>
                    </Row>

            </Grid>



        )
    }
}
