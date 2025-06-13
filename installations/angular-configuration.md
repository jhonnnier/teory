[Indice](../README.md)

# Angular Configuraciones

| Tecnología  | Conocer versión         |
|-------------|-------------------------|
| Angular     | <code>ng version</code> |
| Type Script | <code>tsc -v</code>     |
| Node        | <code>node -v</code>    |

### NODE

Instalar versiones

Ejemplo:

| Descripción                       | Instalar versión node       |
|-----------------------------------|-----------------------------|
| Para ver las versiones instaladas | <code>nvm ls</code>         |
| Para Angular 10                   | <code>nvm install 16</code> |
| Para Angular 20                   | <code>nvm install 20</code> |
| Usar Node v 16                    | <code>nvm use 16</code>     |
| Usar Node v 18 (Proyecto Sempre)  | <code>nvm use 18</code>     |
| Usar Node v 20                    | <code>nvm use 20</code>     |

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

| Descripción                         | Comando                                                                                                                                                      |
|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Crear directiva en librería         | <code>ng g d shared/directives/if-user-art/if-user-art --project=suite</code>                                                                                |
| Crear componente en librería        | <code>ng g c providers/ui/provider/modals/provider-inactivate-history --project=contracts</code>                                                             |
| Instalar nueva versión de librerías | <code>npm uninstall @conexia/cx-suite-drag-and-drop-files --force; npm install @conexia/cx-suite-drag-and-drop-files@0.0.21-beta01 --legacy-peer-deps</code> |
|                                     | <code>npm uninstall @conexia/cx-suite-attachment-list --force; npm install @conexia/cx-suite-attachment-list@0.4.1 --legacy-peer-deps</code>                 |
| Jest                                | <code>npm install --save-dev jest @angular-builders/jest @types/jest --legacy-peer-deps</code>                                                               |












