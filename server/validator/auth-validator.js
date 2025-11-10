const { z } = require('zod');

const signupSchema = z.object({
    username: z
        .string({ required_error: 'Username is required '})
        .min(3, { message: 'Username must be at least 3 characters long' })
        .max(30, { message: 'Username must be at most 30 characters long' }),
    
    email: z
        .string({ required_error: 'Email is required '})
        .trim()
        .email({ message: 'Invalid email address' }),
    
    phone : z
        .string({ required_error: 'Phone number is required '})
        .min(10, { message: 'Phone number must be at least 10 digits long' })
        .max(10, { message: 'Phone number must be at most 10 digits long' }),
        
    
    password : z
        .string({ required_error: 'Password is required '})
        .min(8, { message: 'Password must be at least 8 characters long' })
        .max(100, { message: 'Password must be at most 100 characters long' })
        .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
        .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' })
        .regex(/[\W_]/, { message: 'Password must contain at least one special character' })
    });

const loginSchema = z.object({
    email: z
        .string({ required_error: 'Email is required '})
        .trim()
        .email({ message: 'Invalid email address' }),
    
    password : z
        .string({ required_error: 'Password is required '})
        .min(8, { message: 'Password must be at least 8 characters long' })
        .max(100, { message: 'Password must be at most 100 characters long' })
        .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
        .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' })
        .regex(/[\W_]/, { message: 'Password must contain at least one special character' })
    });

module.exports = signupSchema;