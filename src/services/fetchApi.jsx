export const fetchApi = async () => {
    
    try {
        const endPoint = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
        const req = await fetch(endPoint);
        return await req.json();
    } catch (error) {
        console.log(error)
        return error
    }  
};