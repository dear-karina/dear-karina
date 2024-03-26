from wordcloud import WordCloud, ImageColorGenerator
from PIL import Image
import numpy as np
import matplotlib.pyplot as plt


def generate_word_cloud_image(text: str):
    mask = np.array(Image.open("../static/images/galaxy_color_map.jpg"))
    mask_resized = Image.fromarray(mask).resize((1000, 1000))
    mask_resized_np = np.array(mask_resized)

    wc = WordCloud(width=1000, height=1000, background_color='black', mask=mask_resized_np,
                   font_path='../static/fonts/AmaticSC-Bold.ttf', relative_scaling=0.3, margin=5,
                   prefer_horizontal=.5).generate(text)

    image_colors = ImageColorGenerator(mask_resized_np)
    recolor_wc = wc.recolor(color_func=image_colors)
    plt.figure(figsize=(10, 10))
    plt.imshow(recolor_wc, interpolation="bilinear")
    plt.axis("off")

    plt.savefig('../static/images/wordcloud.png', bbox_inches='tight', pad_inches=0)
