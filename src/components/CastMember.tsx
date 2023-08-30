import { styled } from "styled-components";

import { TMDBMovieCastMember } from "../tmdb/movieCredits";

import ProfilePicture from "./ProfilePicture";
import FlexCol from "./common/FlexCol";

const Grid = styled.div`
    width: 185px;

    display: grid;
    grid-template-rows: 200px auto;

    background-color: var(--border);
    border-radius: 8px;
`;

const Names = styled(FlexCol)`
    padding: 8px;
`;

const Character = styled.span`
    color: var(--text-dark);
    font-size: 12px;
`;

interface Props {
    data: TMDBMovieCastMember;
}

export default function CastMember({ data }: Props) {
    return (
        <Grid>
            <ProfilePicture path={data.profile_path} />
            <Names>
                <span>{data.name}</span>
                <Character>{data.character}</Character>
            </Names>
        </Grid>
    );
}
