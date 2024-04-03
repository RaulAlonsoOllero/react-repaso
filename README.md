# react-repaso
# Para crear una aplicacion react: npx create-react-app

# JSX
JSX (JavaScript XML) es una extensión de la sintaxis de JavaScript que permite escribir elementos de interfaz de usuario de React de una manera similar a la escritura de HTML. JSX es una característica clave de React y proporciona una forma más intuitiva y declarativa de definir la estructura de los componentes de React.

En JSX, puedes escribir etiquetas HTML directamente dentro de tu código JavaScript. Por ejemplo:

const element = <h1>Hello, world!</h1>;

Esto se ve muy similar a escribir HTML, pero en realidad es una sintaxis de JavaScript que se compila en llamadas a funciones de React.

Las principales características de JSX son:

    Sintaxis familiar: JSX se parece mucho a HTML, lo que facilita la escritura y lectura del código para aquellos familiarizados con HTML.

    Expresividad: JSX te permite usar expresiones de JavaScript dentro de las llaves {}. Esto significa que puedes incluir variables, funciones y operaciones dentro de tus componentes de JSX.

    Integración con JavaScript: JSX se integra perfectamente con JavaScript, lo que significa que puedes usar cualquier característica de JavaScript dentro de tus componentes JSX.

    Preprocesamiento: Antes de que el navegador pueda entender JSX, necesita ser compilado en JavaScript válido. Esto es generalmente manejado por herramientas como Babel, que transforman el código JSX en llamadas a funciones de React.

Ejemplo de cómo se compila JSX a JavaScript válido:

// JSX
const element = <h1>Hello, world!</h1>;

// JavaScript compilado
const element = React.createElement('h1', null, 'Hello, world!');

En resumen, JSX es una extensión de la sintaxis de JavaScript que permite escribir código de interfaz de usuario en React de una manera más intuitiva y expresiva, al proporcionar una sintaxis similar a HTML para definir componentes.

# Funciones sincronas y asincronas
En React, asíncrono y síncrono se refieren al modo en que las operaciones se ejecutan y se manejan en la interfaz de usuario.

    Síncrono: En programación síncrona, las operaciones se ejecutan una tras otra, en secuencia. Esto significa que el programa espera a que una operación se complete antes de pasar a la siguiente. En el contexto de React, si una operación es síncrona, la interfaz de usuario se bloqueará hasta que esa operación se complete. Esto puede resultar en una experiencia de usuario poco fluida si la operación es larga o pesada.

    Asíncrono: En contraste, en la programación asíncrona, las operaciones se pueden iniciar y ejecutar en segundo plano mientras el programa principal sigue ejecutándose. Esto significa que una operación puede iniciarse y el programa puede continuar ejecutándose sin esperar a que esa operación se complete. En React, esto es especialmente útil para tareas como la obtención de datos de un servidor, donde no deseas bloquear la interfaz de usuario mientras esperas la respuesta del servidor.

React proporciona formas de trabajar tanto con operaciones asíncronas como síncronas. Por ejemplo, puedes usar funciones asíncronas junto con await para manejar operaciones asíncronas de manera limpia y efectiva. También puedes utilizar la API de efectos (useEffect hook) para realizar operaciones asíncronas dentro de componentes de React. Esto permite que tu interfaz de usuario siga siendo receptiva incluso cuando se están realizando operaciones largas en segundo plano.