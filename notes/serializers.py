from rest_framework import serializers
from notes.models import Note, NoteVersion

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = (
            "id",
            "title",
            "content",
        )