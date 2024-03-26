import requests
import matplotlib.pyplot as plt
from dotenv import dotenv_values

config = dotenv_values()

# Your GitHub personal access token
token = config["token"]


# Function to get repository languages
def get_repo_languages(owner, repo):
    headers = {'Authorization': 'token ' + token}
    url = f'https://api.github.com/repos/{owner}/{repo}/languages'
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        return None


# Function to get list of repositories
def get_private_repositories(owner):
    headers = {'Authorization': 'token ' + token}
    url = f'https://api.github.com/user/repos?type=private&owner={owner}'
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return [repo['name'] for repo in response.json()]
    else:
        return None


# Your GitHub username
username = config["username"]

# Get list of private repositories
repos = get_private_repositories(username)

if repos:
    # Dictionary to store language bytes count
    language_summary = {}

    # Iterate over each repository
    for repo in repos:
        languages = get_repo_languages(username, repo)
        if languages:
            # Update language summary with bytes count from current repository
            for language, bytes_count in languages.items():
                if language in language_summary:
                    language_summary[language] += bytes_count
                else:
                    language_summary[language] = bytes_count

    # Sort languages by size
    sorted_summary = sorted(language_summary.items(),
                            key=lambda x: x[1], reverse=True)

    # Group small parts (< 10%) together as "other"
    threshold = 0.1
    labels = []
    sizes = []
    other_size = 0
    other_colors = plt.cm.tab20.colors
    color_index = 0
    # Color palette for "other"
    other_colors = list(other_colors)  # Convert tuple to list
    colors = [other_colors[0]] * color_index + \
             other_colors[1:]  # Assigning colors for "other"
    for language, bytes_count in sorted_summary:
        if bytes_count / sum(language_summary.values()) < threshold:
            other_size += bytes_count
        else:
            labels.append(language)
            sizes.append(bytes_count)
            color_index += 1
    if other_size > 0:
        labels.append('Other')
        sizes.append(other_size)
        colors = [other_colors[0]] * color_index + \
                 other_colors[1:]  # Assigning colors for "other"

    # Create pie chart without percentages
    plt.figure(figsize=(8, 6))
    plt.pie(sizes, labels=labels, startangle=90, colors=colors,
            wedgeprops=dict(width=0.3, edgecolor='w'))

    # Draw a transparent circle in the center
    centre_circle = plt.Circle((0, 0), 0.70, fc='white', alpha=0)
    fig = plt.gcf()
    fig.gca().add_artist(centre_circle)

    # Equal aspect ratio ensures that pie is drawn as a circle.
    plt.axis('equal')
    plt.title('Language Distribution across Private Repositories')
    plt.tight_layout()

    # Save chart as image
    # Save as PNG file with transparent background
    plt.savefig('language_distribution.png', transparent=True)

    # Display plot
    plt.show()
    plt.close()

else:
    print('Failed to fetch private repositories.')
