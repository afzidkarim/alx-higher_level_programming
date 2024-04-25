#!/bin/bash
# A bash script gets request status code. -w to output words.
curl -s -w %"{http_code}" -o /dev/null "$1"
