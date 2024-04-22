import { z, string } from "zod";

export const signupInput = z.object({
  username: string().email(),
  password: string().min(6),
  name: string().optional(),
});

export const signinInput = z.object({
  username: string().email(),
  password: string().min(6),
});

export const createblogInput = z.object({
  title: string(),
  content: string(),
});

export const updateblogInput = z.object({
  title: string(),
  content: string(),
  id: z.number(),
});

// type inference in zod
export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreateBlogInput = z.infer<typeof createblogInput>;
export type UpdateBlogInput = z.infer<typeof updateblogInput>;
