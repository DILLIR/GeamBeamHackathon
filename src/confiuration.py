import json


def load_config():
    with open("config.json", "r") as file:
        config = json.load(file)

    return config


def save_config(config):
    with open("config.json", "w") as file:
        json.dump(config, file, indent=4)
