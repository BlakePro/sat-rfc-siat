# sat-rfc-siat
Este script sirve para extraer  la información necesaria para el emisor de una factura mediante Sat / Siat

## ⚡️ Inicio rápido
  - Importa o copia la función siat.js
  - Llama la función asíncrona siat
```js
(async () => {

  let rfc = ''
  let id_cif = ''

  let data = await siat(rfc, id_cif)
  console.log(data);

  let nombre_fiscal = data?.nombre_fiscal
  let cp = data?.cp
  let correo_electronico = data?.correo_electronico
  let regimenes = data?.regimenes
  let situacion_del_contribuyente = data?.situacion_del_contribuyente

  console.log({nombre_fiscal, situacion_del_contribuyente, cp, correo_electronico, regimenes});

})();
```
