## Context
This project was started during the New Lab COVID-19 [Data Hack](https://newlab.com/event/covid-19-data-hack/) and aims to provide a variety of indices to assess
community vulnerability to the impact of COVID-19, including adverse health outcomes, and disparate socioeconomic harms, across the entire US at the county level. We intend this to be usable by a variety of stakeholders: by healthcare systems to identify testing and service deserts and effectively allocate existing resources, by community organizations to find outreach areas and understand needs, and by policymakers to inform funding and decision making.

**You can view and interact with our dataset and vulnerability indices on our [web app](https://dash-cvi-dashboard.herokuapp.com) or [simple version](arcg.is/5olsh)!**

## Data
Our dataset contains a range of health care, public health, physical and community infrastructure, socioeconomic, demographic, and COVID-19 specific 
information at the US county level. We include data from the following open access sources:
+ The New York Times COVID-19 [Data Repository](https://github.com/nytimes/covid-19-data)
+ The New York City Health Department COVID-19 [Data Repository](https://github.com/nychealth/coronavirus-data)
+ [The Robert Wood Johnson Foundation County Health Rankings and Roadmaps Program](https://www.countyhealthrankings.org/)
+ The Federal Communications Commission [Form 477 County Data on Internet Access Services](https://www.fcc.gov/general/form-477-county-data-internet-access-services)

A full description of the dataset including definitions for all included variables can be found in the [data dictionary](https://github.com/savvy379/covid_county_vulnerability/blob/master/data/full_dataset.md).

## Scoring
We implement a variety of vulnerability scores to help stakeholders assess needs in their area and plan how to best allocate their efforts and resources. The currently available scores are:
+ Severe COVID Case Complications
+ Risk of Severe Economic Harm

We are currently working on developing these scores:
+ Food Access Complications
+ Community Connectedness
+ Need for Mental Health Resources
+ Risk of Overwhelming Healthcare Systems
+ Information Deserts