import os

project_name = "friend-wish"

# Folders
folders = [
    f"{project_name}/frontend",
    f"{project_name}/frontend/ReactApp",
    f"{project_name}/backend"
]

# Files
files = [
    f"{project_name}/frontend/index.html",
    f"{project_name}/frontend/style.css",
    f"{project_name}/frontend/script.js",
    f"{project_name}/frontend/ReactApp/App.js",
    f"{project_name}/backend/server.js",
    f"{project_name}/backend/wish.py",
    f"{project_name}/README.md"
]

# Create folders
for folder in folders:
    os.makedirs(folder, exist_ok=True)

# Create files
for file in files:
    if not os.path.exists(file):
        with open(file, "w") as f:
            f.write("")  # empty file

print("✅ friend-wish project structure created successfully!")
