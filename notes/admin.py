from django.contrib import admin
from notes.models import Note, NoteVersion

# Register your models here.
admin.site.register(Note)
admin.site.register(NoteVersion)