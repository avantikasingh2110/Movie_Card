import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.card_container}>
                <div className={styles.left_container}>
                    <div className={styles.left_div1}>
                        <div className={styles.poster_div}>
                            <img src={props.poster} alt="Poster" />
                        </div>
                        <div className={styles.title_div}>
                            <h1>{props.title}</h1>
                            <p>{props.releaseYear}, {props.director}</p>
                            <span>IMDB Rating: {props.imdbRating} ⭐</span>
                            <span>{props.genre.join(", ")}</span>
                        </div>
                    </div>

                    <div className={styles.left_div2}>
                        <p>{props.description}</p>
                    </div>
                </div>

                <div className={styles.right_container}>
                    <img src={props.bgp} alt="Big Poster" />
                </div>
            </div>
        </div>
    );
};

export default Card;