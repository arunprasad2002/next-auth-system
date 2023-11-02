import { NextRequest, NextResponse } from "next/server";
import connect from '@/db/connect'
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs'


export async function POST(request: NextRequest){
    const connection = await connect()
  try {
    if(connection){
        const reqBody = await request.json()
        const {username, password, email} = reqBody
        

        if(username.length > 0 && password.length > 0 && email.length > 0){
          const alreadyUserExist = await User.findOne({email})
          const alreadyUserName = await User.findOne({username})
          if(alreadyUserExist){
              return NextResponse.json({message: 'email already exist!'})
          }
          if(alreadyUserName){
            return NextResponse.json({message: 'usernamne is not available!'})
          }
            const salt = await bcryptjs.genSalt(10)
            const hashPassword = await bcryptjs.hash(password, salt)

            const user = new User({
              username,
              email,
              password : hashPassword
            })
            await user.save()
            return NextResponse.json({message: 'user created successfully', success: true,  user}, {status: 201})
          }    
      
    }
  } catch (error) {
    return NextResponse.json({message: 'Enter valid data'})
  }
}