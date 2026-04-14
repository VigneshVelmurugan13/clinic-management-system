# 🏥 Clinic Management System (Full Stack + DevOps Project)

---

## 📌 Project Objective

The goal of this project is to build a **complete full-stack clinic management system** and deploy it using **modern DevOps practices**.

This project demonstrates:
- Full-stack development
- Containerization using Docker
- Cloud deployment using AWS ECS (Fargate)
- Real-world debugging and problem solving

---

## 🎯 What This Project Does

This system allows:

- Add and manage patients
- Add doctors
- Book appointments
- View all records

---

## 🛠️ Tech Stack

### 🔹 Frontend
- HTML
- Bootstrap (UI)
- JavaScript (API calls)

### 🔹 Backend
- Node.js
- Express.js

### 🔹 Database
- SQLite

### 🔹 DevOps / Cloud
- Docker
- AWS ECR (Elastic Container Registry)
- AWS ECS Fargate
- AWS VPC & Security Groups

---

## 📂 Project Structure
clinic-management/
│
├── backend/
│ ├── server.js
│ ├── db.js
│ ├── package.json
│ ├── Dockerfile
│
├── frontend/
│ ├── index.html
│ ├── script.js
│ ├── Dockerfile
│
└── README.md


---

## 🔄 Project Workflow (Step-by-Step)

### 1️⃣ Development Phase

- Created CRUD backend using Express
- Created REST APIs:
  - `/patients`
  - `/doctors`
  - `/appointments`
- Connected SQLite database
- Built frontend UI with Bootstrap

---

### 2️⃣ Frontend-Backend Connection

Frontend uses:

```js
fetch("http://<backend-ip>:5000/patients")

👉 This connects UI → backend API

3️⃣ Dockerization

Created Docker containers for:

Backend Dockerfile
> Base image: node
> Installed dependencies
> Exposed port 5000
Frontend Dockerfile
> Base image: nginx
> Served static files
> Exposed port 80

🔥 Docker Commands Used
docker build -t clinic-backend ./backend
docker build -t clinic-frontend ./frontend

👉 Builds images

docker run -p 5000:5000 clinic-backend

👉 Runs backend locally

docker run -p 3000:80 clinic-frontend

👉 Runs frontend locally

⚠️ Errors Faced & Fixes
❌ Error 1: SQLite GLIBC issue
Cause: incompatible OS libraries
Fix: changed Docker base image to compatible version
❌ Error 2: Port not accessible
Cause: wrong port mapping
Fix: ensured container port = 5000
❌ Error 3: Backend not reachable
Cause: localhost binding
Fix:
app.listen(5000, "0.0.0.0")
❌ Error 4: AWS Timeout
Cause: security group blocked port
Fix:
Allowed port 5000 and 80 in inbound rules
❌ Error 5: Wrong Security Group
Cause: edited wrong SG
Fix: used ECS-attached SG

🔄 How Frontend Connects to Backend
const API_URL = "http://<backend-ip>:5000"

👉 All API calls go to this endpoint

⚙️ Backend Process Flow
User enters data in UI
Frontend sends request via fetch()
Backend receives request
SQL query executes
Data stored/retrieved
Response sent back to UI
🧠 What I Learned
Real-world debugging
Docker container lifecycle
AWS ECS architecture
Networking concepts (ports, IP, security groups)
Cloud deployment challenges
🚀 Key Highlights

✔ Full stack development
✔ Docker containerization
✔ AWS cloud deployment
✔ Debugged multiple real-world errors
✔ Built production-like architecture

🔮 Future Improvements
Authentication system
Role-based access
Replace SQLite with MySQL/PostgreSQL
Add Load Balancer
Custom Domain + HTTPS
CI/CD pipeline

🎯 Final Note

This project demonstrates not just development skills but also:

Debugging ability
DevOps understanding
Cloud deployment knowledge

---

# 🔥 RESULT

This README shows:

```text
✔ You built system
✔ You debugged real errors
✔ You used Docker + AWS
✔ You understand architecture
