import { Component } from 'react';
import * as API from './services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppGrid } from './App.styled';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { DowlandMore } from './Button/Button';
import { RotatingLines } from 'react-loader-spinner';
import { SpinnerBox } from './App.styled';
export class App extends Component {
  state = {
    photo: [],
    page: 2,
    name: '',
    statusBtn: false,
    statusSpiner: false,
  };

  cheackStatus = material => {
    this.setState({ statusBtn: true, statusSpiner: false });
    if (material.length !== 12) {
      this.setState({ statusBtn: false });
    }
    if (material.length === 0) {
      toast.warn('Nothing was found for your request.🦄', { theme: 'dark' });
    }
  };

  getCard = async ({ name }) => {
    if (name.trim()) {
      this.setState({ photo: [], name, statusSpiner: true, statusBtn: false });
      try {
        const material = await API.getPhoto(name, 1);
        this.cheackStatus(material);
        this.setState(state => ({
          photo: [...state.photo, ...material],
        }));
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error('Wrong request.🦄', { theme: 'dark' });
    }
  };

  loadMore = async () => {
    this.setState({ statusSpiner: true, statusBtn: false });
    try {
      const material = await API.getPhoto(this.state.name, this.state.page);
      this.cheackStatus(material);
      this.setState(state => ({
        photo: [...state.photo, ...material],
        page: state.page + 1,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { statusBtn, statusSpiner } = this.state;
    return (
      <AppGrid>
        <SearchBar onSubmit={this.getCard} />
        <ImageGallery items={this.state.photo} />
        {statusBtn && <DowlandMore onSearch={this.loadMore} />}
        {statusSpiner && (
          <SpinnerBox>
            <RotatingLines
              strokeColor="green"
              animationDuration="0.75"
              width="56"
              visible={true}
            />
          </SpinnerBox>
        )}
        <ToastContainer />
      </AppGrid>
    );
  }
}
