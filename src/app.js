import Fastify from "fastify";
import productRoute from "./routes/product.route.js"
import authRoute from "./routes/auth.routes.js";
const fastify = new Fastify({logger: true})


fastify.get("/", async (request, reply)=>{
    reply.code(200).send({message:"I'm working fine my dear"})
})

fastify.register(productRoute, {prefix: "/api"})
fastify.register(authRoute, {prefix:"/api"})

export default fastify