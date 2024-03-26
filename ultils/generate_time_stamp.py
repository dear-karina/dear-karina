from datetime import datetime


def generate_formatted_timestamp():
    current_datetime = datetime.now().strftime("%-I.%M %p %d-%m-%Y")
    return current_datetime
