/* ========================================
   CONFIGURACIÓN INICIAL
   ======================================== */

// IMPORTANTE: Cambia esta fecha a la fecha en que empezaron a ser novios
// Formato: "YYYY-MM-DD" (Año-Mes-Día)
const RELATIONSHIP_START_DATE = "2024-11-27";

// Texto de la carta romántica para el efecto de máquina de escribir
const LOVE_LETTER = `Desde hace un año (o más) que me encuentro totalmente enamorado de ti, no hay defecto alguno que encuentre en todo tú ser, durante este año juntos me he dado cuenta que eres todo lo que siempre había querido hecho realidad y no hay nada más que le pueda pedir a la vida si te tengo junto a mí, te amo infinitamente y te escogería en todas las vidas, quédate conmigo siempre, niña preciosa. 💕`;

// Mensajes para el botón interactivo
const LOVE_MESSAGES = [
    "Es que eres tú, no quiero a nadie más 💙",
    "It's you, I don't want anyone else 💙",
    "C'est toi, je ne veux personne d'autre 💙",
    "Es bist du, ich will niemand anderen 💙",
    "Это потому что это ты, я не хочу никого другого 💙",
    "É que é você, não quero mais ninguém 💙",
    "당신이니까요, 다른 사람은 원하지 않아요 💙",
    "Sen olduğun için, başka kimseyi istemiyorum 💙"
];
// Archivos multimedia disponibles (fotos y videos)
const MEDIA_FILES = [
'04E7C4AA-D6A9-4B7C-BC9A-A6FF21478DA3.jpg',
    '0A29C997-F9F1-4D23-9D09-B61045372C98.jpg',
    '0ADBD832-B1E9-4F94-BFBF-D4F3EA0C48E1.jpg',
    '0BB6F5B2-B96F-4239-B95B-48C754CB8F2A.jpg',
    '112c055060a74bb4ba1ed6107651b6c8.mov',
    '11b81efadf8548fea39ba7ac9426d91e.mov',
    '1B2A469D-C8C9-4624-9FA5-B65B4F5E2569.jpg',
    '2493C7D2-F7E4-4A84-843C-339A9DFB5538.jpg',
    '2BC7D9ED-B02E-405A-A5C9-DAE49452C2D9.jpg',
    '331DCBE2-E568-4AF0-8FB0-12BBD8B85769.jpg',
    '37A0AA1F-3BA6-473C-9958-82BD6DF0E9BF.jpg',
    '40505A71-41E0-4F42-BD8C-71F211B1F658.jpg',
    '4A50917D-6602-469A-A2E4-1A483C4271C1.jpg',
    '4a76480ab82a4eefb8d406b252090b32.mov',
    '4E89F4A7-3632-4A69-B2D4-F6A353C9DDDE.jpg',
    '4FFE1463-97A1-4A13-AA27-7334C12F92BD.jpg',
    '54B442C7-BAE2-49D6-98D2-4659B69121B6.jpg',
    '5BA01B8F-1E04-437E-A497-BD4DEDBEBDA3.jpg',
    '6418565760ec4614885b12db818898e3.mov',
    '716da8572bfc4fbbaf494d8a72aa5d19.mov',
    '83E09CE7-AB9C-4BBA-A83C-AA060BB61D96.jpg',
    '9ceb5d7a0b91461a8e4cd986b56f795d.mov',
    'A1C4F6FA-D063-4C0E-A8FF-C9AE29017C26.jpg',
    'AD591ACE-75A9-4EEB-A9BC-52C2DDB620B5.jpg',
    'AE003D28-5B11-4505-A853-90CB99F17F8D.JPG',
    'AE721E30-1530-4202-A8E0-630BDCEB2B29.jpg',
    'B6A9326B-1026-4F87-9557-6D0F6B643795.jpg',
    'BBDC2EA8-0DAB-46F0-B222-BAC27A46A6DA.jpg',
    'cf45f2b824ac438aa22ee36ed1a05f89.mov',
    'DF897977-CCC1-4E47-BC49-6219195A8550.jpg',
    'E5211BFD-78FD-48C7-BCE7-695CA0153E6C.jpg',
    'e9813f9f47d345c59835a50b5875e126.mov',
    'ED1DD0FE-FE08-43D4-8D45-3A13618DD5B7.jpg',
    'ED6E0A85-D71A-4512-B2FF-0EAF57576E6B.jpg',
    'EDD15D1D-725C-4552-A7EE-415A594C91B8.jpg',
    'f96f74af1c4d46da9d75bd50f54e9cbb.mov',
    'FA9BADCC-8A41-4526-92CD-C07880E19221.jpg',
    'FC8A6312-42B5-4E4D-BB92-32F5744BB8FF.jpg',
    'FD35AEB3-BDC7-4D1D-8C81-207AEA84A504.jpg',
    'FE2EB494-D463-4D1F-BFD6-CE209C677BFA.jpg'
];

