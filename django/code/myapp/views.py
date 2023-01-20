from django.shortcuts import render
import json

def index_a(request):
    data = {
        'app': 'A',
        'array': [1, 2, 3],
    }
    jsonData = json.dumps(data)
    return render(request, 'a.html', {'data': jsonData})

def index_b(request):
    data = {
        'app': 'B',
        'array': [1, 2, 3],
    }
    jsonData = json.dumps(data)
    return render(request, 'b.html', {'data': jsonData})
