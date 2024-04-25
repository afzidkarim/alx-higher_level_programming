#!/bin/bash
# A Bash script that sends a JSON POST request to the URL passed as the first argument, and displays the response body.
curl -sX POST -H "Content-Type: application/json" --data "@$2" "$1"
