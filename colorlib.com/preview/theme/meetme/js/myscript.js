$(document).ready(function () {
    console.log('Loaded MyScript');
    $('.imageGallery1 .light').simpleLightbox();
    $('.imageGallery2 .light').simpleLightbox();


    var typed = new Typed('#typed', {
        strings: [
            'Je suis Etudiant en ingénierie génie logiciel',
            'Je suis développeur web',
            'Je suis informaticien',
            'Je suis développeur Java',
            'Je suis développeur FullStack'
        ],
        typeSpeed: 60,
        startDelay: 0,
        backDelay: 1500,
        smartBackspace: true,
        loop: true,
    });

});

