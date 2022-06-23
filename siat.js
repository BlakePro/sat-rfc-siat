const siat = async (rfc, idCif) => {
  let json = {}
  try{
    if(rfc != '' && idCif != ''){
      let urlSiat = 'https://siat.sat.gob.mx/app/qr/faces/pages/mobile/validadorqr.jsf?D1=10&D2=1&D3='
      let get = await fetch(`${urlSiat}${idCif}_${rfc}`)
      let text = await get.text()
      let parser = new DOMParser()
      let doc = parser.parseFromString(text, 'text/html')
      let tr = doc.getElementsByTagName('tr')
      let toJson = []
      for(let elem of tr){
        let txtContent = (elem.textContent).trim()
        if(txtContent != ''){
          let arrSplit = txtContent.split("\n")
          for(let text of arrSplit){
            text = text.trim()
            if(text != ''){
              let arrText = text.split(':')
              if(arrText.length == 2){
                let key = arrText?.[0]
                let value = arrText?.[1]
                key = key.trim()
                key = key.replaceAll(' ', '_').replaceAll(':', '').replaceAll('$', '').replaceAll('&', '').replaceAll('/', '').replaceAll('-', '').replaceAll('*', '').replaceAll('+', '').replaceAll('(', '').replaceAll(')', '').replaceAll('.', '').normalize("NFD").replace(/\p{Diacritic}/gu, '').toLowerCase().replaceAll('°', '')
                toJson.push({key, value})
              }
            }
          }
        }
      }
      let jsonFilter = toJson.filter((arr, index, self) => index === self.findIndex((t) => (t.value === arr.value)))
      if(jsonFilter.length > 0){
        json.rfc = rfc
        json.id_cif = idCif
        json.regimenes = []
        for(let item of jsonFilter){
          let key = item?.key
          let value = item?.value
          if(key == 'regimen')json['regimenes'].push(value)
          else json[key] = value
        }
        let nombreFiscal = ''
        if(json?.denominacion_o_razon_social)nombreFiscal = json?.denominacion_o_razon_social
        else nombreFiscal = `${json?.nombre} ${json?.apellido_paterno} ${json?.apellido_materno}`.trim()
        json.nombre_fiscal = nombreFiscal
      }
    }
  }catch(e){
    console.log(e);
  }
  return json
}
