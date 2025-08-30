const loginAuthSchema={
    type : "object",
    required: ['name', 'email'],
    properties:{
        name:{type:'string'},
        email:{type:'string'}
    }
}

export const loginSchema = {
    body:loginAuthSchema
}

const loginAuth =  async(request, reply)=>{
    try {
        const {email, name}= request.body

        // validation 
        if(!email) {
            reply.code(404).send({message: "Email is Required"})
            return;
        }
        if(!name) {
            reply.code(404).send({message: "User Name is Required"})
        }

        reply.code(201).send({message:"User Login Successfully"})
    } catch (error) {
        reply.code(500).send({message:error?.message || "Internal Server Error"})
    }
}

export {loginAuth}