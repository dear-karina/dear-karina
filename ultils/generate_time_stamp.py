from datetime import datetime


def get_formatted_timestamp():
    current_time = datetime.now().strftime("%-I:%M %p")
    return current_time
