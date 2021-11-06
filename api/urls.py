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

    # get
    path('getStudent/<int:student_id>',views.GetStudentView.as_view()),
    path('getQuiz/<int:quiz_id>',views.GetQuizView.as_view()),
    path('getQuiz/<int:question_id>',views.GetQuestionView.as_view()),

    # update
    path('updateStudent/<int:pk>',views.UpdateStudent.as_view()),
    path('updateQuiz/<int:pk>',views.UpdateQuiz.as_view()),
    path('updateQuestion/<int:pk>',views.UpdateQuestion.as_view()),

    # delete
    path('deleteQuestion/<int:pk>',views.DeleteQuestion.as_view()),
]