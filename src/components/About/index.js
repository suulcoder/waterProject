import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import Header from '../Header';
import React, { useEffect, useState } from 'react';
import styles from './styles'
import { normalize } from '../../utils/normalize';
import { Actions } from 'react-native-router-flux';
import { colors } from '../../../configuration';
import { Linking } from 'react-native';

const About = ({ }) => {
  const [alert, changeAlert] = useState(false);

  const showAlert = () => {
    changeAlert(true);
  };

  const hideAlert = () => {
    changeAlert(false);
  };

  useEffect(() => {
    showAlert();
  }, [])
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        <View style={styles.row}>
          <Image style={{
            alignSelf: 'center',
            height: normalize(1200),
            width: '100%',
            resizeMode: 'cover',
            borderRadius: normalize(10),
            marginBottom: normalize(5),
          }}
            source={require('../../../assets/pics/About.jpg')}
          >
          </Image>
          <View style={{ position: 'absolute', top: 0, left: 0, width: 120, height: 300, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.welcomeText}>{'Sobre\nEcofiltro'}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.row}>
            <TouchableOpacity style={styles.element} onPress={() => Actions.HowtoUse(true)}>
              <View style={styles.row1}>
                <Image style={{
                  height: normalize(15),
                  width: normalize(15),
                  resizeMode: 'contain',
                }}
                  source={require('../../../assets/icons/aboutEco.png')}
                ></Image>
                <Text style={styles.text}> {'¿Cómo usar el Ecofiltro?'} </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.element} onPress={() => Actions.Whyitworks(true)}>
              <View style={styles.row1}>
                <Image style={{
                  height: normalize(15),
                  width: normalize(15),
                  resizeMode: 'contain',
                }}
                  source={require('../../../assets/icons/howWorks.png')}
                ></Image>
                <Text style={styles.text}> {'¿Cómo funciona Ecofiltro?'} </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.element} onPress={() => Actions.Stories(true)}>
              <View style={styles.row1}>
                <Image style={{
                  height: normalize(15),
                  width: normalize(15),
                  resizeMode: 'contain',
                }}
                  source={require('../../../assets/icons/Testimonials.png')}
                ></Image>
                <Text style={styles.text}> {'Testimoniales'} </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.element} 
              onPress={() => Linking.openURL('https://www.google.com.gt/maps/search/distribuidor+de+ecofiltro/@14.9099828,-90.7388792,8z')}
            >
              <View style={styles.row1}>
                <Image style={{
                  height: normalize(15),
                  width: normalize(15),
                  resizeMode: 'contain',
                }}
                  source={require('../../../assets/icons/Ubicacion.png')}
                ></Image>
                <Text style={styles.text}> {'¡Encuentra el punto de venta más cercano!'} </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.element} onPress={() => Linking.openURL('https://ecofiltro.com/es/catalogo-productos')}>
              <View style={styles.row1}>
                <Image style={{
                  height: normalize(15),
                  width: normalize(15),
                  resizeMode: 'contain',
                }}
                  source={require('../../../assets/icons/Products.png')}
                ></Image>
                <Text style={styles.text}> {'Descubre nuestros productos'} </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.element} onPress={() => Actions.FAQ(true)}>
              <View style={styles.row1}>
                <Image style={{
                  height: normalize(15),
                  width: normalize(15),
                  resizeMode: 'contain',
                }}
                  source={require('../../../assets/icons/FAQ.png')}
                ></Image>
                <Text style={styles.text}> {'Preguntas Frecuentes'} </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <AwesomeAlert
        show={alert}
        showProgress={false}
        title="Recordatorio"
        message="Recuerda cambiar tu unidad filtrante cada dos años. ¡Utiliza nuestro mapa con los puntos de distribución para encontrar un vendedor cerca de ti!"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={false}
        cancelText="Entendido"
        confirmText="Yes, delete it"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => hideAlert()}
        onConfirmPressed={() => hideAlert()}
      />
    </View>
  );
}

export default connect(
  state => ({

  }),
  dispatch => ({

  }),
)(About);
