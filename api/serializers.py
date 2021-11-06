from rest_framework import serializers
from .models import Teacher, User, Student, StudentClass, Quiz, Question, Result

class UserSerializer(serializers.ModelSerializer):

    class Meta:

        model = User

        #fields = ('email','username','password','user_type','is_superuser','is_active','is_staff') # order does not matter, can ignore a field
        fields = '__all__' # all fields

class TeacherSerializer(serializers.ModelSerializer):

    class Meta:

        model = Teacher

        fields = '__all__' 

class StudentSerializer(serializers.ModelSerializer):

    class Meta:

        model = Student

        fields = '__all__' 


class QuizSerializer(serializers.ModelSerializer):

    class Meta:

        model = Quiz

        fields = '__all__' 


class QuestionSerializer(serializers.ModelSerializer):

    class Meta:

        model = Question

        fields = '__all__' 


class ResultSerializer(serializers.ModelSerializer):

    class Meta:

        model = Teacher

        fields = '__all__' 


class StudentClassSerializer(serializers.ModelSerializer):

    class Meta:

        model = Teacher

        fields = '__all__' 

