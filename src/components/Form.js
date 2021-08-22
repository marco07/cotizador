import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props) {
    //console.log(props);
    const {setCapital, setInteres, setMeses} = props;
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInput}>
                <TextInput 
                    placeholder="Cantidad a pedir"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={(e)=> setCapital(e.nativeEvent.text)}
                />
                <TextInput 
                    placeholder="Interes %"
                    keyboardType="numeric"
                    style={[styles.input, styles.Porcentaje]}
                    onChange = {(e) => setInteres(e.nativeEvent.text)}
                />
            </View>
            <RNPickerSelect
            style={pickerSelectStyle}
            useNativeAndroidPickerStyle={false}
            onValueChange={(value) => setMeses(value)}
            placeholder={{
                label:'Seleccionar los plazos ...',
            }}
            items={[
                { label: '3 meses', value: 3 },
                { label: '6 meses', value: 6 },
                { label: '12 meses', value: 12 },
                {label: '24 meses', value: 24}
            ]}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm:{
        position:'absolute',
        bottom:0,
        width:'85%',
        paddingHorizontal:50,
        backgroundColor:colors.PRIMARY_COLOR_DARK,
        borderRadius:30,
        height:180,
        justifyContent:'center'
    },
    viewInput:{
        flexDirection:'row'
    },
    input:{
        height:50,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:colors.PRIMARY_COLOR,
        borderRadius:5,
        width:'60%',
        marginRight: 5,
        marginLeft:-5,
        marginBottom:10,
        color:'#212121',
        paddingHorizontal:20
    },
    Porcentaje:{
        width:'40%',
        marginLeft:15,
    }
});

const pickerSelectStyle = StyleSheet.create({
    inputAndroid:{
        fontSize:16,
        paddingVertical:8,
        paddingHorizontal:10,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:8,
        color:'#212121',
        paddingRight:30,
        backgroundColor:'#fff'

    }
})
