import { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: '',
      imc: 0,
      clasificacion: '',
      colorResultado: 'black', // Color por defecto
    };
  }

  calcularIMC = () => {
    // Convertimos el texto a números flotantes
    // Reemplazamos coma por punto por si el teclado es español
    const peso = parseFloat(this.state.peso.replace(',', '.'));
    const altura = parseFloat(this.state.altura.replace(',', '.'));

    if (peso > 0 && altura > 0) {
      // Fórmula: Peso (kg) / altura (m)²
      const imcCalculado = peso / (altura * altura);

      let clasificacionTexto = '';
      let colorTexto = 'black';

      // Lógica de clasificación según tabla
      if (imcCalculado < 18.5) clasificacionTexto = 'Peso insuficiente';
      else if (imcCalculado < 25) clasificacionTexto = 'Normopeso';
      else if (imcCalculado < 27) clasificacionTexto = 'Sobrepeso grado I';
      else if (imcCalculado < 30)
        clasificacionTexto = 'Sobrepeso grado II (preobesidad)';
      else if (imcCalculado < 35) clasificacionTexto = 'Obesidad de tipo I';
      else if (imcCalculado < 40) clasificacionTexto = 'Obesidad de tipo II';
      else if (imcCalculado < 50)
        clasificacionTexto = 'Obesidad de tipo III (mórbida)';
      else clasificacionTexto = 'Obesidad de tipo IV (extrema)';

      // Lógica de colores según reglas
      if (imcCalculado < 27) {
        colorTexto = 'green';
      } else if (imcCalculado >= 27 && imcCalculado < 40) {
        colorTexto = 'orange';
      } else {
        colorTexto = 'red';
      }

      // Actualizamos el estado con los resultados
      this.setState({
        imc: imcCalculado,
        clasificacion: clasificacionTexto,
        colorResultado: colorTexto,
      });
    } else {
      this.setState({
        clasificacion: 'Introduce datos válidos',
        colorResultado: 'black',
      });
    }
  };

  render() {
    return (
      <View style={styles.contenedor}>
        <View style={styles.seccionDatos}>
          <Text style={styles.tituloDatos}>Datos</Text>

          <Text style={styles.label}>PESO</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ peso: text })}
            value={this.state.peso}
            keyboardType="numeric"
            placeholder="Ej: 85"
          />

          <Text style={styles.label}>ALTURA</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ altura: text })}
            value={this.state.altura}
            keyboardType="numeric"
            placeholder="Ej: 1.88"
          />
        </View>

        <View style={styles.botonContainer}>
          <Button title="Calcular IMC" onPress={this.calcularIMC} />
        </View>

        <View style={styles.resultadoContainer}>
          <Text style={styles.tituloResultado}>Resultado</Text>
          {/* Mostramos la clasificación con el color dinámico */}
          <Text
            style={[
              styles.textoClasificacion,
              { color: this.state.colorResultado },
            ]}>
            {this.state.clasificacion}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 20,
    margin: 7,
    backgroundColor: '#fff',
  },
  seccionDatos: {
    marginBottom: 20,
  },
  tituloDatos: {
    fontSize: 24,
    color: 'red',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    color: 'blue',
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 5,
    fontSize: 18,
    color: 'black',
  },
  botonContainer: {
    marginVertical: 20,
  },
  resultadoContainer: {
    marginTop: 10,
  },
  tituloResultado: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  textoClasificacion: {
    fontSize: 20,
    fontWeight: 'bold',
    minHeight: 30,
  },
});
