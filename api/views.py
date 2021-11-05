from django.shortcuts import render
from rest_framework import generics
from .models import Teacher, User, Student, StudentClass, Quiz, Question, Result
from .serializers import QuestionSerializer, QuizSerializer, ResultSerializer, StudentClassSerializer, StudentSerializer, TeacherSerializer, UserSerializer

# Create your views here.

class UserView(generics.ListCreateAPIView):

    #overriding two methods

    #get all rooms from database

    #queryset is necessary, name cannot be changed

    queryset = User.objects.all()

    #serializer_class is necessary, name cannot be changed

    serializer_class = UserSerializer

class TeacherView(generics.ListCreateAPIView):

    queryset = Teacher.objects.all()

    serializer_class = TeacherSerializer


class StudentView(generics.ListCreateAPIView):

    queryset = Student.objects.all()

    serializer_class = StudentSerializer

class QuizView(generics.ListCreateAPIView):

    queryset = Quiz.objects.all()

    serializer_class = QuizSerializer


class QuestionView(generics.ListCreateAPIView):

    queryset = Question.objects.all()

    serializer_class = QuestionSerializer

class ResultView(generics.ListCreateAPIView):

    queryset = Result.objects.all()

    serializer_class = ResultSerializer

class StudentClassView(generics.ListCreateAPIView):

    queryset = StudentClass.objects.all()

    serializer_class = StudentClassSerializer









