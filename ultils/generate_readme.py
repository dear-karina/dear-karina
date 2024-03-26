import os


def generate_readme(content: str):
    project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    file_path = os.path.join(project_dir, "README.md")
    with open(file_path, "w") as file:
        file.write(content)
