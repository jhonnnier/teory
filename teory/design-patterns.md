[Indice](../README.md)
# Tabla de contenido
- [Patrones de diseño](#patrones-de-diseño)

# Patrones de diseño

Los patrones de diseño son soluciones probadas a problemas comunes que surgen en el desarrollo de software. Se dividen en tres categorías principales, cada una con un propósito y momento de uso específicos:

- [Patrones Creacionales](#patrones-creacionales)
    - [¿Cuándo utilizarlos?](#cuándo-utilizarlos)
    - [Ejemplos y casos de uso](#ejemplos-y-casos-de-uso)
- [Patrones Estructurales](#patrones-estructurales)
    - [¿Cuándo utilizarlos?](#cuándo-utilizarlos-1)
    - [Ejemplos y casos de uso](#ejemplos-y-casos-de-uso-1)
- [Patrones de Comportamiento](#patrones-de-comportamiento)
    - [¿Cuándo utilizarlos?](#cuándo-utilizarlos-2)
    - [Ejemplos y casos de uso](#ejemplos-y-casos-de-uso-2)


## Patrones Creacionales

Estos patrones se centran en la creación de objetos, haciendo que el sistema sea independiente de cómo se crean sus objetos. Su objetivo principal es aumentar la flexibilidad y la reutilización del código en el proceso de instanciación.

### ¿Cuándo utilizarlos?

- Cuando necesitas que un sistema sea independiente de cómo se crean, componen y representan sus objetos.
- Cuando la creación de objetos es compleja o implica una lógica específica.
- Cuando quieres ocultar los detalles de la creación de objetos a los clientes.
- Cuando necesitas controlar qué clases concretas se instancian o si una clase solo debe tener una única instancia.

### Ejemplos y casos de uso
- **Singleton**:
  Garantiza que una clase solo tenga una única instancia y proporciona un punto de acceso global a ella. Útil para gestores de configuración, pools de conexiones a bases de datos, o registro de logs.
- **Factory Method**: Proporciona una interfaz para crear objetos en una superclase, permitiendo a las subclases alterar el tipo de objetos que se crearán. Ideal para crear objetos de una familia similar sin especificar su clase concreta.
- **Abstract Factory**: Permite producir familias de objetos relacionados sin especificar sus clases concretas. Útil cuando necesitas crear diferentes productos que pertenecen a una familia, pero no quieres acoplar el cliente a clases concretas.
- **Builder**: Permite construir objetos complejos paso a paso, separando la construcción de un objeto de su representación. Ideal para construir objetos con muchas posibles configuraciones o pasos de construcción.
- **Prototype**: Permite copiar objetos existentes sin que el código dependa de sus clases. Útil cuando la creación de un objeto es costosa o cuando necesitas crear muchos objetos similares a partir de un prototipo.

## Patrones Estructurales

Estos patrones se ocupan de la composición de clases y objetos, ayudando a formar estructuras más grandes mientras se mantiene la flexibilidad y eficiencia. Se centran en cómo organizar clases y objetos para construir nuevas funcionalidades.

### ¿Cuándo utilizarlos?
- Cuando necesitas combinar diferentes clases y objetos para formar estructuras más grandes.
- Cuando buscas organizar las clases y objetos para proporcionar nuevas funcionalidades.
- Cuando quieres simplificar las interfaces complejas o hacer que objetos incompatibles trabajen juntos.
- Cuando necesitas agregar responsabilidades a objetos de forma dinámica sin modificar su código fuente.

### Ejemplos y casos de uso:
- **Adapter**: Permite la colaboración entre objetos con interfaces incompatibles, actuando como un puente entre ellas. Útil cuando quieres usar una clase existente con una interfaz diferente a la que tu cliente espera.
- **Decorator**: Permite añadir nuevas funcionalidades a un objeto de forma dinámica sin alterar su estructura. Es una alternativa flexible a la herencia para extender la funcionalidad.
- **Composite**: Permite componer objetos en estructuras de árbol y trabajar con esas estructuras como si fueran objetos individuales. Ideal para manejar jerarquías de objetos donde los objetos individuales y las composiciones de objetos deben tratarse de la misma manera.
- **Facade**: Proporciona una interfaz simplificada a un conjunto complejo de clases, una biblioteca o un subsistema. Útil para reducir la complejidad y la dependencia entre subsistemas.
- **Proxy**: Permite proporcionar un sustituto o marcador de posición para otro objeto para controlar el acceso a él. Se usa para añadir una capa de control, como el lazy loading, la seguridad o el registro, antes de acceder al objeto real.
- **Bridge**: Permite dividir una clase grande o un grupo de clases estrechamente relacionadas en dos jerarquías separadas (abstracción e implementación) que pueden desarrollarse independientemente. Útil para evitar el "cartesian product" de clases cuando hay múltiples dimensiones de variación.

## Patrones de Comportamiento

Estos patrones se enfocan en la comunicación efectiva y la asignación de responsabilidades entre objetos. Describen cómo interactúan los objetos y las clases para llevar a cabo una tarea, haciendo que los algoritmos y las asignaciones de responsabilidades sean más flexibles.

### ¿Cuándo utilizarlos?
- Cuando necesitas definir cómo interactúan los objetos y las clases entre sí.
- Cuando quieres mejorar la flexibilidad en la comunicación y la asignación de responsabilidades.
- Cuando el comportamiento de un objeto puede cambiar dinámicamente en tiempo de ejecución.
- Cuando buscas desacoplar los algoritmos de los objetos que los utilizan.

### Ejemplos y casos de uso:
- **Strategy**: Permite establecer en tiempo de ejecución el algoritmo o comportamiento de una clase, encapsulando diferentes algoritmos en clases separadas e intercambiables. Útil cuando una clase tiene varios comportamientos que se pueden cambiar dinámicamente.
- **Observer**: Define una dependencia uno a muchos entre objetos, de modo que cuando un objeto cambia de estado, todos sus dependientes son notificados y actualizados automáticamente. Común en sistemas de eventos y desarrollo de videojuegos para notificar cambios.
- **Template** Method: Define el esqueleto de un algoritmo en una operación, posponiendo algunos pasos a las subclases. Permite a las subclases redefinir ciertos pasos de un algoritmo sin cambiar su estructura general.
- **Iterator**: Proporciona una forma de acceder secuencialmente a los elementos de una colección sin exponer su representación subyacente. Útil para recorrer diferentes estructuras de datos de manera uniforme.
- **Command**: Encapsula una solicitud como un objeto, lo que te permite parametrizar clientes con diferentes solicitudes, poner las solicitudes en cola o registrarlas, y soportar operaciones que se pueden deshacer.
- **State**: Permite que un objeto altere su comportamiento cuando su estado interno cambia. El objeto parecerá cambiar su clase. Útil cuando el comportamiento de un objeto depende de su estado y debe cambiar en tiempo de ejecución.

Al entender el propósito de cada categoría y los problemas que resuelven los patrones individuales, podrás elegir la herramienta adecuada para cada desafío de diseño en tu software. La clave es identificar el problema recurrente que estás enfrentando y luego buscar el patrón que mejor se adapte a esa situación, sin forzar su uso.

