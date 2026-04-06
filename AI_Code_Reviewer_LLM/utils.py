def detect_language(code: str) -> str:
    """
    Detect programming language from code snippet.
    """
    code_lower = code.lower()
    
    if 'def ' in code_lower or 'import ' in code_lower or 'class ' in code_lower:
        return 'Python'
    elif 'public static void main' in code_lower or '.java' in code_lower:
        return 'Java'
    elif 'function ' in code_lower or 'const ' in code_lower:
        return 'JavaScript'
    elif '#include' in code_lower:
        return 'C++'
    else:
        return 'Unknown'

