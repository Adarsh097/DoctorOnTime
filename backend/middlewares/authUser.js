import jwt from 'jsonwebtoken';

//! User authenticatin middleware
const authUser = async (req,res,next)=>{
    try {
        const {token} = req.headers
        if(!token){
            return res.status(401).json({
                success : false,
                message : "Unauthorized Access:Token missing"
            })
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);

        //! adding the userId in the req.body
        req.body.userId = token_decode.id;
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

export default authUser;