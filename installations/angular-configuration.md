[Indice](../README.md)

# Angular Configuraciones

| Tecnología  | Conocer versión       |
|-------------|-----------------------|
| Angular     | <pre>ng version</pre> |
| Type Script | <pre>tsc -v</pre>     |
| Node        | <pre>node -v</pre>    |

### NODE

Instalar versiones

Ejemplo:

| Instalar versión node     | Descripción                       |
|---------------------------|-----------------------------------|
| <pre>nvm ls</pre>         | Para ver las versiones instaladas |
| <pre>nvm install 16</pre> | Para Angular 10                   |
| <pre>nvm install 20</pre> | Para Angular 20                   |
| <pre>nvm use 16</pre>     | Usar Node v 16                    |
| <pre>nvm use 18</pre>     | Usar Node v 18 (Proyecto Sempre)  |
| <pre>nvm use 20</pre>     | Usar Node v 20                    |

## Angular

### Instalar de forma global

```
npm install -g @angular/cli@latest
```

### Instalar de forma local

Angular 10

```
npm install @angular/cli@10 --save-dev
```

Angular 18

```
npm install @angular/cli@latest  --save-dev
```

### Otros comandos

```
export NODE_OPTIONS=--max-old-space-size=4096

rm -rf node_modules package-lock.json

npm cache clean --force

npm install --force

npm install --legacy-peer-deps



export NODE_OPTIONS=--max-old-space-size=4096 && rm -rf node_modules package-lock.json && npm cache clean --force && npm install --force

rm -rf node_modules package-lock.json && npm cache clean --force && npm install --legacy-peer-deps"

```

| Descripción                         | Comando                                                                                                                                                    |
|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Crear directiva en librería         | <pre>ng g d shared/directives/if-user-art/if-user-art --project=suite</pre>                                                                                |
| Crear componente en librería        | <pre>ng g c providers/ui/provider/modals/provider-inactivate-history --project=contracts</pre>                                                             |
| Instalar nueva versión de librerías | <pre>npm uninstall @conexia/cx-suite-drag-and-drop-files --force; npm install @conexia/cx-suite-drag-and-drop-files@0.0.21-beta01 --legacy-peer-deps</pre> |
|                                     | <pre>npm uninstall @conexia/cx-suite-attachment-list --force; npm install @conexia/cx-suite-attachment-list@0.4.1 --legacy-peer-deps</pre>                 |
| Jest                                | <pre>npm install --save-dev jest @angular-builders/jest @types/jest --legacy-peer-deps</pre>                                                               |












