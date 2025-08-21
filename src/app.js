import Fastify from "fastify";
import productRoute from "./routes/product.route.js"
const fastify = new Fastify({logger: true})


fastify.get("/", async (request, reply)=>{
    reply.code(200).send({message:"I'm working fine my dear"})
})

fastify.register(productRoute, {prefix: "/api"})

export default fastify