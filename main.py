import requests
import os
from dotenv import dotenv_values
from ultils.generate_word_cloud import generate_word_cloud_image
from ultils.generate_add_wordcloud_issue import generate_add_wordcloud_link
from ultils.generate_time_stamp import generate_formatted_timestamp
from ultils.generate_readme import generate_readme
from static.templates.template_1 import generate_template_1_content
import time

config = dotenv_values()
api_token = config.get("token") or os.getenv("token")
repository_owner = "dear-karina"
repository_name = "github_readme_updater"
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

cloud_input = "live laugh love " + issues_string

generate_word_cloud_image(cloud_input)
time.sleep(10)
add_wordcloud_link = generate_add_wordcloud_link(repository_owner, repository_name)
print("add_wordcloud_link")

time_stamp = generate_formatted_timestamp()
print(time_stamp)

readme_content = generate_template_1_content(time_stamp, add_wordcloud_link)
generate_readme(readme_content)
time.sleep(10)
print(readme_content)
