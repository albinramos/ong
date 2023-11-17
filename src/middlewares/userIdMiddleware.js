
const userId = (req,res,next) => 
{
    const user = req.session.user;
    req.userId = user['id'];
    next();
}

export {
    userId
};