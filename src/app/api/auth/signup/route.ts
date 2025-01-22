import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { getUserByEmail, createUser } from "@/lib/db";

// Validation schema
const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const result = signupSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({
        success: false,
        error: result.error.errors[0].message
      }, { status: 400 });
    }

    const { email, name, password } = body;

    try {
      // Check if user already exists
      const existingUser = await getUserByEmail(email);
      if (existingUser) {
        return NextResponse.json({
          success: false,
          error: "Email already registered"
        }, { status: 400 });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const user = await createUser({
        name,
        email,
        password: hashedPassword,
      });

      return NextResponse.json({
        success: true,
        user,
        message: "Account created successfully"
      }, { status: 201 });

    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json({
        success: false,
        error: "Database operation failed"
      }, { status: 500 });
    }

  } catch (error) {
    console.error("Request error:", error);
    return NextResponse.json({
      success: false,
      error: "An error occurred while processing your request"
    }, { status: 500 });
  }
} 