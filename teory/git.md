[Indice](../README.md)


COMANDOS GIT
curso: https://www.youtube.com/playlist?list=PL9xYXqvLX2kMUrXTvDY6GI2hgacfy0rId

Borrar carpeta

rm -rf <nombre carpeta>
Conocer versión git
git --version

Configuraciones y alias

git config --global --list   → Ver configuraciones hechas (name, email.. etc)

git config --global --unset alias.<alias>  →  Eliminar alias, Ejm: comando git config --global --unset alias.c elimina alias checkout

git config --global credential.username "jhsanchez@conexia.com"

git config --global user.email "jhsanchez@conexia.com"

git config --global user.name "Jhonnier Sanchez"

git config --global user.email "jhonnier.sanchez@gmail.com"

git config --global color.ui true

git config --global alias.lg "log --oneline --decorate --all --graph"

git config --global alias.s "status -s"

git config --global alias.b branch

git config --global alias.c checkout

git config --global alias.cm "commit -m"

git config --global alias.am "commit -am"

git config --global alias.a "add ."

git config --global alias.rr "remote remove origin"

git config --global alias.g "git"

git config --global alias.ls "config --global --list"   →  uso: git ls

Gestión de cambios
git init    →  Comienzo de monitoreo del proyecto.
git status   → Estado de los archivos antes de agregar
git add <file>   → Agrega solo el archivo <file> a los cambios pendientes por commit
git add .      → Agrega todos los archivos pendientes por commit

git reset --hard  → deshace todos los cambios. Sin el hard mantienen los cambios localmente.
git reset HEAD <archivo> →   Si queremos revertir un archivo después de add damos el siguiente comando

git commit -m "Primer commit"    →  Guarda los cambios realizados con un mensaje.
git branch -v → muestra los últimos commits de todas las ramas.
git checkout  <file>   → Obtiene la última versión del documento comitiado OJO: se pierden los cambios realizados si no se ha hecho commit.
git commit --amend -m “<new commentary>” → Actualiza el comentario del último commit, luego git push origin <branch> -f  (-f: forzar cambio si no se detecta actualizaciones) para actualizar el repositorio remoto .

git commit --amend -m “SHI15205- add AbsentReasonDTO”

git remote add origin URLProject  → sacar url de git clone y es la que Vincula el repositorio local con un repositorio remoto
Ejemplo
git remote add origin  https://jhonnnier@bitbucket.org/fullstack-unit-test/01-jestjs-angular.git

luego
git pull origin master
git push origin master ó git push -f origin master
git remote -v →  Muestra las configuraciones remotas
git remote remove origin →  Elimina las configuraciones remotas.

git push origin <BranchName> →  Sube los cambio al repositorio remoto.
git commit -am “<new commentary>” → Hace add y commit con comentario

git pull origin master --allow-unrelated-histories   → Combina información de archivos remotos con archivos locales.

Hacer seguimiento
git branch --set-upstream-to=origin/master   y luego descargamos con el comando git pull

git push --set-upstream origin master  → subir todo lo guardado.


Viajar entre commits:
git log
Seleccionar el código SHA de un commit anterior:

git checkout f0b305b27ea581f35a660e8a39281d400d8f0531

git checkout master →  Obtener los cambios del último commit.

git log > commits.txt  →  Crea un archivo txt con todos los commits.

