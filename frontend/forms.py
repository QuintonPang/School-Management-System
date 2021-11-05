from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django import forms
from api.models import User

class RegisterForm(UserCreationForm):


    email=forms.EmailField(label="Email")


    class Meta:

        #name of table

        model=User

        fields=["username","email","password1","password2"]