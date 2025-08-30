import fastify from "fastify";
import { loginAuth, loginSchema } from "../controller/auth.controller.js";

const authRoute = async(fastify, option)=>{
    fastify.post("/login", {schema:loginSchema}, loginAuth)
}

export default authRoute