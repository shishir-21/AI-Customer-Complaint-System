# 🤖 AI Customer Complaint Management System

An AI-powered Customer Complaint Management System that automates complaint analysis using Large Language Models (LLMs). The application extracts complaint details from uploaded PDF documents, allows conversational editing through an AI Copilot, and stores finalized complaints in a PostgreSQL database.
<img width="1915" height="957" alt="image" src="https://github.com/user-attachments/assets/f0a2a306-a366-4976-b7b0-28f50f57643d" />

---

## 🚀 Features

### 📄 AI Complaint Extraction
- Upload customer complaint PDFs
- Automatic text extraction
- AI-powered field extraction
- Auto-fill complaint form

### 🤖 AI Copilot
- Conversational complaint editing
- Incremental form updates
- Draft complaint workflow
- Natural language modifications

Example:

> "Manufacturing date is 01/11/2024"

↓

Only the manufacturing date is updated without replacing the rest of the form.

---

### 📋 Complaint Form

Captures:

- Customer Details
- Product Details
- Batch Information
- Manufacturing Date
- Expiry Date
- Complaint Description
- Complaint Type
- Severity

---

### 🧠 AI Analysis

Automatically generates:

- Complaint Summary
- Risk Assessment
- Root Cause Analysis
- CAPA Recommendations

---

### 💾 Draft Workflow

Complaint remains editable until:

**Commit to QMS Ledger**

Only after Commit:

- Complaint is saved
- Chat is reset
- Form is cleared
- New complaint session begins

---

## 🏗️ Tech Stack

### Frontend

- React
- Vite
- Material UI
- Axios

### Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic

### AI

- LangGraph
- Groq LLM

### PDF Processing

- PyMuPDF

---

## 📂 Project Structure

```
AI-Customer-Complaint-System
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── api/
│
├── backend/
│   ├── app/
│   ├── agents/
│   ├── api/
│   ├── models/
│   ├── schemas/
│   ├── prompts/
│   └── services/
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Customer-Complaint-System.git
```

---

### Backend

```bash
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Linux / Mac

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run server

```bash
uvicorn app.main:app --reload
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Backend `.env`

```env
DATABASE_URL=your_postgresql_url

GROQ_API_KEY=your_groq_api_key
```

---

## 📸 Screenshots
<img width="1915" height="957" alt="image" src="https://github.com/user-attachments/assets/e9b9fa83-fb2e-401b-a0f9-c0b614dc7768" />

<img width="1918" height="952" alt="image" src="https://github.com/user-attachments/assets/2695c639-be86-4db7-a669-af5a25064f51" />

<img width="1912" height="846" alt="image" src="https://github.com/user-attachments/assets/03b54425-0f4b-45ab-b8ca-d18912dcb278" />


---

## 🔮 Future Improvements

- Authentication
- Complaint Dashboard
- Complaint History
- Search & Filters
- Analytics
- Streaming AI Responses
- Multi-file Upload
- Email Notifications

---

## 👨‍💻 Author

**Shishir Mahato**

GitHub:
https://github.com/YOUR_USERNAME

LinkedIn:
https://linkedin.com/in/YOUR_LINKEDIN

---

## ⭐ If you like this project

Give this repository a ⭐ on GitHub.
