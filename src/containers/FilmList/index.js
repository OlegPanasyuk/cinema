import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { getFilmsAction } from '../../actions/actionsBasic';

import FilmListItem from '../../components/FilmListItem';

class FilmList extends PureComponent {

  state = {
    columns: 4
  }

  componentDidMount() {
    this.onResizeWindow();
    window.onresize = this.onResizeWindow;
  }

  componentWillUnmount() {
    window.onresize = null;
  }

  onResizeWindow = () => {
    const points = {
      xs: 480,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1600,
    }
    const columnsSizes = {
      xs: 1,
      sm: 1,
      md: 2,
      lg: 2,
      xl: 3,
      xxl: 4,
    }

    const width = window.innerWidth;

    try {
      Object.keys(points).forEach(el => {
        if (width < points[el]) {
          console.log(el);
          this.setState({
            columns: columnsSizes[el]
          });
          throw 'size is founded';
        }
      })
      this.setState({
        columns: 4
      });
    } catch (e) {
      console.log(e);
    }

    
  }

  render() {
    const { listFilms } = this.props;
    const { columns } = this.state;
    const rows = Array(Math.ceil(listFilms.length / columns)).fill(0).map(() => []);
    console.log(rows);
    let counter = 0;
    listFilms.forEach((element, i) => {
      if ((i % columns === 0) && (i >= columns)) {
        counter += 1;
      }
      rows[counter].push(element);
    });
    const colSpan = Math.floor(24 / columns);
    return (
      <>
        {rows && rows.map((cols) => {
          return (<Row gutter={{ xs: 8, sm: 16, md: 24 }} style={{marginTop: '24px'}}>
            {cols.map((element) => {
              return (<Col span={colSpan} key={Math.random()}>
                <FilmListItem  item={element} />
              </Col>)
            })}
          </Row>)
        })}

      </>
    );
  }
}

const mapStateToProps = state => ({
  listFilms: state.counting.data,
});

const mapDispatchToProps = {
  getFilmsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmList);
