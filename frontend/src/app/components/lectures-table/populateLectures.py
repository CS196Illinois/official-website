import csv
import json
from collections import OrderedDict

fields = ('lecture_id', 'title', 'date', 'slides', 'video')
entries = []

with open('./lecture_data.csv', 'r') as csvFile:
    reader = csv.DictReader(csvFile, fields)
    for row in reader:
        entry = OrderedDict()
        for field in fields:
            entry[field] = row[field]
        entries.append(entry)

output = { 'lectures' : entries}

with open('lectures.json', 'w') as jsonfile:
    json.dump(output, jsonfile)
    jsonfile.write('\n')
