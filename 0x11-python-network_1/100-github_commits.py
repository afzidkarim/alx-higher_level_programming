#!/usr/bin/python3
"""Lists the 10 most recent commits in a given GitHub repository."""
import requests
import sys


if __name__ == "__main__":
    url = f"https://api.github.com/repos/{sys.argv[2]}/{sys.argv[1]}/commits"

    vr = requests.get(url)
    commits = vr.json()
    try:
        for i in range(10):
            print("{}: {}".format(
                commits[i].get("sha"),
                commits[i].get("commit").get("author").get("name")))
    except IndexError:
        pass
