( () => {
    console.log('Enums');
    // Enums
    enum AudioLevel {
        min,
        medium,
        max
    }

    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();