// Extensiones de video soportadas
const VIDEO_EXTENSIONS = ['mp4', 'webm', 'mov', 'avi', 'mkv'];

// Función para generar automáticamente el array MEDIA_ITEMS
function generateMediaItems() {
    return MEDIA_FILES.map((filename, index) => {
        const extension = filename.split('.').pop().toLowerCase();
        const isVideo = VIDEO_EXTENSIONS.includes(extension);
        
        return {
            type: isVideo ? 'video' : 'image',
            src: `media/${filename}`,
            alt: `${isVideo ? 'Video' : 'Foto'} ${index + 1}`
        };
    });
}

// Generar MEDIA_ITEMS automáticamente
const MEDIA_ITEMS = generateMediaItems();

// Función para obtener mensajes de error de video más descriptivos
function getVideoErrorMessage(errorCode) {
    switch(errorCode) {
        case 1:
            return 'Carga abortada';
        case 2:
            return 'Error de red';
        case 3:
            return 'Formato no soportado';
        case 4:
            return 'Archivo no encontrado';
        default:
            return 'Error desconocido';
    }
}

// CONFIGURACIÓN DE MÚSICA DE FONDO
const MUSIC_VOLUME = 0.3; // Volumen inicial (0.0 a 1.0, 0.3 = 30%)

// CONFIGURACIÓN DEL ROMPECABEZAS
const PUZZLE_MESSAGE = "Juntos, todo encaja 💖";

/* ========================================
   MÚSICA DE FONDO
   ======================================== */

function setupBackgroundMusic() {
    const audio = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicControl = document.getElementById('musicControl');
    const volumeControl = document.getElementById('volumeControl');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeLabel = document.getElementById('volumeLabel');
    const musicIcon = musicToggle.querySelector('.music-icon');
    
    if (!audio || !musicToggle) return;
    
    // Configurar volumen inicial
    audio.volume = MUSIC_VOLUME;
    
    // Toggle play/pause
    musicToggle.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(e => {
                console.log('Error al reproducir música:', e);
            });
            musicIcon.textContent = '🎵';
            musicToggle.classList.add('playing');
        } else {
            audio.pause();
            musicIcon.textContent = '🔇';
            musicToggle.classList.remove('playing');
        }
    });
    
    // Mostrar/ocultar control de volumen al hacer hover
    musicControl.addEventListener('mouseenter', () => {
        volumeControl.classList.remove('hidden');
    });
    
    musicControl.addEventListener('mouseleave', () => {
        setTimeout(() => {
            volumeControl.classList.add('hidden');
        }, 1000);
    });
    
    // Control de volumen
    volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        audio.volume = volume;
        volumeLabel.textContent = e.target.value + '%';
        
        // Cambiar icono según el volumen
        if (volume === 0) {
            musicIcon.textContent = '🔇';
        } else if (volume < 0.5) {
            musicIcon.textContent = '🔉';
        } else {
            musicIcon.textContent = '🔊';
        }
    });
    
    setTimeout(() => {
        audio.play().catch(() => {
            console.log('💡 Haz clic en el botón de música para reproducir');
            musicIcon.textContent = '🔇';
        });
    }, 2000);
}

/* ========================================
   CONTADOR DE VISITAS (Pensado en ti)
   ======================================== */

