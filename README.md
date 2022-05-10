# testboot

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

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Informations:
- Lien pour avoir un aperçu https://627a59fd50d7960d7883215d--profound-cheesecake-5ad278.netlify.app/
- Les composants sont des instances de Vue réutilisables
- Le store, sera utilisé pour gérer les états et stocker les données
- main.js servira pour faire des appel à des API en utilisant axios (bibliothèque Javascript)
- Exemple d'appel à une API:
  ```
  Vue.prototype.$api =axios.create({
  baseURL:"https:allweb.fun/coop/api/",
  params:{},
  headers: {'Authorization': "fa7780b85bc0ea3b815aeb6755878bbca747d12d"}
  });
```
