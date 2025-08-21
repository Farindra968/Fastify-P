import fastify from "fastify";
import { firstRoute } from "../controller/first.Controller.js";


const productRoute = async (fastify, options)=>{
    fastify.get("/first", firstRoute)
}

export default productRoute;