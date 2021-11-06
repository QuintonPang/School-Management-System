from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django import forms
from api.models import Student, User, Quiz, StudentClass, Question, Teacher

# forms.ModelForm does not include password confirmation

class RegisterUserForm(forms.ModelForm):

    class Meta:

        #name of table

        model=User

        fields="__all__"

class RegisterTeacherForm(forms.ModelForm):

    class Meta:

        model=Teacher

        fields="__all__"

class RegisterStudentForm(forms.ModelForm):

    class Meta:

        model=Student

        fields="__all__"

class RegisterQuizForm(forms.ModelForm):

    class Meta:

        model=Quiz

        fields="__all__"

class RegisterQuestionForm(forms.ModelForm):

    class Meta:

        model=Question

        fields="__all__"

class RegisterStudentClassForm(forms.ModelForm):

    class Meta:

        model=StudentClass

        fields="__all__"







