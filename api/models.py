from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.fields.related import ForeignKey
# Create your models here.

# __str___ is shown when it is a foreign key in other tables

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
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    quiz_name = models.CharField(max_length=50)

    def __str__(self):
        return self.quiz_name


class Question(models.Model):

    question_id = models.AutoField(primary_key=True)
    quiz = models.ForeignKey(Quiz,on_delete=models.CASCADE)
    question = models.TextField()
    answer_a = models.TextField()
    answer_b = models.TextField()
    answer_c = models.TextField()
    answer_d = models.TextField()
    correct_choice = models.CharField(max_length=1)

    def __str__(self):
        return self.question
    
    
class StudentClass(models.Model):

    class_id = models.AutoField(primary_key=True)
    class_name = models.CharField(max_length=20)

    def __str__(self):
        return self.class_name



class Student(models.Model):

    student_id = models.AutoField(primary_key=True)
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    # acts as foreign key to student table
    student_class = models.ForeignKey(StudentClass, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class Result(models.Model):

    result_id = models.AutoField(primary_key=True)
    result_question = models.ForeignKey(Question,on_delete=models.CASCADE)
    result_student = models.ForeignKey(Student,on_delete=models.CASCADE)

    def __str__(self):
        return self.result_student + " " + self.result_question