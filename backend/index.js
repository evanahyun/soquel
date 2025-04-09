const Fastify = require('fastify');
const fastify = Fastify({ logger: true });
const cors = require('fastify-cors');

fastify.register(cors, { origin: true });

fastify.get('/api/ping', async () => {
  return { pong: true };
});

fastify.post('/api/task', async (request, reply) => {
  const { prompt } = request.body;

  console.log(`Received task: ${prompt}`);

  return {
    status: 'queued',
    taskId: Date.now(),
    message: `Task "${prompt}" received.`,
    logs: [
      '🧠 Thinking...',
      '🌐 Searching the web...',
      '✅ Task complete (simulated)',
    ],
    result: `Here’s a simulated result for: "${prompt}"`
  };
});

fastify.listen({ port: 4000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Soquel API running at ${address}`);
});