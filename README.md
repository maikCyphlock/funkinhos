# FUNKO POP APP HECHO CON [Astro](https://astro.build)

> **este proyecto es parte de una serie de proyectos hechos por mi mismo** poniendo en practica todos los conocimentos de programación que tengo

![funko pop](https://user-images.githubusercontent.com/66704744/202806978-b83a1b79-f51f-48e9-8b2e-6073e295c513.png)


## ¿por qué astro?
me gusta el concepto de las Island la cual me permite tener control sobre el codigo que quiero que se ejecute en el navegador, haciendo uso de ssr, lo intenté con next 13 pero aun está en beta y muchas de las funcionalidades de ssr dan error con tailwind y la hidratación no se da correctamente, a diferencia de astro.




## 🚀 Algolia y las api
esta idea surge de que me gustan los funkos, y decidí crear una api basada en el proyecto [funko pop data](https://github.com/kennymkchan/funko-pop-data), entonces opté por usar estos datos y subirlos a algolia, y creé las colecciones de los funkos permitiendo usar el poder de algolia para indexar datos y su herramienta de busqueda con autocompletado

![image](https://user-images.githubusercontent.com/66704744/202808032-f078fbcb-b1af-4f30-a38d-f1ffd7285b5f.png)

### manejando los datos de algolia
despues que ordené los datos por categorias, y titulos, usé una libreria de react llamada `React InstantSearch` la cual está en la documentación de algolia, que facilita la implementacion de la componente Search en react.

![image](https://user-images.githubusercontent.com/66704744/202809092-296c7a61-c889-4b5f-8268-7ae1f7b20fbf.png)

### creacion del componente searchBar
use typescript más ts-standard para mantener a raya los errores, si ya sé no es muy bueno que en la imagen tenga un `any` 🤣 pero fue por cuestión de velocidad de desarrollo
![image](https://user-images.githubusercontent.com/66704744/202809514-5968bd60-6c35-45f6-9799-daa063146e22.png)

el componente `Hit` se encarga de renderizar cada uno de los resultados del componente `SearchBox`

## 🧞 Busqueda
el componente `SearchBox` hace uso de un debounce de 500ms para mandar la query final a la api de algolia, y carga busquedas anteriores usando los datos que están en cache

[chrome-capture-2022-10-18.webm](https://user-images.githubusercontent.com/66704744/202811119-1e385dc5-f6ff-44fc-932f-4bb9f31ab538.webm)

## deploy en vercel
añadiendo adaptador en la configuración de astro `astro.config.mjs`

![image](https://user-images.githubusercontent.com/66704744/202811706-c85e76b2-6431-446e-86b1-c6dbf6011abc.png)

configurando el variables de entorno en vercel

![image](https://user-images.githubusercontent.com/66704744/202811622-c397c4e5-d9f4-49a1-9bd0-da1824f6deff.png)

## 👀 Te gustó dale a la estrellita
mi motivación para hacer estas mini guia, es que aprendo mejor explicandolo a alguien.

### tecnologías usadas
+ tailwind
+ react
+ astro
+ vercel
+ typescript

