import { GallaryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({items}) => {
  return (
    <GallaryList>
      <ImageGalleryItem items={items} />
    </GallaryList>
  );
};
