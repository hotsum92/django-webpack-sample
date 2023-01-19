from django.shortcuts import render
import json

def index_a(request):
    data = {
        'app': 'A',
    }
    jsonData = json.dumps(data)
    return render(request, 'a.html', {'data': jsonData})

def index_b(request):
    data = {
        'app': 'B',
    }
    jsonData = json.dumps(data)
    return render(request, 'b.html', {'data': jsonData})
