 const originalText = document.getElementById('text').innerHTML;
        let isOriginalText = true;

        function isValidColor(color) {
            // First check if it's a valid color name or hex code
            const tempElement = document.createElement('div');
            tempElement.style.backgroundColor = color;
            return tempElement.style.backgroundColor !== '';
        }

        function showError(message) {
            const errorElement = document.getElementById('errorMessage');
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            setTimeout(() => {
                errorElement.style.display = 'none';
            }, 3000);
        }

        function handleColorPicker() {
            const color = document.getElementById('colorPickerInput').value;
            document.body.style.backgroundColor = color;
            document.getElementById('colorInput').value = color;
        }

        function handleTextInput(event) {
            if (event.key === 'Enter') {
                applyColor();
            }
        }

        function applyColor() {
            const colorInput = document.getElementById('colorInput');
            const color = colorInput.value.trim();

            if (!color) {
                showError('Please enter a color name or code');
                return;
            }

            if (!isValidColor(color)) {
                showError('Invalid color. Please enter a valid color name or code (e.g. red, #FF0000)');
                return;
            }

            document.body.style.backgroundColor = color;
            // Update color picker to match the text input color
            try {
                const tempElement = document.createElement('div');
                tempElement.style.backgroundColor = color;
                const computedColor = getComputedStyle(tempElement).backgroundColor;
                const hexColor = rgbToHex(computedColor);
                document.getElementById('colorPickerInput').value = hexColor;
            } catch (error) {
                console.log('Color conversion error:', error);
            }
        }

        function rgbToHex(rgb) {
            // Convert RGB to HEX
            if (rgb.startsWith('rgb')) {
                const rgbValues = rgb.match(/\d+/g);
                if (rgbValues && rgbValues.length === 3) {
                    const r = parseInt(rgbValues[0]);
                    const g = parseInt(rgbValues[1]);
                    const b = parseInt(rgbValues[2]);
                    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                }
            }
            return '#000000'; // Default fallback
        }

        function toggleText() {
            const textElement = document.getElementById('text');
            if (isOriginalText) {
                textElement.innerHTML = 'I am testing inline Javascript';
            } else {
                textElement.innerHTML = originalText;
            }
            isOriginalText = !isOriginalText;
        }

        const buttonId = document.getElementById("Click");
        document.getElementById("Click").onclick = function() {
            alert("Button was Clicked.");
        }
        document.getElementById("Click").onmouseover = function() {
            document.getElementById("Click").style.color = "red";
        }
        document.getElementById("Click").onmouseout = function() {
            document.getElementById("Click").style.color = "yellow";
        }
