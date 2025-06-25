[Indice](../README.md)

## Programación Imperativa

Le dice a la computadora cómo hacer algo, paso a paso.

### Características:

- Se enfoca en el control del flujo (por ejemplo, usando bucles, condicionales).
- Utiliza variables mutables.
- Describe una secuencia de instrucciones que modifican el estado del programa.

Ejemplo en JavaScript (imperativo):

```javascript
const numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log(suma); // 15
```

## Programación Declarativa

Le dice a la computadora qué hacer, sin especificar cómo hacerlo paso a paso.

### Características:

- Se enfoca en el resultado en lugar del proceso.
- A menudo usa funciones puras y evita el estado mutable.
- Es más cercana al lenguaje humano/matemático.

Ejemplo en JavaScript (declarativo):

```javascript
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((a, b) => a + b);

console.log(suma); // 15
```

## Diferencias clave

| Característica    | Imperativa                 | Declarativa                     |
|-------------------|----------------------------|---------------------------------|
| Enfoque           | Cómo se hace               | Qué se quiere lograr            |
| Flujo de control  | Explícito (for, while, if) | Implícito (map, reduce, filter) |
| Estado mutable    | Sí                         | Generalmente no                 |
| Lenguajes comunes | C, Java, Python (en parte) | SQL, HTML, Haskell, Prolog      |

## ¿Cuál usar?

- La programación imperativa es útil cuando necesitas control fino del flujo del programa.
- La declarativa es preferida en escenarios donde la legibilidad, mantenibilidad y expresividad son importantes.

En la práctica, muchos lenguajes modernos (como JavaScript, Python o Java) permiten usar ambos estilos.

## Imperativa en Spring Boot


```java
@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<String> obtenerNombresDeUsuariosActivos() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        List<String> nombresActivos = new ArrayList<>();
    
        for (Usuario usuario : usuarios) {
            if (usuario.isActivo()) {
                nombresActivos.add(usuario.getNombre());
            }
        }
    
        return nombresActivos;
    }
}
```

### Características imperativas:
- Lógica paso a paso.
- Uso explícito de bucle for y condición if.
- Modificación de una lista mutable (nombresActivos).

## Declarativa en Spring Boot

```java

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<String> obtenerNombresDeUsuariosActivos() {
        return usuarioRepository.findAll().stream()
                .filter(Usuario::isActivo)
                .map(Usuario::getNombre)
                .toList();
    }
}
```

### Características declarativas:

- Se expresa qué se quiere: filtrar y mapear.
- Usa Stream, filter, map y toList() de forma encadenada.
- Evita el uso de estructuras mutables y control explícito del flujo.