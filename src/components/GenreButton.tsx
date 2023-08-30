import { useState } from "react";
import { css, styled } from "styled-components";

import { TMDBGenre } from "../tmdb/genreMovieList";

const Container = styled.span<{ $selected: boolean }>`
    color: var(--text-dark);
    background-color: var(--background-light);

    border: 2px solid var(--input-idle);
    border-radius: 16px;

    padding: 4px 8px 4px 8px;

    font-size: 12px;
    user-select: none;
    text-align: center;

    &:hover {
        border-color: var(--input-hover);
        cursor: pointer;
    }

    &:active {
        border-color: var(--input-active);
    }

    ${(props) => {
        if (props.$selected) {
            return css`
                border-color: var(--accent-idle);

                &:hover {
                    border-color: var(--accent-hover);
                }

                &:active {
                    border-color: var(--accent-active);
                }
            `;
        } else {
            return "";
        }
    }}
`;

interface Props {
    genre: TMDBGenre;
    onChange?: (id: number, value: boolean) => void;
}

export default function GenreButton({ genre, onChange }: Props) {
    const [selected, setSelected] = useState(false);

    const onClick = () => {
        if (onChange) onChange(genre.id, !selected);
        setSelected(!selected);
    };

    return (
        <Container $selected={selected} onClick={onClick}>
            {genre.name}
        </Container>
    );
}
