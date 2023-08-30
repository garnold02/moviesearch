import { styled } from "styled-components";
import { TMDBMovieBasic } from "../tmdb/common";

const Title = styled.span`
    font-size: 20px;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const Year = styled.span`
    color: var(--text-dark);
`;

interface Props {
    data: TMDBMovieBasic;
    onSelect?: (id: number) => void;
}

export default function SearchResult({ data, onSelect }: Props) {
    const onClick = () => {
        if (onSelect) onSelect(data.id);
    };

    return (
        <div>
            <Title onClick={onClick}>{data.title}</Title>
            <br />
            <Year>{getYear(data)}</Year>
        </div>
    );
}

function getYear(data: TMDBMovieBasic): string {
    return data.release_date?.split("-")[0] ?? "N/A";
}
