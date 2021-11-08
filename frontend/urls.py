from django.urls import path
from . import views

urlpatterns = [
    path('', views.App),
    path('teacher/registerStudent', views.App),
    path('teacher/registerQuiz', views.App),
    path('teacher/registerQuestion', views.App),
    path('teacher/registerClass', views.App),

    path('teacher/updateStudent', views.App),
    path('teacher/updateQuiz', views.App),
    path('teacher/updateQuestion', views.App),

    path('registerUser',views.registerUser),
    path('registerStudent',views.registerStudent),
    path('registerTeacher',views.registerTeacher),
    path('registerQuiz',views.registerQuiz),
    path('registerQuestion',views.registerQuestion),
    path('registerStudentClass',views.registerStudentClass),

]