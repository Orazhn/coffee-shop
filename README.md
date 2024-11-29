Coffee Shop Application

Welcome to the Coffee Shop Application, a modern, full-stack web application designed for coffee enthusiasts. This application showcases a dynamic and visually appealing coffee shop where users can browse, order, and manage their accounts seamlessly.

🚀 Tech Stack

	•	Frontend:
	•	Next.js (React Framework with App Router)
	•	Tailwind CSS (Utility-first CSS framework)
	•	State Management:
	•	Redux (Centralized state management)
	•	Authentication:
	•	Clerk (User authentication and management)
	•	Database & Storage:
	•	Redis (Key-value database for fast data retrieval and caching)

📁 Folder Structure

src/  
├── components/        # Reusable UI components  
├── pages/             # Next.js pages (App Router-based routing)  
├── store/             # Redux store and slices  
├── styles/            # Tailwind CSS configurations  
├── utils/             # Utility functions (e.g., Redis client setup)  
├── middleware/        # Authentication and API middlewares  
└── public/            # Static assets (e.g., images)  

✨ Features

	•	User Authentication:
Secure sign-in and sign-up using Clerk.
Personalized user dashboards for order history and preferences.
	•	Dynamic Product Display:
Coffee products are fetched dynamically from Redis and rendered using Next.js server components for fast performance.
	•	State Management with Redux:
Redux is used to manage global states like cart items, user preferences, and order data.
	•	Responsive Design:
Built with Tailwind CSS to ensure mobile-first, pixel-perfect designs.
	•	Order Management:
Users can add coffee items to their cart, customize orders, and check out seamlessly.
	•	Order History:
Server-side rendering for a user’s order history ensures quick loading and secure data management.

🛠️ Getting Started

Prerequisites

	•	Node.js (v16 or later)
	•	Redis installed and running locally or on a cloud provider
	•	A Clerk account for authentication

Installation

	1.	Clone the repository:

git clone https://github.com/your-repo/coffee-shop.git  
cd coffee-shop  


	2.	Install dependencies:

npm install  


	3.	Configure environment variables:
Create a .env.local file in the root directory and add the following:

NEXT_PUBLIC_CLERK_FRONTEND_API=<Your Clerk Frontend API Key>  
CLERK_API_KEY=<Your Clerk API Key>  
REDIS_URL=redis://localhost:6379  


	4.	Start the development server:

npm run dev  


	5.	Open http://localhost:3000 in your browser to view the application.

🔧 Key Functionalities

Authentication with Clerk

	•	User authentication is handled with Clerk.
	•	Middleware ensures authenticated access to specific pages (e.g., user dashboard, order history).

State Management with Redux

	•	The cart and other user-specific data are managed using Redux slices.
	•	Components subscribe to Redux state for reactivity and consistency.

Redis Storage

	•	Product details, user cart data, and order history are stored in Redis for high-performance data retrieval.

Styling with Tailwind CSS

	•	Fully responsive design with a focus on aesthetics and usability.
	•	Customizable theme and utility classes for quick adjustments.

📸 Screenshots

	•	Home Page: Explore a list of coffee items with details like price, roast level, and flavor profiles.
	•	Cart Page: View selected items, adjust quantities, and proceed to checkout.
	•	User Dashboard: Manage account settings and view order history.

🛡️ Security

	•	User sessions and authentication tokens are securely managed with Clerk.
	•	Data stored in Redis is sanitized and cached with appropriate expiration policies.

🌟 Future Enhancements

	•	Integration with payment gateways like Stripe or PayPal.
	•	AI-based coffee recommendations based on user preferences.
	•	Push notifications for offers and order updates.

🤝 Contribution

Contributions are welcome! Follow these steps:
	1.	Fork the repository.
	2.	Create a new branch for your feature/bug fix:

git checkout -b feature-name  


	3.	Commit your changes:

git commit -m "Add feature"  


	4.	Push the branch and create a pull request.

📄 License

This project is licensed under the MIT License.

🙌 Acknowledgments

Special thanks to the creators of Redux, Tailwind CSS, Clerk, Redis, and Next.js for their amazing tools and resources.

Happy Brewing! ☕
