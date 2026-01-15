import { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Importamos el componente desde la carpeta components
import Calculadora from './components/Calculadora';

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Calculadora IMC</Text>
        </View>

        {/* Componente con la lógica */}
        <View style={styles.content}>
          <Calculadora />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Borja Pardo Juanes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#6A1B9A',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    color: 'red',
    fontWeight: 'bold',
  },
  footer: {
    padding: 10,
    width: '100%',
  },
  footerText: {
    color: '#CCC',
    fontSize: 14,
  },
});
