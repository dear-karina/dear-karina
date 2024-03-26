import requests
from dotenv import dotenv_values
from ultils.generate_word_cloud import generate_word_cloud_image

config = dotenv_values()
api_token = config["token"]
repository_owner = "dear-karina"
repository_name = "dear-karina"
api_url = f"https://api.github.com/repos/{repository_owner}/{repository_name}/issues"
params = {
    "state": "all",
    "per_page": 100
}
headers = {
    "Authorization": f"Bearer {api_token}",
    "Accept": "application/vnd.github.v3+json"
}
response = requests.get(api_url, params=params, headers=headers)
response.raise_for_status()
issues = response.json()
prefix = "wordcloud|add|"
matched_issues = [issue for issue in issues if issue["title"].startswith(prefix)]
strings = [issue["title"][len(prefix):].strip() for issue in matched_issues]

issues_string = " ".join(strings)

cloud_input = "live laugh love" + issues_string

generate_word_cloud_image(cloud_input)
