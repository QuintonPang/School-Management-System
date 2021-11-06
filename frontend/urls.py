from django.urls import path
from . import views

urlpatterns = [
    path('', views.App),
    path('registerUser',views.registerUser),
    path('registerStudent',views.registerStudent),
    path('registerTeacher',views.registerTeacher),
    path('registerQuiz',views.registerQuiz),
    path('registerQuestion',views.registerQuestion),
    path('registerStudentClass',views.registerStudentClass),
]