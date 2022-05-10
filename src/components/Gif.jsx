import React, { Component } from "react";
// import axios from "axios";

class Gif extends Component {
    state = {
        searchTxt: "",
        gifPosts: [],
        loading: false,
    };

    // async componentDidUpdate() {
    //     // axios return promise object, so we have to use await to wait for the operation to complete means promise to be resolved, and after that execute the remaining instruction
    //     console.log("length", this.state.searchTxt.length);
    //     if (this.state.searchTxt.length !== 0) {
    //         const apiEndPoint = `https://api.giphy.com/v1/gifs/search?api_key=q0oOTdSJ8s8kiwFMMOsvd5A8CXkwXxv1&q=${this.state.searchTxt}&limit=10&offset=0&rating=g&lang=en`;
    //         console.log(apiEndPoint);
    //         await fetch(apiEndPoint)
    //             .then((response) => {
    //                 return response.json();
    //             })
    //             .then((response) => {
    //                 console.log("fetchApi", response);
    //                 this.setState({ gifPosts: response.data });
    //             });
    //     }
    // }

    handleSearch = (event) => {
        this.setState({ searchTxt: event.target.value });
    };

    onSearchClick = async () => {
        console.log("length", this.state.searchTxt.length);
        if (this.state.searchTxt.length !== 0) {
            const apiEndPoint = `https://api.giphy.com/v1/gifs/search?api_key=q0oOTdSJ8s8kiwFMMOsvd5A8CXkwXxv1&q=${this.state.searchTxt}&limit=10&offset=0&rating=g&lang=en`;
            // console.log(apiEndPoint);
            await fetch(apiEndPoint)
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    console.log("fetchApi", response);
                    this.setState({ gifPosts: response.data });
                });
        }
    };

    renderImages = () => {
        return this.state.gifPosts.map((links) => {
            console.log("Links", links.url);
            return (
                <div key={links.id} className="gif-container">
                    <a
                        href={links.images.original.url}
                        target="_blank"
                        // rel="noopener"
                        rel="noreferrer"
                        onClick={(event) => {
                            event.preventDefault();
                            console.log("GIDURL:", links.images.original.url);
                            this.props.handleGifImg(links.images.original.url);
                        }}
                    >
                        <img
                            src={links.images.original.url}
                            alt={links.id}
                            width="150px"
                            height="150px"
                        ></img>
                    </a>
                </div>
            );
        });
    };

    render() {
        console.log("Posts: ", this.state.gifPosts);
        return (
            <React.Fragment>
                <div className="d-flex mt-3">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search..."
                        // onChange={handleGifSearch}
                        onChange={this.handleSearch}
                        // value={value}
                    ></input>
                    <button
                        className="btn btn-primary mt-0 mb-0 px-5"
                        type="button"
                        onClick={this.onSearchClick}
                    >
                        Search
                    </button>
                </div>
                <div className="d-flex justify-content-start overflow-auto mt-4">
                    {this.state.gifPosts.length !== 0 ? (
                        this.renderImages()
                    ) : (
                        <p className="text-center">Loading...</p>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Gif;
