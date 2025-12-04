import re
def is_valid_email(email):
    """
    Validate the given email address using a regular expression.

    Args:
        email (str): The email address to validate.

    Returns:
        bool: True if the email address is valid, False otherwise.
    """
    email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(email_regex, email) is not None

email = input("Enter the email: ")
if is_valid_email(email):
    print("The email address is valid.")
else:
    print("The email address is invalid.")