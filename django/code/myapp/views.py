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

def index_memo(request):
    if request.method == 'POST':
        value = request.POST["value"]
        data = {
            'value': value,
        }
        jsonData = json.dumps(data)
        return render(request, 'memo-completed.html', {'data': jsonData})
    else:
        return render(request, 'memo.html')

def index_memo_completed(request):
    return render(request, 'memo.html')

