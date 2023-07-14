import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Card = (props: any) => {
  const {description, title} = props;
  const [state, setState] = useState<boolean>(false);
  return (
    <TouchableOpacity onPress={() => setState(!state)}>
      <View style={state ? styles.cardCheck : styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
