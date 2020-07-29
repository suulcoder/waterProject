export const groupbyType = (data) => {
    let toReturn = {}
    Object.values(data).forEach(element => {
            if(toReturn[element.type]===undefined){
                toReturn[element.type] = [element]
            }
            else{
                toReturn[element.type] = [...toReturn[element.type], element]
            }
    });
    return toReturn
}

export const search = (data, value, query) => {
    return groupbyType( 
        Object.values(data).filter(element => String(element[value]).includes(query)
    ))
}
