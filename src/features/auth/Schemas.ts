import {z} from "zod";


export const loginSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6)
});


export const registerSchema = z.object({
    name:z.string(),
    email: z.string().email(),
    password:z.string().min(6, "Required & must be atleast 6 characters"),
})