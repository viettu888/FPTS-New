document.addEventListener('DOMContentLoaded', function() {
    const modals = [
        { modal: '.moder-view', button: '.btnEZ', closeBtn: '.moder-close', closeIcon: '.moder-header .fa-xmark' },
        { modal: '.moder-viewno2', button: '.btnEG', closeBtn: '.moder-closeno2', closeIcon: '.moder-headerno2 .fa-xmark' },
        { modal: '.moder-viewno4', button: '.btnBCTN', closeBtn: '.moder-closeno4', closeIcon: '.moder-headerno4 .fa-xmark' },
        { modal: '.moder-viewno3', button: '.btnIr', closeBtn: '.moder-closeno3', closeIcon: '.moder-headerno3 .fa-xmark' },
        { modal: '.moder-viewno5', button: '.btnPTBV', closeBtn: '.moder-closeno5', closeIcon: '.moder-headerno5 .fa-xmark' },
        { modal: '.moder-viewno6', button: '.btnDLQC', closeBtn: '.moder-closeno6', closeIcon: '.moder-headerno6 .fa-xmark' }
    ];

    modals.forEach(function(item) {
        const modal = document.querySelector(item.modal);
        const openButton = document.querySelector(item.button);
        const closeButton = document.querySelector(item.closeBtn);
        const closeIcon = document.querySelector(item.closeIcon);

        openButton.addEventListener('click', function(event) {
            event.preventDefault();
            modal.classList.remove('hidez', 'hideno2', 'hideno3', 'hideno4', 'hideno5', 'hideno6');
        });

        closeButton.addEventListener('click', function() {
            modal.classList.add('hidez', 'hideno2', 'hideno3', 'hideno4', 'hideno5', 'hideno6');
        });

        closeIcon.addEventListener('click', function() {
            modal.classList.add('hidez', 'hideno2', 'hideno3', 'hideno4', 'hideno5', 'hideno6');
        });

        // Mouseenter event to handle any specific action on hover
        modal.addEventListener('mouseenter', function(e) {
            e.stopPropagation();
            // Add any specific action you want to perform when the mouse enters the modal
            console.log('Mouse entered the modal:', item.modal);
        });
    });
});


