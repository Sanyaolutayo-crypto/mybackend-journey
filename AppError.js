class AppError extends Eror{
    constructor(message,statusCode){
        super(message);

        this.statusCode=statusCode;
        this.staus=`$
        {statusCode}` .startsWith(`4`)
        ?`fail`
        `error`;
        this.isOperational=true;
        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports=AppError;