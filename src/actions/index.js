export const GetCards = () =>{
    return (
        {
            type:"Cards"
        }
    );
}

export const GetNewProps = (product,options,FirstProductname) =>{
    return (
        {
            type:"Props",
            productType:product,
            options,
            FirstProductname
        }
    );
};