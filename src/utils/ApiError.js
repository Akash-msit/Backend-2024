class ApiError extends Error{
    constructor(
        statusCode,
        message= "Somthing went wrong",
        errors = [],
        statck = ""
    ){
        super(message)  //overwrite this constustor 
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success =false
        this.errors = errors

        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}