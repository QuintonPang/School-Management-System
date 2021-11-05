from django.urls import path
from . import views

urlpatterns = [ 
    path('getAllUsers',views.UserView.as_view()),
    path('getAllTeachers',views.TeacherView.as_view()),
    path('getAllStudents',views.StudentView.as_view()),
    path('getAllQuizzes',views.QuizView.as_view()),
    path('getAllQuestions',views.QuestionView.as_view()),
    path('getAllResults',views.ResultView.as_view()),
    path('getAllStudentClasses',views.StudentClassView.as_view()),
]