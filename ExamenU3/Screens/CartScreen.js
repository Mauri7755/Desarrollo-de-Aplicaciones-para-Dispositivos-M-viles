import React, {useContext} from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import {ListItem, Header} from 'react-native-elements';
import {ProductosContext} from '../Context/ProductosContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartScreen = ({navigation}) => {
const {carrito, setCarro, total, setTotal, eliminar} = useContext(ProductosContext);
const limpiar =()=>{
        setCarro({})
        setTotal(0)
        navigation.goBack();
        alert("¡Gracias Por Su Compra, Vuelva Pronto!")
    }
    return (
        <View style={styles.container}>
           <ScrollView>
        {
            carrito.length>0
            ?
            carrito.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>${a.precio}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Ionicons name='ios-trash' size={25} color={'black'} onPress={()=>eliminar(i,a.precio)}/>
                </ListItem>
            ))
            :
      <Text style={{ textAlign:'center', fontSize:20}}>No Hay Producto</Text>
        }
        </ScrollView>      
      <Text style={{ textAlign: 'center', fontSize:30}}> PRECIO TOTAL: $ {total}</Text>
      <Button
                    onPress={limpiar}
                    title="Comprar"
                />
        </View>
    )}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        }
});
  