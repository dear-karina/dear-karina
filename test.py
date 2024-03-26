import matplotlib.pyplot as plt
from PIL import Image
import imageio.v2 as imageio


class Karina:
    def __init__(self):
        self.name = "Khả Vy"
        self.alias = "Karina"
        self.language = ["en_US", "vi_VN"]
        self.the_er_types = ["learner", "loner", "tester", "coder"]

    def say_hi(self):
        print(
            "Hi, Karina here. I'm just a normal person who happened to find joys in coding a little too late. How about you?")

    def generate_quote_image(self):
        quote = "All that is gold does not glitter,\nNot all those who wander are lost"

        # Load the GIF image
        gif_path = "giphy.gif"
        gif_image = imageio.imread(gif_path)

        # Create a figure and axes
        fig, ax = plt.subplots(figsize=(8, 6))
        ax.axis('off')  # Hide the axis

        # Set the background color and text properties
        ax.set_facecolor('none')
        ax.text(0.5, 0.5, quote, fontsize=24, color='gold', ha='center', va='center')

        # Plot the GIF image as the background
        ax.imshow(gif_image, aspect='auto', extent=(0, 1, 0, 1), alpha=0.5)

        # Save the figure as a series of frames
        frames = []
        for i in range(len(gif_image)):
            fig.canvas.draw()
            image = Image.frombytes('RGB', fig.canvas.get_width_height(), fig.canvas.buffer_rgba())
            frames.append(image)

        # Save the frames as an animated GIF
        output_gif_path = "output.gif"
        imageio.mimsave(output_gif_path, frames, format='GIF')

        print("Animated GIF generated successfully!")
        plt.close(fig)


if __name__ == "__main__":
    karina = Karina()
    karina.say_hi()
    karina.generate_quote_image()
