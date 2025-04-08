// Product Quick View Modal
document.addEventListener('DOMContentLoaded', function() {
    const quickViewButtons = document.querySelectorAll('.quick-actions button:last-child');
    const productModal = document.getElementById('productModal');
    const closeModal = document.getElementById('closeModal');
    quickViewButtons.forEach(button => {
    button.addEventListener('click', function(e) {
    e.preventDefault();
    productModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    });
    });
    closeModal.addEventListener('click', function() {
    productModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    });
    productModal.addEventListener('click', function(e) {
    if (e.target === productModal) {
    productModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    }
    });
    // Chat Widget
    const chatToggle = document.getElementById('chatToggle');
    const chatWidget = document.getElementById('chatWidget');
    const closeChat = document.getElementById('closeChat');
    chatToggle.addEventListener('click', function() {
    chatWidget.classList.toggle('hidden');
    });
    closeChat.addEventListener('click', function() {
    chatWidget.classList.add('hidden');
    });
    });