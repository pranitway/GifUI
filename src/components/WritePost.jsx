import React, { Component } from "react";
import SavedPost from "./SavedPost";
import Gif from "./Gif";

class WritePost extends Component {
    // state = {
    //     posts: [
    //         // {
    //         //     id: 1,
    //         //     message: "This is the content...",
    //         //     gifUrl: "https://media3.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.gif?cid=7c5ec064cuhyd5owrtl13x31h2fwn84qqcdwyebgv5u73kx6&rid=giphy.gif&ct=g",
    //         // },
    //     ],

    //     gifComponent: false,
    //     post: { gifUrl: "" },
    // };

    // postContent = React.createRef();

    // handelFormValue = (event) => {
    //     console.log("Form Values: ", event.target.name, event.target.value);
    //     this.setState({ post: { message: event.target.value } });
    // };

    // handleGifImg = (imgUrl) => {
    //     console.log("Image URL: ", imgUrl);
    //     let post = this.state.post;
    //     post.gifUrl = imgUrl;
    //     // postContent.

    //     this.setState({ post });
    //     console.log(this.state.posts);
    // };

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("Successfully Submitted...");
    //     let posts = this.state.posts;
    //     let dataCount = posts.length;
    //     let postContent = this.postContent.current.value;
    //     let post = this.state.post;
    //     post.id = dataCount + 1;
    //     post.message = postContent;
    //     post.date = new Date();
    //     posts.push(post);
    //     console.log(post);

    //     // posts.push({})
    //     this.setState({ posts, post: {} });
    // };

    // deletePost = () => {};

    // // handleGifBtn = () => {

    // // }

    // gifCompToggle = () => {
    //     let showGifComp = this.state.gifComponent ? false : true;
    //     this.setState({ gifComponent: showGifComp });
    // };

    render() {
        let {
            handleSubmit,
            handelFormValue,
            postContent,
            gifCompToggle,
            handleGifImg,
            posts,
            post,
            gifComponent,
        } = this.props;

        console.log(post.gifUrl);

        return (
            <React.Fragment>
                <div className="containerSec mt-4 mb-4">
                    <h2>
                        <b>Compose Posts</b>
                    </h2>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group form-group-lg">
                                    <textarea
                                        className="form-control"
                                        id="txt-area"
                                        rows="3"
                                        onChange={handelFormValue}
                                        ref={postContent}
                                        placeholder="Write Something..."
                                    ></textarea>
                                    <div className="imgBox p-2">
                                        {post.gifUrl ? (
                                            <img
                                                src={post.gifUrl}
                                                alt="fa"
                                                width="150px"
                                                height="150px"
                                            ></img>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn btn-success"
                                        type="button"
                                        onClick={gifCompToggle}
                                    >
                                        GIF
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        SAVE
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-12">
                            {gifComponent ? (
                                <Gif handleGifImg={handleGifImg} />
                            ) : null}
                        </div>
                    </div>
                    <div className="">
                        <SavedPost posts={posts} />
                    </div>
                </div>
                <p className="text-center">
                    Made With <span className="heart">♥</span> By Pranit
                </p>
            </React.Fragment>
        );
    }
}

export default WritePost;
