Here is a **clean, professional, updated `README.md`** for your project structure.
This README is written exactly for your project:

**Legal Document Assistant (Next.js + Flask + Gemini API)**

✔ Clean
✔ Proper formatting
✔ Explains frontend + backend
✔ Shows how to run
✔ Shows project structure
✔ Easy for GitHub

---

# ✅ **Updated README.md for Your Project**

```markdown
# 📄 Legal Document Assistant  
AI-powered web application for analyzing, summarizing, and drafting legal documents.

This project combines:

- **Next.js 14 (Frontend)**
- **Flask (Backend API)**
- **Google Gemini AI Models**
- **PDF extraction, classification, chat, drafting, and analysis**

---

## 🚀 Features

### 🔍 Document Features
- Drag-and-drop PDF upload  
- Automatic document classification  
- AI-generated legal summary with metrics  
- Visual metric cards (severity, urgency, actions, violations, etc.)  
- View uploaded PDF inside viewer  
- Download summary as PDF  

### 💬 AI Chat
- Chat with the document  
- Detailed analysis mode  
- Context-aware multi-turn conversations  
- Draft generation (DOCX) based on user instructions  
- Downloadable draft documents  

### 👨‍⚖️ General Legal Chat
- Ask general law questions  
- Optional “Senior Lawyer Mode” with deep reasoning  

---

## 🏗️ Project Structure

```

legal-document-assistant/
│
├── frontend/                     # Next.js app (UI)
│   ├── app/
│   │   ├── layout.js
│   │   ├── globals.css
│   │   ├── page.js               # Landing / Home
│   │   │
│   │   ├── dashboard/
│   │   │     └── page.js         # Main Legal Document Tool UI (JSX version of your template)
│   │   │
│   │   ├── login/
│   │   │     └── page.js
│   │   │
│   │   ├── upload/
│   │   │     └── page.js
│   │   │
│   │   └── features/
│   │         └── page.js
│   │
│   ├── public/
│   │   ├── script.js             # Your full JS (drag-drop, chat, pdf.js)
│   │   ├── styles.css
│   │   ├── images/
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── next.config.js
│   └── package.json
│
│
├── backend/                      # Flask API
│   ├── app.py                    # Main backend file
│   ├── requirements.txt
│   ├── utils/
│   │   ├── summarize.py
│   │   ├── classify.py
│   │   ├── extract_text.py
│   │   └── chat_model.py
│   │
│   ├── uploads/
│   └── venv/
│
└── README.md

````

---

## ⚙️ Backend Setup (Flask)

### 1️⃣ Create virtual environment

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
````

### 2️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 3️⃣ Add environment variables

Create a `.env` file:

```
GEMINI_API_KEY=your_api_key_here
SECRET_KEY=your_secret
```

### 4️⃣ Run backend server

```bash
python app.py
```

Backend will run at:

```
http://127.0.0.1:5000
```

---

## 🎨 Frontend Setup (Next.js 14)

### 1️⃣ Install dependencies

```bash
cd frontend
npm install
```

### 2️⃣ Run development server

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🔗 Connecting Frontend & Backend

Frontend sends requests like:

```js
fetch("http://127.0.0.1:5000/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  credentials: "include",   // required for session cookies
  body: JSON.stringify({...}),
})
```

Backend CORS setup:

```python
CORS(app,
     supports_credentials=True,
     resources={r"/*": {"origins": [
         "http://localhost:3000",
         "http://127.0.0.1:3000"
     ]}}
)
```

---

## 🧪 Debugging Tools

Visit this endpoint to check your session:

```
http://127.0.0.1:5000/session
```

* If the session ID changes between requests → cookies are not working.

---

## 📦 Build & Deploy

You can deploy:

### Frontend:

* Vercel
* Netlify
* DigitalOcean

### Backend:

* Render
* Railway
* AWS EC2
* Azure / GCP VM

Make sure to configure CORS + environment variables.

---

## 📜 License

This project is for educational and development purposes.

---

## 👨‍💻 Author

Built by **Manik Mohite**
AI-powered legal automation project.

```

---

# ✔ READY FOR GITHUB  
You can copy-paste this directly into your `README.md`.

If you want:

🔹 Add screenshots  
🔹 Add demo video  
🔹 Add API documentation section  
🔹 Add dark/light mode screenshots  

Just tell me **“add screenshots section”** or **“add API docs”**.
```
# LegalDocAi
