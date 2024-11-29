☕ Coffee Shop Application

Welcome to the Coffee Shop Application, a modern, full-stack web application designed for coffee enthusiasts. This project combines the power of cutting-edge tools and frameworks to deliver a dynamic and visually appealing coffee shop experience where users can browse, order, and manage their accounts seamlessly.

✨ Features

	•	🔒 User Authentication: Secure and seamless user authentication with Clerk.
	•	⚡ Dynamic Content Rendering: Built using Next.js for fast and efficient server-side rendering (SSR) and static site generation (SSG).
	•	🗂️ State Management: Efficient state handling with Redux.
	•	🎨 Styling: Responsive and customizable design with Tailwind CSS.
	•	🛡️ Type Safety: Fully typed codebase using TypeScript.
	•	🤖 AI-Powered Features: Integrates OpenAI API for smart recommendations and enhanced interactivity.

🛠️ Tech Stack

	•	🌐 Frontend Framework: Next.js
	•	🎨 Styling: Tailwind CSS
	•	🗂️ State Management: Redux Toolkit
	•	🔐 Authentication: Clerk
	•	🤖 AI Integration: OpenAI API
	•	📜 Language: TypeScript

🚀 Installation

To set up the project locally, follow these steps:
	1.	Clone the repository:

git clone https://github.com/Orazhn/coffee-shop.git
cd coffee-shop


	2.	Install dependencies:

npm install


	3.	Set up environment variables:
	•	Create a .env.local file in the root directory.
	•	Add the following keys:

CLERK_API_KEY,
OPENAI_API_KEY,
NEXT_PUBLIC_CLERK_FRONTEND_API,
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
CLERK_SECRET_KEY,
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

OPENAI_API_KEY,

KV_REST_API_READ_ONLY_TOKEN,
KV_REST_API_TOKEN,
KV_REST_API_URL,
KV_URL,

UPSTASH_REDIS_REST_URL,
UPSTASH_REDIS_REST_TOKEN,



	4.	Run the development server:

npm run dev


	5.	Open your browser and navigate to:

http://localhost:3000


🌍 Deployment

The app is deployed on Vercel for easy and fast deployment.
