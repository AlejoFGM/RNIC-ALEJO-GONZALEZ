import {Platform, StyleSheet} from 'react-native';

const isAndroid = Platform.OS === 'android';

export default StyleSheet.create({
  card: {
    margin: 10,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: '#CD5C5C',
    borderStyle: 'dotted',
    padding: 5,
  },
  cardCheck: {
    margin: 10,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: '#CD5C5C',
    padding: 5,
  },
  containerText: {
    alignItems: 'flex-start',
    padding: 10,
  },
  title: {
    fontWeight: '900',
    fontSize: 25,
    color: isAndroid ? 'black' : '#E3E3D6',
  },
  description: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 5,
    fontStyle: 'italic',
    color: isAndroid ? 'black' : '#E3E3D6',
  },
  circleContainer: {
    alignItems: 'flex-end',
    padding: 10,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 5,
    borderStyle: 'dotted',
    borderColor: '#CD5C5C',
  },
  circleCheck: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#CD5C5C',
    backgroundColor: '#CD5C5C',
  },
});
