from wordcloud import WordCloud, ImageColorGenerator
from PIL import Image
import numpy as np
import matplotlib.pyplot as plt
import os


def generate_word_cloud_image(text: str):
    # Get the absolute path of the current script file
    project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

    # Specify the paths relative to the script directory
    mask_path = os.path.join(project_dir, "static/images/galaxy_color_map.jpg")
    font_path = os.path.join(project_dir, "static/fonts/AmaticSC-Bold.ttf")
    image_path = os.path.join(project_dir, "static/images/wordcloud.png")

    mask = np.array(Image.open(mask_path))
    mask_resized = Image.fromarray(mask).resize((1000, 1000))
    mask_resized_np = np.array(mask_resized)

    wc = WordCloud(width=1000, height=1000, background_color='black', mask=mask_resized_np,
                   font_path=font_path, relative_scaling=0.3, margin=5,
                   prefer_horizontal=.9).generate(text)

    image_colors = ImageColorGenerator(mask_resized_np)
    recolor_wc = wc.recolor(color_func=image_colors)
    plt.figure(figsize=(10, 10))
    plt.imshow(recolor_wc, interpolation="bilinear")
    plt.axis("off")

    # Save the image using the absolute path
    plt.savefig(image_path, bbox_inches='tight', pad_inches=0)
