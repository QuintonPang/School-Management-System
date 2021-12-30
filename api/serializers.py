from rest_framework import serializers
from .models import Teacher, User, Student, StudentClass, Quiz, Question, Result

class UserSerializer(serializers.ModelSerializer):

    class Meta:

        model = User

        #fields = ('email','username','password','user_type','is_superuser','is_active','is_staff') # order does not matter, can ignore a field
        fields = '__all__' # all fields

class TeacherSerializer(serializers.ModelSerializer):

    username = serializers.CharField(source='user.username')

    class Meta:

        model = Teacher

        fields = '__all__' 

        extra_fields=  ['username']

class StudentSerializer(serializers.ModelSerializer):

    username = serializers.CharField(source='user.username')
    class_name = serializers.CharField(source='student_class.class_name')

    class Meta:

        model = Student

        fields =  '__all__'

        extra_fields=  ['username','class_name']


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

        model = Result

        fields = '__all__' 


class StudentClassSerializer(serializers.ModelSerializer):

    class Meta:

        model = StudentClass

        fields = '__all__' 

