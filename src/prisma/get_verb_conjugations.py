import json
from islenska import Bin
b = Bin()

verbs = [
    "eiga",
]
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
for verb in verbs:
    verb_inflections[verb] = {}
    verb_inflections[verb]["present_tense"] = {}
    verb_inflections[verb]["past_tense"] = {}
    for key in present_tense_inflection_tags:
        ksnid_list = b.lookup_variants(verb, "so", present_tense_inflection_tags[key])
        verb_inflections[verb]["present_tense"][key] = ksnid_list[0].bmynd

    for key in past_tense_inflection_tags:
        ksnid_list = b.lookup_variants(verb, "so", past_tense_inflection_tags[key]) 
        verb_inflections[verb]["past_tense"][key] = ksnid_list[0].bmynd

with open('verb_inflections.ts', 'w') as fp:
    json.dump(verb_inflections, fp)
