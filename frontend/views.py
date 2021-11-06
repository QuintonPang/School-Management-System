from django.shortcuts import render, redirect
from .forms import RegisterUserForm, RegisterQuestionForm, RegisterQuizForm, RegisterStudentClassForm, RegisterStudentForm, RegisterTeacherForm

# Create your views here.

def App(request):

    return render(request,'frontend/index.html')

    
def registerUser(request):


    if request.method == "POST":

        form = RegisterUserForm(request.POST)
        

        if form.is_valid():
    
            form.save()
            
            return redirect("/account/login")

    else:
     
        form = RegisterUserForm()

    return render(request,"registration/register.html",{"form":form})

    
def registerTeacher(request):

    if request.method == "POST":

        form = RegisterTeacherForm(request.POST)
        

        if form.is_valid():
    
            form.save()
            
            return redirect("/account/login")

    else:
     
        form = RegisterTeacherForm()

    return render(request,"registration/register.html",{"form":form})

def registerStudent(request):

    if request.method == "POST":

        form = RegisterStudentForm(request.POST)
        
        if form.is_valid():
    
            form.save()
            
            return redirect("./registerStudent")

    else:
     
        form = RegisterStudentForm()

    return render(request,"registration/register.html",{"form":form})

def registerQuiz(request):

    if request.method == "POST":

        form = RegisterQuizForm(request.POST)
        
        if form.is_valid():
    
            form.save()
            
            return redirect("./registerQuiz")

    else:
     
        form = RegisterQuizForm()

    return render(request,"registration/register.html",{"form":form})

def registerQuestion(request):

    if request.method == "POST":

        form = RegisterQuestionForm(request.POST)
        
        if form.is_valid():
    
            form.save()
            
            return redirect("./registerQuestion")

    else:
     
        form = RegisterQuestionForm()

    return render(request,"registration/register.html",{"form":form})

def registerStudentClass(request):

    if request.method == "POST":

        form = RegisterStudentClassForm(request.POST)
        
        if form.is_valid():
    
            form.save()
            
            return redirect("./registerStudentClass")

    else:
     
        form = RegisterStudentClassForm()

    return render(request,"registration/register.html",{"form":form})


