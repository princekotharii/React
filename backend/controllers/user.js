import { user } from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import { generateAccessToken } from "../utils/genrateToken.js";


export async function Register(req,res){
    try {
        const {FullName,Email,Password} = req.body
        console.log('Req body in SignUp',req.body);

        if (!FullName || !Email || !Password) {
            return res.status(400).json({
                message: 'Email and Password are required...',
                error: true,
                success: false
            })
        }

        const User = await user.findOne({Email})

        console.log(User);

        if (User) {
            res.status(401).json({
                message: "User already exist. please try again.",
                error: true,
                success: false
            })
        }
        
        const hasPassword =await bcrypt.hash(Password, 10)

        const registerUser = new user ({
            FullName,Email,Password:hasPassword
        })
        
        await registerUser.save()
        
        console.log(registerUser);

        return res.status(201).json({
            message:'Registration Successfully',
            error: false,
            success: true,
            data: {
                FullName: registerUser.FullName,
                Email: registerUser.Email,
                _id: registerUser._id
            }
        })
        
    } catch (error) {
        console.log(error);
    }
}

// Login
export async function Login(req, res) {
    try {
        const { Email, Password } = req.body;
        console.log('Req body in login', req.body);

        // Validation
        if (!Email) {
            return res.status(400).json({
                message: 'Email is required',
                error: true,
                success: false
            });
        }

        // Find user
        const findUser = await user.findOne({ Email });
        console.log(findUser);
        
        if (!findUser) {
            return res.status(404).json({
                message: 'User not found. Please sign up first.',
                error: true,
                success: false
            });
        }

        // Agar sirf email aaya hai (Step 1 - Email verification)
        if (!Password) {
            return res.status(200).json({
                message: 'Email verified successfully',
                error: false,
                success: true
            });
        }

        // Password compare - IMPORTANT
        const comparePassword = await bcrypt.compare(Password, findUser.Password);

        // Agar password galat hai
        if (!comparePassword) {
            return res.status(401).json({
                message: 'Incorrect password',
                error: true,
                success: false
            });
        }

        // save tocken into local storage
        const jwtToken = await generateAccessToken(findUser)

        console.log(jwtToken , 'response from generator');
        
        // const {accessToken, options} = jwtToken

        // Password sahi hai - Login successful
        return res.status(200)
        .cookie('accessToken' , jwtToken.accessToken , jwtToken.options)
        .json({
            message: 'Login successful',
            error: false,
            success: true,
            data: {
                FullName: findUser.FullName,
                Email: findUser.Email,
                _id: findUser._id
            }
        });

    } catch (error) {
        console.log('Login error:', error);
        return res.status(500).json({
            message: 'Internal server error',
            error: true,
            success: false
        });
    }
}

export function Cart(req,res){
    console.log('This is cart');
}

 // Forget the password  function 
  export async function ForgetPassword() {
    try {
        const {Email,Password}=req.body
        console.log("req body for Forget Password or Email",req.body);
        const findOne =user.findOne
        const userId =user._id
        console.log(userId);
        
        
    } catch (error) {
        console.log("eroor");
        
        
    }
}