import requests
import os
from dotenv import load_dotenv
from analyzer.prompt_engine import generate_prompt

load_dotenv()

API_KEY = os.getenv("OPENROUTER_API_KEY")

def review_code(code: str, language: str = "Python"):
    try:
        if not API_KEY:
            print("❌ API key not found. Check .env file.")
            return None

        prompt = generate_prompt(code, language)

        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {API_KEY}",
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost",
                "X-Title": "AI Code Reviewer"
            },
            json={
                "model": "meta-llama/llama-3-8b-instruct",  # ✅ WORKING
                "messages": [
                    {"role": "user", "content": prompt}
                ]
            }
        )

        data = response.json()

        # DEBUG
        # print(data)

        if "error" in data:
            print("❌ API Error:", data["error"]["message"])
            return None

        return data["choices"][0]["message"]["content"]

    except Exception as e:
        print(f"Error during code review: {str(e)}")
        return None