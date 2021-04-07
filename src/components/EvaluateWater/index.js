import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Header from '../Header';
import styles from './styles';
import NegativeResult from '../NegativeResult';
import PositiveResult from '../PositiveResult';
import InconclusiveResult from '../InconclusiveResult';
import Step1 from '../Step1';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class EvaluateWater extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          component: Step1,
        },
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
          component: PositiveResult,
        },
        {
          component: InconclusiveResult,
        },
        {
          component: NegativeResult,
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
          <TouchableOpacity style={styles.submit}>
            <Text style={styles.submitText}> {'Analizar otra imagen'} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submit}>
            <Text style={styles.submitText}> {'Página Principal'} </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <item.component />
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

