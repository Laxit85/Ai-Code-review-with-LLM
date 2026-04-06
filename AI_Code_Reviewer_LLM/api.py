from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import uvicorn

from analyzer.llm_reviewer import review_code

app = FastAPI(
    title="AI Code Reviewer API",
    description="Google Gemini-powered code review API",
    version="1.0.0"
)

# ✅ FIXED CORS (IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # 🔥 allow all (for now)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ReviewRequest(BaseModel):
    code: str
    language: Optional[str] = "Python"

class ReviewResponse(BaseModel):
    review: str

@app.get("/")
async def root():
    return {"message": "AI Code Reviewer API is running 🚀"}  # ✅ added (nice for browser check)

@app.post("/review", response_model=ReviewResponse)
async def review_endpoint(request: ReviewRequest):
    """Review code using Gemini LLM."""
    try:
        result = review_code(request.code, request.language)
        if not result:
            raise HTTPException(status_code=500, detail="LLM review failed")
        return ReviewResponse(review=result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Review error: {str(e)}")

@app.get("/health")
async def health():
    return {"status": "healthy"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)