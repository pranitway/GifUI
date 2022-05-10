import React, { Component } from "react";
import SavedPost from "./SavedPost";
import Gif from "./Gif";

class WritePost extends Component {
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
            deletePost,
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
                                        className="form-control shadow-none"
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
                                        POST
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
                        <SavedPost posts={posts} deletePost={deletePost} />
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
