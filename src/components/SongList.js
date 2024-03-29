import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.id}>
                    <div className="right floated content">
                        <button className="ui button primary"
                            onClick={() => this.props.selectSong(song)}>Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        console.log('SongList render', this.props);
        return <div className="ui devided list">{this.renderList()}</div>
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);