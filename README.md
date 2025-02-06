# Number Classification API

A TypeScript-based REST API that provides mathematical properties and fun facts about numbers.

## Features

- Number classification (prime, perfect, Armstrong)
- Odd/even determination
- Digit sum calculation
- Fun facts about numbers from Numbers API
- Full TypeScript support
- CORS enabled
- Input validation
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/number-classifier-api.git
cd number-classifier-api
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

## Development

Run the development server with hot reload:
```bash
npm run dev
```

## Production

Build and start the production server:
```bash
npm run build
npm start
```

## API Specification

### Endpoint

```
GET /api/classify-number?number={number}
```

### Success Response (200 OK)

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Error Response (400 Bad Request)

```json
{
    "number": "alphabet",
    "error": true
}
```

## Testing

Run the test suite:
```bash
npm test
```

## Deployment

This API can be deployed to any platform that supports Node.js applications:

1. Build the project:
```bash
npm run build
```

2. Start the server:
```bash
npm start
```

Common deployment platforms:
- Heroku
- DigitalOcean
- AWS Elastic Beanstalk
- Google Cloud Platform

## Project Structure

```
src/
├── server.ts    # Main application file
├── types.ts     # Type definitions
└── utils.ts     # Utility functions
```

## Technical Details

- Built with Express.js and TypeScript
- Uses Axios for external API calls
- CORS middleware for cross-origin requests
- Strong typing with TypeScript interfaces
- Modular code structure
- ESLint for code quality

## License

ISC License