from django.shortcuts import render, redirect
from .forms import RegisterForm

# Create your views here.

def App(request):

    return render(request,'frontend/index.html')

    
def register(request):


    if request.method == "POST":

        form = RegisterForm(request.POST)
        

        if form.is_valid():
    
            form.save()
            
            return redirect("/account/login")

    else:
     
        form = RegisterForm()

    # (request, template_name, context)
    return render(request,"registration/register.html",{"form":form})


