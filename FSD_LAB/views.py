from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'about_this_website.html')

def layout(request):
    return render(request,'layout.html')


def code1(request):
    return render(request,'code1.html')

def code2(request):
    return render(request,'code2.html')

def code3(request):
    return render(request,'code3.html')

def code4(request):
    return render(request,'code4.html')

def code5(request):
    return render(request,'code5.html')

def code6(request):
    return render(request,'code6.html')

def code7and8(request):
    return render(request,'code7&8.html')

def code9(request):
    return render(request,'code9.html')

def code10(request):
    return render(request,'code10.html')

def ack(request):
    return render(request,'acknowledge.html')

def me(request):
    return render(request,'me.html')

def test(request):
    return render(request,'test.html')



