import * as React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Header from '../Header';
import styles from './styles'

const SLIDER_WIDTH = Dimensions.get('window').width;

export default class EvaluateWater extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          image: require("../../../assets/img/Paso1.png"),
        },
        {
          image: require("../../../assets/img/Paso2.png"),
        },
        {
          image: require("../../../assets/img/Paso3.png"),
        },
        {
          image: require("../../../assets/img/Paso4.png"),
        },
        {
          image: require("../../../assets/img/Paso5.png"),
        },
        {
          image: require("../../../assets/img/Paso6.png"),
        },
        {
          image: require("../../../assets/img/Paso7.png"),
        },
        {
          image: require("../../../assets/img/Paso8.png"),
        },
        {
          image: require("../../../assets/img/ResultadoPositivo.png"),
        },
        {
          image: require("../../../assets/img/ResultadoNegativo.png"),
        },
        {
          image: require("../../../assets/img/ResultadoNoConcluyente.png"),
        },
      ]
    }
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.item}
      >
        <Image
          source={item.image}
          resizeMode='stretch'
          style={styles.image}
        />
      </View>

    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.carousel}>
          <Carousel
            layout={"default"}
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={SLIDER_WIDTH}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })} 
          />
        </View>
      </View>
    );
  }
}

