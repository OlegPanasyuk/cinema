import React, { PureComponent } from 'react';

class FilmListItem extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <article>
        <header>
          <h3>{item.Title}</h3>
        </header>
        <content>
          <img src={item.Poster} alt="Poster" />
        </content>
      </article>
    );
  }
}

export default FilmListItem;
