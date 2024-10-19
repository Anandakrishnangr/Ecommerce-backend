class AppError extends Error {
    constructor({ message, data, statusCode }) {
        super(data);
        this.data = data
        this.message = message
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true; // Flag to indicate it's an expected error
    }
}
export default AppError  