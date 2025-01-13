import jwt from 'jsonwebtoken';

//! Admin authenticatin middleware
const authAdmin = async (req,res,next)=>{
    try {
        const {atoken} = req.headers
        if(!atoken){
            return res.status(401).json({
                success : false,
                message : "Unauthorized Access:Token missing"
            })
        }
        const token_decode = jwt.verify(atoken,process.env.JWT_SECRET);

        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.status(401).json({
                success : false,
                message : "Unauthorized Access: Invalid token"
            })
        }
        //* if valid -> call the next middleware
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message : error.message
        })
    }
}

export default authAdmin;