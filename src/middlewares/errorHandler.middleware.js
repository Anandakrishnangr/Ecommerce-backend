function globalErrorHandler(err, req, res, next) {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
    let data = err.data || {};
    console.log(err.name)
    if (err.name === 'ValidationError') {
        message = Object.values(err.errors).map(err => err.message);
        console.error('Validation Errors:', message);
    } else {

    }
    res.status(statusCode).json({
        status: err.status || 'error',
        message,
        data
    });
}

export default globalErrorHandler