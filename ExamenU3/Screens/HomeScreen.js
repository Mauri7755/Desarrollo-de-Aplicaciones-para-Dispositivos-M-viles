import React, {useContext} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProductosContext} from '../Context/ProductosContext';

const HomeScreen = ({navigation}) => {
const {productos, setProductos, agregar} = useContext(ProductosContext);
    return (
    <View style={styles.container}>
            <Header
        centerComponent={{ text: 'MERCADO LIBRE', style: { color: 'black', fontSize:25} }}
       rightComponent={{ icon: 'shopping-cart', color: 'black', onPress:()=>{ 
                 navigation.navigate('Carrito de Articulos',{status:"add"})
            }}}
            containerStyle={{backgroundColor:'yellow'}}
        />
         <ScrollView>
        {
            productos.length>0
            ?
            productos.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>${a.precio}</ListItem.Subtitle>
                    </ListItem.Content>
                        <Ionicons name='ios-add-circle' size={25} color={'black'} 
                        onPress={()=>agregar(a,a.precio)}/>
                </ListItem>
            ))
            :
      <Text style={{textAlign:'center', fontSize:20}}>NO HAY PRODUCTO</Text>
        }
        </ScrollView>
    </View>
    );
}
 
export default HomeScreen;

const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',
        flex: 1,
    }
});