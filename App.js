import React,{ useState, useEffect} from  'react';
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
import Resultado from './src/components/Resultado';
export default function App(){
  //Estado para capturar valores
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMensaje, setErrorMensaje] = useState(null);
  
  useEffect(()=>{
    if(capital && interes && meses) calcular();
    else reset();
  }, [capital, interes, meses]);


  const calcular = () =>{
    reset();
    if(!capital){
      setErrorMensaje('Ingrese el capital a solicitar');
    }
    else if(!interes){
      setErrorMensaje('Ingrese el interes del prestamo');
    }
    else if(!meses){
      setErrorMensaje('Selecciona los meses a pagar');
    }else{
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i+1, -meses))/i);
      setTotal({
        pagoMensual: fee.toFixed(2).replace('.',','),
        totalPagar : (fee * meses).toFixed(2).replace('.', ',')
      })
    }
  }

  const reset = () =>{
    setErrorMensaje('');
    setTotal(null);
  };



  return(
    <>
    <StatusBar barStyle="light-content" />
    <View style={styles.background} />
    <SafeAreaView style={styles.safeArea}>
    <Text style={styles.titleApp}>Cotizador de prestamos</Text>
    <Form 
      setCapital = {setCapital}
      setInteres = {setInteres}
      setMeses = {setMeses}
    />
    </SafeAreaView>
    <View>
      <Resultado 
        capital={capital}
        interes={interes}
        meses={meses}
        total={total}
        errorMensaje={errorMensaje}

      />
    </View>
    <Footer calcular = {calcular}/>
    </>
  )
}
const styles = StyleSheet.create({
  safeArea:{
    height:290,
    alignItems:'center',
  },
  background:{
    backgroundColor:colors.PRIMARY_COLOR,
    height:200,
    width:'100%',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    position:'absolute',
    zIndex:-1,

  },
  titleApp:{
    fontSize:25,
    fontWeight:'bold',
    marginTop:10,
    color:'#fff',

  }

})
