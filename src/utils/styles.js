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
    fontSize: 12,
    color: mainDark,
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
    backgroundColor: bgLight,
    borderColor: bgDark,
    borderStyle: 'solid',
    borderWidth: 1,
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

export const settingsPage = StyleSheet.create({
  wrapper: {
    // TouchableOpacity
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 1,
    paddingHorizontal: 5,
    //backgroundColor: '#ff0'
  },
  header: {
    // View
    width: '100%',
    paddingTop: Constants.statusBarHeight + 5,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgDark,
  },
  squareIcon: {
    // View
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#ff0000',
    margin: 5,
    marginLeft: 15,
  },
  itemSide: {
    // View
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

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