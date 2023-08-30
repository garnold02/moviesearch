import MovieModal from "./MovieModal";

interface Props {
    movieId?: number;
    onClose?: () => void;
}

export default function MaybeModal({ movieId, onClose }: Props) {
    if (!movieId) {
        return <></>;
    }

    return <MovieModal movieId={movieId} onClose={onClose} />;
}
