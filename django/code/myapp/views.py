from django.shortcuts import render
import json

def index_template(request):
    data = {
        'app': 'Django',
        'array': [1, 2, 3],
    }
    jsonData = json.dumps(data)
    return render(request, 'index.html', {'data': jsonData})
