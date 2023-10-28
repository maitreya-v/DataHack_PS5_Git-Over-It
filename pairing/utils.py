import numpy as np
import pandas as pd
from kmodes.kprototypes import KPrototypes
from .models import *

def cluster(pk):

    trip_obj = TripDetail.objects.get(id=pk)
    dest = trip_obj.destination
    s1 = trip_obj.start_date
    e1 = trip_obj.end_date
    trips = TripDetail.objects.filter(destination = dest)
    food_pref_list =[]
    age_list = []
    sex_list = []
    transport_list = []
    company_list =[]
    trip_type_list = []
    budget_list = []
    id_list = []
    for trip in trips:
        s2 = trip.start_date
        e2 = trip.end_date
        days = e2-s2
        days = days.total_seconds()
        a = max(s1, s2)
        b = max(e1, e2)
        if b-a<b-b:
            continue
        user_detail = UserDetail.objects.get(user = trip.user)
        food_pref_list.append(user_detail.food_pref)
        age_list.append(user_detail.age().total_seconds())
        sex_list.append(user_detail.sex)
        transport_list.append(trip.transport)
        company_list.append(trip.company)
        trip_type_list.append(trip.trip_type)
        budget = (trip.budget)/int((days)/86400)
        print(budget)
        budget_list.append(budget)
        id_list.append(trip.id)
    dict1 = {
        'food_pref': food_pref_list, 
        'age': age_list, 
        'transport': transport_list,
        'company': company_list,
        'trip_type': trip_type_list,
        'budget': budget_list,
        'id': id_list
        } 

    df = pd.DataFrame(dict1)
    categorical_features_idx = [0, 2, 3, 4, 5]
    mark_array=df.values
    kproto = KPrototypes(n_clusters=4, verbose=2, max_iter=20).fit(mark_array, categorical=categorical_features_idx)
    clusters = kproto.predict(mark_array, categorical=categorical_features_idx)
    df['cluster'] = list(clusters)

    for i in range(df.shape[0]):
        trip_obj2 = TripDetail.objects.get(id = df['id'][i])
        trip_obj2.cluster = df['cluster'][i]
        trip_obj2.save()
    trip_obj = TripDetail.objects.get(id=pk)
    return trip_obj.cluster
