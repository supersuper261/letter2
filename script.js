function openEnvelope() {
    document.querySelector('.flap').style.animation = 'openFlap 1s forwards';
    document.querySelector('.flowers').style.animation = 'showFlowers 1s forwards';
}

// Add keyframe animations to styles.css:
// @keyframes openFlap {
//     to {
//         transform: translateY(-100%);
//     }
// }
//
// @keyframes showFlowers {
//     to {
//         top: 50%;
//     }
// }
