

export function useFilterData(data, searchString){

    if(searchString===''){
        return data;
    } else {
        return data.filter(item=> item.toLowerCase().includes(searchString.toLowerCase()));
    }
    
}