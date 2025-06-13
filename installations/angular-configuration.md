[Indice](../README.md)

# Angular Configuraciones

| Tecnología  | Conocer versión |
|-------------|-----------------|
| Angular     | ng version      |
| Type Script | tsc -v          |
| Node        | node -v         |

### NODE

Instalar versiones

Ejemplo:

| Instalar versión node | Descripción                       |
|-----------------------|-----------------------------------|
| nvm ls                | Para ver las versiones instaladas |
| nvm install 16        | Para Angular 10                   |
| nvm install 20        | Para Angular 20                   |
| nvm use 16            | Usar Node v 16                    |
| nvm use 18            | Usar Node v 18 (Proyecto Sempre)  |
| nvm use 20            | Usar Node v 20                    |

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

| Descripción                         | Comando                                                                                                                                         |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Crear directiva en librería         | ng g d shared/directives/if-user-art/if-user-art --project=suite                                                                                |
| Crear componente en librería        | ng g c providers/ui/provider/modals/provider-inactivate-history --project=contracts                                                             |
| Instalar nueva versión de librerías | npm uninstall @conexia/cx-suite-drag-and-drop-files --force; npm install @conexia/cx-suite-drag-and-drop-files@0.0.21-beta01 --legacy-peer-deps |
|                                     | npm uninstall @conexia/cx-suite-attachment-list --force; npm install @conexia/cx-suite-attachment-list@0.4.1 --legacy-peer-deps                 |
| Jest                                | npm install --save-dev jest @angular-builders/jest @types/jest --legacy-peer-deps                                                               |