function updateVisitCount() {
    // Obtener el contador actual del localStorage
    let visitCount = localStorage.getItem('visitCount');
    
    if (!visitCount) {
        // Iniciar en 212221 si es la primera visita
        visitCount = 212220;
    }
    
    // Incrementar el contador
    visitCount = parseInt(visitCount) + 1;
    
    // Guardar en localStorage
    localStorage.setItem('visitCount', visitCount);
    
    // Actualizar en la página con animación
    const visitElement = document.getElementById('visitCount');
    if (visitElement) {
        // Animación de contador
        animateNumber(visitElement, 0, visitCount, 1500);
    }
}

function animateNumber(element, start, end, duration) {
    let startTime = null;
    
    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

/* ========================================
   SOBRE DE CARTA INTERACTIVO
   ======================================== */

function setupLetter() {
    const envelope = document.getElementById('letterEnvelope');
    const letterContent = document.getElementById('letterContent');
    
    if (envelope && letterContent) {
        envelope.addEventListener('click', function() {
            // Ocultar sobre con animación
            envelope.style.opacity = '0';
            envelope.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                envelope.style.display = 'none';
                letterContent.classList.remove('hidden');
                
                // Mostrar contenido con animación
                setTimeout(() => {
                    letterContent.classList.add('show');
                    
                    // Iniciar efecto de máquina de escribir
                    setTimeout(() => {
                        const typewriterElement = document.getElementById('typewriter-text');
                        typeWriter(LOVE_LETTER, typewriterElement, 30);
                    }, 500);
                }, 100);
            }, 500);
        });
    }
}

/* ========================================
   ROMPECABEZAS (Sistema de Click/Selección)
   ======================================== */

let puzzleSolved = false;
let selectedPiece = null;
let currentPuzzleImage = null;

function initPuzzle() {
    const board = document.getElementById('puzzleBoard');
    const resetBtn = document.getElementById('puzzleResetBtn');
    
    if (!board) return;
    
    // Seleccionar una imagen aleatoria de las fotos disponibles
    const imageFiles = MEDIA_FILES.filter(file => {
        const ext = file.split('.').pop().toLowerCase();
        return !VIDEO_EXTENSIONS.includes(ext);
    });
    
    if (imageFiles.length === 0) {
        board.innerHTML = '<p style="text-align: center; padding: 2rem;">No hay fotos disponibles para el rompecabezas</p>';
        return;
    }
    
    currentPuzzleImage = `media/${imageFiles[Math.floor(Math.random() * imageFiles.length)]}`;
    
    // Crear las piezas del rompecabezas
    createPuzzle(board, currentPuzzleImage);
    
    // Botón de reinicio
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            puzzleSolved = false;
            selectedPiece = null;
            document.getElementById('puzzleMessage').classList.remove('show');
            document.getElementById('puzzleMessage').classList.add('hidden');
            // Usar nueva imagen al reiniciar
            currentPuzzleImage = `media/${imageFiles[Math.floor(Math.random() * imageFiles.length)]}`;
            createPuzzle(board, currentPuzzleImage);
        });
    }
}

function createPuzzle(board, imageUrl) {
    board.innerHTML = '';
    selectedPiece = null;
    
    // Crear array de índices [0-8] y mezclarlos
    let indices = Array.from({length: 9}, (_, i) => i);
    
    // Mezclar hasta que NO esté ordenado
    do {
        indices = shuffleArray(indices);
    } while (isArraySorted(indices));
    
    // Crear las 9 piezas
    for (let i = 0; i < 9; i++) {
        const piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.dataset.correctIndex = indices[i]; // Qué pieza es (0-8)
        piece.dataset.currentPosition = i; // Dónde está ahora
        
        // Calcular la posición del background según qué pieza es
        const col = indices[i] % 3;
        const row = Math.floor(indices[i] / 3);
        
        piece.style.backgroundImage = `url('${imageUrl}')`;
        piece.style.backgroundPosition = `${col * -100}% ${row * -100}%`;
        
        // Event listener para click
        piece.addEventListener('click', () => handlePieceClick(piece, board));
        
        board.appendChild(piece);
    }
}

