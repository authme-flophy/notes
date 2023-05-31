from django.urls import path
from notes.views import (
    NoteList,
    NoteListView,
    NoteDetail
)
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('notes/', NoteListView.as_view(), name="homepage"),
    path('api/notes/', NoteList.as_view()),  
    path('api/notes/<int:pk>/', NoteDetail.as_view()),  
]