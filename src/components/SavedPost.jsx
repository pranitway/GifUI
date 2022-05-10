import { React } from "react";

const SavedPost = (props) => {
    const { posts, deletePost } = props;
    // console.log(posts);
    let month = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    return posts.map((card) => {
        return (
            <div className="card mt-4" key={card.id}>
                <div className="card-body">
                    <p>{card.message}</p>
                    {card.gifUrl ? (
                        <img
                            src={card.gifUrl}
                            alt={card.id}
                            width="150px"
                            className="d-inline-block"
                        ></img>
                    ) : null}
                </div>

                <div className="card-footer d-flex justify-content-between">
                    <p>
                        {month[card.date.getMonth()]} {card.date.getDate()} ,{" "}
                        {card.date.getFullYear()} at {card.date.getHours()}:
                        {card.date.getMinutes().toString().padStart(2, "0")}
                    </p>
                    <i
                        class="bi bi-trash delete-icon"
                        onClick={() => deletePost(card.id)}
                    ></i>
                </div>
            </div>
        );
    });
};

export default SavedPost;
