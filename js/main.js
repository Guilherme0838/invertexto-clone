// Main JavaScript file for invertexto.com clone

// Utility functions
function showError(message, container = null) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    if (container) {
        container.appendChild(errorDiv);
    }
    
    // Auto-remove error after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.parentNode.removeChild(errorDiv);
        }
    }, 5000);
}

function showSuccess(message, container = null) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    if (container) {
        container.appendChild(successDiv);
    }
    
    // Auto-remove success message after 3 seconds
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.parentNode.removeChild(successDiv);
        }
    }, 3000);
}

function clearMessages(container) {
    const messages = container.querySelectorAll('.error-message, .success-message');
    messages.forEach(msg => msg.remove());
}

function validateInput(input, minLength = 1) {
    if (!input || input.trim().length < minLength) {
        return false;
    }
    return true;
}

// Text manipulation functions
function reverseText(text) {
    return text.split('').reverse().join('');
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function convertToLowerCase(text) {
    return text.toLowerCase();
}

function convertToTitleCase(text) {
    return text.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function removeDuplicateLines(text) {
    const lines = text.split('\n');
    const uniqueLines = [...new Set(lines)];
    return uniqueLines.join('\n');
}

function sortAlphabetically(text, ascending = true) {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const sorted = lines.sort((a, b) => {
        if (ascending) {
            return a.localeCompare(b, 'pt-BR');
        } else {
            return b.localeCompare(a, 'pt-BR');
        }
    });
    return sorted.join('\n');
}

function flipTextUpsideDown(text) {
    const flippedChars = {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
        'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
        'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
        'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ᖴ',
        'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N',
        'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ',
        'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z', '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ',
        '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', '.': '˙', ',': "'",
        '?': '¿', '!': '¡', '"': '„', "'": '‛', '(': ')', ')': '(', '[': ']', ']': '[',
        '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', '_': '‾'
    };
    
    return text.split('').map(char => flippedChars[char] || char).reverse().join('');
}

function addPrefixSuffix(text, prefix = '', suffix = '') {
    const lines = text.split('\n');
    return lines.map(line => prefix + line + suffix).join('\n');
}

function findAndReplace(text, searchTerm, replaceTerm, replaceAll = true) {
    if (replaceAll) {
        return text.replace(new RegExp(escapeRegExp(searchTerm), 'g'), replaceTerm);
    } else {
        return text.replace(searchTerm, replaceTerm);
    }
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function countCharacters(text) {
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const lines = text.split('\n').length;
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim() !== '').length;
    
    return {
        characters,
        charactersNoSpaces,
        words,
        lines,
        paragraphs
    };
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function randomizeList(text) {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const shuffled = shuffleArray(lines);
    return shuffled.join('\n');
}

function generateRandomNumbers(min, max, count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

function generatePassword(length = 12, includeUppercase = true, includeLowercase = true, includeNumbers = true, includeSymbols = true) {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    if (charset === '') return '';
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

function rollDice(sides = 6, count = 1) {
    const results = [];
    for (let i = 0; i < count; i++) {
        results.push(Math.floor(Math.random() * sides) + 1);
    }
    return results;
}

function drawLottery(items) {
    if (!items || items.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

// Mock AI function for synonym generation
function generateSynonyms(text) {
    return new Promise((resolve) => {
        // Simulate API delay
        setTimeout(() => {
            // Mock synonym replacement
            const synonymMap = {
                'casa': 'residência',
                'carro': 'automóvel',
                'bonito': 'belo',
                'grande': 'enorme',
                'pequeno': 'diminuto',
                'rápido': 'veloz',
                'devagar': 'lento',
                'feliz': 'alegre',
                'triste': 'melancólico',
                'trabalho': 'labor',
                'estudar': 'aprender',
                'comer': 'alimentar-se',
                'dormir': 'repousar',
                'andar': 'caminhar',
                'falar': 'conversar',
                'ver': 'observar',
                'ouvir': 'escutar',
                'pensar': 'refletir',
                'sentir': 'perceber'
            };
            
            let result = text;
            Object.keys(synonymMap).forEach(word => {
                const regex = new RegExp(`\\b${word}\\b`, 'gi');
                result = result.replace(regex, synonymMap[word]);
            });
            
            // If no synonyms were found, add a note
            if (result === text) {
                result = text + '\n\n[Nota: Esta é uma versão de demonstração. Algumas palavras podem não ter sinônimos disponíveis.]';
            }
            
            resolve(result);
        }, 1500);
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === '/') {
                e.preventDefault();
                searchInput.focus();
            }
        });
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const toolCards = document.querySelectorAll('.tool-card');
            
            toolCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(query) || description.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = query === '' ? 'flex' : 'none';
                }
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeSearch();
    
    // Add keyboard shortcut for search
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
});

// Export functions for use in individual tool pages
window.TextTools = {
    reverseText,
    convertToUpperCase,
    convertToLowerCase,
    convertToTitleCase,
    removeDuplicateLines,
    sortAlphabetically,
    flipTextUpsideDown,
    addPrefixSuffix,
    findAndReplace,
    countCharacters,
    randomizeList,
    generateRandomNumbers,
    generatePassword,
    rollDice,
    drawLottery,
    generateSynonyms,
    showError,
    showSuccess,
    clearMessages,
    validateInput
};
