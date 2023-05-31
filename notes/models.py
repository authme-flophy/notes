from django.db import models, transaction

# Create your models here.
class Note(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    version = models.IntegerField(default=1)

    # def save(self, *args, **kwargs):
    #     with transaction.atomic():
    #         super().save(*args, **kwargs)

    #         #create a new noteversion entry
    #         NoteVersion.objects.create(
    #             note=self,
    #             version=self.version,
    #             content=self.content
    #         )

    #         # Increment the version number
    #         self.version += 1
    #         super().save(*args, **kwargs)

    def __str__(self):
        return self.title

# class NoteVersion(models.Model):
#     note = models.ForeignKey(Note, on_delete=models.CASCADE)
#     version = models.IntegerField()
#     modified_at = models.DateTimeField(auto_now_add=True)
#     content = models.TextField()

#     def __str__(self):
#         return f"{self.note.title} - {self.version}"