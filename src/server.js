// import express from 'express';
// import cors from 'cors';
// import axios from 'axios';

// const app = express();

// // Allow all origins for local development
// app.use(cors());
// app.use(express.json());

// const dynamoDBLocalEndpoint = 'http://localhost:8000';  // Your DynamoDB Local endpoint

// // Proxy requests to DynamoDB Local
// app.post('/dynamodb', async (req, res) => {
//     try {
//         const response = await axios.post(dynamoDBLocalEndpoint, req.body, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         res.status(response.status).json(response.data);
//     } catch (error) {
//         res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error with DynamoDB request' });
//     }
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`CORS-enabled server is running on http://localhost:${PORT}`);
// });
