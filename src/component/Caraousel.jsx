import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Caraousel = () => {
  const [, setTimestamp] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const onLoad = () => setTimestamp(Date.now());
  const onSlideChanged = ({ item }) => setActiveIndex(item);

  const images = [
    'https://img.freepik.com/free-psd/flat-design-video-games-template_23-2149287300.jpg?size=626&ext=jpg&uid=R96436372&ga=GA1.1.1692787953.1698849115&semt=sph',
    'https://c4.wallpaperflare.com/wallpaper/819/993/69/red-dead-redemption-red-gamers-gamer-wallpaper-preview.jpg',
    'https://wallpapers.com/images/high/gta-5-starlet-mnpe4vuckvhuz4ot.webp',
  ];

  const items = images.map((image, index) => (
    <LazyLoader key={index} onLoad={onLoad} src={image} delay={1000 * (index + 1)} />
  ));

  return (
    <AliceCarousel
      autoHeight
      autoPlay
      autoPlayInterval={1000}
      fadeOutAnimation
      activeIndex={activeIndex}
      onSlideChanged={onSlideChanged}
      items={items}
      disableButtonsControls={true}
      disableDotsControls
      infinite
      mouseTrackingEnabled={true}
    />
  );
};

function LazyLoader(props) {
  let timerId;
  const { src = '', delay = 0, onLoad } = props;
  const [isMounted, setMounted] = useState(false);
  const [isLoading, setLoading] = useState(true);

  function loadImage() {
    const image = new Image();

    image.src = src;
    image.onload = () => {
      setLoading(false);
      onLoad();
    };
    image.onerror = () => {
      setLoading(false);
    };
  }

  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
      delay ? (timerId = setTimeout(loadImage, delay)) : loadImage();
    }
    return () => clearTimeout(timerId);
  }, []);

  return <img className='w-[100rem] h-[40rem]' src={src} alt="Image" />;
}

export default Caraousel;
