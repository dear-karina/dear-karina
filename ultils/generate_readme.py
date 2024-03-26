def generate_readme(content: str):
    with open("../README.md", "w") as file:
        file.write(content)
