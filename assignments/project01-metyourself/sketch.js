body {
    background-color: #1b1c21;
    color: #bfd0fc;
    font-family: 'span', serif;
    margin: 0;
    /* min-height: 100vh;
    display: flex;
    flex-direction: column; */
}


.main {
    margin: 5rem auto;
    min-height: 90vh;
}

/* Entry Animations for Search */
.main h1 {
    animation: fadeIn 100ms ease-in-out;
}

.main img {
    animation: fadeIn 200ms ease-in-out;
}

.main .search {
    animation: fadeIn 500ms ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translate(0, 16px);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* min-height: 100vh; */
    /* display: flex;
    flex-direction: column; */
}


.main h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 3px;
}

footer {
    color: #1b1c21;
    background-color: #bfd0fc;
    padding: 2rem 1rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    /* margin-top: auto; */
    /* position: absolute; */
    bottom: 0;
    width: 100%;
}

footer a {
    color: #1b1c21;
    text-decoration: none;
    border-bottom: 1px dotted #1b1c21;
    transition: all 0.2s ease-in-out;
}

footer a:focus,
footer a:hover {
    background-color: #1b1c21;
    padding: 2px 4px;
    color: #bfd0fc;
    transition: all 0.2s ease-in-out;
}

/* .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
} */

.search {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Search Field */
input[type="text"] {
    display: block;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #bfd0fc;
    font: italic 3rem/1.4 'span', serif;
    color: #bfd0fc;
    margin: 4rem auto 2rem auto;
    text-align: center;
}

/* Search Button */
button {
    border-radius: 32px;
    border: none;
    background-color: #BFD0FC;
    color: #1b1c21;
    padding: .5rem 1.5rem;
    font-size: 2rem;
    font-family: 'span', serif;
    cursor: pointer;
}

button:hover,
button:focus {
    background-color: #cddbff;
}

.disabled {
    opacity: 50%;
    cursor: not-allowed;
}


/* Artwork Metadata */

#bg-image {
    width: 100%;
    height: 100%;
    min-height: 85vh;
    background-size: cover;
    background-position: top center;
    margin: 0;
    z-index: 0;
}

.results {
    min-height: 85vh;
}

.artwork-info {
    background: #1B1C21;
    margin: 4rem;
    /* margin-top: 4rem;
    margin-left: 4rem; */
    padding: 2rem;
    max-width: 360px;

    animation-name: fadeIn;
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
}

.title {
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 1rem;
}

.artist-info {
    margin-bottom: 1rem;
}

.artist-info h2 {
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.didactic {
    margin-bottom: 3rem;
}

.btn-outline {
    border-radius: 32px;
    border: 1px solid #BFD0FC;
    background-color: transparent;
    color: #BFD0FC;
    padding: .5rem 1.5rem;
    font-size: 2rem;
    font-family: 'span', serif;
    display: inline-block;
    margin-bottom: 1rem;
    text-decoration: none;
}

/* Animating Buttons from Artist Info */
.artwork-info .btn-outline {
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
}

.artwork-info .button {
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
}

/* Animating Artwork Info Text */
.typed {
    overflow: hidden;
    /* white-space: nowrap; */
    width: 0;
    animation: typing;
    animation-duration: 1.5s;
    animation-timing-function: steps(30, end);
    animation-fill-mode: forwards;
}

@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}

artwork-info:nth-child(2) {
    animation-delay: 1s;
}

artwork-info:nth-child(3) {
    animation-delay: 2s;
}

artwork-info:nth-child(4) {
    animation-delay: 3s;
}



.alert-red {
    text-transform: uppercase;
    font-size: .8rem;
    letter-spacing: .1rem;
    color: #fff;
    background-color: rgb(216, 28, 35);
    border-radius: 16px;
    padding: 4px 8px;
    display: inline-block;
}

.alert-green {
    text-transform: uppercase;
    font-size: .8rem;
    letter-spacing: .1rem;
    color: #1b1c21;
    background-color: rgb(97, 234, 125);
    border-radius: 16px;
    padding: 4px 8px;
    display: inline-block;
}

/* Canvas Absolute Position (already declared in JS but not working) */
/* .p5Canvas {
    position: fixed;
}

#defaultCanvas0 {
    position: fixed;
} */

/* Overlay dive fades in and out */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1b1c21;
    z-index: 1;
    animation: fadeIn 0.5s ease-in-out;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

overlay-hidden {
    animation: fadeOut 0.5s ease-in-out;
}

.loading {
    font-size: 3rem;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
