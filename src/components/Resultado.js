import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Resultado(props) {
    const {capital, interes, meses, total, errorMensaje} = props;
    return (
        <View style={styles.content}>
            { total && (
                    <View style={styles.boxResultado}>
                        <Text style={styles.title}>Resumen</Text>
                        <DataResult title="Cantidad Solicitada: " value={`$ ${capital}`} />
                        <DataResult title="Interes %: " value={`${interes} %`} />
                        <DataResult title="Plazos: " value={`${meses} meses`} />
                        <DataResult title="Pago mensual: " value={`$ ${total.pagoMensual}`} />
                        <DataResult title="Total a pagar: " value={`$ ${total.totalPagar}`} />
                    </View>
                )}
                <View>
                    <Text style={styles.error}>{errorMensaje}</Text>
                </View>


        </View>
    );
}

function DataResult(props){
    const{title, value} = props;
    return(
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content:{
        marginHorizontal:40
    },
    boxResultado:{
        padding:30
    },
    title:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:20
    },
    value:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 20
    },
    error:{
        textAlign:'center',
        color:'#f00',
        fontWeight:'bold',
        fontSize:20
    }
})
