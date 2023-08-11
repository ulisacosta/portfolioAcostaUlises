let splideTitronic = new Splide('#titronic-carousel', {
    type: 'fade',
    pagination: true,
    autoplay:'play',
    rewind: true,
    
    interval:  5000
    
  });

  let thumbnailsTitronic = document.getElementsByClassName('thumbnail');

  for (let i = 0; i < thumbnailsTitronic.length; i++) {
    initThumbnail(thumbnailsTitronic[i], i, splideTitronic);
  }

  splideTitronic.on('mounted move', function () {
    let thumbnailTitronic = thumbnailsTitronic[splideTitronic.index];

    if (thumbnailTitronic) {
      if (current) {
        current.classList.remove('is-active');
      }

      thumbnailTitronic.classList.add('is-active');
      current = thumbnailTitronic;
    }
  });

  splideTitronic.mount();


  let splidePokemon = new Splide('#pokemon-carousel', {
    pagination: false,
  });

  let thumbnailsPokemon = document.getElementsByClassName('thumbnailPoke');

  for (let i = 0; i < thumbnailsPokemon.length; i++) {
    initThumbnail(thumbnailsPokemon[i], i, splidePokemon);
  }

  splidePokemon.on('mounted move', function () {
    let thumbnailPokemon = thumbnailsPokemon[splidePokemon.index];

    if (thumbnailPokemon) {
      if (currentPoke) {
        currentPoke.classList.remove('is-active');
      }

      thumbnailPokemon.classList.add('is-active');
      currentPoke = thumbnailPokemon;
    }
  });

  splidePokemon.mount();

  let splideDragAndDrop = new Splide('#imgDragAndDrop-carousel', {
    pagination: false,
  });

  let thumbnailsImgDragAndDrop = document.getElementsByClassName('thumbnailImgDragAndDrop');

  for (let i = 0; i < thumbnailsImgDragAndDrop.length; i++) {
    initThumbnail(thumbnailsImgDragAndDrop[i], i, splideDragAndDrop);
  }

  splideDragAndDrop.on('mounted move', function () {
    let thumbnailImgDragAndDrop = thumbnailsImgDragAndDrop[splideDragAndDrop.index];

    if (thumbnailImgDragAndDrop) {
      if (currentImgDragAndDrop) {
        currentImgDragAndDrop.classList.remove('is-active');
      }

      thumbnailImgDragAndDrop.classList.add('is-active');
      currentImgDragAndDrop = thumbnailImgDragAndDrop;
    }
  });

  splideDragAndDrop.mount();



  function initThumbnail(thumbnail, index, splide) {
    thumbnail.addEventListener('click', function () {
      splide.go(index);
    });
  }