import { useEffect } from "react";
import { styled } from "styled-components";

import { MdClose } from "react-icons/md";
import MoviePage from "./MoviePage";

const Background = styled.div`
    position: fixed;
    left: 0;
    top: 0;

    width: 100vw;
    height: 100vh;

    background-color: #00000090;
`;

const Frame = styled.div`
    position: relative;

    top: 16px;
    left: 16px;

    background-color: var(--background-light);
    border-radius: 8px;

    width: calc(100% - 32px);
    height: calc(100% - 80px);

    @media (min-height: 512px) {
        top: 16px;
        width: calc(100% - 32px);
        height: calc(100% - 80px);
    }

    @media (min-width: calc(896px + 32px)) {
        top: calc(50% - 40vh);
        left: calc(50% - 448px);

        width: 896px;
        height: 80vh;
    }
`;

const CloseButton = styled(MdClose)`
    width: 24px;
    height: 24px;

    position: relative;
    left: calc(100% - 28px);
    top: 4px;

    color: var(--text-dark);

    &:hover {
        color: var(--text-light);
        cursor: pointer;
    }
`;

const Content = styled.div`
    position: relative;

    width: 100%;
    height: calc(100% - 48px);

    overflow-y: scroll;
`;

interface Props {
    movieId: number;
    onClose?: () => void;
}

export default function MovieModal({ movieId, onClose }: Props) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <Background>
            <Frame>
                <CloseButton onClick={onClose} />
                <Content>
                    <MoviePage movieId={movieId} />
                </Content>
            </Frame>
        </Background>
    );
}
