# guane-test-frontend

## Deploy app

El despliegue de la aplciación se encuntra en una imagen de docker, realiza desde una pipeline de Azure después de cada cambio en la rama deploy, la cual hace un trigger a Azure para buildear la imagen, testearla y montarla a la siguiente web app https://guane.azurewebsites.net/

![image](https://user-images.githubusercontent.com/44074556/139187892-1211a5f1-5bc2-4e3a-b285-5c8cd9737b59.png)


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
