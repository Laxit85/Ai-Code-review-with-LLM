#!/usr/bin/env python3
"""
AI Code Reviewer LLM - Main entry point
Google Gemini-powered code analysis tool + FastAPI server
"""

import os
import sys
from pathlib import Path
from typing import Optional
import subprocess

from analyzer.llm_reviewer import review_code
from utils import detect_language

def read_code_file(file_path: str) -> Optional[str]:
    """Read code from file safely."""
    if not os.path.exists(file_path):
        print(f"❌ Error: File '{file_path}' not found.")
        return None

    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return f.read()
    except Exception as e:
        print(f"❌ Error reading file: {str(e)}")
        return None

def write_review_output(review: str, output_path: str) -> bool:
    """Write review output to file."""
    try:
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(review)
        print(f"✅ Review saved to: {output_path}")
        return True
    except Exception as e:
        print(f"❌ Error writing output: {str(e)}")
        return False

def print_preview(review: str):
    """Print formatted preview of review."""
    print("\n" + "=" * 60)
    print("📊 REVIEW PREVIEW")
    print("=" * 60)
    if review:
        preview = review[:500] if len(review) > 500 else review
        print(preview)
        if len(review) > 500:
            print("\n... (truncated)")
    else:
        print("⚠️ No review content available.")

def main(input_file: str = "input_code/sample_code.py"):
    """Main function to run code review."""
    print("🤖 AI Code Reviewer LLM Starting...\n")

    code = read_code_file(input_file)
    if not code:
        sys.exit(1)

    print("📖 Code loaded successfully.")

    language = detect_language(code)
    print(f"🔍 Detected language: {language}")

    print("🧠 Analyzing code with Google Gemini...\n")
    review = review_code(code, language)

    if not review:
        print("❌ Failed to generate review.")
        sys.exit(1)

    output_file = "report/review_output.txt"
    if write_review_output(review, output_file):
        print("\n🎉 Code Review Generated Successfully!")
        print_preview(review)
    else:
        sys.exit(1)

def run_cli():
    """Run CLI mode."""
    try:
        input_path = sys.argv[1] if len(sys.argv) > 1 else "input_code/sample_code.py"
        main(input_path)
    except KeyboardInterrupt:
        print("\n⚠️ Process interrupted by user.")
        sys.exit(0)
    except Exception as e:
        print(f"❌ Unexpected error: {str(e)}")
        sys.exit(1)

def run_api():
    """Run FastAPI server."""
    print("🚀 Starting FastAPI server on http://localhost:8000")
    print("📚 Interactive API docs: http://localhost:8000/docs")
    cmd = ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
    subprocess.run(cmd)

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "api":
        run_api()
    else:
        run_cli()

