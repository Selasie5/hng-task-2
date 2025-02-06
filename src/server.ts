import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import { NumberResponse, ErrorResponse } from './types';
import { isArmstrong, isPrime, isPerfect, getDigitSum } from './utils';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Types for request query
interface NumberQuery {
  number: string;
}

// Main endpoint
app.get('/api/classify-number', async (req: Request<{}, {}, {}, NumberQuery>, res: Response<NumberResponse | ErrorResponse>) => {
  const { number } = req.query;

  // Validate input
  const num = parseInt(number);
  if (isNaN(num)) {
    const errorResponse: ErrorResponse = {
      number: number,
      error: true
    };
    return res.status(400).json(errorResponse);
  }

  try {
    // Get fun fact from Numbers API
    const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math`);
    const funFact = funFactResponse.data;

    // Calculate properties
    const properties: string[] = [];
    if (isArmstrong(num)) {
      properties.push('armstrong');
    }
    properties.push(num % 2 === 0 ? 'even' : 'odd');

    const response: NumberResponse = {
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: getDigitSum(num),
      fun_fact: funFact
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching fun fact:', error);
    // Still return response but with a generic fun fact
    const response: NumberResponse = {
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties: [num % 2 === 0 ? 'even' : 'odd'],
      digit_sum: getDigitSum(num),
      fun_fact: `${num} is a number`
    };
    res.json(response);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;