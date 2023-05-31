from django.shortcuts import render
from django.views import generic
from rest_framework import generics
from notes.models import Note
from notes.serializers import NoteSerializer

# Create your views here.
class NoteListView(generic.ListView):
    model = Note
    template_name = "notes/index.html"
    context_object_name = 'notes'

# def homepage(request):
#     return render(request, "notes/index.html")

class NoteList(generics.ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer