# guane-test-frontend

## Deploy app https://guane.azurewebsites.net/

El despliegue de la aplicación se encuentra en una imagen de docker, que es montada a un registro de contenedores de Azure. Es realizada desde una pipeline de Azure devops, después de cada cambio en la rama deploy, se realiza un trigger a Azure para buildear la imagen, testearla y subirla al registro de contenedores para su posterior montaje en la siguiente web app https://guane.azurewebsites.net/

![image](https://user-images.githubusercontent.com/44074556/139188028-4eb5a13b-844e-427b-88c1-1eebc18f2d2c.png)

## Usos del aplicativo

Se pueden filtrar los personajes por su estado, el cual puede ser "Dead", "Alive", "Unknown" y el filtro "All" funciona para obtener todos los caracteres.

Ademas de tener filtros podemos buiscar a nuestro persona por su nombre y se nos mostrará todas las coincidencias que existen según lo que escribamos.

Por ultimo la paginación funciona para cada uno de los filtros, la busqueda por nombre y el manejo en general mostrabndo el total de resultados. Se mostraran 10 personajes por pagina y al dar click en cada una de las tarjetas se mostrará una vista con más información acerca del personaje.  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
