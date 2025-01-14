import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>

        <Stack.Screen options={{title: 'Oops Not found'}}/>
        <View style={styles.container}>
            <Link href="./" style={styles.button}>
                Go back to the Home screen
            </Link>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '@fff',
  }
});
