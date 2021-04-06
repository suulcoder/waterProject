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

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class EvaluateWater extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          type: "step",
          image: require("../../../assets/pics/paso1.png"),
        },
        {
          type: "step",
          image: require("../../../assets/pics/paso2.png"),
        },
        {
          type: "step",
          image: require("../../../assets/pics/paso3.png"),
        },
        {
          type: "step",
          image: require("../../../assets/pics/paso4.png"),
        },
        {
          type: "step",
          image: require("../../../assets/pics/moreInfo.png"),
        },
        {
          type: "step",
          image: require("../../../assets/pics/moreInfo.png"),
        },
        {
          type: "step",
          image: require("../../../assets/pics/moreInfo.png"),
        },
        {
          type: "step",
          image: require("../../../assets/pics/load.png"),
        },
        {
          type: "result",
          image: require("../../../assets/pics/resultadoPositivo.png"),
          text: "Esta muestra de agua contiene una cantidad problemática de microbios y no se debería consumir.",
        },
        {
          type: "result",
          image: require("../../../assets/pics/resultadoNegativo.png"),
          text: "Esta muestra de agua no contiene una cantidad problemática de microbios y se puede consumir.",
        },
        {
          type: "result",
          image: require("../../../assets/pics/resultadoNoConcluyente.png"),
          text: "La imagen analizada quizás se encuentra muy borrosa, con mucha luz, o la muestra contiene otro tipo de contaminante.",
        },
      ]
    }
  }

  _renderItem({ item, index }) {
    if (item.type === 'step') {
      return (
        <View style={styles.item}
        >
          <Image
            source={item.image}
            resizeMode='contain'
            style={styles.image}
          />
        </View>
      );
    } else if (item.type === 'result') {
      return (
        <View style={styles.item}
        >
          <Image
            source={item.image}
            resizeMode='contain'
            style={styles.imageResult}
          />
          <Text
            style={styles.textResult}
          >{item.text}</Text>
        </View>
      );
    }
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
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })}
          />
        </View>
      </View>
    );
  }
}

