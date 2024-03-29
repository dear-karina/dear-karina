def generate_template_1_content(updated_time: str, link_to_create_templated_issue: str):
    content = f"""# ✨ Hi, I'm Karina 🐣

```python
class Karina:
    def __init__(self):
        self.name = "Khả Vy"
        self.alias = "Karina"
        self.language = ["en_US", "vi_VN"]
        self.mbti= "infp"
        self.the_er_types = ["learner", "loner", "tester", "coder"]

    def say_hi(self):
        print(
            "Hi, Karina here.")
        print(
            "I'm just a normal person who happened to find joys in coding a little too late.")
        print(
            "How about you?")

    def show_my_message(self, plt):
        plt.show()


i = Karina()
i.say_hi()
i.show_my_message()
```

 <div align="center">
        <img src="static/images/quote.gif" alt="― J.R.R. Tolkien, The Fellowship of the Ring" style="border-radius: 2px;">
    </div>

## ☁️ Send your words 🐑

I'd also be delighted to hear from you!

Click [here]({link_to_create_templated_issue}) to add some words to my cloud!

<div style="max-width: 100%;">
    <img src="static/images/wordcloud.png" alt="My Word Cloud" style="border-radius: 2px; width: 100%;">
</div>

---

This file is auto-generated every time a new issue is opened.

Last update at {updated_time}
"""
    return content
