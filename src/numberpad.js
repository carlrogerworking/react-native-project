import React, { Component } from 'react';
import {
    View,
    ViewPropTypes,
    TouchableOpacity,
    StyleSheet,
    Text,
    Platform
} from 'react-native';

const NumberPad = () =>{

    function addToAlertValue(input) {
        let item = '';
        alert(input);
    }

    return (
        <View rkCardContent>
            <Text style={{textAlign:'center'}} >$0</Text>
            <View style={{height: 300}}>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, flexDirection: 'row',justifyContent:'center'}}>
                        <View style={styles.numberPadColumn}>
                            <TouchableOpacity onPress={()=>this.addToAlertValue('1')}>
                                <Text style={{textAlign:'center'}} >1</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.numberPadColumn}>
                            <TouchableOpacity onPress={()=>this.addToAlertValue('2')}>
                                <Text style={{textAlign:'center'}} >2</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.numberPadColumn}>
                            <TouchableOpacity onPress={()=>this.addToAlertValue('3')}>
                                <Text style={{textAlign:'center'}}
                                        >3</Text></TouchableOpacity></View>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, flexDirection: 'row',justifyContent:'center'}}>
                        <View style={styles.numberPadColumn}>
                            <TouchableOpacity onPress={()=>this.addToAlertValue('4')}>
                                <Text style={{textAlign:'center'}}
                                        >4</Text></TouchableOpacity></View>
                        <View style={styles.numberPadColumn}>
                            <TouchableOpacity onPress={()=>this.addToAlertValue('5')}><Text
                                style={{textAlign:'center'}}
                                >5</Text></TouchableOpacity></View>
                        <View style={styles.numberPadColumn}>
                            <TouchableOpacity onPress={()=>this.addToAlertValue('6')}><Text
                                style={{textAlign:'center'}}
                                >6</Text></TouchableOpacity></View>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, flexDirection: 'row',justifyContent:'center'}}>
                        <View style={styles.numberPadColumn}><TouchableOpacity><Text
                            style={{textAlign:'center'}}
                            onPress={()=>this.addToAlertValue('7')}>7</Text></TouchableOpacity></View>
                        <View style={styles.numberPadColumn}><TouchableOpacity><Text
                            style={{textAlign:'center'}}
                            onPress={()=>this.addToAlertValue('8')}>8</Text></TouchableOpacity></View>
                        <View style={styles.numberPadColumn}><TouchableOpacity><Text
                            style={{textAlign:'center'}}
                            onPress={()=>this.addToAlertValue('9')}>9</Text></TouchableOpacity></View>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, flexDirection: 'row',justifyContent:'center'}}>
                        <View style={styles.numberPadColumn}><TouchableOpacity><Text
                            style={{textAlign:'center'}}
                            onPress={()=>this.addToAlertValue('.')}>.</Text></TouchableOpacity></View>
                        <View style={styles.numberPadColumn}><TouchableOpacity><Text
                            style={{textAlign:'center'}}
                            onPress={()=>this.addToAlertValue('0')}>0</Text></TouchableOpacity></View>
                        <View style={styles.numberPadColumn}><TouchableOpacity><Text
                            style={{textAlign:'center'}}
                            onPress={()=>this.addToAlertValue('<')}>&lt;</Text></TouchableOpacity></View>
                    </View>
                </View>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    // Number Pad
    numberPadRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    numberPadColumn: {
        width: '33.3%',
        height: '100%',
        justifyContent: 'center'
    }
});

export default NumberPad;