from django.shortcuts import render

# Create your views here.
def terminal(request):
    return render(request,'terminal.html')
