from django.shortcuts import render
from rest_framework import generics, status
from .models import Teacher, User, Student, StudentClass, Quiz, Question, Result
from .serializers import QuestionSerializer, QuizSerializer, ResultSerializer, StudentClassSerializer, StudentSerializer, TeacherSerializer, UserSerializer
from rest_framework.response import Response

# Create your views here.

class UserView(generics.ListAPIView):

    #overriding two methods

    #get all rooms from database

    #queryset is necessary, name cannot be changed

    queryset = User.objects.all()

    #serializer_class is necessary, name cannot be changed

    serializer_class = UserSerializer

class TeacherView(generics.ListAPIView):

    queryset = Teacher.objects.all()

    serializer_class = TeacherSerializer


class StudentView(generics.ListAPIView):

    queryset = Student.objects.all()

    serializer_class = StudentSerializer

class QuizView(generics.ListAPIView):

    queryset = Quiz.objects.all()

    serializer_class = QuizSerializer


class QuestionView(generics.ListAPIView):

    queryset = Question.objects.all()

    serializer_class = QuestionSerializer

class ResultView(generics.ListAPIView):

    queryset = Result.objects.all()

    serializer_class = ResultSerializer

class StudentClassView(generics.ListAPIView):

    queryset = StudentClass.objects.all()

    serializer_class = StudentClassSerializer

########## for queries ##########

class GetStudentView(generics.ListAPIView):
   
    def get_queryset(self):
        """
        This view should return a list of all the data for
        the student as determined by the student_id portion of the URL.
        """
        student_id = self.kwargs['student_id']
        return Student.objects.filter(student_id=student_id)

    serializer_class = StudentSerializer 

class GetQuizView(generics.ListAPIView):
   
    def get_queryset(self):

        student_id = self.kwargs['quiz_id']
        return Quiz.objects.filter(quiz_id=quiz_id)

    serializer_class = QuizSerializer 

class GetQuestionView(generics.ListAPIView):
   
    def get_queryset(self):

        question_id = self.kwargs['question_id']
        return Question.objects.filter(question_id = question_id)

    serializer_class = QuestionSerializer 

########## for updates ##########
class UpdateStudent(generics.UpdateAPIView):

    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    lookup_field = 'pk'

    def update(self, request, *args, **kwargs):
        
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data) #, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Student updated successfully"})

        else:
            return Response({"message": "failed", "details": serializer.errors})

class UpdateQuiz(generics.UpdateAPIView):

    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    lookup_field = 'pk'

    def update(self, request, *args, **kwargs):
        
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data) #, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Quiz updated successfully"})

        else:
            return Response({"message": "failed", "details": serializer.errors})

class UpdateQuestion(generics.UpdateAPIView):

    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    lookup_field = 'pk'

    def update(self, request, *args, **kwargs):
        
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data) #, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Question updated successfully"})

        else:
            return Response({"message": "failed", "details": serializer.errors})

########## for deleting ##########


class DeleteQuestion(generics.DestroyAPIView):

    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
    lookup_field = 'pk'

    # name of function doesn't matter
    def delete(self, request, *args, **kwargs):
        
        instance = self.get_object()
        instance.delete()
    
        return Response(status=status.HTTP_204_NO_CONTENT)