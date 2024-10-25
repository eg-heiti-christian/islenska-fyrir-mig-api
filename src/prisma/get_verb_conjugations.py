import json
import csv
import os
from islenska import Bin
b = Bin()

verbs_array = []

with open('./verbs_seed.csv', newline='', encoding='utf-8') as csvfile:
    csvreader = csv.reader(csvfile, delimiter=',')
    for row in csvreader:
        verbs_array = row

present_tense_inflection_tags = {
    "singularFirstPerson": "GM-FH-NT-1P-ET",
    "pluralFirstPerson": "GM-FH-NT-1P-FT",
    "singularSecondPerson": "GM-FH-NT-2P-ET",
    "pluralSecondPerson": "GM-FH-NT-2P-FT",
    "singularThirdPerson": "GM-FH-NT-3P-ET",
    "pluralThirdPerson": "GM-FH-NT-3P-FT",
}
past_tense_inflection_tags = {
    "singularFirstPerson": "GM-FH-ÞT-1P-ET",
    "pluralFirstPerson": "GM-FH-ÞT-1P-FT",
    "singularSecondPerson": "GM-FH-ÞT-2P-ET",
    "pluralSecondPerson": "GM-FH-ÞT-2P-FT",
    "singularThirdPerson": "GM-FH-ÞT-3P-ET",
    "pluralThirdPerson": "GM-FH-ÞT-3P-FT",
}

verb_inflections = {}
for verb in verbs_array:
    verb_inflections[verb] = {}
    verb_inflections[verb]["present_tense"] = {}
    verb_inflections[verb]["past_tense"] = {}
    for key in present_tense_inflection_tags:
        ksnid_list = b.lookup_variants(verb, "so", present_tense_inflection_tags[key])
        if (len(ksnid_list) != 0):
            verb_inflections[verb]["present_tense"][key] = ksnid_list[0].bmynd
        else:
            print("Could not find present ksnid for verb: " + verb)

    for key in past_tense_inflection_tags:
        ksnid_list = b.lookup_variants(verb, "so", past_tense_inflection_tags[key]) 
        if (len(ksnid_list) != 0):
            verb_inflections[verb]["past_tense"][key] = ksnid_list[0].bmynd
        else:
            print("Could not find past ksnid for verb: " + verb)

with open('verb_inflections.ts', 'w') as fp:
    json.dump(verb_inflections, fp)
