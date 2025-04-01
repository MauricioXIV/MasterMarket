from django import forms
from django.contrib import admin
from .models import Product

class ProductoAdminForm(forms.ModelForm):
    image_upload = forms.ImageField(required=False, label="Subir imagen")

    class Meta:
        model = Product
        fields = '__all__'

    def save(self, commit=True):
        instance = super().save(commit=False)
        if self.cleaned_data.get('image_upload'):
            image = self.cleaned_data['image_upload']
            image_path = f'media/products/{image.name}'
            with open(image_path, 'wb') as f:
                for chunk in image.chunks():
                    f.write(chunk)
            instance.image = image_path.replace('media/', '') 
        if commit:
            instance.save()
        return instance

class ProductoAdmin(admin.ModelAdmin):
    form = ProductoAdminForm
    list_display = ('title', 'image')

admin.site.register(Product, ProductoAdmin)
