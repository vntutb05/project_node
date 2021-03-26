const {check} = require('express-validator');

let addValidator = ()=>{
    return [ 
        check('name').not().isEmpty().withMessage('Vui lòng điền tên sản phẩm'),
        check('tag').not().isEmpty().withMessage('Vui lòng điền tag sản phẩm'),
        check('price').not().isEmpty().withMessage('Vui lòng nhập giá sản phẩm'),
        check('sale').not().isEmpty().withMessage('Vui lòng nhập giá Sale'),
        check('description').not().isEmpty().withMessage('Vui lòng nhập miêu tả sản phẩm')
    ]
}
let editValidator = ()=>{
    return [
        check('name').not().isEmpty().withMessage('Vui lòng điền tên sản phẩm'),
        check('tag').not().isEmpty().withMessage('Vui lòng điền tag sản phẩm'),
        check('price').not().isEmpty().withMessage('Vui lòng nhập giá sản phẩm'),
        check('sale').not().isEmpty().withMessage('Vui lòng nhập giá Sale'),
        check('description').not().isEmpty().withMessage('Vui lòng nhập miêu tả sản phẩm')
    ]
}
module.exports ={
    addValidator :addValidator,
    editValidator :editValidator
}