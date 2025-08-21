const firstRoute = async (request, reply) => {
    reply.code(200).send({ message: "First Route" });
};

export { firstRoute };