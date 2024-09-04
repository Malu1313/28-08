module.express = class NumberController{
    static async postNumber(req,res){
        const {numero} = req.body;
        if(numero % 2){
            res.status(200).json({message:'númeroPar'});
        }
        else{ 
            res.status(200).json({message:'númeroPrimo'});
        }
    }
    
}