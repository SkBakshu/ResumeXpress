# Resume Xpress — Full-Stack Resume Builder

Resume Xpress is a full-stack resume-building application that helps users create, customize, manage, and export professional resumes through a responsive interface. It combines React.js, Node.js, Express.js, and MongoDB to provide a streamlined resume creation experience.

Live Deployed Link : https://resumexpress-frontends.onrender.com/
## ✨ Features

- **User Authentication:** Registration and login using JWT-based authentication.
- **Resume Creation:** Create and manage resumes with structured forms for personal information, education, work experience, skills, projects, certifications, languages, and interests.
- **Multiple Templates:** Choose from three resume templates to present professional information in different layouts.
- **Resume Customization:** Customize resume themes and color palettes.
- **Dashboard:** View, create, edit, and delete saved resumes from a centralized dashboard.
- **Profile Management:** Organize personal and contact information, including professional links.
- **Image Uploads:** Upload profile images and resume-related images.
- **PDF Export:** Generate downloadable resume documents using client-side PDF and HTML rendering libraries.
- **Input Validation:** Validate user input and enforce minimum password length during registration.
- **Persistent Storage:** Store user accounts and resume information in MongoDB.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend user interface |
| Tailwind CSS | Styling and responsive layouts |
| JavaScript | Application logic |
| Node.js | Backend runtime |
| Express.js | REST API and server-side routing |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| JWT | Authentication tokens |
| bcryptjs | Password hashing |
| Axios | HTTP requests from the frontend |
| Multer | File upload handling |
| html2canvas / html2pdf.js / jsPDF | Resume rendering and PDF generation |
| React Router | Client-side navigation |
| Vite | Frontend development and build tooling |

## 🖥️ Application Workflow

1. Register for an account or log in.
2. Access the dashboard to create a new resume.
3. Enter personal details, contact information, education, experience, skills, projects, and certifications.
4. Customize the resume template and color palette.
5. Preview and update resume content.
6. Save resumes to the database and manage them from the dashboard.
7. Export the finished resume as a PDF.

## 📄 Resume Templates

Resume Xpress includes three resume templates:

### Template 1
A structured resume layout for presenting contact details, experience, education, projects, and skills.

### Template 2
An alternative layout for organizing professional information with a different visual hierarchy.

### Template 3
A third layout offering another presentation style for resume sections.

## 🏗️ Project Structure

```text
ResumeXpress/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── utils/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── package.json
│   └── server.js
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB database
- Git
- Visual Studio Code or another code editor

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd ResumeXpress
```

Replace the placeholder with your actual repository URL.

### 2. Configure the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_secret_key
```

Configure the database connection in `config/db.js` to read `MONGODB_URI` from the environment rather than using a hardcoded connection string. Update the server to read `PORT` from the environment as well.

**Important:** Never commit your `.env` file, database credentials, or JWT secrets to GitHub.

### 3. Start the Backend

```bash
npm start
```

The current backend configuration starts the server on port `4000`.

API base URL for local development:

`http://localhost:4000`

### 4. Configure the Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Configure the frontend API base URL in `src/utils/apiPaths.js` to point to your local backend during development.

### 5. Open the Application

Open the local URL printed by Vite in your terminal, typically:

`http://localhost:5173`

Register an account and explore the resume builder.

## 🔌 API Endpoints

The backend exposes authentication and resume management routes.

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate a user |
| GET | `/api/auth/profile` | Retrieve the authenticated user's profile |

### Resume Management

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/resume` | Create a resume |
| GET | `/api/resume` | Retrieve the authenticated user's resumes |
| GET | `/api/resume/:id` | Retrieve a specific resume |
| PUT | `/api/resume/:id` | Update a resume |
| PUT | `/api/resume/:id/upload-images` | Upload resume images |
| DELETE | `/api/resume/:id` | Delete a resume |

Protected endpoints require a valid authentication token according to the backend middleware.

## 🔐 Security

- Passwords are hashed using bcryptjs before being stored in MongoDB.
- JWTs are used to authenticate users.
- Protected routes use authentication middleware.
- Resume queries are scoped to the authenticated user.
- Registration enforces a minimum password length.

For production use, configure environment variables, validate all incoming data on the server, restrict CORS to trusted origins, use HTTPS, and implement appropriate token storage and expiration handling.

## 📚 Key Learning Outcomes

- Building a full-stack application with React.js and Node.js.
- Designing RESTful APIs with Express.js.
- Modeling application data with MongoDB and Mongoose.
- Implementing JWT authentication and password hashing.
- Managing application state and frontend navigation.
- Handling file uploads and generating PDF documents.
- Building reusable components and structured form workflows.
- Connecting frontend components to protected backend endpoints.

## 🔮 Future Improvements

- Add automated backend and frontend tests.
- Improve server-side validation and standardized API error responses.
- Add autosave and resume version history.
- Improve accessibility and mobile responsiveness.
- Add more ATS-friendly resume templates.
- Introduce automated deployment and continuous integration.

## 👨‍💻 Author

**Shaik Allah Bakshu**

- GitHub: [skbakshu](https://github.com/skbakshu)
- LinkedIn: [shaikbakshu](https://linkedin.com/in/shaikbakshu)

---

If you find this project useful, consider giving the repository a ⭐.

*Resume Xpress — Build, customize, and manage professional resumes in one place.*
