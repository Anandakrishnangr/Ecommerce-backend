import Joi from 'joi';

// Define your schemas (same as before)
const userSchema = Joi.object({
    email: Joi.string()
        .email()
        .optional()
        .messages({
            'string.email': 'Please enter a valid email address',
        }),
    phone: Joi.number()
        .optional()
        .min(1000000000)
        .max(9999999999)
        .messages({
            'number.min': 'Phone number must be at least 10 digits',
            'number.max': 'Phone number must be at most 10 digits',
        }),
    password: Joi.string()
        .min(6)
        .optional()
        .pattern(/^[a-zA-Z0-9]{3,30}$/)
        .messages({
            'string.min': 'Password must be at least 6 characters long',
            'string.pattern.base': 'Password can only contain alphanumeric characters',
        }),
}).xor('email', 'phone')
  .messages({
      'object.xor': 'Either email or phone number must be provided.',
  });

// Schema configuration mapping
const schemaConfig = [
    {
        methods: ['POST', 'PUT'],
        paths: ['/auth/login', '/users/:id'],
        schema: userSchema,
    },
    // Add more route configurations as needed
];

// Preprocess the schema configuration into a lookup map
const schemaLookup = {};

schemaConfig.forEach(route => {
    route.methods.forEach(method => {
        route.paths.forEach(path => {
            schemaLookup[`${method}:${path}`] = route.schema;
        });
    });
});

export { schemaLookup, userSchema };
