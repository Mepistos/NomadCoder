# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.

start: 2022-09-03 2100
end: 
"""

from extractors.wwr import extract_wwr_jobs
from extractors.indeed import extract_indeed_jobs

keyword = input("What do you want to search for? ")

indeed = extract_indeed_jobs(keyword)
wwr = extract_wwr_jobs(keyword)

jobs = indeed + wwr

file = open(f"{keyword}.csv", "w")
file.write("Position,Company,Location,URL\n")

for job in jobs:
    file.write(f"{job['position']},{job['company']},{job['region']},{job['link']}\n")

file.close()
