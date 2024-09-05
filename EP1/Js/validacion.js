document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const fields = ['username', 'rut', 'email', 'region', 'comuna', 'password', 'confirmPassword'];

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Validar campos requeridos
        fields.forEach(field => {
            const input = document.getElementById(field);
            const error = document.getElementById(`${field}Error`);
            if (!input.value.trim()) {
                showError(input, error, 'Este campo es requerido');
                isValid = false;
            } else {
                clearError(input, error);
            }
        });

        // Validar RUT chileno
        const rutInput = document.getElementById('rut');
        const rutError = document.getElementById('rutError');
        if (!validateRut(rutInput.value)) {
            showError(rutInput, rutError, 'RUT inválido');
            isValid = false;
        }

        // Validar email
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
            showError(emailInput, emailError, 'Email inválido');
            isValid = false;
        }

        // Validar contraseña
        const passwordInput = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');
        if (passwordInput.value.length < 8) {
            showError(passwordInput, passwordError, 'La contraseña debe tener al menos 8 caracteres');
            isValid = false;
        }

        // Confirmar contraseña
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        if (confirmPasswordInput.value !== passwordInput.value) {
            showError(confirmPasswordInput, confirmPasswordError, 'Las contraseñas no coinciden');
            isValid = false;
        }

        // Validar términos y condiciones
        const termsCheckbox = document.getElementById('terms');
        const termsError = document.getElementById('termsError');
        if (!termsCheckbox.checked) {
            showError(termsCheckbox, termsError, 'Debes aceptar los términos y condiciones');
            isValid = false;
        } else {
            clearError(termsCheckbox, termsError);
        }

        if (isValid) {
            alert('Formulario enviado con éxito!');
            form.reset();
        }
    });

    function showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
    }

    function clearError(input, errorElement) {
        input.classList.remove('error');
        errorElement.textContent = '';
    }

    function validateRut(rut) {
        // Implementación básica de validación de RUT chileno
        rut = rut.replace(/[.-]/g, '');
        if (!/^[0-9]{7,8}[0-9K]$/i.test(rut)) return false;
        const dv = rut.slice(-1).toUpperCase();
        const rutBody = rut.slice(0, -1);
        let sum = 0;
        let multiplier = 2;
        for (let i = rutBody.length - 1; i >= 0; i--) {
            sum += rutBody[i] * multiplier;
            multiplier = multiplier === 7 ? 2 : multiplier + 1;
        }
        const expectedDv = 11 - (sum % 11);
        const calculatedDv = expectedDv === 11 ? '0' : expectedDv === 10 ? 'K' : expectedDv.toString();
        return dv === calculatedDv;
    }
});