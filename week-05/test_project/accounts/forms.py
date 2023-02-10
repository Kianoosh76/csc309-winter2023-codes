from django import forms


class SignupForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField()
    password2 = forms.CharField()

    def clean(self):
        data = super().clean()
        if len(data.get('username', '')) < 6:
            self.add_error("username", "Username must be at least 6 characters")

        password = data.get('password', '')
        password2 = data.get('password2', '')

        if password != password2:
            self.add_error("password", "Passwords do not match")

        return data
