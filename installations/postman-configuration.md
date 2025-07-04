[Indice](../README.md)

En Postman, tanto ```pm.environment.set(...)``` como ```pm.collectionVariables.set(...)``` se usan para guardar
variables, pero se
diferencian por el ámbito (scope) en el que viven:

------------------

## pm.environment.set("nombre", valor)

Guarda la variable en el entorno actual (Environment).

### Características:

- Solo está disponible cuando un entorno está activo.
- Las variables pueden cambiar por cada entorno (ej: dev, staging, prod).
- Se guardan y persisten entre ejecuciones mientras el entorno esté activo.
- Puedes verlas/modificarlas en la pestaña "Environments".

**Uso típico:**
Guardar datos que cambian por entorno:

------------------

```pm.environment.set("clave", valor)``` solo afecta al entorno que está activo. Si quieres usar diferentes valores para
distintos entornos (dev, staging, prod, etc.), debes:

✅ 1. Crear múltiples entornos en Postman
Ve a la pestaña "Environments" y crea entornos con los mismos nombres de variable, por ejemplo:

| Nombre del entorno | Variable | Valor                                                              |
|--------------------|----------|--------------------------------------------------------------------|
| `dev`              | baseUrl  | [https://dev.api.ejemplo.com](https://dev.api.ejemplo.com)         |
| `staging`          | baseUrl  | [https://staging.api.ejemplo.com](https://staging.api.ejemplo.com) |
| `prod`             | baseUrl  | [https://api.ejemplo.com](https://api.ejemplo.com)                 |

✅ 2. Activar el entorno correspondiente
En la parte superior derecha de Postman, selecciona el entorno desde el selector desplegable.

✅ 3. Usar pm.environment.set(...) para asignar o modificar dinámicamente variables
Este comando solo afecta al entorno actualmente seleccionado:

```javascript
pm.environment.set("token", "abc123");
```

Si tienes activo el entorno dev, esa variable token se guardará en dev. Si luego cambias a prod, ya no estará
disponible.

🎯 Ejemplo práctico completo
🧪 Pre-request Script para generar un token según el entorno

// Simular generación de token según entorno
const environmentName = pm.environment.name;

```javascript
// Simular generación de token según entorno
const environmentName = pm.environment.name;

if (environmentName === "dev") {
    pm.environment.set("token", "dev-token-123");
} else if (environmentName === "staging") {
    pm.environment.set("token", "staging-token-456");
} else if (environmentName === "prod") {
    pm.environment.set("token", "prod-token-789");
}

```

❗ Importante
El mismo código funciona en todos los entornos, pero el valor asignado depende del entorno activo.

No puedes modificar variables de otros entornos desde un entorno distinto.

🛠️ ¿Y si quieres compartir lógica entre entornos?
Usa el mismo nombre de variable (token, baseUrl, etc.) y cambia solo los valores entre entornos. Así puedes reutilizar
las peticiones sin cambiar código.



------------------

## pm.collectionVariables.set("nombre", valor)

Guarda la variable en el ámbito de la colección (Collection Variables).

### Características:

- No depende de un entorno activo.
- Las variables son globales para toda la colección.
- Persisten incluso si cierras Postman.
- Se editan en la pestaña de variables de la colección.

**Uso típico:**
Guardar datos comunes a toda la colección, independientemente del entorno:

------------------

## Comparación rápida:

| Característica              | `pm.environment.set`   | `pm.collectionVariables.set` |
|-----------------------------|------------------------|------------------------------|
| Ámbito                      | Entorno activo         | Toda la colección            |
| Requiere entorno activo     | ✅ Sí                   | ❌ No                         |
| Persiste entre ejecuciones  | ✅ Sí                   | ✅ Sí                         |
| Se puede sobrescribir local | ✅ Sí                   | ✅ Sí                         |
| Prioridad de resolución     | Más específica (mayor) | Menor                        |

## ¿Cuál usar?

| Necesitas...                                            | Usa                          |
|---------------------------------------------------------|------------------------------|
| Variables que cambian según el entorno (dev/prod)       | `pm.environment.set`         |
| Variables fijas para todos los entornos en la colección | `pm.collectionVariables.set` |
| Ejecutar sin entorno activo                             | `pm.collectionVariables.set` |

------------------

En Postman, puedes usar el valor de una variable como parámetro en una petición GET simplemente con la sintaxis de doble
llave {{variable}}, ya sea en la URL, en los parámetros o en headers.

✅ 1. Usar variable directamente en la URL
Supón que tienes una variable llamada userId con valor 12345. Puedes hacer la petición así:

```javascript
    GET
https://api.ejemplo.com/users/{{userId}}
```

📌 Postman reemplazará {{userId}} por 12345 al momento de ejecutar.

✅ 2. Usar variable como parámetro en la sección de Params
En la pestaña Params de la petición:

| KEY    | VALUE        |
|--------|--------------|
| userId | `{{userId}}` |

✅ 3. Usar en headers o body (si aplica)
En la pestaña Headers:

| KEY           | VALUE              |
|---------------|--------------------|
| Authorization | `Bearer {{token}}` |

✅ 4. Cómo definir la variable
Puedes definir userId o cualquier otra variable de varias formas:

a) Manualmente
En la pestaña "Environment" o "Collection", agrega una variable userId con el valor deseado.

b) Automáticamente en scripts:

```javascript
pm.environment.set("userId", "12345");
// o
pm.collectionVariables.set("userId", "12345");
```

🧪 Ejemplo completo de uso en una petición GET:

```javascript
GET
https://api.ejemplo.com/customers/{{customerId}}/orders?status={{orderStatus}}
```

Y tus variables:

| Variable    | Valor   | Scope       |
|-------------|---------|-------------|
| customerId  | 789     | Environment |
| orderStatus | shipped | Collection  |

🧪 Ejemplo en el body

```json
{
  "customerId": "{{customerId}}"
}
```

------------------

## Ejemplos

#### En el script de postman

```javascript
console.clear();
const credentialId = 20301582300

pm.environment.set("getCredentialId", credentialId);
pm.collectionVariables.set("getCredentialId", credentialId);

const responseJson = pm.response.json();
pm.collectionVariables.set("getHasApp", responseJson.credential);
pm.environment.set("getHasApp", responseJson.credential);

if (responseJson.credential) {
    console.info(`El Afiliado con CUIL: ${credentialId} Sí tiene App`);
} else {
    console.warn(`El Afiliado con CUIL ${credentialId} NO tiene APP`);
}
```

```javascript
console.clear();
const credentialId = pm.collectionVariables.get("getCredentialId");
const affiliateHasApp = pm.collectionVariables.get("getHasApp");


if (affiliateHasApp) {
    console.info(`El Afiliado con CUIL "${credentialId}" Sí tiene APP`);
    const responseJson = pm.response.json();

    pm.test("Status code is 201 CREATED", function () {
        pm.response.to.have.status(201);
    });

    const tokenGenerated = responseJson;

    if (tokenGenerated) {
        pm.collectionVariables.set("getTokenGenerated", tokenGenerated);
        pm.collectionVariables.set("getToken", tokenGenerated.token);

        console.info(`Token generado: ${tokenGenerated.token}`);
        console.info(`Token (Fecha expiración): ${formatFecha(tokenGenerated.expires_at)}`);
    } else {
        console.error("No se encontró el token en la respuesta JSON.");
    }

} else {
    console.warn(`El Afiliado con CUIL "${credentialId}" NO tiene APP`);
}


function formatFecha(fechaString) {
// 1. Crear un objeto Date a partir de la cadena
// La cadena "2025-06-06T16:48:32.787200" es un formato ISO 8601,
// que el constructor de Date() de JavaScript puede parsear directamente.
    const fecha = new Date(fechaString);

    // 2. Extraer los componentes de la fecha
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // getMonth() devuelve 0 para enero, 1 para febrero, etc.
    const anio = fecha.getFullYear();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    // 3. Formatear cada componente para asegurar dos dígitos (ej. 06 en lugar de 6)
    // Usamos padStart(2, '0') para añadir un cero inicial si el número es menor de 10.
    const diaFormateado = String(dia).padStart(2, '0');
    const mesFormateado = String(mes).padStart(2, '0');
    const horasFormateadas = String(horas).padStart(2, '0');
    const minutosFormateados = String(minutos).padStart(2, '0');
    const segundosFormateados = String(segundos).padStart(2, '0');

    // 4. Ensamblar la cadena con el formato deseado
    return `${diaFormateado}/${mesFormateado}/${anio} ${horasFormateadas}:${minutosFormateados}:${segundosFormateados}`;
}
```

