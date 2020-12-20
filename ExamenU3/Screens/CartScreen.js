import React, {useContext} from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import {ListItem, Header} from 'react-native-elements';
import {ProductosContext} from '../Context/ProductosContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartScreen = ({navigation}) => {
const {carro, setCarro, total, setTotal, eliminar} = useContext(ProductosContext);
const limpiar =()=>{
        setCarro({})
        setTotal(0)
        navigation.goBack();
        alert("¡Gracias por comprar!")
    }

    return (
        <View style={styles.container}>
           <ScrollView>
        {
            carro.length>0
            ?
            carro.map((c,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{c.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>${c.precio}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Ionicons name='ios-trash' size={25} color={'black'} onPress={()=>eliminar(i,c.precio)}/>
                </ListItem>

            ))
            :
      <Text style={{textAlign:'center', fontSize:20}}>No hay producto</Text>
        }
        </ScrollView> 
                
      <Text style={{ textAlign: 'center', fontSize:30}}> Precio Total: $ {total}</Text>
      <Button
                    onPress={limpiar}
                    title="Comprar"
                />
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        },
/*const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },*/
});
  