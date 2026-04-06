# 🤖 AI Code Reviewer LLM

AI-powered code review assistant using **Google Gemini** LLM. Analyzes code for bugs, optimizations, complexity analysis, and quality scoring.

## ✨ Features
- **Bug Detection** - Finds syntax, logical & runtime errors
- **Code Optimization** - Provides improved versions
- **Complexity Analysis** - Time & Space complexity
- **Quality Scoring** - 0-10 score with feedback
- **Multi-language** - Auto-detects Python, Java, JS, C++
- **Production-ready** - Error handling, logging, CLI support

## 🚀 Full-Stack Setup & Run

### Backend API (FastAPI + Gemini)
1. **Setup**
```bash
cd AI_Code_Reviewer_LLM
pip install -r requirements.txt
cp .env.example .env  # Add GEMINI_API_KEY
```

2. **Run Server**
```bash
# Option 1: Via main.py
python main.py api

# Option 2: Direct
uvicorn api:app --reload --host 0.0.0.0 --port 8000
```
API docs: http://localhost:8000/docs

**POST /review** `{code: str, language?: str} -> {review: str}`

### Frontend (React)
```bash
cd frontend
npm install
npm run dev
```
Frontend: http://localhost:5173

### Test Flow
1. Backend: `python main.py api`
2. Frontend: `npm run dev` (separate terminal)
3. Paste code → Review → Real Gemini analysis

## 🛠 CLI Mode (Legacy)
```bash
python main.py [file.py]
```

## 📁 Root Structure
```
.
├── AI_Code_Reviewer_LLM/  # Backend FastAPI
└── frontend/             # React UI
```

## 📁 Project Structure
```
AI_Code_Reviewer_LLM/
├── analyzer/          # LLM + Prompt logic
│   ├── llm_reviewer.py
│   └── prompt_engine.py
├── input_code/        # Sample test files
├── report/            # Generated reviews
├── config.py          # API configuration
├── main.py            # Entry point
├── utils.py           # Helper functions
├── requirements.txt
└── README.md
```

## 🛠 Usage Examples

**Review Python code:**
```bash
python main.py input_code/sample_code.py
```

**Review any file:**
```bash
python main.py my_project/app.py
```

## 🔧 Configuration
- Set `GEMINI_API_KEY` in `.env` file
- Uses `gemini-1.5-flash` model (fast & cost-effective)

## 📊 Sample Output
```
CODE QUALITY SCORE: 7/10

1. BUGS & ERRORS
- Missing base case in recursion
- No input validation

2. CODE IMPROVEMENTS
- Use memoization for Fibonacci
- Add type hints

3. OPTIMIZED VERSION
[Complete improved code]

4. TIME COMPLEXITY
- Current: O(2^n), Optimized: O(n)
```

## 🚀 Future Enhancements
- [ ] Streamlit UI
- [ ] GitHub repo analyzer
- [ ] PDF report generation
- [ ] Review history (SQLite)
- [ ] Chatbot mode

## 📄 License
MIT License

