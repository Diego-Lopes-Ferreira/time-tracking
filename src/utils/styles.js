/* Where all stylesheets and constants (for typography) are stored */
import React from 'react';
import { StyleSheet } from 'react-native';

export const bgDark = '#BFCBFF';
export const bgLight = '#D9DFFF';

export const mainLight = '#6C7080';
export const mainDark = '#41434C';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const cardTime = StyleSheet.create({
  wrapper: {
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
    flex: 1,
    flexDirection: 'row',
  },
  squareIcon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  left: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 75,
  },
  middle: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  right: {
    marginHorizontal: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export const texts = StyleSheet.create({
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