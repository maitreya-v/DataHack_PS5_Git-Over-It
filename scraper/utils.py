import requests
from bs4 import BeautifulSoup
import pandas as pd

user_agent = ({'User-Agent':
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) \
			AppleWebKit/537.36 (KHTML, like Gecko) \
			Chrome/90.0.4430.212 Safari/537.36',
			'Accept-Language': 'en-US, en;q=0.5'})

urls = {
        "mysore":"https://www.tripadvisor.com/Tourism-g304553-Mysuru_Mysore_Mysore_District_Karnataka-Vacations.html",
        "pune":"https://www.tripadvisor.in/Tourism-g297654-Pune_Pune_District_Maharashtra-Vacations.html",
        "mumbai":"https://www.tripadvisor.in/Tourism-g304554-Mumbai_Maharashtra-Vacations.html",
        "jaipur":"https://www.tripadvisor.in/Tourism-g304555-Jaipur_Jaipur_District_Rajasthan-Vacations.html",
        "manali":"https://www.tripadvisor.in/Tourism-g297618-Manali_Kullu_District_Himachal_Pradesh-Vacations.html"
    }

def scrape_hotels(location):

    r = requests.get(urls[location], headers=user_agent)
    htmlContent = r.content
    soup = BeautifulSoup(htmlContent, features='html.parser')

    doc = soup.find_all("a",{"class":"XUWut Ra _S z _Z w o v _Y Wh k _T wSSLS"})
    url2 = 'https://www.tripadvisor.in'+doc[0]['href']

    r = requests.get(url2, headers=user_agent)
    htmlContent2 = r.content
    soup2 = BeautifulSoup(htmlContent2, features='html.parser')
    list1 = []
    for i in range (10):
        dict1 = dict()
        dict1['id'] = i+1
        doc2 = soup2.find_all("div",{"class":"prw_rup prw_meta_hsx_responsive_listing ui_section listItem reducedWidth rounded"}) 
        name = doc2[i].find_all("a",{"class": "property_title prominent"})[0].contents[0]
        dict1['name'] = name
        doc3 = soup2.find_all("div", {"class":"priceBlock ui_column is-12-tablet"})
        price = doc3[i].find_all("div",{"class":"price autoResize"})[0].contents[0]
        dict1['price'] = price
        doc4 = soup2.find_all("span", {"class":"biGQs _P pZUbB hmDzD"})
        description = doc4[2*i+1].contents[1].contents[0]
        dict1['description'] = description
        list1.append(dict1)

    return list1

def scrape_attractions(location):

    r = requests.get(urls[location], headers=user_agent)
    htmlContent = r.content
    soup = BeautifulSoup(htmlContent, features='html.parser')

    doc = soup.find_all("a",{"class":"XUWut Ra _S z _Z w o v _Y Wh k _T wSSLS"})
    url2 = 'https://www.tripadvisor.in'+doc[2]['href']

    r = requests.get(url2, headers=user_agent)
    htmlContent2 = r.content
    soup2 = BeautifulSoup(htmlContent2, features='html.parser')
    list1 = []
    for i in range (10):
        dict1 = dict()
        dict1['id'] = i+1
        doc2 = soup2.find_all("div",{"class":"XfVdV o AIbhI"}) 
        name = doc2[i].contents[3]
        dict1['name'] = name
        doc3 = soup2.find_all("picture", {"class":"NhWcC _R"})
        img = doc3[i].find_all("img")[0]['src']
        dict1['img'] = img
        doc4 = soup2.find_all("div", {"class":"alPVI eNNhq rhmaA vkvpU yzLvM"})
        description = doc4[2*i+1].find_all("div", {"class":"biGQs _P pZUbB hmDzD"})
        dict1['description'] = description[0].contents[0]
        list1.append(dict1)
        print(list1)

    return list1