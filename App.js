import { bold } from 'chalk';
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Button
} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';


export default function App() {

    //Estados para capturar valores
    const [capital, setCapital] = useState(null);
    const [interes, setInteres] = useState(null);
    const [meses, setMeses] = useState(null);
    const [total, setTotal] = useState(null);
    console.log(total);

    const calcular = () => {
       if(!capital){
           console.log('Ingrese el capital a solicitar');

       }
       else if(!interes){
        console.log('Ingrese el interes del prestamo');

       }
       else if(!meses){
        console.log('Seleccione los meses a pagar');
       }
       else{
        const i = interes / 100;
        const fee = capital / ((1 - Math.pow(i + 1, -meses)) / i);
        setTotal({
            pagoMensual: fee.toFixed(2).replace('.', ','),
            totalPagar: (fee * meses).toFixed(2).replace('.', ',')
        })      

       }

    }


    return ( 
        <>
        <StatusBar barStyle = "light-content" />
        <View style = { styles.brackground } />  
        <SafeAreaView style = { styles.safeArea } >
        <Text style = { styles.titleApp } > Cotizador de Prestamos </Text>  
        <Form 
           setCapital = { setCapital }
           setInteres = { setInteres }
           setMeses = { setMeses }
        />  
        </SafeAreaView >

        <View>
        <Text> Resultado </Text>
        </View >

        <Footer  calcular={calcular}/>


        </>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        height: 290,
        alignItems: 'center',
    },
    brackground: {
        backgroundColor: colors.PRIMARY_COLOR,
        height: 200,
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: 'absolute',
        zIndex: -1,

    },
    titleApp: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
    }
})