function handlePieceClick(piece, board) {
    if (puzzleSolved) return;
    
    // Si no hay pieza seleccionada, seleccionar esta
    if (!selectedPiece) {
        selectedPiece = piece;
        piece.classList.add('selected');
    } 
    // Si se clickea la misma pieza, deseleccionarla
    else if (selectedPiece === piece) {
        piece.classList.remove('selected');
        selectedPiece = null;
    }
    // Si hay otra pieza seleccionada, intercambiarlas
    else {
        swapPieces(selectedPiece, piece, board);
        selectedPiece.classList.remove('selected');
        selectedPiece = null;
        checkIfSolved(board);
    }
}

function swapPieces(piece1, piece2, board) {
    // Guardar los índices correctos
    const tempCorrectIndex = piece1.dataset.correctIndex;
    const tempBgPosition = piece1.style.backgroundPosition;
    
    // Intercambiar los datos
    piece1.dataset.correctIndex = piece2.dataset.correctIndex;
    piece1.style.backgroundPosition = piece2.style.backgroundPosition;
    
    piece2.dataset.correctIndex = tempCorrectIndex;
    piece2.style.backgroundPosition = tempBgPosition;
}

function checkIfSolved(board) {
    const pieces = Array.from(board.children);
    let solved = true;
    
    // Verificar si cada pieza está en su posición correcta
    pieces.forEach((piece, index) => {
        const correctIndex = parseInt(piece.dataset.correctIndex);
        if (correctIndex !== index) {
            solved = false;
        }
    });
    
    if (solved && !puzzleSolved) {
        puzzleSolved = true;
        
        // Marcar todas las piezas como correctas
        pieces.forEach(piece => {
            piece.classList.add('correct');
        });
        
        // Mostrar mensaje de victoria
        setTimeout(() => {
            const message = document.getElementById('puzzleMessage');
            message.classList.remove('hidden');
            message.classList.add('show');
            
            // Explosión de corazones
            createHeartBurst();
        }, 500);
    }
}

function isArraySorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) return false;
    }
    return true;
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function createHeartBurst() {
    const hearts = ['💖', '💕', '💗', '💓', '💝', '💞'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            
            document.body.appendChild(heart);
            
            heart.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
            ], {
                duration: 2000 + Math.random() * 1000,
                easing: 'ease-out'
            }).onfinish = () => heart.remove();
        }, i * 80);
    }
}

/* ========================================
   CARRUSEL DE FOTOS Y VIDEOS
   ======================================== */

let currentSlide = 0;
let autoplayInterval = null;
const AUTOPLAY_DELAY = 4000; // 4 segundos

