import readXlsxFile from 'read-excel-file/node'

const schema = {
    "ID":{
        prop:"ID",
        data:Number
    },
    "Nome":{
        prop:"Nome",
        data:String
    },
    "Ano":{
        prop:"Ano",
        data:String
    },
}
readXlsxFile("./movies.xlsx",{schema:schema, sheet:"Planilha1"}).then(rows =>{
    console.log(rows)
})