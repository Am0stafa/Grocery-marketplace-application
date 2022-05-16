const products = require('../models/productsModel')
const APIFeatures = require('../utils/apiFeatures')



exports.getAll = async (req, res) =>{
    try{
        const features = new APIFeatures(products.find(),req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
            
        const allProducts = await features.query
        
        res.status(200).json({
            status: 'sucess',
            data:{
                allProducts
            }
        })
    }
    catch(err){
        res.status(404).json({
            status: 'failed',
            message : err.message
        })
    
    }
}


