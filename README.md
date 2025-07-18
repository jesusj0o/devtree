# 🌱 DevTree API

🚀 **API built with Node.js, TypeScript, Express, and MongoDB.**

---

## 📋 Requirements

- 🐳 **Docker** and **Docker Compose** installed on your machine
- 📚 A valid **MongoDB URI** (e.g., from MongoDB Atlas)
- 🛠 Port **4000** available on your machine (used by the API)

---

## ⚙️ Setup Instructions

If you want to run it locally with Docker:

1. **Clone the repo:**
   ```bash
   git clone <repo_url>
   cd <repo_folder>
Create a .env file in the project root with your MongoDB connection string:


MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
Build and start the Docker container:


docker-compose up --build
✅ This will:

Build the Docker image (if needed)

Install dependencies inside the container

Start the app with hot-reload enabled

Open your browser or API client and go to:


http://localhost:4000
🐳 Useful Commands
Command	What it does
docker-compose up	Build the image if needed, mount code with hot reload, start the app
docker-compose down	Stop and remove containers
docker-compose run --rm devtree-api-test	Run tests inside Docker

📦 Install new dependencies
Stop the app if running:


Ctrl + C
docker-compose down
Install the dependency locally:


npm install <dependency_name> --save
Rebuild the Docker image:

docker-compose build
Start the app again:


docker-compose up
📂 Project Structure
Path	Purpose
src/index.ts	Main entry point
src/server.ts	Express app instance
src/config/db.ts	Database connection config
src/router.ts	API routes
src/test/	Test files

🧪 Testing
This project uses Jest for testing the TypeScript backend.
Tests help ensure your code works as expected, detect regressions early, and keep your API robust.

📦 Types of tests included
Test type	What it covers	Example
🧩 Unit tests	Individual functions in isolation (e.g., utils)	Hashing a password
🔗 Integration tests	Multiple modules working together (e.g., routes + controllers)	API endpoint returns expected data

⚙ How to run tests
✅ Run locally (fast feedback):


npm run test
With coverage report:


npm run test -- --coverage
🐳 Run inside Docker (recommended for CI/CD):

docker-compose run --rm devtree-api-test
This ensures tests run in the same Node version & environment as production, reducing “works on my machine” issues.

🐳 Why run tests inside Docker?
✅ Uses the exact same Node.js version and dependencies as production

⚠ Avoids errors from local environment differences

🤖 Perfect for CI/CD pipelines

💪 Reproducible and consistent results

📂 Test files location
All test files are under:

bash
Copiar
Editar
src/test/
Example test:


📝 Notes
Port 4000 is exposed and used by the API

Nodemon auto-restarts the server on .ts file changes

.dockerignore excludes node_modules, dist, .git, and .env for faster builds

⚠ Do not commit your .env file (it's already in .gitignore)

✨ Happy coding! 🚀