function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const indicators = document.getElementById('carouselIndicators');
    
    // Si no hay media items, mostrar placeholder
    if (MEDIA_ITEMS.length === 0) {
        track.innerHTML = `
            <div class="carousel-item">
                <div class="carousel-placeholder">
                    <span>📷🎥</span>
                    <p>Agrega tus fotos y videos en la carpeta "media/"<br>y configúralos en script.js</p>
                </div>
            </div>
        `;
        return;
    }
    
    // Crear items del carrusel
    MEDIA_ITEMS.forEach((item, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        
        if (item.type === 'image') {
            // Crear elemento de imagen
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt || `Foto ${index + 1}`;
            img.onerror = function() {
                // Si la imagen no carga, mostrar placeholder
                this.parentElement.innerHTML = `
                    <div class="carousel-placeholder">
                        <span>📷</span>
                        <p>Imagen no encontrada:<br>${item.src}</p>
                    </div>
                `;
            };
            carouselItem.appendChild(img);
        } else if (item.type === 'video') {
            // Crear elemento de video
            const video = document.createElement('video');
            video.src = item.src;
            video.controls = false;
            video.loop = true;
            video.muted = true; // Silenciado por defecto
            video.playsInline = true;
            video.preload = 'metadata'; // Precargar metadata del video
            video.setAttribute('data-playing', 'false');
            video.setAttribute('webkit-playsinline', 'true'); // Para iOS
            
            // Agregar tipos MIME para mejor compatibilidad
            const extension = item.src.split('.').pop().toLowerCase();
            if (extension === 'mov') {
                video.setAttribute('type', 'video/quicktime');
            } else if (extension === 'mp4') {
                video.setAttribute('type', 'video/mp4');
            } else if (extension === 'webm') {
                video.setAttribute('type', 'video/webm');
            }
            
            // Manejo mejorado de errores
            video.addEventListener('error', function(e) {
                console.error('Error cargando video:', item.src, 'Error:', e);
                const errorCode = video.error ? video.error.code : 'desconocido';
                const errorMsg = video.error ? getVideoErrorMessage(video.error.code) : 'Error desconocido';
                
                // Si el video no carga, mostrar placeholder
                this.parentElement.innerHTML = `
                    <div class="carousel-placeholder">
                        <span>🎥</span>
                        <p>Video no disponible<br><small>${errorMsg}</small></p>
                    </div>
                `;
            });
            
            // Verificar si el video se puede reproducir
            video.addEventListener('loadedmetadata', function() {
                console.log('Video cargado correctamente:', item.src);
            });
            
            // Agregar overlay de reproducción
            const overlay = document.createElement('div');
            overlay.classList.add('video-overlay');
            
            // Click para reproducir/pausar
            const toggleVideo = () => {
                if (video.paused) {
                    video.play();
                    video.setAttribute('data-playing', 'true');
                    video.muted = false; // Activar sonido al reproducir
                    stopAutoplay();
                } else {
                    video.pause();
                    video.setAttribute('data-playing', 'false');
                }
            };
            
            video.addEventListener('click', toggleVideo);
            overlay.addEventListener('click', toggleVideo);
            
            // Cuando el video termine, pausar y mostrar overlay
            video.addEventListener('ended', () => {
                video.setAttribute('data-playing', 'false');
                startAutoplay();
            });
            
            carouselItem.appendChild(video);
            carouselItem.appendChild(overlay);
        }
        
        track.appendChild(carouselItem);
        
        // Crear indicador
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicators.appendChild(indicator);
    });
    
    // Configurar controles
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    
    // Soporte para gestos táctiles (swipe)
    setupTouchControls();
    
    // Iniciar autoplay
    startAutoplay();
    
    // Pausar autoplay al pasar el mouse
    const container = document.querySelector('.carousel-container');
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
}

function goToSlide(index) {
    const track = document.getElementById('carouselTrack');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const videos = track.querySelectorAll('video');
    
    // Pausar todos los videos
    videos.forEach(video => {
        video.pause();
        video.setAttribute('data-playing', 'false');
        video.muted = true;
    });
    
    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Actualizar indicadores
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % MEDIA_ITEMS.length;
    goToSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + MEDIA_ITEMS.length) % MEDIA_ITEMS.length;
    goToSlide(prevIndex);
}

function startAutoplay() {
    stopAutoplay(); // Limpiar cualquier intervalo previo
    if (MEDIA_ITEMS.length > 1) {
        autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
    }
}

function stopAutoplay() {
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    }
}

function setupTouchControls() {
    const container = document.querySelector('.carousel-container');
    let touchStartX = 0;
    let touchEndX = 0;
    
    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
}

// Soporte para teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

/* ========================================
   CONTADOR EN TIEMPO REAL
   ======================================== */

