const asyncHandler = (requstHandeler) => {
  (req, res, next) => {
    Promise.resolve(requstHandeler(req, res, next)).catch((err) => next(err));
  };
}; //method

export { asyncHandler };

//wraper funtion
// const asyncHandler = (fun) => async (req,res,next) => {
//     try {
//         await fun(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })

//     }
// }
