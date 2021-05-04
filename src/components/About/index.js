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
        <Text style={styles.welcomeText}>
          {'Sobre Ecofiltro'}
        </Text>
        <ScrollView>
          <View style={styles.row}>
            <View>
              <TouchableOpacity style={styles.element} onPress={() => Actions.HowtoUse(true)}>
                <Image style={{
                  alignSelf: 'center',
                  height: normalize(250),
                  width: normalize(250),
                  borderRadius: normalize(50),
                }} source={require('../../../assets/img/howToUse.jpg')} ></Image>
              </TouchableOpacity>
              <Text style={styles.text}> {'¿Cómo usar el Ecofiltro?'} </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.element} onPress={() => Actions.Stories(true)}>
                <Image style={{
                  alignSelf: 'center',
                  height: normalize(250),
                  width: normalize(250),
                  borderRadius: normalize(50),
                }} source={require('../../../assets/img/stories_.jpeg')} ></Image>
              </TouchableOpacity>
              <Text style={styles.text}> {'Testimoniales'} </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <TouchableOpacity style={styles.element} onPress={() => Linking.openURL('https://www.google.com.gt/maps/search/distribuidor+de+ecofiltro/@14.9099828,-90.7388792,8z')}>
                <Image style={{
                  alignSelf: 'center',
                  height: normalize(130),
                  width: normalize(60),
                }}
                  source={require('../../../assets/icons/mapa.png')} ></Image>
              </TouchableOpacity>
              <Text style={styles.text}> {'¡Encuentra el punto de venta más cercano a tí!'} </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.element} onPress={() => Linking.openURL('https://ecofiltro.com/es/catalogo-productos')}>
                <Image style={{
                  alignSelf: 'center',
                  height: normalize(130),
                  width: normalize(60),
                }}
                  source={require('../../../assets/img/productos.png')} ></Image>
              </TouchableOpacity>
              <Text style={styles.text}> {'Descubre los diferentes productos que ofrecemos'} </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <TouchableOpacity style={styles.element} onPress={() => Actions.Whyitworks(true)}>
                <Image style={{
                  alignSelf: 'center',
                  height: normalize(130),
                  width: normalize(60),
                }}
                  source={require('../../../assets/icons/about.png')} ></Image>
              </TouchableOpacity>
              <Text style={styles.text}> {'¿Cómo funciona Ecofiltro?'} </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.element} onPress={() => Actions.FAQ(true)}>
                <Image style={{
                  alignSelf: 'center',
                  height: normalize(90),
                  width: normalize(95),
                }} source={require('../../../assets/icons/question.png')} ></Image>
              </TouchableOpacity>
              <Text style={styles.text}> {'Preguntas frecuentes'} </Text>
            </View>
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
