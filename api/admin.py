from django.contrib import admin

# Register your models here.
from .models import Teacher, User, Student, StudentClass, Quiz, Question, Result

admin.site.register(Teacher)
admin.site.register(User)
admin.site.register(Student)
admin.site.register(StudentClass)
admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(Result)