Eliminar commits (https://www.youtube.com/watch?v=vH9pkFf1D7M)
git reset --soft 52b95bd651060c6080fb1d47a5c531a65ab5a61d   → Elimina el commit y deja el código actual.
git reset --hard 52b95bd651060c6080fb1d47a5c531a65ab5a61d  → Elimina el commit y borra todo.

Forzar descarga de archivos
En Git no existe un parámetro para forzar a sobrescribir los datos locales que hubiera. Pero sí disponemos de otra forma de conseguir el mismo objetivo:
$ git fetch --all
Esto hará que actualicemos nuestro servidor local de Git con lo que existe en el servidor central, pero sin tocar nada en nuestra copia local.

$ git reset --hard origin/master
Y con esto pondremos como copia local la última versión que esté en la rama origin/master (podemos usar cualquier otra rama, por supuesto). Sobrescribiendo todos los ficheros locales.
REPOSITORIOS
Proyecto
URL
STORE Front
git remote add origin https://bitbucket.org/jhonnnier/store-front/src/master/
GitTest
git remote add origin  https://bitbucket.org/jhonnnier/gittest/src/master/
shoppingIonic
git remote add origin https://jhonnnier@bitbucket.org/jhonnnier/shoppingionic.git
myexpenses
git remote add origin https://jhonnnier@bitbucket.org/jhonnnier/myexpenses.git
trello-front
git remote add origin https://jhonnnier@bitbucket.org/discalis/trello-front.git
angal-firma-docs-front
git remote add origin https://jhonnnier@bitbucket.org/discalis/angal-firma-docs-front.git


RAMAS
Las ramas son utilizadas para desarrollar funcionalidades aisladas unas de otras. La rama master es la rama "por defecto" cuando creas un repositorio. Crea nuevas ramas durante el desarrollo y fusionarlas a la rama principal cuando termines.



git fetch  →  Actualizar ramas remotas en el equipo local y luego hacer un git checout a la rama que se necesita.
git branch <nombre rama = Test>  → Crear la rama Test
git  branch -D <branchName> →  Eliminar rama (ubicarse sobre otra rama) .
git checkout -b <NewBranchName>  → Crea una rama nueva y se ubica en ella (se ahorra de ejecutar el comando git checkout <NewBranchName>)
git branch  → Muestra las ramas.
Test
* master

git checkout Test  → Cambia a la Rama Test
Switched to branch 'Test'

git branch  → Muestra las ramas.
* Test
  master

git branch -a → Listar todas las ramas existententes en el repositorio
git checkout -t remotes/…. →    Referenciar la rama que queremos tener localmente

(https://www.youtube.com/watch?v=-UQulO_0prM) min 9
git merge <Rama a absorber (Test) > →  Fusiona la rama Test sobre la rama en la que estamos ubicados, en este caso, si nos encontramos en la rama que va a absorber (Master), todos los cambios de la rama Test ya se verían reflejados en Master
git diff <Rama a comparar> → compara la rama actual con la rama especificada

crear rama en arbol y subir al repositorio la subrama
git checkout -b SP73/SHI-12345
git push origin -u SP73/SHI-12345:SHI-12345  :<nuevo nombre>

Renombrar rama
Ubicarse en la rama que se quiere cambiar el nombre y ejecutar: git branch -m <Nuevo nombre>
Para subir la rama al repositorio: git push origin <nombre de la rama>
esto crea una nueva rama, tanto en local como en remoto, si es necesario hay que eliminar las ramas que tienen el nombre anterios.





TAGS (Releases)
Sirven para establecer las versiones del proyecto, estas versiones son asignadas a uno o más commits:

git tag -a v1.0 -m “<Mensaje>” → Crea un tag
git tag -a vX.X -m “<Mensaje>” <código SHA> → Crea un Tag sobre un commit de código SHA seleccionado.
git push origin --tags → Sube todos los tags creados.
git push origin vX.X sube un tag con versión especifica
git tag -> lista los tags locales
git ls-remote → tags origin  lista todos los tags de la rama remota
git tag -d v.X.X  ->



luego ejecutar el comando para subir al repositorio remoto: git push origin vX.X





DESCARGAR FUENTES DE UNA COMUNIDAD DE TRABAJO
https://www.youtube.com/watch?v=VMInoluaZ9o&list=PL9xYXqvLX2kMUrXTvDY6GI2hgacfy0rId&index=7











Forward Merge
Cuando GIT detecta que se ejecutaron cambios en líneas diferentes y combina todos los cambios.

Manual Merge
Cuando GIT detecta que se ejecutaron cambios sobre una misma línea.

Ejemplo:
Usuario Dev01
Usuario Dev02

Escenario
Los dos usuarios están trabajando en el mismo archivo que ya está en un repositorio remoto y ejecutan cambios iguales en la misma linea.
Usuario Dev02 sube cambios al repositorio remoto (git push origin <branch>) del archivo index.html
Si el Usuario Dev01 intenta subir los cambios  (git push origin <branch>) se genera un error ya que GIT detecta que Dev01 no tiene los últimos cambios:


la solución a lo anterior es que Dev01 debe bajar los cambios a la rama oculta origin/master con  (git fetch origin)


Luego, Dev01, debe ejecutar el comando  (git merge origin/master) para visualizar los cambios de Dev02 pero GIT informa un error de conflictos en el archivo index.html de forma Manual Merge ya que Dev02 subió cambios y Dev01 tiene cambios en el mismo archivo




Conflicto:


<<<<<<<< HEAD → es el último commit donde estábamos de Dev01
>>>>>>>>origin/master → Cambios de Dev02

Dev01 y Dev02 deben decidir qué cambio debe quedar
Dev01 elimina el conflicto, borra etiqueta <<<HEAD y >>>origin/master, luego ejecutar git add .   git commit -m “mensaje”   git push origin master.


Luego Dev02 tiene que bajar los cambios modificados por Dev01


Comando Stash

Este comando de git sirve para guardar local y temporalmente una captura de los cambios sin enviarlos al repositorio.
Esta funcionalidad es útil cuando has hecho cambios en una rama y no estás listo para realizarle commit, pero necesitas cambiar a otra rama.

Guardar cambios en el stash
Para guardar tus cambios en el stash, ejecuta el comando:

git stash save "mensaje opcional para ti"
Esto guarda los cambios y revierte el directorio de trabajo a como se veía en tu último commit. Los cambios guardados están disponibles y los puedes aplicar luego en cualquier rama de ese repositorio.



Ver los cambios guardados en el stash
git stash list
Con este comando verás el listado de cambios guardados y el nombre de cada stash.
Recuperar Cambios en Stash
git stash apply NOMBRE-DEL-STASH aplica los cambios y deja una copia en el stash
git stash pop NOMBRE-DEL-STASH aplica los cambio y elimina los archivos del stash




