import requests
import os
from dotenv import load_dotenv
from analyzer.prompt_engine import generate_prompt

load_dotenv()

API_KEY = os.getenv("OPENROUTER_API_KEY")

def review_code(code: str, language: str = "Python"):
    try:
        if not API_KEY:
            print("❌ API key not found. Check environment variables.")
            return None

        prompt = generate_prompt(code, language)

        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {API_KEY}",
                "Content-Type": "application/json"
            },
            json={
                "model": "meta-llama/llama-3-8b-instruct",
                "messages": [
                    {"role": "user", "content": prompt}
                ]
            }
        )

        data = response.json()

        # 🔥 DEBUG LOG (VERY IMPORTANT)
        print("🔍 API RESPONSE:", data)

        # ❌ Handle API error
        if "error" in data:
            print("❌ API Error:", data["error"])
            return None

        # ❌ Handle missing response
        if "choices" not in data or len(data["choices"]) == 0:
            print("❌ No choices in response")
            return None

        return data["choices"][0]["message"]["content"]

    except Exception as e:
        print(f"❌ Error during code review: {str(e)}")
        return None