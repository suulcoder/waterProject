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
import Step2 from '../Step2';
import Step3 from '../Step3';
import Step4 from '../Step4';
import Step5 from '../Step5';
import Step6 from '../Step6';
import Step7 from '../Step7';
import Step8 from '../Step8';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class EvaluateWater extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          type: "step",
          component: Step1,
        },
        {
          type: "step",
          component: Step2,
        },
        {
          type: "step",
          component: Step3,
        },
        {
          type: "step",
          component: Step4,
        },
        {
          type: "step",
          component: Step5,
        },
        {
          type: "step",
          component: Step6,
        },
        {
          type: "step",
          component: Step7,
        },
        {
          type: "step",
          component: Step8,
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
      return <item.component go={() => { this._carousel.snapToNext()}} back={() => { this._carousel.snapToPrev()}} />;
    } else {
      return <item.component />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.carousel}>
          <Carousel
            layout={"default"}
            ref={ref => this._carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            renderItem={this._renderItem.bind(this)}
            onSnapToItem={index => this.setState({ activeIndex: index })}
          />
          </View>
      </View>
    );
  }
}

