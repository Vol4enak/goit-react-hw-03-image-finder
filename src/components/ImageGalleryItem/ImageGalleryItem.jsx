import { GallaryItem } from './ImageGalleryItem.styled';
import { GallaryItemImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };
  openModal = e => {
    this.setState({ isOpenModal: true });
    if (e.target.nodeName === 'DIV') {
      this.closeModal();
    }
  };
  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  key = e => {
    if (e.key === 'Escape') {
      this.closeModal();
    }
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.items;
    const { isOpenModal } = this.state;
    return (
      <>
        <GallaryItem onClick={this.openModal} onKeyDown={this.key} tabIndex="0">
          <GallaryItemImage src={webformatURL} alt={tags} />
          {isOpenModal && <Modal largeImg={largeImageURL} imgAlt={tags} />}
        </GallaryItem>
      </>
    );
  }
}
