// import logo from "./logo.svg";
import "./App.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import WritePost from "./components/WritePost";

// function App() {
//     return (
//         <React.Fragment>
//             <WritePost />
//         </React.Fragment>
//     );
// }

class App extends React.Component {
    state = {
        posts: [
            // {
            //     id: 1,
            //     message: "This is the content...",
            //     gifUrl: "https://media3.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.gif?cid=7c5ec064cuhyd5owrtl13x31h2fwn84qqcdwyebgv5u73kx6&rid=giphy.gif&ct=g",
            // },
        ],

        gifComponent: false,
        post: { gifUrl: "" },
    };

    postContent = React.createRef();

    handelFormValue = (event) => {
        console.log("Form Values: ", event.target.name, event.target.value);
        this.setState({ post: { message: event.target.value } });
    };

    handleGifImg = (imgUrl) => {
        console.log("Image URL: ", imgUrl);
        let post = this.state.post;
        post.gifUrl = imgUrl;
        // postContent.

        this.setState({ post });
        console.log(this.state.posts);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Successfully Submitted...");
        let posts = this.state.posts;
        let dataCount = posts.length;
        let postContent = this.postContent.current.value;
        let post = this.state.post;
        post.id = dataCount + 1;
        post.message = postContent;
        post.date = new Date();
        posts.push(post);
        console.log(post);

        // posts.push({})
        this.setState({ posts, post: {} });
    };

    deletePost = (id) => {
        let posts = this.state.posts;
        posts = posts.filter((post) => {
            if (post.id !== id) return post;
        });
        // console.log(id, posts);
        this.setState({ posts });
    };

    gifCompToggle = () => {
        let showGifComp = this.state.gifComponent ? false : true;
        this.setState({ gifComponent: showGifComp });
    };

    render() {
        return (
            <React.Fragment>
                <WritePost
                    handleSubmit={this.handleSubmit}
                    handelFormValue={this.handelFormValue}
                    postContent={this.postContent}
                    gifCompToggle={this.gifCompToggle}
                    handleGifImg={this.handleGifImg}
                    posts={this.state.posts}
                    post={this.state.post}
                    gifComponent={this.state.gifComponent}
                    deletePost={this.deletePost}
                />
            </React.Fragment>
        );
    }
}

export default App;
