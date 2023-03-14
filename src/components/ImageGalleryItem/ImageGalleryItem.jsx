import { GallaryItem } from './ImageGalleryItem.styled';
import { GallaryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({items}) => {
  return (
    <>
      {items.map(({ id, webformatURL, tags }) => (
        <GallaryItem key={id}>
            <GallaryItemImage src={webformatURL} alt={tags} />
        </GallaryItem>
      ))}
    </>
  );
};
