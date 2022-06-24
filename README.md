# Cédula Fiscal SAT
###### sat-rfc-siat
Extrae la información necesaria de una persona física o moral para utilizarlo en una factura 4.0 de acuerdo la cédula fiscal del SAT / SIAT

> Puedes ejecutarlo directamente en:
> - Frontend
> - Backend (importa antes npm i node-fetch)
> - En la consola de tu navegador

## ⚡️ Instalación (inicio rápido)
  - Importa o copia directamente la función del archivo `siat.js`
  - Llama la función asíncrona de siat
```js
new Promise(async (resolve, reject) => {
  let rfc = '' // Tu RFC
  let id_cif = '' // TU ID de la constancia fiscal

  // Llamar la función async para recibir datos de la constancia
  let datos = await siat(rfc, id_cif)
  console.log(datos)

  // Recuperar distintos valores de json
  let nombre_fiscal = datos?.nombre_fiscal
  let cp = datos?.cp
  let regimenes = datos?.regimenes
  console.log({ nombre_fiscal, cp, regimenes })
});
```

## ✨ Ejemplo de respuesta
```json
{
    "rfc": "",
    "id_cif": "",
    "nombre_fiscal": "",
    "correo_electronico": "",
    "regimenes": [],
    "regimen_de_capital": "",
    "fecha_de_constitucion": "",
    "situacion_del_contribuyente": "",
    "fecha_del_ultimo_cambio_de_situacion": "",
    "entidad_federativa": "",
    "municipio_o_delegacion": "",
    "colonia": "",
    "tipo_de_vialidad": "",
    "nombre_de_la_vialidad": "",
    "numero_exterior": "",
    "numero_interior": "",
}
```

😍 Deja una ⭐ si piensas que fue útil

👨‍💻 Hecho por [BlakePro (github)](https://github.com/BlakePro)
