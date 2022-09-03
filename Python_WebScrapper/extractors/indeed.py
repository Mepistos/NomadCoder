# -*- coding: utf-8 -*-
"""
Created on Sat Sep  3 23:49:47 2022

@author: abnks
"""

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

from bs4 import BeautifulSoup
from extractors.wwr import extract_wwr_jobs

def get_page_count(keyword):
    options = Options()
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")

    browser = webdriver.Chrome(options=options, executable_path=r'D:\NomadCoder\Python_WebScrapper\chromedriver_win32\chromedriver.exe')

    base_url = "https://kr.indeed.com/jobs?q="

    browser.get(f"{base_url}{keyword}")
    response = browser.page_source
    
    if response == None:
        print("Cant request page")
    else:
        soup = BeautifulSoup(response, "html.parser")
        pagination = soup.find("ul", class_="pagination-list")
        if pagination == None:
            return 1
        pages = pagination.find_all("li", recursive=False)
        count = len(pages)
        if count >= 5:
            return 5
        else:
            return count
        

def extract_indeed_jobs(keyword):
    pages = get_page_count(keyword)
    print("Found", pages, "pages")
    
    results = []
    for page in range(pages):
        options = Options()
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")

        browser = webdriver.Chrome(options=options, executable_path=r'D:\NomadCoder\Python_WebScrapper\chromedriver_win32\chromedriver.exe')

        base_url = "https://kr.indeed.com/jobs"
        final_url = f"{base_url}?q={keyword}&start={page*10}"
        print("requesting,", final_url)

        browser.get(final_url)
        response = browser.page_source

        if response == None:
            print("Cant request page")
        else:
            soup = BeautifulSoup(response, "html.parser")
            jobs_list = soup.find("ul", class_="jobsearch-ResultsList")
            jobs = jobs_list.find_all('li', recursive=False)
            for job in jobs:
                zone = job.find('div', class_="mosaic-zone")
                if zone == None:
                    anchor = job.select("h2 a")[0]
                    title = anchor['aria-label']
                    link = anchor['href']
                    company = job.find('span', class_="companyName")
                    location = job.find('div', class_="companyLocation")
                    job_data = {
                        'link': f'https://kr.indeed.com{link}',
                        'company': company.string.replace(',', ' '),
                        'region': location.string.replace(',', ' '),
                        'position': title.replace(',', ' ')
                    }
                    results.append(job_data)
                    
    return results