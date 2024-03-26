import urllib.parse


def generate_issue_name():
    return "wordcloud|add|<INSERT-WORD(s)>"


def generate_issue_description():
    return """Just replace <INSERT-WORD(s)> with your word(s) - don't remove the `wordcloud|add|` 🌝
       
Then click 'Submit new issue'

**Code of Conduct:**  
- Please do not blatantly self promote (i.e. constantly spam-add your own name)
- No swearing, insults or inappropriate content. I may have to delete your issues if such things happen 🌚.
"""


def generate_add_wordcloud_link(owner: str, repo_name: str):
    title = generate_issue_name()
    body = generate_issue_description()

    encoded_title = urllib.parse.quote(title)
    encoded_body = urllib.parse.quote(body)

    link = f"https://github.com/{owner}/{repo_name}/issues/new?title={encoded_title}&body={encoded_body}"
    return link
