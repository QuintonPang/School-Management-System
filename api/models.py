from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.fields.related import ForeignKey
# Create your models here.

class User(AbstractUser):

    USER_TYPE_CHOICES = (
        (1,'student'),
        (2,'teacher'),
    )

    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES,default=2)

   #is_student = models.BooleanField()
   #is_teacher = models.BooleanField()

    def __str__(self):
        return self.username



class Teacher(models.Model):

    teacher_id = models.AutoField(primary_key=True)
    user = models.OneToOneField(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class Quiz(models.Model):

    quiz_id = models.AutoField(primary_key=True)
    quizz = models.ForeignKey(Teacher, on_delete=models.SET_NULL, blank=True, null=True)
    quiz_name = models.CharField(max_length=50)


class Result(models.Model):

    result_id = models.AutoField(primary_key=True)
    
class Question(models.Model):

    question_id = models.AutoField(primary_key=True)
    question = models.ForeignKey(Quiz,on_delete=models.SET_NULL, blank=True, null=True)
    result_question = models.ForeignKey(Result,on_delete=models.SET_NULL, blank=True, null=True)
    question = models.TextField()
    answer_a = models.TextField()
    answer_b = models.TextField()
    answer_c = models.TextField()
    answer_d = models.TextField()
    correct_choice = models.CharField(max_length=1)
    
class Student(models.Model):

    student_id = models.AutoField(primary_key=True)
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    result = models.ForeignKey(Result,on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.user.username

class StudentClass(models.Model):

    class_id = models.AutoField(primary_key=True)
    class_name = models.CharField(max_length=20)
    # acts as foreign key to student table
    student = models.ForeignKey(Student, on_delete=models.SET_NULL, blank=True, null=True)