function updateCounter() {
    // Obtener la fecha de inicio de la relación
    const startDate = new Date(RELATIONSHIP_START_DATE);
    const now = new Date();
    
    // Calcular la diferencia en milisegundos
    const difference = now - startDate;
    
    // Calcular días, horas, minutos y segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Actualizar los elementos del DOM
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

/* ========================================
   EFECTO MÁQUINA DE ESCRIBIR
   ======================================== */

function typeWriter(text, element, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/* ========================================
   CORAZONES FLOTANTES
   ======================================== */

function createFloatingHeart() {
    const heartsContainer = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.textContent = '💖';
    
    // Posición horizontal aleatoria
    heart.style.left = Math.random() * 100 + '%';
    
    // Duración de la animación aleatoria (entre 8 y 15 segundos)
    const duration = Math.random() * 7 + 8;
    heart.style.animationDuration = duration + 's';
    
    // Tamaño aleatorio
    const size = Math.random() * 1.5 + 1;
    heart.style.fontSize = size + 'rem';
    
    heartsContainer.appendChild(heart);
    
    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

function startFloatingHearts() {
    // Crear un corazón cada 2 segundos
    setInterval(createFloatingHeart, 2000);
    
    // Crear algunos corazones iniciales
    for (let i = 0; i < 5; i++) {
        setTimeout(createFloatingHeart, i * 400);
    }
}

/* ========================================
   BOTÓN INTERACTIVO
   ======================================== */

function setupLoveButton() {
    const button = document.getElementById('loveButton');
    const message = document.getElementById('loveMessage');
    let messageIndex = 0;
    
    button.addEventListener('click', function() {
        // Mostrar mensaje romántico
        message.textContent = LOVE_MESSAGES[messageIndex];
        message.classList.add('show');
        
        // Crear explosión de corazones
        createHeartExplosion(button);
        
        // Cambiar al siguiente mensaje
        messageIndex = (messageIndex + 1) % LOVE_MESSAGES.length;
        
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            message.classList.remove('show');
        }, 3000);
    });
}

function createHeartExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Crear 12 corazones que explotan desde el botón
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = '1.5rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.textContent = '💖';
        
        document.body.appendChild(heart);
        
        // Calcular dirección aleatoria
        const angle = (360 / 12) * i;
        const distance = 150;
        const radians = (angle * Math.PI) / 180;
        const x = Math.cos(radians) * distance;
        const y = Math.sin(radians) * distance;
        
        // Animar el corazón
        heart.animate([
            {
                transform: 'translate(0, 0) scale(1) rotate(0deg)',
                opacity: 1
            },
            {
                transform: `translate(${x}px, ${y}px) scale(0) rotate(360deg)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }).onfinish = () => heart.remove();
    }
}

/* ========================================
   INICIALIZACIÓN AL CARGAR LA PÁGINA
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // Configurar música de fondo
    setupBackgroundMusic();
    
    // Actualizar contador de visitas
    updateVisitCount();
    
    // Inicializar el carrusel primero
    initCarousel();
    
    // Iniciar el contador y actualizarlo cada segundo
    updateCounter();
    setInterval(updateCounter, 1000);
    
    // Configurar sobre de carta interactivo
    setupLetter();
    
    // Inicializar rompecabezas
    initPuzzle();
    
    // Iniciar los corazones flotantes después de 2 segundos
    setTimeout(startFloatingHearts, 2000);
    
    // Configurar el botón de amor
    setupLoveButton();
    
    // Añadir animación de entrada a las secciones cuando se hace scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar todas las secciones
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
});

/* ========================================
   EFECTOS ADICIONALES
   ======================================== */

// Efecto de partículas al mover el mouse (opcional)
document.addEventListener('mousemove', function(e) {
    // Solo crear partículas ocasionalmente para no sobrecargar
    if (Math.random() > 0.95) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.fontSize = '0.8rem';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        particle.style.opacity = '0.6';
        particle.textContent = '✨';
        
        document.body.appendChild(particle);
        
        // Animar y eliminar la partícula
        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 0.6
            },
            {
                transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    }
});

// Cambiar el cursor en elementos interactivos
document.querySelectorAll('.photo-item, .love-button').forEach(element => {
    element.style.cursor = 'pointer';
});

console.log('💖 Página cargada con amor 💖');
console.log(`📊 Total de archivos media: ${MEDIA_FILES.length}`);
console.log(`📷 Fotos: ${MEDIA_ITEMS.filter(item => item.type === 'image').length}`);
console.log(`🎥 Videos: ${MEDIA_ITEMS.filter(item => item.type === 'video').length}`);
console.log('💡 Tip: Si los videos .mov no se ven, intenta convertirlos a .mp4 usando un conversor online');
