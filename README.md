# Calculadora IMC - React Native

Aplicación móvil de calculadora de Índice de Masa Corporal (IMC) desarrollada con React Native como parte de la AEV2 del módulo de Desarrollo de Interfaces.

## 📋 Descripción

Esta aplicación permite calcular el Índice de Masa Corporal (IMC) introduciendo el peso en kilogramos y la altura en centímetros. La aplicación muestra el resultado del cálculo junto con una clasificación del estado de peso según los estándares de la OMS, utilizando un código de colores para facilitar la interpretación.

## 🎯 Objetivos de Aprendizaje

- Familiarizarse con la creación y uso de componentes en React Native
- Practicar el manejo de estados (state) en React Native
- Implementar la lógica de cálculo y condicionales
- Aplicar estilos dinámicos basados en condiciones

## 📐 Fórmula del IMC

```
IMC = Peso (kg) / Altura (m)²
```

**Ejemplo:**
- Peso: 68 kg
- Altura: 165 cm (1,65 m)
- Cálculo: 68 ÷ 1,65² = 24,98

## 📊 Clasificación del IMC

| Rango IMC | Clasificación | Color |
|-----------|--------------|-------|
| < 18,5 | Peso insuficiente | 🟢 Verde |
| 18,5 - 25 | Normopeso | 🟢 Verde |
| 25 - 27 | Sobrepeso grado I | 🟢 Verde |
| 27 - 30 | Sobrepeso grado II (preobesidad) | 🟠 Naranja |
| 30 - 35 | Obesidad de tipo I | 🟠 Naranja |
| 35 - 40 | Obesidad de tipo II | 🟠 Naranja |
| 40 - 50 | Obesidad de tipo III (mórbida) | 🔴 Rojo |
| > 50 | Obesidad de tipo IV (extrema) | 🔴 Rojo |

## 🎨 Código de Colores

- **Verde**: IMC < 27 (Rango saludable)
- **Naranja**: IMC entre 27 y 40 (Precaución)
- **Rojo**: IMC ≥ 40 (Riesgo alto)

## 🛠️ Tecnologías Utilizadas

- React Native
- JavaScript (ES6+)
- React Hooks (useState)
- StyleSheet de React Native

## 📁 Estructura del Proyecto

```
CalculadoraIMC/
├── components/
│   └── CalculadoraIMC.js
├── App.js
├── package.json
└── README.md
```

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js instalado
- npm o yarn
- Expo CLI (opcional) o React Native CLI
- Android Studio (para emulador Android) o Xcode (para emulador iOS)

### Pasos de Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd CalculadoraIMC
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
```

3. Ejecutar la aplicación:
```bash
# Con Expo
npx expo start

# Con React Native CLI
npx react-native run-android
# o
npx react-native run-ios
```

## 💡 Funcionalidades

- ✅ Entrada de peso en kilogramos
- ✅ Entrada de altura en centímetros
- ✅ Cálculo automático del IMC
- ✅ Clasificación del resultado según estándares médicos
- ✅ Código de colores visual (verde, naranja, rojo)
- ✅ Interfaz intuitiva y fácil de usar

## 👨‍💻 Desarrollo

### Componentes Principales

- **CalculadoraIMC**: Componente principal que contiene toda la lógica de la calculadora

### Estados Utilizados

- Estado para el peso
- Estado para la altura
- Estado para el resultado del IMC
- Estado para la clasificación

## 📚 Recursos de Referencia

- [Documentación oficial de React Native](https://reactnative.dev/)
- [React Hooks](https://react.dev/reference/react)
- [Calculadora IMC - Referencia](https://www.cdc.gov/bmi/adult-calculator/)

## 📝 Notas Importantes

- Las clases de componentes se escriben siempre con la primera letra en mayúsculas
- Los componentes deben guardarse en la carpeta `components/`
- El cálculo debe convertir la altura de centímetros a metros antes de aplicar la fórmula

## 🎓 Centro Educativo

**FLORIDA Universitària**  
Módulo: Desarrollo de Interfaces  
Actividad: AEV2

## 📄 Licencia

Este proyecto es parte de una actividad educativa.

---

Desarrollado como parte del módulo de Desarrollo de Interfaces en FLORIDA Universitària