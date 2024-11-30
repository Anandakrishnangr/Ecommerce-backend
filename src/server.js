import app from "./app.js"

import globalErrorHandler from "./middlewares/errorHandler.middleware.js";
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV


app.use(globalErrorHandler)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} at ${ENV}`);
});
