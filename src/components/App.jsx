import { Component } from 'react';
import { AppGrid } from './App.styled';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    value: '',
  };

  render() {
    return (
      <AppGrid>
        <SearchBar />
      </AppGrid>
    );
  }
}
