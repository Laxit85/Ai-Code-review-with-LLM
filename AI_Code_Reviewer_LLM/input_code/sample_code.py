# Sample Python code for testing - contains some issues for LLM to find

def calculate_fibonacci(n):
    # Bug: No base case handling, inefficient recursive approach
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

def process_user_data(users):
    # Potential issues: No input validation, mutable default argument
    result = []
    for user in users:
        name = user.get('name', '').upper()
        age = user.get('age', 0)
        if age > 18:
            result.append({'name': name, 'adult': True})
    return result

# Test usage
print(calculate_fibonacci(10))
print(process_user_data([{'name': 'Alice', 'age': 25}, {'name': 'Bob', 'age': 17}]))

