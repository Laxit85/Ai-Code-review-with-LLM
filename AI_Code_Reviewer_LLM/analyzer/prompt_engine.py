def generate_prompt(code: str, language: str = 'Python') -> str:
    """
    Generate a structured prompt for code review using LLM.
    """
    return f"""
You are an expert {language} developer and code reviewer with 10+ years of experience.

Please analyze the following {language} code and provide a comprehensive review in this EXACT structured format:

---

**CODE QUALITY SCORE: X/10**

**1. BUGS & ERRORS**
- [List any bugs, syntax errors, logical errors, or potential issues]

**2. CODE IMPROVEMENTS**
- [Specific suggestions for better code structure, readability, maintainability]

**3. OPTIMIZED VERSION**
```
[Provide the complete optimized/improved version of the code]
```

**4. TIME COMPLEXITY**
- [Analyze time complexity - Best, Average, Worst cases]

**5. SPACE COMPLEXITY** 
- [Analyze space complexity - Best, Average, Worst cases]

**6. BEST PRACTICES VIOLATIONS**
- [List violations of language-specific best practices]

**7. SECURITY ISSUES**
- [Any security vulnerabilities found]

---

Code to review:
```
{code}
```

Respond ONLY with the structured format above. No additional text.
"""

