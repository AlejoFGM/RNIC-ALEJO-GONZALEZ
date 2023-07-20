import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Cards} from '../../types/types';

const Card = (props: Cards) => {
  const {description, title, complete} = props;
  const [state, setState] = useState<boolean>(complete);
  return (
    <TouchableOpacity onPress={() => setState(!state)}>
      <View style={state ? styles.cardCheck : styles.card}>
        <View style={styles.containerText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.circleContainer}>
          <View style={state ? styles.circleCheck : styles.circle} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
