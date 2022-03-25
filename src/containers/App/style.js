import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  turn: {
    fontFamily: 'Verdana',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: '6%',
    left: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export const eggStyle = StyleSheet.create({
  eggs: {
    resizeMode: 'contain',
    width: 150,
    height: 250,
  },
});

export const layoutStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

export const homeStyle = StyleSheet.create({
  background: {
    resizeMode: 'cover',
    height: '100%',
  },
  main: {
    paddingHorizontal: 20,
    width: '100%',
  },
  cart: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    position: 'relative',
    width: 200,
    height: 160,
  },
  textTitle: {
    position: 'absolute',
    left: '50%',
    top: '38%',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tutorial: {
    marginTop: -70,
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '100%',
  },
  imgSpin: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  btnOk: {
    height: 180,
    resizeMode: 'contain',
    width: 180,
  },
});
export const spinStyle = StyleSheet.create({
  solarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 50,
    resizeMode: 'contain',
    width: '100%',
  },
  spinImg: {
    height: 180,
    resizeMode: 'contain',
    width: 180,
  },
});
export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: '10%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    elevation: 3,
  },
  button: {
    color: 'white',
    width: '45%',
    textAlign: 'center',
    padding: 5,
    backgroundColor: `rgba(198,140,70,1)`,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  textSmall: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
});
