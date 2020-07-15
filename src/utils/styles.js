/* Where all stylesheets and constants (for typography) are stored */
import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const bgLight = '#D9DFFF';
export const bgDark = '#BFCBFF';

export const mainLight = '#6C7080';
export const mainDark = '#41434C';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const cardTime = StyleSheet.create({
  wrapper: {
    // TouchableOpacity
    width: '100%',
    height: 80,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
    backgroundColor: bgDark,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  content: {
    // View
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    // View
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 75,
  },
  squareIcon: {
    // View
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  middle: {
    // View
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  right: {
    // View
    marginHorizontal: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export const homePage = StyleSheet.create({
  header: {
    // View
    width: '100%',
    paddingTop: Constants.statusBarHeight + 5,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const configTimePage = StyleSheet.create({
  header: {
    // View
    width: '100%',
    paddingTop: Constants.statusBarHeight + 5,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgDark,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
  },
  item: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 2.5,
    marginVertical: 10,
    //marginHorizontal: 5,
    backgroundColor: bgDark,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtInput: {
    height: 100,
    width: '100%',
    color: mainDark,
    fontSize: 20,
  },
  container: {
    // TouchableOpacity
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    // View
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 75,
  },
  squareIcon: {
    // View
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  right: {
    // View
    marginHorizontal: 5,
    width: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export const texts = StyleSheet.create({
  titleBig: {
    fontSize: 50,
    color: mainLight,
  },
  titleMedium: {
    fontSize: 40,
    color: mainLight,
  },
  titleSmall: {
    fontSize: 25,
    color: mainLight,
  },
  txtBig: {
    fontSize: 20,
    color: mainLight,
  },
  txtMedium: {
    fontSize: 18,
    color: mainLight,
  },
  txtSmall: {
    fontSize: 15,
    color: mainLight,
  },
})